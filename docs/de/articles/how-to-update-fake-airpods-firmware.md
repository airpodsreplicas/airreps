---
title: 'So aktualisieren Sie die Firmware gefälschter AirPods: Schritt-für-Schritt-Anleitung'
description: 'So aktualisieren Sie die Firmware von AirPods-Klonen sicher mit FlyCC, CloudCC und Starfun — sichere Laderegeln, wie Sie einen Totalausfall vermeiden und wann Sie die Firmware unangetastet lassen sollten.'
category: Fehlerbehebung
order: 16
---
# So aktualisieren Sie die Firmware gefälschter AirPods: Schritt-für-Schritt-Anleitung

Im Gegensatz zu echten Apple AirPods, die sich unbemerkt im Hintergrund über iOS aktualisieren, werden AirPods-Nachbauten über Community-Begleit-Apps unter Android, iOS oder macOS aktualisiert. Firmware-Updates können Fehler beim iOS-Handshake beheben, die Stabilität der aktiven Geräuschunterdrückung (ANC) verbessern oder Verbindungsabbrüche verhindern.

Beim Flashen der Firmware werden jedoch Daten direkt in den internen Flash-Speicher der Ohrhörer geschrieben. Wird ein Update unterbrochen, kann der Controller dauerhaft unbrauchbar werden. Diese Anleitung beschreibt die sicheren, von der Community erprobten Flash-Verfahren für alle gängigen Nachbau-Chipsätze.

> **Kurzantwort:** Um die Firmware von AirPods-Nachbauten zu aktualisieren, müssen Sie zuerst den Chipsatz ermitteln und das passende Dienstprogramm auswählen: **FlyCC** (Airoha, einschließlich TigerBuilder) oder **Starfun** (Huilian). Achten Sie darauf, dass beide Ohrhörer und das Ladecase zu mindestens 80 % geladen sind. Lassen Sie den Deckel des Cases geöffnet und beide Ohrhörer darin liegen, starten Sie das OTA-Update in der App und schließen Sie den Deckel nicht, schalten Sie Bluetooth nicht um und beenden Sie die App nicht, bis der Fortschritt 100 % erreicht hat.

::: warning Die wichtigste Regel: Wenn es funktioniert, lassen Sie es in Ruhe
Firmware-Updates für Nachbauten funktionieren nicht wie Patches für Videospiele. Sie werden hauptsächlich veröffentlicht, um Fehler zu beheben, die durch größere iOS-Updates verursacht wurden, oder schwerwiegende Hardwarefehler zu korrigieren. Wenn sich Ihre Ohrhörer derzeit problemlos verbinden, gut klingen und die ANC einwandfrei funktioniert, **aktualisieren Sie die Firmware nicht**. Unnötiges Flashen birgt nur das Risiko, die Ohrhörer unbrauchbar zu machen.
:::

## Sicherheitscheckliste vor dem Update

Bevor Sie die Update-Schaltfläche betätigen, müssen Sie diese vier Bedingungen unbedingt überprüfen:

1. **Akkuladung über 80 %**: Achten Sie darauf, dass sowohl beide Ohrhörer als auch das Ladecase zu mindestens 80 % geladen sind. Geht einem Ohrhörer während des Flashens der Strom aus, wird der Bootloader beschädigt.
2. **Case während des Updates ans Stromnetz anschließen**: Verbinden Sie das Ladecase während des Updates mit einem 5-V-/1-A-Netzteil oder einer Powerbank.
3. **Deckel geöffnet lassen**: Die Ohrhörer müssen während der gesamten Übertragung in den Ladekontakten liegen, während der Deckel des Cases geöffnet bleibt.
4. **Automatische Sperre / Bildschirm-Standby deaktivieren**: Lassen Sie den Bildschirm Ihres Smartphones eingeschaltet. Wenn das Smartphone in den Tiefschlaf wechselt oder Hintergrundprozesse beendet, kann die Bluetooth-Übertragung ins Stocken geraten.

## Schritt 1: Chipsatz und App ermitteln

Wird eine Firmware-Datei für einen Airoha-Chip auf ein Huilian-Board geflasht, wird das Gerät sofort unbrauchbar. Wählen Sie in unserem [Katalog nützlicher Apps](/de/useful-apps) das zum Chipsatz passende Dienstprogramm aus:

- **Airoha-Chipsätze (1562AE, 1562E, 1571AM)** → Verwenden Sie **FlyCC** (Lesen Sie unsere [FlyCC-App-Anleitung](/de/articles/flycc-app-guide)).
- **TigerBuilder-Chipsätze (1562AE/TB, 1571AM/TB)** → Verwenden Sie **FlyCC**. CloudCC ist veraltet, seit TigerBuilder die OTA-Funktion in FlyCC integriert hat. Verwenden Sie CloudCC nur als Ausweichlösung, falls das Berechtigungsproblem mit dem Speicher auftritt.
- **Huilian-Chipsätze (247, 277, 377, 377H3)** → Verwenden Sie **Starfun**.
- **Jieli-(Jerry-)Chipsätze** → Bei Jieli-Nachbauten der unteren Preisklasse werden OTA-Firmware-Updates nicht unterstützt.

## Schritt 2: Schritt-für-Schritt-Anleitungen zum Update

### Methode A: Update mit FlyCC (Airoha)

1. Verbinden Sie Ihre AirPods über die üblichen Bluetooth-Einstellungen mit Ihrem Android-Gerät.
2. Starten Sie **FlyCC** und prüfen Sie, ob Ihr Modell auf dem Startbildschirm angezeigt wird.
3. Tippen Sie auf **Firmware Update** (oder **OTA Update**).
4. Tippen Sie auf **Check for Updates**. Wird eine neue Version gefunden, zeigt die App die Build-Nummer und das Änderungsprotokoll an.
5. Tippen Sie auf **Start Update**. Das Update erfolgt in zwei Phasen: Zuerst wird die Firmware-Datei auf den linken, anschließend auf den rechten Ohrhörer übertragen.
6. Wenn der Fortschritt 100 % erreicht hat, warten Sie auf die Meldung: *„Update Successful“*.
7. Schließen Sie den Deckel des Ladecases und lassen Sie es 60 Sekunden lang unberührt, damit die Mikrocontroller neu starten können.

### Methode B: CloudCC-Ausweichlösung (TigerBuilder)

TigerBuilder-Geräte werden über FlyCC aktualisiert (Methode A). Verwenden Sie CloudCC nur, wenn in FlyCC das Berechtigungsproblem mit dem Speicher auftritt:

1. Legen Sie beide Ohrhörer mit geöffnetem Deckel in das Case.
2. Öffnen Sie **CloudCC** und tippen Sie auf **Search Device**.
3. Wählen Sie Ihr TigerBuilder-Gerät aus, sobald es erkannt wurde.
4. Öffnen Sie den Tab **Firmware** und tippen Sie auf **Query Latest Version**.
5. Wählen Sie das Cloud-Paket aus und tippen Sie auf **Download and Update**.
6. Legen Sie das Smartphone direkt neben das Ladecase und lassen Sie es dort liegen, bis die Meldung den Abschluss bestätigt.

### Methode C: Update mit Starfun (Huilian)

1. Achten Sie darauf, dass die Ohrhörer mit Ihrem Smartphone verbunden und der Deckel geöffnet ist.
2. Öffnen Sie **Starfun** und tippen Sie auf das Symbol **Settings / Firmware**.
3. Vergleichen Sie die aktuelle Firmware-Version mit der neuesten verfügbaren Version aus der Cloud.
4. Tippen Sie auf **Upgrade**. Die App schreibt die Konfigurationsblöcke nacheinander.
5. Vergessen Sie nach dem Neustart das Gerät im Bluetooth-Menü Ihres Smartphones und führen Sie einen Soft-Reset durch.

## Was tun, wenn ein Update hängen bleibt oder fehlschlägt?

Wenn ein Update bei einem bestimmten Prozentsatz hängen bleibt (z. B. über 5 Minuten bei 45 %):

1. **Schließen Sie nicht den Deckel und nehmen Sie die Ohrhörer nicht heraus.**
2. Prüfen Sie, ob die Bluetooth-Verbindung getrennt wurde. Wenn die App dies zulässt, tippen Sie auf **Retry** oder starten Sie die App neu, ohne die Ohrhörer zu bewegen.
3. Wenn die Ohrhörer überhaupt nicht mehr reagieren, befolgen Sie unsere Anleitung [So setzen Sie gefälschte AirPods zurück](/de/articles/how-to-reset-fake-airpods), um einen 15-sekündigen harten Controller-Reset durchzuführen.
4. Öffnen Sie die Update-App erneut – in den meisten Fällen ermöglicht der Wiederherstellungs-Bootloader, das Paket erneut ab 0 % zu flashen.

## Weitere Anleitungen zur Fehlerbehebung

- Werden die Ohrhörer in der Firmware-App nicht angezeigt? Siehe [Gefälschte AirPods lassen sich nicht verbinden](/de/articles/fake-airpods-wont-connect).
- Treten nach einem Update Probleme auf? Folgen Sie der Anleitung [So setzen Sie gefälschte AirPods zurück](/de/articles/how-to-reset-fake-airpods).
- Verwenden Sie ein Apple-Ökosystem? Lesen Sie [Funktionieren gefälschte AirPods mit neuen iPhones?](/de/articles/do-fake-airpods-work-with-new-iphone).
- Benötigen Sie Download-Links für Apps? Besuchen Sie [Nützliche Apps](/de/useful-apps).

## FAQ

::: details Kann ich die Firmware von AirPods-Nachbauten mit einem iPhone aktualisieren?
Nein. iOS erlaubt Begleit-Apps nicht, Firmware über Bluetooth auf Zubehör ohne MFi-Zertifizierung zu schreiben. Sie müssen sich ein Android-Smartphone leihen (oder einen kompatiblen Mac verwenden), um Firmware-Updates zu flashen. Einmal aktualisiert, bleibt die Firmware dauerhaft auf den Ohrhörern.
:::

::: details Erhalten meine AirPods-Nachbauten durch ein Update Zugriff auf Apples „Wo ist?“-Netzwerk?
Nein. Das „Wo ist?“-Netzwerk basiert auf proprietären kryptografischen Zertifikaten von Apple, die sich nicht über Firmware-Updates hinzufügen lassen.
:::

::: details Kann ein Firmware-Update meine gefälschten AirPods unbrauchbar machen?
Ja, wenn das Update durch einen leeren Akku oder ein zu frühes Schließen des Deckels unterbrochen wird oder eine Firmware-Datei für einen anderen Chipsatz geflasht wird. Befolgen Sie stets die obige Sicherheitscheckliste vor dem Update.
:::
