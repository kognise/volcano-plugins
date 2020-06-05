class EmojiPlugin {
  constructor() {
    this.id = 'emoji'
    this.name = 'Markdown emoji'
    this.description = 'Renders emoji in the markdown preview.'
    this.defaultOn = false

    this.app = null
    this.instance = null
    this.scriptEl = null
  }

  init(app, instance) {
    this.app = app
    this.instance = instance

    const style = `
    .emoji {
      font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    }
    `

    const styleEl = document.createElement('style')
    styleEl.innerText = style
    document.head.appendChild(styleEl)
  }

  onEnable() {
    if (!this.scriptEl) {
      const scriptEl = document.createElement('script')
      scriptEl.src = 'https://cdn.jsdelivr.net/npm/markdown-it-emoji@1.4.0/dist/markdown-it-emoji-light.min.js'
      scriptEl.addEventListener('load', () => this.onLoad())
      document.body.appendChild(scriptEl)
      this.scriptEl = scriptEl
    } else {
      this.app.parser.md.enable([ 'emoji' ])
      this.rerender(this.app.workspace.rootSplit)
    }
  }

  onDisable() {
    this.app.parser.md.disable([ 'emoji' ])
    this.rerender(this.app.workspace.rootSplit)
  }

  onLoad() {
    this.app.parser.md.use(window.markdownitEmoji, { shortcuts: {} })
    this.app.parser.md.renderer.rules.emoji = (token, idx) => `<span class='emoji'>${token[idx].content}</span>`

    this.rerender(this.app.workspace.rootSplit)
  }

  rerender(leaf) {
    if (!leaf || !leaf.children) return

    for (let child of leaf.children) {
      if (child.view && child.view.previewMode) {
        const contents = child.view.previewMode.get()
        child.view.previewMode.set('')
        app.nextFrame(() => child.view.previewMode.set(contents))
      }

      this.rerender(child)
    }
  }
}

module.exports = () => new EmojiPlugin()