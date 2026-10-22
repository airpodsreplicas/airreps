---
title: "FlyCC APK Guide: How to Configure & Tune Airoha AirPods Replicas"
description: "FlyCC for TigerBuilder AirPods replicas: Android and iPhone downloads, model-dependent EQ and updates, permissions, and connection troubleshooting."
category: "Using your reps"
order: 13
---

# FlyCC APK Guide: How to Configure & Tune Airoha AirPods Replicas

FlyCC is the companion app our [Useful Apps catalog](/useful-apps#tigerbuilder) lists for **TigerBuilder** replicas. TigerBuilder is a replica manufacturer, not a chip brand: its models are built on **Airoha** chipsets such as the 1562AE, 1563E and 1571AM. Depending on the model and its firmware, FlyCC can adjust EQ, show settings specific to that model, and install firmware updates the manufacturer has released.

> **Quick Answer:** FlyCC is a free third-party app for TigerBuilder (Airoha-based) AirPods replicas. It's available as an Android APK and as an iPhone app on the App Store, both linked in [Useful Apps](/useful-apps#tigerbuilder). What it can do depends on your exact model, firmware and app version: usually EQ, plus firmware updates for selected models. Huilian, HR, BES and KKX models use the other apps in the catalog.

::: tip Android and iPhone versions
FlyCC has an Android APK and an iPhone version on the App Store. Having the app on your phone doesn't mean it supports your pair: the menus and updates it shows depend on the model it detects, that model's firmware and the app version. There's no separate Mac release in our catalog. The App Store allows the iPhone app on Apple-silicon Macs but marks it "Not verified for macOS", so this guide doesn't cover Mac use.
:::

## Which replicas use FlyCC

Start from the seller and version you bought, not the chip name alone. The [version pages](/version-info/general) list FlyCC for TigerBuilder models such as the AirPods Pro 3 V7 TB, AirPods 4 V3 TB, AirPods Pro 2 V5.3 TB and AirPods Max V3. Check the page for your version before installing anything.

An Airoha chip on its own doesn't decide the app. HR models also use Airoha chips but are listed with BullSuper and G&Link, Huilian models use StarFun, and some older Airoha versions have no app support at all. Which app connects is a useful clue, but a failed FlyCC scan doesn't prove your pair has a different chip or isn't the model you ordered. Permissions, the app version and model support all play a part (see troubleshooting below).

## How to download and install FlyCC safely

Use the links in [Useful Apps](/useful-apps#tigerbuilder) rather than re-uploads from other sites.

**iPhone:** Install FlyCC from the App Store and allow Bluetooth access when iOS asks. The listing requires iOS 13 or later (version 2.0.16 when checked on 2026-10-22).

**Android:** The Android version is an APK download, not a Google Play app.

1. Download the APK from [Useful Apps](/useful-apps#tigerbuilder).
2. When Android asks, allow **Install unknown apps** for the browser or file manager you used to open it. You can switch that permission off again afterwards.
3. Open the `.apk` file and tap **Install**.
4. Grant the Bluetooth permission the app requests. On Android 12 and newer it appears as **Nearby devices**. On older Android versions, or with older apps, Bluetooth scanning can require **Location** permission instead ([Android developer documentation](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

FlyCC is third-party software, and AirReps hasn't security-audited it. Bluetooth or Nearby devices access is expected for an earbud app; be cautious about requests that have nothing to do with the earbuds. Android's documentation explains why the system asks for these permissions, not what a particular app does with them. On iPhone, the App Store privacy label is the developer's own declaration, and Apple notes that "This information has not been verified by Apple" ([App Store listing](https://apps.apple.com/us/app/flycc/id1661245709)).

## What FlyCC can do

The menus FlyCC shows come from the model it detects, so two pairs can look quite different in the app. The iPhone version's release notes include fixes for missing menus (versions 2.0.12 and 2.0.14), so a menu that doesn't appear can be an app-version or compatibility issue rather than a sign of a different chip.

### EQ and sound

EQ is the main reason the guide points TigerBuilder owners to FlyCC (see [sound quality](/introduction/sound-quality)). Make small changes and listen. For example, lower the bass a little if your batch sounds boomy. Community members share EQ presets in the [AirReps Discord](https://airreps.link/discord). After switching to another phone, check that your EQ still applies, since this can vary by model.

### Controls

Tap and press controls on replicas are normally changed in the iPhone's Bluetooth settings, like genuine AirPods (see the [features guide](/introduction/features)). If FlyCC shows control settings for your model, you can use them there, but not every model offers them.

### Firmware updates (OTA)

FlyCC's App Store description says firmware upgrades are offered for selected products, and its 1.1.1 and 1.1.2 releases (2024) added OTA support for Airoha's AB157x platform. If FlyCC offers an update for your model:

1. Check that you need it: a fix for a problem you actually have, or a notice from your seller or on your [version page](/version-info/general). If your pair works well, leaving the firmware alone is fine.
2. Read the update instructions FlyCC shows for your model and follow them.
3. Keep the earbuds and case charged, keep your phone close with the app open, and don't interrupt the update until the app confirms it has finished.

If an update fails, contact your seller or ask in the Discord rather than trying firmware from another app. The full process is in [How to Update Fake AirPods Firmware](/articles/how-to-update-fake-airpods-firmware).

## Troubleshooting FlyCC connection issues

If FlyCC doesn't find your earbuds:

- **Connect them first**: Pair the earbuds in your phone's Bluetooth settings, then open FlyCC.
- **Check permissions**: On Android 12 and newer, FlyCC needs the **Nearby devices** permission; on older Android versions it may need **Location**. On iPhone, check **Settings → Privacy & Security → Bluetooth**.
- **Update the app**: FlyCC 2.0.16 for iPhone lists a fix for some users who couldn't connect.
- **Confirm the app matches your model**: Check your version's page. If your seller's model comes from another manufacturer, use the app listed for it in [Useful Apps](/useful-apps). CloudCC is deprecated for TigerBuilder models and is only meant as a workaround for the storage permission issue described there.
- **Don't treat one failed scan as proof**: If no listed app connects after these checks, ask in the [Discord](https://airreps.link/discord) with your seller and model. Very low-tier Jieli clones don't work with any of the apps. If you're unsure what you received, see [How to Spot Fake AirPods](/articles/how-to-spot-fake-airpods).
- **Clear pairing cache**: If connections drop, reset the pairing using our [Reset Guide](/articles/how-to-reset-fake-airpods).

## Related guides

- Using reps with Android daily? See [AirPods Replicas on Android](/articles/airpods-replicas-on-android).
- Need other chip utilities? Check the complete [Useful Apps catalog](/useful-apps).
- Earbuds refusing to connect? Walk through [Fake AirPods Won't Connect](/articles/fake-airpods-wont-connect).
- Looking for verified Airoha models? Browse the [Trusted Seller Directory](/links/info).

## FAQ

::: details Is FlyCC safe to install on my phone?
FlyCC is third-party software that AirReps hasn't security-audited, so use normal caution: download it from the Useful Apps link or the App Store, check that its permission requests relate to Bluetooth, and decline anything unrelated. The App Store privacy label is the developer's own declaration, not an Apple audit.
:::

::: details Can I use FlyCC on an iPhone?
Yes. FlyCC is on the App Store for iPhone (iOS 13 or later; version 2.0.16 when checked on 2026-10-22), and Apple's [Core Bluetooth](https://developer.apple.com/bluetooth/) framework lets iPhone apps work with Bluetooth Low Energy accessories. What FlyCC can do on an iPhone depends on your model, its firmware and the app version, and firmware updates are offered for selected products, not every pair. Android remains an option through the APK in Useful Apps.
:::

::: details Why can't FlyCC find my earbuds?
The usual causes are a missing Bluetooth or Nearby devices permission, an outdated app version, earbuds that aren't connected to the phone yet, or a model FlyCC doesn't support. FlyCC is listed for TigerBuilder models; Huilian models use StarFun, and HR models use BullSuper or G&Link. A failed scan doesn't prove which chip is inside, so check your seller's model on the version pages and ask in the Discord if no listed app connects.
:::
