const removeCheckedBoxes = (text) => text
  .split('\n')
  .filter((line) => !line.match(/^\s*[\-\*]\s+\[x\]\s+.+$/))
  .join('\n')

class CheckboxDeletePlugin {
  constructor(CheckboxDeleteSettings) {
    this.CheckboxDeleteSettings = CheckboxDeleteSettings

    this.id = 'checkbox-deleter'
    this.name = 'Checkbox deleter'
    this.description = 'Deletes checkboxes to make todo lists easier to manage.'
    this.defaultOn = false

    this.app = null
    this.instance = null
    this.options = {}
  }

  init(app, instance) {
    this.app = app
    this.instance = instance

    this.instance.registerSettingTab(new this.CheckboxDeleteSettings(app, instance, this))
  }

  async onEnable() {
    this.instance.registerEvent(
      this.app.workspace.on('quick-preview', this.onQuickPreview, this)
    )

    const options = await this.instance.loadData()
    this.options = options || {}
  }

  onQuickPreview(file, contents) {
    const leaf = this.app.workspace.activeLeaf
    if (!leaf || leaf.view.file !== file) return
    if (this.options.prefix && !leaf.view.file.basename.startsWith(this.options.prefix))
      return

    const cleanedContents = removeCheckedBoxes(contents)
    if (cleanedContents !== contents) {
      this.app.nextFrame(() => leaf.view.setData(cleanedContents))
    }
  }
}

module.exports = ({ SettingTab }) => {
  class CheckboxDeleteSettings extends SettingTab {
    constructor(app, instance, plugin) {
      super(app, instance)
      this.plugin = plugin
    }

    display() {
      super.display()
      this.containerEl.empty()
      
      const prefixSetting = this.addTextSetting(
        'Filename prefix',
        'If specified, checked boxes will only be deleted for files starting with this prefix.',
        'Example: ✅'
      )

      if (this.plugin.options.prefix) prefixSetting.setValue(this.plugin.options.prefix)
      prefixSetting.onChange(() => {
        this.plugin.options.prefix = prefixSetting.getValue().trim()
        this.pluginInstance.saveData(this.plugin.options)
      })
    }
  }

  return new CheckboxDeletePlugin(CheckboxDeleteSettings)
}