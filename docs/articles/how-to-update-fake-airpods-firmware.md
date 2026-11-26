---
title: "How to Update Fake AirPods Firmware Safely"
description: "Update AirPods replica firmware safely with FlyCC (Airoha/TB) and StarFun (Huilian): 80% battery rule, brick prevention, and when not to update."
category: "Troubleshooting"
order: 16
---

# How to Update Fake AirPods Firmware: Step-by-Step Guide

Unlike genuine Apple AirPods, which update silently in the background via iOS, AirPods replicas update through community companion apps. Both **FlyCC** and **StarFun** are available on Android and the iOS App Store, though Android APKs remain the most reliable path for full OTA flashing across every chipset. Updating firmware can resolve iOS handshake bugs, improve Active Noise Cancellation (ANC) stability, or fix connection drops.

However, flashing firmware writes directly to the earbud's internal flash storage. An interrupted update can permanently brick a controller. This guide covers the safe, community-tested flashing procedures for every major replica chipset.

> **Quick Answer:** To update replica AirPods firmware, first identify your chipset to choose the correct utility: **FlyCC** (Airoha, including TigerBuilder) or **StarFun** (Huilian). Ensure both earbuds and the charging case are charged above 80%. Keep the case lid open, leave both earbuds seated inside, start the OTA update in the app, and do not close the lid, toggle Bluetooth, or exit the app until the progress reaches 100%.

::: warning The Cardinal Rule: If it works, don't touch it
Firmware updates on replicas do not function like video game patches. They are released primarily to fix breaking changes caused by major iOS updates or to resolve severe hardware bugs. If your earbuds currently connect smoothly, sound great, and ANC operates without flaw, **do not update firmware**. Unnecessary flashing only introduces bricking risk.
:::

<CommunityCta variant="apps" />

## The pre-update safety checklist

Before touching the update button, verify these four conditions without exception:

1. **Battery level above 80%**: Ensure both earbuds and the charging case have at least 80% charge. If an earbud runs out of power mid-flash, the bootloader will corrupt.
2. **Keep the case connected to power**: Plug the charging case into a 5V/1A wall adapter or power bank during the update.
3. **Leave the lid open**: The earbuds must remain seated in their charging pins with the case lid open throughout the entire transfer.
4. **Disable Auto-Lock / Screen Sleep**: Keep your phone screen awake. If your phone enters deep sleep or closes background processes, the Bluetooth transfer may stall.

## Step 1: Identify your chipset and app

Flashing a firmware binary intended for an Airoha chip onto a Huilian board will instantly brick the unit. Match your utility to your chip from our [Useful Apps catalog](/useful-apps):

- **Airoha Chipsets (1562AE, 1562E, 1571AM)** → Use **FlyCC** (Read our [FlyCC App Guide](/articles/flycc-app-guide)).
- **TigerBuilder Chipsets (1562AE/TB, 1571AM/TB)** → Use **FlyCC**. CloudCC has been deprecated since TigerBuilder integrated OTA functionality into FlyCC; only use it as a workaround if you encounter the storage permission issue.
- **Huilian Chipsets (247, 277, 377, 377H3)** → Use **StarFun** (Read our [StarFun App Guide](/articles/starfun-app-guide)).
- **Jieli (Jerry) Chipsets** → Low-tier Jieli clones do not support OTA firmware updates.

## Step 2: Step-by-step update procedures

### Method A: Updating with FlyCC (Airoha)

1. Connect your AirPods to your phone via standard Bluetooth settings.
2. Launch **FlyCC** and verify that your model appears on the home screen.
3. Tap **Firmware Update** (or **OTA Update**).
4. Tap **Check for Updates**. If a new version is detected, the app will display the build number and changelog.
5. Tap **Start Update**. You will see two stages: transferring the binary to the left earbud, then the right earbud.
6. Once the progress hits 100%, wait for the message: *"Update Successful"*.
7. Close the charging case lid and leave it undisturbed for 60 seconds to allow the microcontrollers to reboot.

::: warning Pro 3 V7 TB firmware note
After a firmware update in FlyCC on the **AirPods Pro 3 V7 TB**, the iOS popup and serial number disappear and need to be re-added inside the FlyCC app. The V7 Huilian (StarFun) is not affected.
:::

### Method B: CloudCC workaround (TigerBuilder)

TigerBuilder units update through FlyCC (Method A). Only use CloudCC if FlyCC runs into the storage permission issue:

1. Place both earbuds in the case with the lid open.
2. Open **CloudCC** and tap **Search Device**.
3. Select your TigerBuilder device once detected.
4. Navigate to the **Firmware** tab and tap **Query Latest Version**.
5. Select the cloud package and tap **Download and Update**.
6. Keep the phone resting directly next to the charging case until the prompt confirms completion.

### Method C: Updating with StarFun (Huilian)

1. Ensure the earbuds are connected to your phone and the lid is open.
2. Open **StarFun** and tap the **Settings / Firmware** icon.
3. Check the current firmware version against the latest cloud release.
4. Tap **Upgrade**. The app will write the configuration blocks sequentially.
5. After rebooting, forget the device in your phone's Bluetooth menu and perform a soft reset.

## What to do if an update freezes or fails

If an update hangs at a specific percentage (e.g. frozen at 45% for over 5 minutes):

1. **Do not close the lid or remove the earbuds.**
2. Check if Bluetooth disconnected. If the app allows, tap **Retry** or restart the app while leaving the earbuds in place.
3. If the earbuds become completely unresponsive, follow our [How to Reset Fake AirPods Guide](/articles/how-to-reset-fake-airpods) to execute a 15-second controller hard reset.
4. Reopen the update app — in most cases, the recovery bootloader will allow you to reflash the package from 0%.

<CommunityCta variant="stuck" />

## Related troubleshooting guides

- Using a Huilian replica? Follow the [StarFun App Guide](/articles/starfun-app-guide).
- Earbuds not showing up in the firmware app? See [Fake AirPods Won't Connect](/articles/fake-airpods-wont-connect) or [How to Reset Fake AirPods](/articles/how-to-reset-fake-airpods).
- Need app download links? Visit [Useful Apps](/useful-apps).
- Upgrading from an older un-updatable clone? Take the [1-minute quiz](/quiz) or browse [trusted sellers](/links/info).

## FAQ

::: details Can I update replica AirPods firmware on an iPhone?
Both **FlyCC** and **StarFun** are available on the iOS App Store for EQ, settings, and checking firmware status (and FlyCC on iOS supports checking/updating recent TigerBuilder models like V5.3 TB). However, for legacy models or if an iOS app won't start an OTA flash, borrowing an Android phone with the APK from [Useful Apps](/useful-apps) is the most reliable fallback. Once updated, the firmware stays on the earbuds permanently.
:::

::: details Will an update give my AirPods replica Apple's Find My network?
No. The Find My network relies on proprietary Apple cryptographic certificates that cannot be added via firmware updates.
:::

::: details Can a firmware update brick my fake AirPods?
Yes, if the update is interrupted by a dead battery, closing the lid prematurely, or flashing a firmware binary meant for a different chipset. Always follow the pre-update safety checklist above.
:::
