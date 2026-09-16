---
title: "Fake AirPods Won't Connect? Work Through This in Order"
description: "Fake AirPods not pairing or not showing up? Charge, forget and re-pair, check the iOS popup, identify the chip, and know when it's the unit and you should contact the seller."
category: "Troubleshooting"
order: 8
---

# Fake AirPods Won't Connect? Work Through This in Order

A replica that won't pair is annoying, but it's usually one of a few known things — and most have a fix. Work the steps top to bottom; they're ordered by how often they're the cause. If you reach the end and it still won't connect, that points to the unit, not you.

::: tip First time setting these up?
Replicas often need a reset or two out of the box. Don't assume you've been sent a dead pair until you've worked through the steps below.
:::

## 1. Charge the case first

Sounds obvious, but it's the most common cause of "it won't connect at all." Put the earbuds in the case, plug it in, and charge it — a case with no charge won't advertise itself for pairing. Then open the lid and try again.

## 2. Forget the device and re-pair

Stale pairing data is next. The community's reset procedure from [Common Issues](/troubleshooting/other-common-bugs):

1. Forget the device from your phone's Bluetooth settings, then turn Bluetooth **off**.
2. Open the lid and hold the back button for a few seconds, until the light flashes, then close the lid. Don't worry if your light doesn't flash exactly like the images — batches differ.
3. Wait a full minute, turn Bluetooth back on, open the lid, and reconnect.
4. If it doesn't work, take the pods out and put them back in. Close the lid and wait for the light to turn off, then open it and try again.

It can take **3–4 soft resets** to stick, so repeat it a few times. If it still won't connect, do a **hard reset**: forget the device again, then leave the pods out of the case with it open for at least a full day (longer if needed) so they have no residual charge. Once drained, put them back, charge the case, and run the soft reset again.

If only one pod misbehaves — say the right slowly flashes every time you open the case — [reset the pairing](/troubleshooting/other-common-bugs) by holding the back button for 2–3 seconds with the pods in the case.

## 3. Check the pairing popup behavior

On an iPhone, the popup should appear almost instantly, though the speed varies by [seller](/links/info) and batch — sometimes faster than genuine AirPods. Read two things from it:

- **Popup appears, then the connection drops.** The buds are being seen, so it's usually pairing state — repeat step 2.
- **No popup at all.** Either you're not on iOS (there's no popup on Android — that's normal), or the buds aren't advertising. The [connectivity guide](/introduction/connectivity) notes replicas sometimes don't connect to iOS on the first attempt, and a fix usually exists.

## 4. Confirm your platform is behaving as expected

Some "not connecting" reports are just platform differences. On **Android**, replicas pair from the Bluetooth menu like any headset — no popup, and that's not a fault. Name changing and tap controls are iOS-only — borrow an iPhone once and the changes usually carry over to the buds. Our [Android article](/articles/airpods-replicas-on-android) covers the workaround and the chipset apps that run there. On **iOS**, if settings aren't sticking or the buds keep re-pairing, run step 2 again rather than assuming hardware failure.

## 5. Identify the chip with the community apps

If pairing is inconsistent, it helps to know what you're holding. The community maintains free [firmware apps](/useful-apps) for each chipset — FlyCC, CloudCC, StarFun, BullSuper, KKX and others — and installing them is the standard way to identify your chip. Try them one at a time and see which connects.

Important caveat: **very low-tier clones use a Jieli chipset and won't connect to any of these apps.** Genuine AirPods won't connect either, so "no app connects" means a cheap fake or a real pair — it never confirms a real pair on its own. If none of the apps see the buds, you likely have a low-tier clone.

## 6. Check known version-specific quirks

A few behaviors are chipset- and version-specific rather than general faults:

- **iCloud verification failures.** Some replicas can't fully support iCloud, which can block macOS pairing. The fix is to forget the buds on all iCloud devices, forget them on macOS, hold the back button for 15 seconds until the light flashes amber then white, and re-pair. This bug isn't present on the Huilian chipset — see the [iCloud compatibility fix](/troubleshooting/AirReps-Incompatibility-with-iCloud).
- **Automatic device switching.** Apple's iCloud Connect switching only works on 5.3 and 5.4 Huilian models. Everything else connects to multiple devices, but you switch manually. Expecting automatic switching from a non-Huilian unit isn't a fault — it's a missing feature.

## 7. macOS-specific issues

If the buds connect to your phone but misbehave on a Mac:

- **Volume slider acts like a switch** (on Intel Macs). This affects most replicas and is fixed with an open-source tool — follow the [macOS volume slider fix](/troubleshooting/macOS-volume-slider-fixup). Note that on TigerBuilder models the volume gestures on the buds won't work with this method.
- **Won't connect to the Mac at all.** Forget the AirPods from your iPhone first, then try connecting to the Mac. If they connect but you hear no sound, reset them.
- **Buying for a Mac?** The [connectivity guide](/introduction/connectivity) recommends the Huilian model whenever a MacBook or iMac is in the picture, since other chipsets may lack iCloud switching or get stuck at 100% volume.

## When it's the unit, contact the seller

If charging, a soft reset, a hard reset, and the iCloud fix all fail, you've probably received a faulty unit. A low-tier clone that no community app can see is a chip limitation — no setting turns a Jieli pair into a Huilian one.

Trusted sellers replace faulty units, which is why the community points people to them. Contact your seller for a refund or replacement. If you're still choosing, buy from a [verified seller](/links/info) and follow the [ordering guide](/ordering/how-to-buy) so returns are easy.

## FAQ

::: details Why won't my fake AirPods show up at all?
The usual causes are a drained case, stale pairing data, or a chipset limitation. Charge the case, then do the forget-and-re-pair reset a few times. If no community chip app sees the buds, assume a low-tier clone or a faulty unit.
:::

::: details How many times should I reset my replicas before giving up?
It can take 3–4 soft resets to work, so don't stop after one. If those don't help, do a hard reset — leave the pods out of the case with it open for at least a full day to drain them, then charge and reset again.
:::

::: details Do fake AirPods need a special app to pair?
No. Replicas pair through your phone's normal Bluetooth menu — on Android there's no popup at all, and that's expected. The community apps are for firmware, EQ, and chipset identification, not basic pairing. See [useful apps](/useful-apps) for the list.
:::

::: details Can a faulty pair be fixed?
Sometimes. The reset and iCloud procedures above fix the common cases. But if none work, a non-connecting low-tier clone is a chip limitation rather than user error, so contact the seller for a refund or replacement — ideally one from the [trusted directory](/links/info).
:::
