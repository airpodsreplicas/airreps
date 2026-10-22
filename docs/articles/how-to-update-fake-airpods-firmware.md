---
title: "How to Update Fake AirPods Firmware: Step-by-Step Guide"
description: "How to update firmware on AirPods replicas safely using FlyCC, CloudCC, and Starfun — safe charging rules, avoiding bricks, and when to leave firmware alone."
category: "Troubleshooting"
order: 16
---

# How to Update Fake AirPods Firmware: Step-by-Step Guide

Genuine Apple AirPods update automatically through your Apple devices. Replicas don't. Their firmware comes from the manufacturer and is installed through a companion app, and only for models the manufacturer supports. An update can fix iOS compatibility problems or connection drops, and sometimes adds features.

Updating writes new firmware to the earbuds, so an interrupted or mismatched update can leave them unusable. The exact process depends on the model and the app, so this guide covers what to check and how to update safely rather than one sequence for every pair.

> **Quick Answer:** Identify your exact model and seller first, then use the app listed for that manufacturer in [Useful Apps](/useful-apps): **FlyCC** for TigerBuilder (Airoha) models or **StarFun** for Huilian, both available on Android and iPhone. If the app offers an update for your model, follow its on-screen instructions, keep the earbuds charged and close to your phone, and don't interrupt the update. If your pair works well and the update doesn't fix a problem you have, skip it.

::: warning The Cardinal Rule: If it works, don't touch it
Replica firmware updates mostly fix problems caused by major iOS updates or known bugs. If your earbuds connect smoothly, sound great and ANC works, and the update doesn't fix a problem you actually have, **do not update firmware**. An unnecessary update only adds risk.
:::

## Before you update

1. **Know your exact model and seller**: Check your order and the seller's product name, then find that version on the [version pages](/version-info/general). Chip numbers in seller listings aren't reliable on their own.
2. **Have a reason**: Look for a seller notice, a note on your version's page, or a confirmed fix in the [AirReps Discord](https://airreps.link/discord) for a problem you have.
3. **Use the current version of the right app** from [Useful Apps](/useful-apps), and grant the Bluetooth permissions it asks for.
4. **Charge first**: Charge the earbuds and the case before you start, so nothing runs low during the update.
5. **Keep the connection stable**: Keep your phone close, the screen on and the app open until the update has finished.

## Step 1: Match the app to your manufacturer

Our [Useful Apps catalog](/useful-apps) is organised by manufacturer. Use the app listed for your model:

- **TigerBuilder** (Airoha chips such as the 1562AE, 1563E and 1571AM) → **FlyCC**, on Android and iPhone. Read our [FlyCC App Guide](/articles/flycc-app-guide). **CloudCC** has been deprecated since TigerBuilder integrated OTA into FlyCC; only use it as a workaround for the storage permission issue.
- **Huilian** → **StarFun**, on Android and iPhone.
- **HR**, **BES** and **V2.5/KKX** models → the apps listed under those headings in Useful Apps.
- **Low-tier Jieli (Jerry) clones** → no app in the catalog supports them.

Not every app offers firmware updates for every model it connects to. Only install updates that the correct app offers for your detected model, and never load firmware meant for a different product.

## Step 2: Run the update in the app

Update screens differ between apps and models, so follow what your app shows rather than a generic sequence:

1. Connect the earbuds in your phone's Bluetooth settings, then open the app and wait for it to detect your model.
2. Open its firmware or update option, if it has one, and compare the installed version with the one on offer. If the app says you already have the latest firmware, you're done.
3. Read the instructions the app gives for your model, including where the earbuds should be during the update, and follow them exactly.
4. Start the update and leave everything alone until the app confirms it's complete. Don't close the app, turn off Bluetooth or walk away with the phone.
5. Afterwards, check the version in the app and test the earbuds. If pairing acts up, forget and re-pair them (see [How to Reset Fake AirPods](/articles/how-to-reset-fake-airpods)).

On **iPhone**, FlyCC and StarFun both offer firmware upgrades for selected products. FlyCC's App Store notes list OTA support for Airoha's AB157x platform since version 1.1.1, and StarFun lists OTA among its functions ([FlyCC](https://apps.apple.com/us/app/flycc/id1661245709) and [StarFun](https://apps.apple.com/us/app/starfun/id1633624617) listings, checked 2026-10-22). On **Android**, use the APKs from Useful Apps. Android 12 and newer ask for the Nearby devices permission, while older Android versions or older apps can need Location permission for Bluetooth scanning ([Android developer documentation](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

## What to do if an update freezes or fails

- **Give it time and keep the connection**: Leave the earbuds where the app told you to and keep the phone close. If the app offers its own retry option, use it.
- **Don't switch to another app or firmware file** to fix a failed update.
- **Contact your seller** if the update fails or the earbuds stop responding. Include your order number, model, the app name and version, and your phone and OS version, plus screenshots of any error. You can also ask in the [AirReps Discord](https://airreps.link/discord).

Recovery depends on the model, so there's no universal reset that undoes a failed update. The [reset guide](/articles/how-to-reset-fake-airpods) is for pairing problems, not a firmware recovery tool.

## Related troubleshooting guides

- Earbuds not showing up in the firmware app? See [Fake AirPods Won't Connect](/articles/fake-airpods-wont-connect).
- Experiencing glitches after an update? Follow [How to Reset Fake AirPods](/articles/how-to-reset-fake-airpods).
- Using an Apple ecosystem setup? Read [Do Fake AirPods Work With New iPhones?](/articles/do-fake-airpods-work-with-new-iphone).
- Need app download links? Visit [Useful Apps](/useful-apps).

## FAQ

::: details Can I update replica AirPods firmware on an iPhone?
Yes, for selected models. FlyCC and StarFun have iPhone versions on the App Store, and both offer firmware upgrades for some products. Not every pair gets an update on iPhone: it depends on the model, its firmware and the app version. For example, our [AirPods Pro 2 page](/version-info/pro#airpods-pro-2) suggests checking V5.3 TB firmware in FlyCC on iOS. Android is also an option through the APKs in Useful Apps, as long as you use the app listed for your model.
:::

::: details Will an update give my AirPods replica Apple's Find My network?
No. The Find My network relies on proprietary Apple cryptographic certificates that cannot be added via firmware updates.
:::

::: details Can a firmware update brick my fake AirPods?
It can. An update interrupted by a flat battery or a lost connection, or firmware meant for a different product, can leave a pair unusable. Only install updates the correct app offers for your model, follow its instructions, and skip updates you don't need.
:::
