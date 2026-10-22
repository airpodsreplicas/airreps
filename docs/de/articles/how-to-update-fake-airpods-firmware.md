---
title: 'So aktualisieren Sie die Firmware gefälschter AirPods: Schritt-für-Schritt-Anleitung'
description: 'So aktualisieren Sie die Firmware von AirPods-Replikaten sicher mit FlyCC, CloudCC und Starfun — sichere Laderegeln, das Vermeiden von Defekten und wann Sie die Firmware besser unverändert lassen sollten.'
category: Fehlerbehebung
order: 16
---
# Firmware gefälschter AirPods aktualisieren: Schritt-für-Schritt-Anleitung

Im Gegensatz zu echten Apple AirPods, die still im Hintergrund über iOS aktualisiert werden, werden Repliken von AirPods über Community-Begleit-Apps auf Android oder macOS aktualisiert. Ein Firmware-Update kann iOS-Handshake-Fehler beheben, die Stabilität der aktiven Geräuschunterdrückung (ANC) verbessern oder Verbindungsabbrüche beheben.

Das Aufspielen der Firmware schreibt jedoch direkt in den internen Flash-Speicher der Ohrhörer. Ein unterbrochenes Update kann einen Controller dauerhaft unbrauchbar machen. Diese Anleitung behandelt die sicheren, von der Community getesteten Flash-Verfahren für alle wichtigen Replika-Chipsätze.

> **Kurzantwort:** Um die Firmware von AirPods-Repliken zu aktualisieren, musst du zuerst deinen Chipsatz identifizieren, um das richtige Dienstprogramm auszuwählen: **FlyCC** (Airoha), **CloudCC** (TigerBuilder) oder **Starfun** (Huilian). Stelle sicher, dass beide Ohrhörer und das Ladecase zu mehr als 80 % geladen sind. Lass den Deckel des Cases geöffnet, lass beide Ohrhörer darin sitzen, starte das OTA-Update in der App und schließe den Deckel nicht, schalte Bluetooth nicht um und beende die App nicht, bis der Fortschritt 100 % erreicht.

::: warning Die wichtigste Regel: Wenn es funktioniert, lass es in Ruhe
Firmware-Updates für Repliken funktionieren nicht wie Patches für Videospiele. Sie werden hauptsächlich veröffentlicht, um durch größere iOS-Updates verursachte inkompatible Änderungen zu beheben oder schwerwiegende Hardwarefehler zu lösen. Wenn sich deine Ohrhörer derzeit problemlos verbinden, gut klingen und ANC fehlerfrei funktioniert, **aktualisiere die Firmware nicht**. Unnötiges Flashen erhöht lediglich das Risiko, die Ohrhörer unbrauchbar zu machen.
:::

## Sicherheitscheckliste vor dem Update

Überprüfe vor dem Betätigen der Update-Schaltfläche ausnahmslos diese vier Bedingungen:

1. **Akkustand über 80 %**: Stelle sicher, dass beide Ohrhörer und das Ladecase mindestens zu 80 % geladen sind. Wenn einem Ohrhörer während des Flashens der Strom ausgeht, wird der Bootloader beschädigt.
2. **Case an die Stromversorgung anschließen**: Schließe das Ladecase während des Updates an ein 5-V-/1-A-Netzteil oder eine Powerbank an.
3. **Deckel geöffnet lassen**: Die Ohrhörer müssen während der gesamten Übertragung mit geöffnetem Case-Deckel auf ihren Ladekontakten sitzen.
4. **Automatische Sperre/Ruhezustand deaktivieren**: Halte den Bildschirm deines Smartphones aktiv. Wenn dein Smartphone in den Tiefschlaf wechselt oder Hintergrundprozesse beendet, kann die Bluetooth-Übertragung ins Stocken geraten.

## Schritt 1: Chipsatz und App identifizieren

Das Aufspielen einer Firmware-Binärdatei für einen Airoha-Chip auf eine Huilian-Platine macht das Gerät sofort unbrauchbar. Ordne dein Dienstprogramm anhand unseres [Katalogs nützlicher Apps](/de/useful-apps) deinem Chip zu:

- **Airoha-Chipsätze (1562AE, 1562E, 1571AM)** $\to$ Verwende **FlyCC** (Lies unseren [FlyCC-App-Leitfaden](/de/articles/flycc-app-guide)).
- **TigerBuilder-Chipsätze (1562AE/TB, 1571AM/TB)** $\to$ Verwende **CloudCC**.
- **Huilian-Chipsätze (247, 277, 377, 377H3)** $\to$ Verwende **Starfun**.
- **Jieli-(Jerry-)Chipsätze** $\to$ Günstige Jieli-Klone unterstützen keine OTA-Firmware-Updates.

## Schritt 2: Schritt-für-Schritt-Anleitungen zum Aktualisieren

### Methode A: Aktualisierung mit FlyCC (Airoha)

1. Verbinde deine AirPods über die standardmäßigen Bluetooth-Einstellungen mit deinem Android-Gerät.
2. Starte **FlyCC** und überprüfe, ob dein Modell auf dem Startbildschirm angezeigt wird.
3. Tippe auf **Firmware aktualisieren** (oder **OTA-Update**).
4. Tippe auf **Nach Updates suchen**. Wenn eine neue Version gefunden wird, zeigt die App die Build-Nummer und das Änderungsprotokoll an.
5. Tippe auf **Update starten**. Du siehst zwei Phasen: Zuerst wird die Binärdatei auf den linken Ohrhörer übertragen, anschließend auf den rechten.
6. Sobald der Fortschritt 100 % erreicht, warte auf die Meldung: *„Update erfolgreich“*.
7. Schließe den Deckel des Ladecases und lass es 60 Sekunden unberührt, damit die Mikrocontroller neu starten können.

### Methode B: Aktualisierung mit CloudCC (TigerBuilder)

1. Lege beide Ohrhörer bei geöffnetem Deckel in das Case.
2. Öffne **CloudCC** und tippe auf **Gerät suchen**.
3. Wähle dein TigerBuilder-Gerät aus, sobald es erkannt wurde.
4. Wechsle zum Tab **Firmware** und tippe auf **Neueste Version abfragen**.
5. Wähle das Cloud-Paket aus und tippe auf **Herunterladen und aktualisieren**.
6. Lass das Smartphone direkt neben dem Ladecase liegen, bis die Aufforderung den Abschluss bestätigt.

### Methode C: Aktualisierung mit Starfun (Huilian)

1. Stelle sicher, dass die Ohrhörer mit deinem Smartphone verbunden sind und der Deckel geöffnet ist.
2. Öffne **Starfun** und tippe auf das Symbol **Einstellungen/Firmware**.
3. Vergleiche die aktuelle Firmware-Version mit der neuesten Cloud-Version.
4. Tippe auf **Aktualisieren**. Die App schreibt die Konfigurationsblöcke nacheinander.
5. Nachdem die Ohrhörer neu gestartet wurden, entferne das Gerät im Bluetooth-Menü deines Smartphones und führe einen Soft-Reset durch.

## Was tun, wenn ein Update einfriert oder fehlschlägt?

Wenn ein Update bei einem bestimmten Prozentsatz hängen bleibt (z. B. länger als 5 Minuten bei 45 %):

1. **Schließe den Deckel nicht und entferne die Ohrhörer nicht.**
2. Überprüfe, ob die Bluetooth-Verbindung getrennt wurde. Wenn die App es erlaubt, tippe auf **Erneut versuchen** oder starte die App neu, während die Ohrhörer an ihrem Platz bleiben.
3. Wenn die Ohrhörer vollständig nicht mehr reagieren, folge unserer [Anleitung zum Zurücksetzen gefälschter AirPods](/de/articles/how-to-reset-fake-airpods), um einen 15-sekündigen Hard-Reset des Controllers durchzuführen.
4. Öffne die Update-App erneut – in den meisten Fällen ermöglicht der Wiederherstellungs-Bootloader, das Paket ab 0 % erneut aufzuspielen.

## Verwandte Anleitungen zur Fehlerbehebung

- Werden die Ohrhörer in der Firmware-App nicht angezeigt? Siehe [Gefälschte AirPods verbinden sich nicht](/de/articles/fake-airpods-wont-connect).
- Treten nach einem Update Störungen auf? Folge der Anleitung [Gefälschte AirPods zurücksetzen](/de/articles/how-to-reset-fake-airpods).
- Verwendest du eine Einrichtung im Apple-Ökosystem? Lies [Funktionieren gefälschte AirPods mit neuen iPhones?](/de/articles/do-fake-airpods-work-with-new-iphone).
- Benötigst du App-Download-Links? Besuche [Nützliche Apps](/de/useful-apps).

## FAQ

::: details Kann ich die Firmware von AirPods-Repliken auf einem iPhone aktualisieren?
Nein. iOS erlaubt es Begleit-Apps nicht, Firmware über Bluetooth auf Nicht-MFi-Zubehör zu schreiben. Du musst dir ein Android-Smartphone leihen (oder einen kompatiblen Mac verwenden), um Firmware-Updates aufzuspielen. Nach der Aktualisierung bleibt die Firmware dauerhaft auf den Ohrhörern gespeichert.
:::

::: details Erhalten meine AirPods-Repliken durch ein Update Apples „Wo ist?“-Netzwerk?
Nein. Das „Wo ist?“-Netzwerk basiert auf proprietären kryptografischen Apple-Zertifikaten, die nicht über Firmware-Updates hinzugefügt werden können.
:::

::: details Kann ein Firmware-Update meine gefälschten AirPods unbrauchbar machen?
Ja, wenn das Update durch einen leeren Akku oder das vorzeitige Schließen des Deckels unterbrochen wird oder eine Firmware-Binärdatei für einen anderen Chipsatz aufgespielt wird. Befolge immer die obenstehende Sicherheitscheckliste vor dem Update.
:::
