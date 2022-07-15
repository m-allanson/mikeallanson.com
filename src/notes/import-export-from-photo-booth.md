---
title: Import & Export from Photo Booth
date: 2022-01-03
---

Occasionally I want to import or export the photos from macOS's Photo Booth app. Here's a reminder on how to do it.

The images are stored in your home directory. Look for `~/Pictures/Photo Booth Library` in Finder.

## Export

Right-click the file, and select _Show Package Contents_.

Copy the images in the `Pictures` directory and the `recents.plist` file.

## Import

To import to an 'empty' instance of Photo Booth, you can copy and paste the files to the same locations that they were copied from.

To import to an instance that already has saved pictures, you'll need to merge the old and new `recents.plist` files. Each file in the `Pictures` directory needs a corresponding line in `recents.plist`.

e.g.

```xml
  <string>Photo on 26-12-2016 at 22.34.jpg</string>
```
