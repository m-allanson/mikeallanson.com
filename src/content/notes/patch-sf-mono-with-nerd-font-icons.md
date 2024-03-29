---
title: Patch SF Mono with Nerd Font Icons
date: 2022-01-08
---

Patch a font to include Nerd Font icons using their [font patcher script](https://github.com/ryanoasis/nerd-fonts#font-patcher).

## Requirements

There's a Docker image that contains all the needed requirements, which is the approach I used. Check [the `ryanoasis/nerd-fonts` repo docs](https://github.com/ryanoasis/nerd-fonts) for non-Docker approaches.

## Why?

Mainly for the nice icons in [Starship](https://starship.rs). Also to understand how to do it.

Note that there are some repos that have a pre-patched SF Mono available to download. But I wanted to see what was involved in doing it myself.

## Steps

### Install the unpatched font

Download SF Mono from [developer.apple.com/fonts/](https://developer.apple.com/fonts/)

Run the installer

The files will be installed to `/Library/Fonts/`

You should see the following:

```shell
SF-Mono-Bold.otf
SF-Mono-BoldItalic.otf
SF-Mono-Heavy.otf
SF-Mono-HeavyItalic.otf
SF-Mono-Light.otf
SF-Mono-LightItalic.otf
SF-Mono-Medium.otf
SF-Mono-MediumItalic.otf
SF-Mono-Regular.otf
SF-Mono-RegularItalic.otf
SF-Mono-Semibold.otf
SF-Mono-SemiboldItalic.otf
```

Copy them out to somewhere like `~/Desktop/sf-mono-original`.

### Create the patched version

To create the patched font:

```shell
docker run --rm -v ~/Desktop/sf-mono-original:/in -v ~/Desktop/sf-mono-patched:/out nerdfonts/patcher --powerline --use-single-width-glyphs
```

The output directory `~/Desktop/sf-mono-patched` will be created for you. When the conversion is finished open Font Book, and drag the patched fonts in to install them. Font Book might complain about some errors. No idea if they cause problems, I just ignored them.

The patched font name will be 'SFMono Nerd Font Mono', and should contain the NerdFont Powerline glyphs.
