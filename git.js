const { exec } = require('electron').remote.require('child_process')

const execPromise = (command, options = {}) => new Promise((resolve, reject) => {
  exec(command, options, (error, stdout, stderr) => {
    if (error) {
      reject(error)
    } else {
      resolve({ stdout, stderr })
    }
  })
})

class GitPlugin {
  constructor() {
    this.id = 'git'
    this.name = 'Git'
    this.description = 'Makes it easy to store version history and sync your vault across computers with Git.'
    this.defaultOn = true

    this.app = null
    this.instance = null
    this.cwd = null
    
    this.dirtyState = {
      localDirty: false,
      remoteDirty: false,
      untracked: false
    }
    this.actionState = null
  }

  init(app, instance) {
    this.app = app
    this.instance = instance

    this.instance.registerStatusBarItem()
    this.instance.registerGlobalCommand({
      id: 'git-sync',
      name: 'Git: sync changes',
      callback: () => this.sync()
    })

    const style = `
    .status-bar-item {
      overflow: hidden;
    }

    .git-status-bar-button {
      color: inherit;
      font: inherit;
      padding: 0 4px;
      background: inherit;
      border: none;
      border-radius: 0;
    }
    `

    const styleEl = document.createElement('style')
    styleEl.innerText = style
    document.head.appendChild(styleEl)
  }

  onEnable() {
    this.cwd = this.app.vault.adapter.basePath

    setInterval(() => {
      if (this.actionState) return
      this.updateDirty()
    }, 10000)

    setTimeout(() => {
      this.updateStatusBar()
      this.updateDirty()
    }, 0)

    const forceUntracked = () => {
      this.dirtyState.untracked = true
      this.updateStatusBar()
      this.updateDirty()
    }

    this.instance.registerEvent(this.app.vault.on('create', forceUntracked))
    this.instance.registerEvent(this.app.vault.on('modify', forceUntracked))
    this.instance.registerEvent(this.app.vault.on('delete', forceUntracked))
    this.instance.registerEvent(this.app.vault.on('rename', forceUntracked))
  }

  async updateStatusBar() {
    this.instance.statusBarEl.empty()

    if (this.actionState) {
      this.instance.statusBarEl.createEl('span', {
        cls: 'status-bar-item-segment',
        text: this.actionState
      })
    } else if (this.dirtyState.localDirty || this.dirtyState.remoteDirty || this.dirtyState.untracked) {
      const el = this.instance.statusBarEl.createEl('button', {
        cls: 'status-bar-item-segment git-status-bar-button',
        text: 'Click to sync'
      })
      el.addEventListener('click', () => this.sync())
    } else {
      this.instance.statusBarEl.createEl('span', {
        cls: 'status-bar-item-segment',
        text: 'All up-to-date'
      })
    }
  }

  async updateDirty() {
    const { cwd } = this
    await execPromise('git fetch', { cwd })

    let untracked = false
    let remoteDirty = false
    let localDirty = false

    try {
      await execPromise('git update-index --refresh ', { cwd })
      await execPromise('git diff-index --quiet HEAD --', { cwd })
    } catch {
      untracked = true
    }

    try {
      const { stdout: local } = await execPromise('git rev-parse @', { cwd })
      const { stdout: remote } = await execPromise('git rev-parse @{u}', { cwd })
      const { stdout: base } = await execPromise('git merge-base @ @{u}', { cwd })

      const synced = local === remote
      const diverged = remote !== base && local !== base
      remoteDirty = (local === base || diverged) && !synced
      localDirty = (remote === base || diverged) && !synced
    } catch {}

    this.dirtyState = { remoteDirty, localDirty, untracked }
    this.updateStatusBar()
  }
 
  async sync() {
    const { cwd } = this

    try {
      this.setActionState('Syncing...')
      await this.updateDirty()

      if (this.dirtyState.untracked) {
        this.setActionState('Committing...')
        const formattedDate = window.moment().format('MMMM Do, YYYY')
        await execPromise('git add .', { cwd })
        await execPromise(`git commit -m "${formattedDate}"`, { cwd })
        await this.updateDirty()
      }

      if (this.dirtyState.remoteDirty) {
        this.setActionState('Pulling...')
        await execPromise('git pull', { cwd })
        await this.updateDirty()
      }

      if (this.dirtyState.localDirty) {
        this.setActionState('Pushing...')
        await execPromise('git push', { cwd })
        await this.updateDirty()
      }

      this.setActionState(null)
    } catch (error) {
      console.error(error)
      this.setActionState('Error!')
    }
  }

  setActionState(actionState) {
    this.actionState = actionState
    this.updateStatusBar()
  }
}

module.exports = () => new GitPlugin()