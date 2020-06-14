# Volcano Plugins

A repository with unofficial plugins for Obsidian and [Volcano](https://npmjs.com/volcano). Have one to add? Make a pull request and I'll add your plugin to the repo and give you push access. Be warned that all these plugins are janky.

**I want to clarify, these are all unofficial plugins based on an unofficial plugin API. As such, please don't bother the nice Obsidian developers with bug reports. Instead report issues through GitHub's interface on either this repository or Volcano.**

## Installation

To install one, just download one of the files below and put it in the `volcano/plugins/` folder inside your home folder. If that doesn't exist, make sure you've already installed Volcano!

Another option is to directly clone this repository into the plugins directory and just selectively enable plugins.

## [Git integration](https://raw.githubusercontent.com/kognise/volcano-plugins/master/git.js)
- [Create a repository](https://github.com/new) and set it to private if you want
- In your vault, run these commands substituting the values
  ```
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin git@github.com:<USERNAME>/<REPO_NAME>.git
  git push -u origin master
  ```
- Now...

<details>
  <summary>Using my spooooky unofficial Git plugin</summary>
  
  - [Install it](https://github.com/kognise/volcano-plugins)
  - Press sync inside Obsidian whenever you make changes
</details>

<details>
  <summary>Using the git cli</summary>
  
  - Open a terminal in your vault folder
  - Run `git add . && git commit -m 'Commit name'`
</details>

## [Markdown emoji](https://raw.githubusercontent.com/kognise/volcano-plugins/master/emoji.js)

## [Checked checkbox deleter](https://raw.githubusercontent.com/kognise/volcano-plugins/master/checkbox-deleter.js)

## [Mermaid diagrams](https://raw.githubusercontent.com/kognise/volcano-plugins/master/mermaid.js)
