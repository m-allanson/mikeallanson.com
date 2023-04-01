---
title: Dev Setup on macOS
date: 2022-01-01
---

I recently set up a macOS dev machine from scratch. This is my notes on the steps I took.

## First steps

- Install [1Password](https://1password.com)
- Install [homebrew](https://brew.sh)
- Install [chezmoi](https://www.chezmoi.io) (`brew install chezmoi`)

Homebrew takes a while to install. Tick through the System Preferences in the meantime.

## System Preferences

- Log in with Apple ID

### General

- Appearance auto

### Desktop & Screensaver

- Hot corners bottom right puts display to sleep

### Dock & Menu Bar

- Move dock to left
- Auto hide dock
- Disable open animations
- Bluetooth show in menu bar
- Focus show in menu bar always
- A11y shortcuts show in Control Centre
- Clock no day of week or date
- Spotlight don't show in menu bar

### Security & Privacy

- Require password 5 seconds after sleep or screen saver
- Turn on FileVault TODO
- Turn on Firewall? Is this going to be a pita?
- Privacy
  - Disable personalised Ads

### Trackpad

- Increase tracking speed until it feels right.

### Keyboard

- Touchbar shows expanded control strip
- Press fn key to show emojis
- Customise control strip
- Disable some mission control shortcuts (ctrl + up/down)
- Set key repeat to max speed
- Shortcuts -> Use keyboard navigation to move focus between controls

### Spotlight

- Categories
  - Applications, Calculator, Conversion, Folders, System Preferences

### System Preferences

- Set up Touch ID

## Init dotfiles

Chezmoi will install my dotfiles, and run [a 'one time' setup script](https://github.com/m-allanson/dotfiles/blob/main/run_once_install_packages.sh.tmpl) to install various tools and apps via homebrew.

```
chezmoi init github.com/m-allanson/dotfiles --ssh
```

Chezmoi will also [configure some system defaults](https://github.com/m-allanson/dotfiles/blob/main/run_once_system_defaults.sh.tmpl) using another one time setup script.

## Terminal

I switched from iTerm2 to WezTerm. WezTerm has a text-based config which I can store as part of my dotfiles. [View the config here](https://github.com/m-allanson/dotfiles/blob/main/dot_wezterm.lua).

## Firefox

- Set as default browser
- Set duckduckgo as default search
- Disable any sponsored suggestions
- Open previous windows and tabs when starting
- Disable 'confirm before quitting with command+Q'
- Set language to English UK
- Set mailto links to 'always ask'
- Disable 'save logins and passwords'
- Enable https only

### Extensions

- 1Password
- ClearURLs
- Containerise
- I don't care about cookies
- Multi-Account Containers
- Nitter redirect?
- Privacy Badger
- uBlock origin

## VSCode

- cocopon Iceberg Theme <https://cocopon.github.io/iceberg.vim/>
- cocopon Iceberg Light Theme
- Disable telemetry
- Disable View -> Appearance -> Activity Bar
- Settings -> Editor: Font family, set to `'SFMono Nerd Font Mono', Zapfino, Menlo, Monaco, 'Courier New', monospace`
- Move side bar right
- Disable minimap

I've started using VSCode's settings sync to keep this in sync across different machines.

## Other apps

- Docker (via Docker Desktop)
- Tableplus
- DevUtils
- CleanShot X
- Sync (sync.com)
- Grand Perspective
- ImageOptim
- VLC
- Whatsapp
- Zoom

## Other system config

- Sort out SSH keys
- Apply licences to purchased software
- [Add Fastmail contacts and calendar](https://www.fastmail.help/hc/en-us/articles/1500000277682)
- Configure backups

## Node.js

I use [Volta](https://volta.sh/) to manage different node / npm / yarn versions. It's installed as part of the Chezmoi run once script mentioned earlier.
