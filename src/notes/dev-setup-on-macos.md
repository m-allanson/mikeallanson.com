---
title: Dev Setup on macOS
date: 2022-01-01
---

I recently set up a macOS dev machine from scratch. This is my notes on the steps I took.

## First steps

- Install [1Password](https://1password.com)
- Install [Sublime Text](https://sublimetext.com)
- Install [Sublime Merge](https://sublimemerge.com) (seeing as we're downloading ST anyway)
- Install [homebrew](https://brew.sh)

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
  - Applications, Calculator, Conversion, Folders,

### System Preferences

- Set up Touch ID

## System defaults

```shell
# Show Library folder
chflags nohidden ~/Library

# Show hidden files
defaults write com.apple.finder AppleShowAllFiles YES

# Show path bar
defaults write com.apple.finder ShowPathbar -bool true

# Show status bar
defaults write com.apple.finder ShowStatusBar -bool true
```

A> Credit to [taniarascia.com](https://www.taniarascia.com/setting-up-a-brand-new-mac-for-development/#defaults) for the system defaults settings.

## Install apps

```shell
brew install \
deno \
firefox \
git \
google-chrome \
gh \
iterm2 \
rectangle \
slack \
spotify  \
starship \
visual-studio-code \
volta \
jq \
kubectl
```

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

## dotfiles

Grab dotfiles from [m-allanson/dotfiles](https://github.com/m-allanson/dotfiles)

## iterm2

- Install a 'nerd font'. I'm using a patched SF Mono "SF Mono Nerd Font" ([instructions available here](/patch-sf-mono-with-nerd-font-icons)). ~~Maybe try Hack next time?~~ I tried Hack and preferred SF Mono.
- Get iceberg theme from <https://iterm2colorschemes.com/>
- Appearance -> Panes -> uncheck 'Show per-pane title bar with split panes'
- Profiles -> General -> Working Directory -> Reuse previous session's directory
- Profiles -> Terminal -> Set scrollback lines to unlimited
- Profiles -> Text -> Font "SF Mono Nerd Font"
- To enable text navigation with opt + arrow, and cmd + arrow
  - Profiles -> Keys -> Key Mappings -> Presets -> Natural Text Editing

## VSCode

- cocopon Iceberg Theme <https://cocopon.github.io/iceberg.vim/>
- cocopon Iceberg Light Theme
- Disable telemetry
- Disable View -> Appearance -> Activity Bar
- Settings -> Editor: Font family, set to `'SFMono Nerd Font Mono', Zapfino, Menlo, Monaco, 'Courier New', monospace`
- Move side bar right
- Disable minimap

### VSCode plugins

-

## Other apps

- Docker (via Docker Desktop)
- Tableplus
- CoScreen
- DevUtils
- Gifox
- Sync (sync.com)
- Grand Perspective
- ImageOptim
- Multipass
- Obsidian
- Rectangle
- VLC
- WaveLink
- Whatsapp
- Zoom

## Other system config

- Sort out SSH keys
- Apply licences to purchased software
- [Add Fastmail contacts and calendar](https://www.fastmail.help/hc/en-us/articles/1500000277682)
- Configure backups

## Node / JS

```shell
volta install node
```
