const theme = `#arrowhead,#sequencenumber,.cluster text,.label text,text,text.actor{fill:var(--text-normal)}line{stroke:var(--text-normal)}g>g>circle,g>g>path{stroke:var(--background-accent)}.label{font-family:var(--mermaid-font-family);color:var(--text-normal)}.label rect{display:none}.cluster rect{stroke-width:1px}.node circle,.node ellipse,.node path,.node polygon,.node rect{fill:var(--background-secondary-alt);stroke:var(--background-modifier-border);stroke-width:1px}.node .label{text-align:center}.node.clickable{cursor:pointer}.arrowheadPath{fill:var(--text-muted)}.edgePath .path{stroke:var(--text-muted);stroke-width:1.5px}.edgeLabel{background-color:var(--background-secondary);text-align:center}.cluster rect{fill:var(--background-secondary);stroke:var(--interactive-accent)}div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-size:12px;background:var(--background-secondary);border:1px solid var(--interactive-accent);border-radius:2px;pointer-events:none;z-index:100}.actor{stroke:var(--background-modifier-border);fill:var(--background-secondary-alt);font-family:inherit!important}text.actor{stroke:none}.actor-line{stroke:var(--text-muted)}.messageLine0,.messageLine1{stroke-width:1.5;stroke-dasharray:'2 2';stroke:var(--text-normal)}.sequenceNumber{fill:#fff}#crosshead path{fill:var(--text-normal)!important;stroke:var(--text-normal)!important}.messageText{fill:var(--text-normal);stroke:none;font-family:inherit!important}.labelBox{stroke:var(--background-modifier-border);fill:var(--background-secondary-alt)}.labelText,.loopText{fill:var(--text-normal);stroke:none}.loopLine{stroke-width:2;stroke-dasharray:'2 2';stroke:var(--background-modifier-border)}.note{stroke:#645c10;fill:#f3edb3}.noteText{fill:#000;stroke:none;font-family:var(--mermaid-font-family)!important;font-size:14px}.activation0,.activation1,.activation2{fill:var(--text-muted);stroke:var(--text-muted)}.mermaid-main-font{font-family:var(--mermaid-font-family)}.section{stroke:none;opacity:.2}.section0,.section2{fill:var(--text-accent)}.section1,.section3{fill:#fff;opacity:.2}.sectionTitle0,.sectionTitle1,.sectionTitle2,.sectionTitle3{fill:var(--text-normal)}.sectionTitle{text-anchor:start;font-size:11px;text-height:14px}.grid .tick{stroke:var(--background-primary-alt);opacity:.8;shape-rendering:crispEdges}.grid .tick text,.sectionTitle{font-family:var(--mermaid-font-family)}.grid path{stroke-width:0}.today{fill:none;stroke:#d42;stroke-width:2px}.task{stroke-width:2}.taskText{text-anchor:middle;font-family:var(--mermaid-font-family)}.taskText:not([font-size]){font-size:11px}.taskTextOutsideRight{fill:var(--text-normal);text-anchor:start;font-size:11px;font-family:var(--mermaid-font-family)}.taskTextOutsideLeft{fill:var(--text-normal);text-anchor:end;font-size:11px}.task.clickable,g.clickable{cursor:pointer}.taskText.clickable,.taskTextOutsideLeft.clickable,.taskTextOutsideRight.clickable{cursor:pointer;fill:#003163!important;font-weight:700}.taskText0,.taskText1,.taskText2,.taskText3{fill:#fff}.task0,.task1,.task2,.task3{fill:var(--interactive-accent);stroke:var(--interactive-accent)}.taskTextOutside0,.taskTextOutside1,.taskTextOutside2,.taskTextOutside3{fill:var(--text-normal)}.active0,.active1,.active2,.active3,g.classGroup rect,g.stateGroup rect{fill:var(--background-secondary-alt);stroke:var(--interactive-accent)}g.classGroup rect,g.stateGroup rect{stroke:var(--background-modifier-border)}.activeText0,.activeText1,.activeText2,.activeText3{fill:var(--text-normal)!important}.done0,.done1,.done2,.done3{stroke:var(--text-muted);fill:#bbb;stroke-width:2}.doneText0,.doneText1,.doneText2,.doneText3{fill:var(--text-normal)!important}.crit0,.crit1,.crit2,.crit3{stroke:#b1361b;fill:#d42;stroke-width:2}.activeCrit0,.activeCrit1,.activeCrit2,.activeCrit3,.classLabel .box{stroke:#b1361b;fill:var(--background-secondary-alt);stroke-width:2}.classLabel .box{stroke:none;stroke-width:0;opacity:.5}.doneCrit0,.doneCrit1,.doneCrit2,.doneCrit3{stroke:#b1361b;fill:#bbb;stroke-width:2;cursor:pointer;shape-rendering:crispEdges}.milestone{transform:rotate(45deg) scale(.8,.8)}.milestoneText{font-style:italic}.activeCritText0,.activeCritText1,.activeCritText2,.activeCritText3,.doneCritText0,.doneCritText1,.doneCritText2,.doneCritText3{fill:var(--text-normal)!important}.titleText,g.classGroup text{font-family:var(--mermaid-font-family)}.titleText{text-anchor:middle;font-size:18px;fill:var(--text-normal)}g.classGroup text{fill:var(--text-muted);stroke:none;font-size:10px}g.classGroup text .title{font-weight:bolder}#aggregationEnd,#aggregationStart,#compositionEnd,#compositionStart,.relation,g.classGroup line,g.stateGroup line{stroke:var(--background-modifier-border);stroke-width:1}.classLabel .label{font-size:10px}.relation{fill:none}.dashed-line{stroke-dasharray:3}#compositionEnd,#compositionStart,.classLabel .label{fill:var(--background-modifier-border)}#aggregationEnd,#aggregationStart{fill:var(--background-secondary-alt)}#dependencyEnd,#dependencyStart,#extensionEnd,#extensionStart{fill:var(--background-modifier-border);stroke:var(--background-modifier-border);stroke-width:1}.branch-label,.commit-id,.commit-msg{fill:#d3d3d3;color:#d3d3d3;font-family:var(--mermaid-font-family)}.pieTitleText{text-anchor:middle;font-size:25px;fill:var(--text-normal)}.pieTitleText,.slice,g.stateGroup text{font-family:var(--mermaid-font-family)}.state-note text,g.stateGroup text{stroke:none;font-size:10px}g.stateGroup .state-title{font-weight:bolder;fill:var(--text-normal)}.transition{stroke:var(--background-modifier-border);stroke-width:1;fill:none}.stateGroup .composit{fill:#fff;border-bottom:1px}.stateGroup .alt-composit{fill:#e0e0e0;border-bottom:1px}.state-note{stroke:#645c10;fill:#f3edb3}.state-note text{fill:#000}.stateLabel .box{stroke:none;stroke-width:0;fill:var(--background-secondary-alt);opacity:.5}.stateLabel text{fill:var(--text-normal);font-size:10px;font-weight:700;font-family:var(--mermaid-font-family)}.node circle.state-start{fill:var(--text-normal);stroke:var(--text-normal)}.node circle.state-end{stroke:var(--background-primary);stroke-width:2}#statediagram-barbEnd,g.stateGroup text{fill:var(--background-modifier-border)}.statediagram-cluster rect{stroke-width:1px}.statediagram-cluster rect,.statediagram-state .divider{stroke:var(--background-modifier-border)}.statediagram-cluster rect.outer,.statediagram-state .title-state,.statediagram-state rect.basic{rx:5px;ry:5px}.statediagram-cluster rect,.statediagram-cluster.statediagram-cluster .inner{fill:var(--background-secondary-alt)}.statediagram-cluster.statediagram-cluster-alt .inner{fill:var(--background-secondary)}.statediagram-cluster .inner{rx:0;ry:0}.cluster-label text,.node circle.state-end{fill:var(--text-normal)}.statediagram-state rect.divider{stroke-dasharray:10,10;fill:var(--background-secondary)}.note-edge{stroke-dasharray:5}.statediagram-note rect{fill:#f3edb3;stroke:#645c10;stroke-width:1px;rx:0;ry:0}:root{--mermaid-font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important}.error-icon{fill:var(--background-modifier-error)}.error-text{fill:var(--text-error);stroke:var(--text-error)}`

const getRandomId = () => Math.random().toString(36).substring(7).replace(/\d/, 'a')

const mermaidChart = (code) => {
  try {
    mermaid.parse(code)

    const outer = getRandomId()
    const inner = getRandomId()

    app.nextFrame(() => {
      const rendered = mermaid.render(inner, code)
      document.getElementById(outer).innerHTML = rendered
    })

    return `<div class='mermaid' id='${outer}'>
      <div id='${inner}'></div>
    </div>`
  } catch (error) {
    return `<pre>Error parsing Mermaid diagram!\n\n${error.str || error.message}</pre>`
  }
}

const mermaidMarkdownItPlugin = (md) => {
  mermaid.initialize({
    theme: 'neutral',
    themeCSS: theme,
    gantt: {
      axisFormatter: [
        [ '%Y-%m-%d', (d) => d.getDay() === 1 ]
      ]
    }
  })

  const temp = md.renderer.rules.fence.bind(md.renderer.rules)
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]
    const code = token.content.trim()

    if (token.info === 'mermaid') return mermaidChart(code)
    return temp(tokens, idx, options, env, slf)
  }
}

class MermaidPlugin {
  constructor() {
    this.id = 'mermaid'
    this.name = 'Mermaid'
    this.description = 'Parses and displays Mermaid diagrams.'
    this.defaultOn = true

    this.app = null
    this.instance = null
    this.scriptEl = null
  }

  init(app, instance) {
    this.app = app
    this.instance = instance
  }

  onEnable() {
    if (!this.scriptEl) {
      const scriptEl = document.createElement('script')
      scriptEl.src = 'https://cdn.jsdelivr.net/npm/mermaid@8.5.1/dist/mermaid.min.js'
      scriptEl.addEventListener('load', () => this.onLoad())
      document.body.appendChild(scriptEl)
      this.scriptEl = scriptEl
    } else {
      this.app.parser.md.enable([ 'mermaid' ])
      this.rerender(this.app.workspace.rootSplit)
    }
  }

  onDisable() {
    this.app.parser.md.disable([ 'mermaid' ])
    this.rerender(this.app.workspace.rootSplit)
  }

  onLoad() {
    this.app.parser.md.use(mermaidMarkdownItPlugin)
    this.rerender(this.app.workspace.rootSplit)
  }

  rerender(leaf) {
    if (!leaf || !leaf.children) return

    for (let child of leaf.children) {
      if (child.view && child.view.previewMode) {
        const contents = child.view.previewMode.get()
        child.view.previewMode.set('')
        this.app.nextFrame(() => child.view.previewMode.set(contents))
      }

      this.rerender(child)
    }
  }
}

module.exports = () => new MermaidPlugin()