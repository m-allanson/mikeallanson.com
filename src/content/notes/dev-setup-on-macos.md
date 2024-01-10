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

### Appearance

- Set Appearance to Auto

### Desktop & Dock

- Select `Hot Corners...` button. Set bottom right to put display to sleep
- Move dock to left
- Auto hide and show dock
- Disable animate opening applications

### Control Centre

- Clock no day of week or date
- Bluetooth show in menu bar
- Focus show in menu bar always
- Spotlight don't show in menu bar
- A11y shortcuts show in Control Centre
- Fast user switching show in Control Centre

### Lock Screen

- Require password 5 seconds after sleep or screen saver

### Privacy & Security

- Turn on FileVault
- Turn on Firewall
- Privacy
  - Disable personalised Ads

### Trackpad

- Increase tracking speed until it feels right (6/10).

### Keyboard

- Disable some mission control shortcuts (ctrl + up)
- Set key repeat to max speed
- Shortcuts -> Use keyboard navigation to move focus between controls

### Siri & Spotlight

- Disable Siri
- Categories
  - Applications, Calculator, Conversion, Folders, System Settings

### System Preferences

- Set up Touch ID

## Init dotfiles

Chezmoi will install my dotfiles, and run [a 'one time' setup script](https://github.com/m-allanson/dotfiles/blob/main/run_once_install_packages.sh.tmpl) to install various tools and apps via homebrew.

```
chezmoi init github.com/m-allanson/dotfiles
chezmoi apply
```

Chezmoi will also [configure some system defaults](https://github.com/m-allanson/dotfiles/blob/main/run_once_system_defaults.sh.tmpl) using another one time setup script.

## Terminal

I switched from iTerm2 to WezTerm. WezTerm has a text-based config which I can store as part of my dotfiles. [View the config here](https://github.com/m-allanson/dotfiles/blob/main/dot_wezterm.lua).

## Firefox

- Set as default browser
- Set Kagi as default search
- Disable any sponsored suggestions
- Open previous windows and tabs when starting
- Disable 'confirm before quitting with command+Q'
- Set Enhanced Tracking Protection to Strict
- Use 1Password to manage Logins and Passwords
- Set language to English UK
- Set mailto links to 'always ask'
- Disable 'save logins and passwords'
- Enable HTTPS-only
- Enable DNS over HTTPS, Increased Protection using NextDNS

### Extensions

- 1Password
- ClearURLs
- Multi-Account Containers
- Nitter redirect
- Privacy Badger
- uBlock origin

## VSCode

- cocopon Iceberg Theme <https://cocopon.github.io/iceberg.vim/>
- cocopon Iceberg Light Theme
- Night Owl theme
- Disable telemetry
- Disable View -> Appearance -> Activity Bar
- Settings -> Editor: Font family, set to `'MonaspiceAr Nerd Font Propo', Zapfino, Menlo, Monaco, 'Courier New', monospace`
- Move side bar right
- Move search pane to left
- Disable minimap

I've started using VSCode's settings sync to keep this in sync across different machines. There are probably other settings and extensions that I've not mentioned here.

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

Most of these can probably be installed via brew these days.

## Other system config

- Sort out SSH keys
- Apply licences to purchased software
- [Add Fastmail contacts and calendar](https://www.fastmail.help/hc/en-us/articles/1500000277682)
- Configure backups

## Node.js

I use [Volta](https://volta.sh/) to manage different node / npm / yarn versions. It's installed as part of the Chezmoi run once script mentioned earlier.

## Updates

### January 2023

- Updated settings locations for macOS Sonoma
- Updated `chezmoi` instructions
- Updated browser and code editor details
