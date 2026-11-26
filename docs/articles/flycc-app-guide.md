---
title: "FlyCC App Guide: Tune Airoha AirPods Replicas"
description: "How to download, install, and use FlyCC safely — custom EQ tuning, touch control mapping, firmware updates, and troubleshooting connection failures."
category: "Using your reps"
order: 13
---

# FlyCC APK Guide: How to Configure & Tune Airoha AirPods Replicas

FlyCC is the essential companion app for AirPods replicas running **Airoha chipsets** (including the Airoha 1562AE, 1562E, 1562F, and 1571AM). Because Apple's native iOS settings only expose surface-level controls, FlyCC provides low-level access to the silicon: custom parametric EQ tuning, touch sensor calibration, Active Noise Cancelling (ANC) balancing, and OTA firmware flashing.

> **Quick Answer:** FlyCC is a free, third-party Android, iOS and macOS utility specifically designed for Airoha-based AirPods replicas. It lets you customize sound profiles via a built-in equalizer, modify pinch/tap sensitivity, and flash over-the-air firmware updates. It will not detect replicas powered by Huilian, BES, or budget Jieli chips.

::: tip Android, iPhone or Mac
FlyCC is available as an Android APK and on the iOS App Store; both are linked on [Useful Apps](/useful-apps#tigerbuilder). You can also run the community macOS release. Settings saved to the earbuds persist even when you switch to another phone.
:::

<CommunityCta variant="apps" />

## Supported chipsets

FlyCC works exclusively with **Airoha / TigerBuilder hardware**. If your earbuds connect, you have confirmed genuine Airoha silicon inside:

| Airoha Chipset | Example Replica Models | FlyCC Support |
| :--- | :--- | :--- |
| **Airoha 1571AM** | Pro 3 V7 TB, Pro 2 V5.3 TB, AirPods 4 V3 TB | Full EQ, ANC, touch controls, head-tracking, OTA |
| **Airoha 1562AE** | Pro 2 V5.2 TB, AirPods Max V3 TB, Pro 1 V4.9 | Full EQ, ANC, touch controls, head-tracking, OTA |
| **Airoha 1563E / 1562E** | Pro 3 V6 TB, AirPods 4 V2 TB, AirPods 2 V3E | Standard EQ, touch controls, firmware tools |
| **Airoha 1561M / 1562F** | AirPods Max V3P / V2 Metal, legacy units | EQ & basic firmware tools |

If FlyCC scans indefinitely and never detects your earbuds, your pair uses a different manufacturer's silicon (such as Huilian, which uses [StarFun](/articles/starfun-app-guide)) or an entry-level Jieli chip.

## How to download and install FlyCC safely

Because FlyCC communicates with non-MFi Bluetooth hardware, it is distributed directly as an APK rather than through Google Play.

1. Download the latest verified APK directly from the [Useful Apps directory](/useful-apps).
2. On your Android device, navigate to **Settings → Security** and enable **"Install unknown apps"** for your browser or file manager.
3. Open the downloaded `.apk` file and tap **Install**.
4. Grant the requested **Bluetooth / Nearby Devices** and **Location** permissions. (Android requires location permissions to scan for Low Energy Bluetooth peripherals; FlyCC does not track GPS data).

## Key features and how to use them

### 1. Custom EQ and audio tuning

Out of the box, some replica batches carry an exaggerated bass response. FlyCC includes a 10-band equalizer to refine audio output:

- **Bass reduction**: Lower the 31Hz, 62Hz, and 125Hz sliders by 2–3dB for a cleaner, more neutral soundstage matching retail AirPods Pro.
- **Vocal clarity**: Raise the 1kHz and 2kHz bands by 1.5dB to bring forward podcasts and vocals.
- **Saving to hardware**: Once adjusted, tap **Save to Earbuds**. The acoustic tuning is written directly to the Airoha DSP, meaning the custom EQ remains active when you reconnect to your iPhone, iPad, or PC.

### 2. Touch and gesture calibration

If your earbuds trigger accidental pauses when adjusting them in your ear, FlyCC allows you to adjust force sensor sensitivity from 1 (lightest tap) to 5 (firm squeeze). You can also remap single, double, and triple presses to specific functions.

### 3. Noise cancellation tuning

In the ANC menu, FlyCC allows independent calibration of the left and right feedforward microphones. If one earbud feels like it has higher cabin pressure or weaker cancellation, the calibration slider rebalances the phase inversion.

## Safe firmware updating (OTA)

FlyCC can flash updated firmware binaries to fix iOS handshake bugs or improve connectivity. However, flashing carries an inherent bricking risk if interrupted:

1. **Charge both earbuds and the case above 80%** before starting.
2. Keep the charging case open with both earbuds seated inside within 30 centimeters of your phone.
3. Tap **Check for Updates** in FlyCC. If an update is available, download the package.
4. Tap **Start Update**. **Do not close the case lid, turn off Bluetooth, or switch apps** until the progress bar reaches 100% and displays "Update Succeeded."
5. Once complete, leave the earbuds in the closed case for 60 seconds before re-pairing.

::: warning Pro 3 V7 TB note
On the **AirPods Pro 3 V7 TB**, after a firmware update in FlyCC, the iOS popup and serial number disappear and need to be re-added inside the FlyCC app. The V7 Huilian (StarFun) is not affected.
:::

For a comprehensive guide on flashing all replica chipsets safely, read [How to Update Fake AirPods Firmware](/articles/how-to-update-fake-airpods-firmware).

## Troubleshooting FlyCC connection issues

If FlyCC refuses to see your earbuds:

- **Check your phone's active audio connection**: Ensure the earbuds are already paired in Android's native Bluetooth settings before opening FlyCC.
- **Grant Nearby Devices permissions**: On Android 12 and newer, FlyCC cannot detect Bluetooth LE devices without the "Nearby Devices" permission enabled.
- **Identify your chip**: If your earbuds refuse to connect to FlyCC, try scanning with **[StarFun](/articles/starfun-app-guide)** (for Huilian chips) or **CloudCC** (workaround only for older TB storage permission issues). If no app connects, see [How to Spot Fake AirPods](/articles/how-to-spot-fake-airpods) to check for a budget Jieli clone.
- **Clear pairing cache**: If connections drop, perform a controller reset using our [Reset Guide](/articles/how-to-reset-fake-airpods).

<CommunityCta variant="stuck" />

## Related guides

- Own a Huilian replica? Read our [StarFun App Guide](/articles/starfun-app-guide).
- Using reps with Android daily? See [AirPods Replicas on Android](/articles/airpods-replicas-on-android).
- Need other chip utilities? Check the complete [Useful Apps catalog](/useful-apps).
- Looking for a verified Airoha model? Take the [1-minute quiz](/quiz) or browse the [Trusted Seller Directory](/links/info).

## FAQ

::: details Is FlyCC safe to install on my phone?
Yes. The APKs hosted in the community Useful Apps directory are extracted from official manufacturer supply chains and verified clean of malware. It only requires Bluetooth access to communicate with the Airoha audio processor.
:::

::: details Can I use FlyCC on an iPhone?
Yes. FlyCC is on the iOS App Store as well as an Android APK; both are linked on [Useful Apps](/useful-apps#tigerbuilder). All EQ and control changes write permanently to the earbuds' internal memory, so they stay when you switch devices.
:::

::: details Why does FlyCC say "Device Not Found"?
The most common reason is silicon mismatch: FlyCC only works with Airoha chips. If you own a Huilian model, use StarFun. TigerBuilder models use FlyCC; CloudCC is only a workaround if FlyCC hits the storage permission issue. If none connect, you likely have a budget Jieli unit.
:::
