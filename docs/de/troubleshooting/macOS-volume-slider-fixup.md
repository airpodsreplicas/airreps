---
title: Lautstärkeregler funktioniert nicht auf macOS
description: Behebe das macOS-Lautstärkeregler-Problem auf Intel-Macs. Ein einfacher Workaround, um die Kontrolle über deine Audioausgabe zurückzugewinnen.
---

# Das Problem: Der Lautstärkeregler funktioniert nicht.

Dies ist eines der bekanntesten Probleme bei der **Intel**-Version von macOS, bei dem der Lautstärkeregler, der die Audio-Lautstärke steuert, einfach nicht funktioniert, sondern nur als Schalter agiert (betrifft die meisten Replicas, obwohl einige nicht betroffen waren). Da Apple selbst dieses Problem nie untersuchen würde, können wir es mit einem [Open-Source-Tool](https://github.com/briankendall/proxy-audio-device) umgehen.

:::warning
Diese Anleitung richtet sich an Besitzer von Intel-basierten Macs (i3, i5, i7; nicht M-Serie-Chip). Wenn dein Apple Silicon (M-Serie-Chip) Mac keinen Ton mit deinen aktuellen AirReps wiedergibt, schau dir den Abschnitt [Häufige Bugs](/de/troubleshooting/other-common-bugs) an.
:::

## **Voraussetzung**

Bevor du mit der Anleitung beginnst, stelle bitte sicher, dass du:
- `sudo`-Zugriff hast (oder dein macOS-Konto Administratorrechte hat)
- Den `brew`-Paketinstaller hast (falls nicht, folge einfach diesem [Abschnitt](#brew-installation))

:::tip
PS: Die Verwendung von `brew` ist viel einfacher als die manuelle Installation, aber wenn du `brew` überspringen möchtest, kannst du die Schritte [hier](https://github.com/briankendall/proxy-audio-device#manual-installation) lesen und befolgen.
:::

## **`brew`-Installation**

Wenn du `brew` noch nicht auf deinem System installiert hast, fangen wir hier an. Öffne [diese](https://brew.sh/) Seite, kopiere den Befehl und führe ihn im Terminal aus.

![Installation über Terminal](/volume_fix/brew-installation.gif)

:::warning
Möglicherweise wirst du aufgefordert, dein Passwort einzugeben. Gib dein Passwort wie gewohnt ein (es kann so aussehen, als wäre dein Passwort versteckt, aber in diesem Fall ist es das nicht).
:::

## **Installation**

### **Download**
Wenn alles bereit ist, öffne das Terminal und führe folgenden Befehl aus:
`brew install --cask proxy-audio-device`

![proxy-audio-device installieren](/volume_fix/app-installation.gif)

:::tip
Während der Installation ist es normal, dass der Systemsound kurz stottert. Stelle daher sicher, dass du dies in einer Umgebung ohne Audiowiedergabe durchführst (keine Audio-Manipulationssoftware läuft).
:::

### **Einrichtung**
1. Navigiere zum Launchpad, starte die neu installierte `Proxy Audio Device Settings`, um den Einrichtungsprozess zu beginnen. Es sieht ungefähr so aus:

![App-Icon](/volume_fix/app_icon.png)

2. Nach dem Öffnen erscheint ein Fenster wie dieses.

![App-Oberfläche](/volume_fix/app_window.png)

Lass dich nicht verleiten, diese Anleitung wegzuklicken. Die meisten Nutzer können die Einstellungen wie folgt vornehmen:

- `Proxy device name`: Name der Ausgabe, du kannst es so lassen wie es ist.
- `Proxied device`: Audioquelle (wähle den Namen deiner AirReps)
- `Buffer size`: Erlaubte Zeit für macOS zur Audioverarbeitung (stark vereinfacht) (bitte **so lassen wie es ist**, da 512 für die meisten ausreichend ist)
- `Proxy device is active`: Wie die Software im Hintergrund arbeitet. Hier wird es knifflig, aber es kommt auf diese Optionen an:
    + Wenn es dich nicht stört, dass der Ton kurz abbricht (kurze Tonsequenzen), wähle `When proxied device is active`
    + Für die meisten Nutzer empfiehlt sich `When user is not idle`
    + Für konsistenten Ton oder Gaming wähle `Always`.

3. Navigiere abschließend zu Kontrollzentrum > Sound > das „>"-Symbol und wähle das neu erstellte Audiogerät (`Proxy Audio Device` standardmäßig).

![Audiogerät auswählen](/volume_fix/change-audio-device.gif)


## **Nebenwirkungen**

Obwohl die Nutzung meistens problemlos ist, könnten einige Nutzer auf diese Probleme stoßen:
::: details Kein „Sound"-Symbol in der oberen Leiste
Leider musst du zum Kontrollzentrum navigieren, um den Ton zu steuern (oder eine Tastenkombination verwenden).
:::

:::details Kein Ton beim Trennen
Die App ist so konzipiert, dass sie immer mit dem ausgewählten Gerät verbunden bleibt. Du musst manuell „Internal Speaker" wieder auswählen.
:::

:::details Knacken/Knallen oder einseitiger Ton
Du kannst dies umgehen, indem du die Puffergröße erhöhst oder `Always` in der Option `Proxy Device in Active` der App wählst.
:::

## **Deinstallation**

Wenn du die App entfernen möchtest, führe einfach diesen Befehl im Terminal aus:

`brew remove --cask proxy-audio-device`

...und starte dann dein System neu.

## **Optional: Umfrage**

Ich habe [hier](http://poll-maker.com/poll5643879x05fb4568-166) eine Umfrage erstellt, um herauszufinden, ob dieser Workaround tatsächlich funktioniert. Es ist unglaublich einfach teilzunehmen und hilft sehr, ein Gesamtbild dieses Workarounds zu bekommen. Ich wäre sehr dankbar, wenn du deine Erfahrungen teilst!

[![Umfrage](/volume_fix/poll.png)](http://poll-maker.com/poll5643879x05fb4568-166)
