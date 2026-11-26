---
title: So aktualisierst du die Firmware gefälschter AirPods sicher
description: 'Aktualisiere die Firmware von AirPods-Klonen sicher mit FlyCC (Airoha/TB) und StarFun (Huilian): 80-%-Akkuregel, Schutz vor einem Defekt und wann du nicht aktualisieren solltest.'
category: Fehlerbehebung
order: 16
---
# So aktualisierst du die Firmware gefälschter AirPods: Schritt-für-Schritt-Anleitung

Im Gegensatz zu echten Apple AirPods, deren Updates unbemerkt im Hintergrund über iOS installiert werden, werden AirPods-Nachbildungen über Community-Begleit-Apps aktualisiert. Sowohl **FlyCC** als auch **StarFun** sind für Android und im iOS App Store verfügbar. Android-APKs sind jedoch weiterhin der zuverlässigste Weg, um ein vollständiges OTA-Flashen über alle Chipsets hinweg durchzuführen. Firmware-Updates können iOS-Handshake-Fehler beheben, die Stabilität der aktiven Geräuschunterdrückung (ANC) verbessern oder Verbindungsabbrüche beheben.

Beim Flashen wird die Firmware jedoch direkt in den internen Flash-Speicher der Ohrhörer geschrieben. Ein unterbrochenes Update kann einen Controller dauerhaft unbrauchbar machen. Diese Anleitung beschreibt sichere, in der Community erprobte Flash-Verfahren für alle wichtigen Nachbildungs-Chipsets.

> **Kurzantwort:** Um die Firmware von AirPods-Nachbildungen zu aktualisieren, identifiziere zuerst dein Chipset, um das passende Dienstprogramm auszuwählen: **FlyCC** (Airoha, einschließlich TigerBuilder) oder **StarFun** (Huilian). Stelle sicher, dass beide Ohrhörer und das Ladecase zu mehr als 80 % geladen sind. Lass den Deckel des Cases geöffnet, beide Ohrhörer im Case und starte das OTA-Update in der App. Schließe den Deckel nicht, schalte Bluetooth nicht um und beende die App nicht, bis der Fortschritt 100 % erreicht hat.

::: warning Die wichtigste Regel: Wenn es funktioniert, lass es in Ruhe
Firmware-Updates bei Nachbildungen funktionieren nicht wie Patches für Videospiele. Sie werden vor allem veröffentlicht, um schwerwiegende Änderungen durch große iOS-Updates zu beheben oder gravierende Hardwarefehler zu korrigieren. Wenn sich deine Ohrhörer derzeit problemlos verbinden, gut klingen und die ANC einwandfrei funktioniert, **aktualisiere die Firmware nicht**. Unnötiges Flashen birgt nur das Risiko, das Gerät unbrauchbar zu machen.
:::

<CommunityCta variant="apps" />

## Sicherheitscheckliste vor dem Update

Überprüfe vor dem Tippen auf die Aktualisierungsschaltfläche unbedingt diese vier Bedingungen:

1. **Akkustand über 80 %**: Stelle sicher, dass beide Ohrhörer und das Ladecase mindestens zu 80 % geladen sind. Wenn einem Ohrhörer mitten im Flash-Vorgang der Strom ausgeht, wird der Bootloader beschädigt.
2. **Case während des Updates am Strom lassen**: Schließe das Ladecase während des Updates an ein 5-V-/1-A-Netzteil oder eine Powerbank an.
3. **Deckel geöffnet lassen**: Die Ohrhörer müssen während der gesamten Übertragung in den Ladekontakten sitzen und der Deckel des Cases muss geöffnet bleiben.
4. **Automatische Sperre / Ruhezustand deaktivieren**: Lass den Bildschirm deines Smartphones eingeschaltet. Wenn dein Smartphone in den Tiefschlaf wechselt oder Hintergrundprozesse schließt, kann die Bluetooth-Übertragung ins Stocken geraten.

## Schritt 1: Chipset und App bestimmen

Wird eine Firmwaredatei für einen Airoha-Chip auf ein Huilian-Board geflasht, wird das Gerät sofort unbrauchbar. Wähle in unserem [Katalog nützlicher Apps](/de/useful-apps) das Dienstprogramm passend zu deinem Chip aus:

- **Airoha-Chipsets (1562AE, 1562E, 1571AM)** → Verwende **FlyCC** (Lies unsere [FlyCC-App-Anleitung](/de/articles/flycc-app-guide)).
- **TigerBuilder-Chipsets (1562AE/TB, 1571AM/TB)** → Verwende **FlyCC**. CloudCC ist veraltet, seit TigerBuilder die OTA-Funktion in FlyCC integriert hat. Verwende CloudCC nur als Ausweichlösung, wenn das Speicherberechtigungsproblem auftritt.
- **Huilian-Chipsets (247, 277, 377, 377H3)** → Verwende **StarFun** (Lies unsere [StarFun-App-Anleitung](/de/articles/starfun-app-guide)).
- **Jieli-(Jerry-)Chipsets** → Einfache Jieli-Klone unterstützen keine OTA-Firmware-Updates.

## Schritt 2: Schritt-für-Schritt-Anleitungen zum Update

### Methode A: Update mit FlyCC (Airoha)

1. Verbinde deine AirPods über die standardmäßigen Bluetooth-Einstellungen mit deinem Smartphone.
2. Starte **FlyCC** und überprüfe, ob dein Modell auf dem Startbildschirm angezeigt wird.
3. Tippe auf **Firmware-Update** (oder **OTA-Update**).
4. Tippe auf **Nach Updates suchen**. Wenn eine neue Version erkannt wird, zeigt die App die Buildnummer und das Änderungsprotokoll an.
5. Tippe auf **Update starten**. Das Update erfolgt in zwei Schritten: Zuerst wird die Firmwaredatei auf den linken Ohrhörer übertragen, dann auf den rechten.
6. Sobald der Fortschritt 100 % erreicht, warte auf die Meldung: *„Update erfolgreich“*.
7. Schließe den Deckel des Ladecases und lass es 60 Sekunden unberührt, damit die Mikrocontroller neu starten können.

::: warning Hinweis zur Pro 3 V7 TB-Firmware
Nach einem Firmware-Update mit FlyCC auf den **AirPods Pro 3 V7 TB** verschwinden das iOS-Popup und die Seriennummer. Sie müssen in der FlyCC-App erneut hinzugefügt werden. Die V7 Huilian (StarFun) ist davon nicht betroffen.
:::

### Methode B: CloudCC als Ausweichlösung (TigerBuilder)

TigerBuilder-Geräte werden über FlyCC aktualisiert (Methode A). Verwende CloudCC nur, wenn bei FlyCC das Speicherberechtigungsproblem auftritt:

1. Lege beide Ohrhörer bei geöffnetem Deckel ins Case.
2. Öffne **CloudCC** und tippe auf **Gerät suchen**.
3. Wähle dein TigerBuilder-Gerät aus, sobald es erkannt wurde.
4. Öffne die Registerkarte **Firmware** und tippe auf **Neueste Version abfragen**.
5. Wähle das Cloud-Paket aus und tippe auf **Herunterladen und aktualisieren**.
6. Lass das Smartphone direkt neben dem Ladecase liegen, bis eine Meldung den Abschluss bestätigt.

### Methode C: Update mit StarFun (Huilian)

1. Stelle sicher, dass die Ohrhörer mit deinem Smartphone verbunden und der Deckel geöffnet ist.
2. Öffne **StarFun** und tippe auf das Symbol **Einstellungen / Firmware**.
3. Vergleiche die aktuelle Firmwareversion mit der neuesten Version in der Cloud.
4. Tippe auf **Aktualisieren**. Die App schreibt die Konfigurationsblöcke nacheinander.
5. Vergiss das Gerät nach dem Neustart im Bluetooth-Menü deines Smartphones und führe einen Soft-Reset durch.

## Was tun, wenn ein Update einfriert oder fehlschlägt?

Wenn ein Update bei einem bestimmten Prozentsatz hängen bleibt (z. B. länger als 5 Minuten bei 45 % eingefroren ist):

1. **Schließe den Deckel nicht und nimm die Ohrhörer nicht heraus.**
2. Prüfe, ob die Bluetooth-Verbindung getrennt wurde. Falls die App es zulässt, tippe auf **Erneut versuchen** oder starte die App neu, während die Ohrhörer an ihrem Platz bleiben.
3. Wenn die Ohrhörer überhaupt nicht mehr reagieren, befolge unsere [Anleitung zum Zurücksetzen gefälschter AirPods](/de/articles/how-to-reset-fake-airpods), um einen 15-sekündigen harten Controller-Reset durchzuführen.
4. Öffne die Update-App erneut – in den meisten Fällen ermöglicht der Wiederherstellungs-Bootloader, das Paket erneut ab 0 % zu flashen.

<CommunityCta variant="stuck" />

## Weitere Anleitungen zur Fehlerbehebung

- Verwendest du eine Huilian-Nachbildung? Folge der [StarFun-App-Anleitung](/de/articles/starfun-app-guide).
- Werden die Ohrhörer in der Firmware-App nicht angezeigt? Siehe [Gefälschte AirPods verbinden sich nicht](/de/articles/fake-airpods-wont-connect) oder [So setzt du gefälschte AirPods zurück](/de/articles/how-to-reset-fake-airpods).
- Du brauchst Links zum Herunterladen der Apps? Besuche [Nützliche Apps](/de/useful-apps).
- Du möchtest von einem älteren, nicht aktualisierbaren Klon aufrüsten? Mach das [1-Minuten-Quiz](/de/quiz) oder sieh dir [vertrauenswürdige Händler](/de/links/info) an.

## FAQ

::: details Kann ich die Firmware von AirPods-Nachbildungen auf einem iPhone aktualisieren?
Sowohl **FlyCC** als auch **StarFun** sind im iOS App Store verfügbar und bieten Equalizer, Einstellungen und die Anzeige des Firmware-Status (FlyCC für iOS unterstützt außerdem das Prüfen und Aktualisieren aktueller TigerBuilder-Modelle wie V5.3 TB). Bei älteren Modellen oder wenn eine iOS-App kein OTA-Flashen starten kann, ist ein Android-Smartphone mit der APK aus [Nützliche Apps](/de/useful-apps) die zuverlässigste Ausweichlösung. Nach dem Update bleibt die Firmware dauerhaft auf den Ohrhörern.
:::

::: details Erhalten meine AirPods-Nachbildungen durch ein Update Apples „Wo ist?“-Netzwerk?
Nein. Das „Wo ist?“-Netzwerk basiert auf proprietären kryptografischen Apple-Zertifikaten, die sich nicht per Firmware-Update hinzufügen lassen.
:::

::: details Kann ein Firmware-Update meine gefälschten AirPods unbrauchbar machen?
Ja, wenn das Update durch einen leeren Akku oder vorzeitiges Schließen des Deckels unterbrochen oder eine Firmwaredatei für ein anderes Chipset geflasht wird. Halte dich immer an die obige Sicherheitscheckliste vor dem Update.
:::
