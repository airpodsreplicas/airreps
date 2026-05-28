---
title: Lautstärkeregler Ist Wirkungslos auf macOS
description: 'Beheben Sie das macOS-Problem mit dem Lautstärkeregler auf Intel-Macs. Eine einfache Umgehung, um die Kontrolle über Ihre Audioausgabe zurückzugewinnen.'
---
# Das Problem: Der Lautstärkeregler funktioniert nicht.

Dies ist eines der bekanntesten Probleme der **Intel**-Version von macOS: Der Lautstärkeregler-Slider, der die Audiolautstärke steuert, funktioniert einfach nicht und verhält sich nur wie ein Schalter (es betrifft die meisten Replikate, einige bleiben jedoch unberührt). Da Apple dem Problem selbst nie nachgehen würde, können wir es mit einem [Open-Source-Tool](https://github.com/briankendall/proxy-audio-device) umgehen.

:::warning
Diese Anleitung ist für diejenigen gedacht, die Intel-basierte Macs haben (i3, i5, i7; nicht M‑Serie). Wenn dein Apple Silicon (M‑Series) Mac mit deinen aktuellen AirReps keinen Ton wiedergibt, sieh dir den Abschnitt [Häufige Fehler](/de/troubleshooting/other-common-bugs) an.
:::

## **Voraussetzungen**

Vor dem Tutorial stelle bitte sicher, dass du:
- `sudo`-Zugriff hast (dein macOS-Benutzerkonto muss Administratorrechte haben)
- den Paketmanager `brew` installiert hast (falls nicht, folge diesem [Abschnitt](#brew-installation))

:::tip
PS: Die Verwendung von `brew` ist deutlich einfacher als die manuelle Installation, aber wenn du `brew` umgehen möchtest, kannst du die Schritte auch [hier](https://github.com/briankendall/proxy-audio-device#manual-installation) nachlesen.
:::

## **Installation von `brew`**

Wenn du `brew` noch nicht installiert hast, fangen wir hier an. Öffne diese Seite: [https://brew.sh/](https://brew.sh/), kopiere den dortigen Befehl und führe ihn im Terminal aus.

<video src="/volume_fix/brew-installation.webm" poster="/volume_fix/brew-installation-poster.webp" width="500" height="443" autoplay loop muted playsinline aria-label="Installation using Terminal"></video>

:::warning
Du wirst möglicherweise aufgefordert, dein Passwort einzugeben. Gib dein Passwort wie gewohnt ein (es sieht so aus, als wäre es verborgen, ist es in diesem Fall aber nicht).
:::

## **Installation**

### **Herunterladen**
Sobald alles bereit ist, öffne das Terminal und führe folgenden Befehl aus:
`brew install --cask proxy-audio-device`

<video src="/volume_fix/app-installation.webm" poster="/volume_fix/app-installation-poster.webp" width="500" height="346" autoplay loop muted playsinline aria-label="install proxy-audio-device"></video>

:::tip
Während der Installation kann der Systemton kurzzeitig stottern. Führe die Installation idealerweise aus, wenn gerade kein Audio abgespielt oder bearbeitet wird (keine Audio-Bearbeitungssoftware laufen lassen).
:::

### **Einrichten**
1. Öffne Launchpad und starte die neu installierte App `Proxy Audio Device Settings`, um den Einrichtungsprozess zu beginnen. Es sieht ungefähr so aus:

![App-Symbol](/volume_fix/app_icon.png)

2. Nach dem Öffnen erscheint ein Fenster wie dieses.

![App-Oberfläche](/volume_fix/app_window.png)

Bitte nicht das Tutorial wegklicken — die meisten Anwender können es so einrichten:

- `Proxy device name`: Name des Ausgabegeräts; du kannst ihn belassen.
- `Proxied device`: Audioquelle (wähle den Namen deiner AirRep)
- `Buffer size`: Erlaubte Zeit für macOS, Audio zu verarbeiten (vereinfacht) (bitte **nicht ändern**, 512 ist für die meisten Nutzer ausreichend)
- `Proxy device is active`: Wie die Software im Hintergrund aktiv ist. Das ist etwas knifflig, lässt sich aber auf diese Optionen reduzieren:
    + Wenn es dir nichts ausmacht, dass der Ton kurz aussetzt (kurze Sounds), wähle `When proxied device is active`
    + Für die meisten Nutzer wähle `When user is not idle`
    + Für konsistenten Ton, z. B. beim Gaming, wähle `Always`.

3. Zuletzt navigiere zu Control Center > Sound > dem ">"-Icon und wähle das neu erstellte Audiogerät (standardmäßig `Proxy Audio Device`).

<video src="/volume_fix/change-audio-device.webm" poster="/volume_fix/change-audio-device-poster.webp" width="500" height="558" autoplay loop muted playsinline aria-label="pick audio device"></video>


## **Nebenwirkungen**

Obwohl die Lösung meist unproblematisch ist, können einige Nutzer auf folgende Probleme stoßen:
:::details Kein "Sounds"-Symbol in der oberen Leiste
Leider musst du das Control Center öffnen, um die Lautstärke zu regeln (oder eine Tastenkombination verwenden).
:::

:::details Kein Ton nach Trennung
Die App ist so ausgelegt, dass sie immer auf das gewählte Gerät zugreift. Du musst manuell wieder "Internal Speaker" auswählen.
:::

:::details Knistern/Pop-Geräusche oder einseitiger Ton
Das Problem lässt sich umgehen, indem du die Puffergröße erhöhst oder in der Option `Proxy device is active` der App `Always` wählst.
:::

## **Deinstallation**

Wenn du die App entfernen möchtest, führe einfach folgenden Befehl im Terminal aus:

`brew remove --cask proxy-audio-device`

…und starte anschließend dein System neu.

## **Optional: Umfrage**

Ich habe eine Umfrage [hier](http://poll-maker.com/poll5643879x05fb4568-166) erstellt, um herauszufinden, ob dieser Workaround tatsächlich funktioniert. Die Teilnahme ist sehr einfach und hilft enorm, ein vollständiges Bild dieses Workarounds zu bekommen. Ich würde mich sehr freuen, wenn du deine Meinung teilst!

[![Umfrage](/volume_fix/poll.png)](http://poll-maker.com/poll5643879x05fb4568-166)
