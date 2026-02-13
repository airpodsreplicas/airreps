---
title: Volume Slider is Ineffective on MacOS
description: Fix the macOS volume slider issue on Intel Macs. A simple workaround to regain control over your audio output.
---

# The Problem: Volume Slider Bar won't work.

This is one of the most well-known problem on the **Intel** version of macOS, where the volume slider bar that control audio volume just simply won't work, but only acts as a switch (happened to most replicas out there, though some were unaffected). While Apple themselves would never look into the problem, we can circumvent around this with an [open sourced tool](https://github.com/briankendall/proxy-audio-device).

:::warning
This guide is meant for those that have Intel-based Macs (i3, i5, i7; not M series chip). If your Apple Silicon (M series chip) Mac won't play audio with your current AirReps, check out the [Common Bugs](/troubleshooting/other-common-bugs.md) section.
:::

## **Prerequisite**

Before the tutorial, please make sure that you:
- Have `sudo` access (or your macOS' account did have administrative access)
- `brew` package installer (if not, simply follow this [section](#brew-installation))

:::tip
PS: using `brew` is much easier than manual installation, but if you want to skip using `brew`, you can read this and follow the steps [here](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **`brew` Installation**

If you haven't got `brew` installed on your system, we can start here. Enter [this](https://brew.sh/) page, copy the command and run it in Terminal.

![Installation using Terminal](/volume_fix/brew-installation.gif)

:::warning
You might be prompted to enter your password, go ahead and enter your password as usual (your password might look like it's hidden, but it's not in this case).
:::

## **Installation**

### **Download**
Once everything is ready, you can start by open Terminal, then run the following command:
`brew install --cask proxy-audio-device`

![install proxy-audio-device](/volume_fix/app-installation.gif)

:::tip
While installing, it's normal for the system audio to glitch a little. So make sure you are doing this while in the "cooking beat"-free environment (No audio manipulation softwares running).
:::

### **Setting Up**
1. Navigate to Launchpad, run the newly installed `Proxy Audio Device Settings` to begin the setup process, it will looks something like this:

![app's icon](/volume_fix/app_icon.png)

2. Once open, a window will show up like so.

![app's ui](/volume_fix/app_window.png)

Don't be tempted to click off this tutorial, most people like you can set them up like so:

- `Proxy device name`: Name of the output, you can leave them as is.
- `Proxied device`: Audio source (select your AirRep's name)
- `Buffer size`: Permitted time for macOS to process audio (oversimplified) (please **leave them as is**, as 512 is sufficient for the majorities)
- `Proxy device is active`: How the software working in the background. This is where it gets tricky, but it boils down to these option:
    + If you don't mind the audio cut off (short duration sounds), pick `When proxied device is active`
    + For most people, pick `When user is not idle`
    + For people who want consistent audio, or gaming, pick `Always`.

3. Finally, navigate to Control Center > Sound > the ">" icon, and pick the newly created audio device (`Proxy Audio Device` by default).

![pick audio device](/volume_fix/change-audio-device.gif)


## **Side-effects**

While it is fine to use most of the time, some users might face these issues:
::: details No "Sounds" icon on the top bar
This is... sucks to suck actually, you have to navigate to "Control Center" to control the audio (or shortcut).
:::

:::details No audio when disconnect
The app is only designed to always hook on the picked device. You have to manually repick "Internal Speaker" by yourself.
:::

:::details Crack/pop or one-sided audio
You can get around this by increasing the buffer size / or pick `Always` in `Proxy Device in Active` option of the app.
:::

## **Uninstalling**

If you wish to remove the app, you can simply run this command in the Terminal:

`brew remove --cask proxy-audio-device`

...then restart your system.

## **Optional: Survey**

I've made a poll [here](http://poll-maker.com/poll5643879x05fb4568-166) to figure out if this workaround is actually working. It's incredibly simple to do and it helps a lot to get a whole picture of this workaround, I'll be much appreciated if you share your thoughts!

[![poll](/volume_fix/poll.png)](http://poll-maker.com/poll5643879x05fb4568-166)
