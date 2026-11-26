---
title: 'FlyCC App Guide: Airoha-AirPods-Replikate abstimmen'
description: 'So lädst du FlyCC sicher herunter, installierst und verwendest es — individuelle EQ-Einstellungen, Touch-Steuerung zuweisen, Firmware-Updates und Verbindungsprobleme beheben.'
category: Deine Replikate verwenden
order: 13
---
# FlyCC-APK-Anleitung: Airoha-AirPods-Repliken konfigurieren und optimieren

FlyCC ist die unverzichtbare Begleit-App für AirPods-Repliken mit **Airoha-Chipsätzen** (darunter Airoha 1562AE, 1562E, 1562F und 1571AM). Da Apples native iOS-Einstellungen nur grundlegende Optionen bieten, ermöglicht FlyCC den direkten Zugriff auf den Chip: individuelle parametrische EQ-Einstellungen, Kalibrierung der Berührungssensoren, Anpassung der aktiven Geräuschunterdrückung (ANC) und das Flashen von OTA-Firmware.

> **Kurzantwort:** FlyCC ist ein kostenloses Drittanbieter-Dienstprogramm für Android, iOS und macOS, das speziell für AirPods-Repliken mit Airoha-Chips entwickelt wurde. Damit kannst du Klangprofile über einen integrierten Equalizer anpassen, die Empfindlichkeit für Drücken und Tippen ändern und Firmware-Updates drahtlos installieren. Repliken mit Huilian-, BES- oder günstigen Jieli-Chips werden nicht erkannt.

::: tip Android, iPhone oder Mac
FlyCC ist als Android-APK und im iOS App Store erhältlich; beides ist unter [Nützliche Apps](/de/useful-apps#tigerbuilder) verlinkt. Du kannst auch die Community-Version für macOS verwenden. Auf den Ohrhörern gespeicherte Einstellungen bleiben erhalten, auch wenn du zu einem anderen Smartphone wechselst.
:::

<CommunityCta variant="apps" />

## Unterstützte Chipsätze

FlyCC funktioniert ausschließlich mit **Airoha-/TigerBuilder-Hardware**. Wenn deine Ohrhörer eine Verbindung herstellen, ist damit bestätigt, dass echte Airoha-Chips verbaut sind:

| Airoha-Chipsatz | Beispiele für Repliken | FlyCC-Unterstützung |
| :--- | :--- | :--- |
| **Airoha 1571AM** | Pro 3 V7 TB, Pro 2 V5.3 TB, AirPods 4 V3 TB | Vollständiger EQ, ANC, Touch-Steuerung, Head-Tracking, OTA |
| **Airoha 1562AE** | Pro 2 V5.2 TB, AirPods Max V3 TB, Pro 1 V4.9 | Vollständiger EQ, ANC, Touch-Steuerung, Head-Tracking, OTA |
| **Airoha 1563E / 1562E** | Pro 3 V6 TB, AirPods 4 V2 TB, AirPods 2 V3E | Standard-EQ, Touch-Steuerung, Firmware-Tools |
| **Airoha 1561M / 1562F** | AirPods Max V3P / V2 Metal, ältere Modelle | EQ und grundlegende Firmware-Tools |

Wenn FlyCC endlos scannt und deine Ohrhörer nie erkennt, verwenden sie Chips eines anderen Herstellers (zum Beispiel Huilian, das [StarFun](/de/articles/starfun-app-guide) verwendet) oder einen Jieli-Einsteigerchip.

## FlyCC sicher herunterladen und installieren

Da FlyCC mit Bluetooth-Hardware ohne MFi-Zertifizierung kommuniziert, wird die App direkt als APK und nicht über Google Play vertrieben.

1. Lade die neueste verifizierte APK direkt aus dem Verzeichnis [Nützliche Apps](/de/useful-apps) herunter.
2. Öffne auf deinem Android-Gerät **Einstellungen → Sicherheit** und aktiviere **„Unbekannte Apps installieren“** für deinen Browser oder Dateimanager.
3. Öffne die heruntergeladene `.apk`-Datei und tippe auf **Installieren**.
4. Erteile die angeforderten Berechtigungen für **Bluetooth / Geräte in der Nähe** und **Standort**. (Android benötigt Standortberechtigungen, um Bluetooth-Low-Energy-Geräte in der Nähe zu suchen; FlyCC erfasst keine GPS-Daten.)

## Wichtigste Funktionen und ihre Verwendung

### 1. Benutzerdefinierter EQ und Klangoptimierung

Einige Chargen von Repliken haben ab Werk übermäßig starke Bässe. FlyCC verfügt über einen 10-Band-Equalizer, mit dem du die Audioausgabe optimieren kannst:

- **Bass reduzieren**: Verringere die Regler für 31 Hz, 62 Hz und 125 Hz um 2–3 dB, um einen klareren, neutraleren Klang wie bei originalen AirPods Pro zu erzielen.
- **Stimmen klarer hervorheben**: Erhöhe die Frequenzbänder bei 1 kHz und 2 kHz um 1,5 dB, damit Podcasts und Stimmen deutlicher hervortreten.
- **Auf der Hardware speichern**: Tippe nach dem Einstellen auf **Auf Ohrhörern speichern**. Die Klangeinstellungen werden direkt in den Airoha-DSP geschrieben. Dadurch bleibt der benutzerdefinierte EQ aktiv, wenn du die Ohrhörer wieder mit deinem iPhone, iPad oder PC verbindest.

### 2. Touch- und Gesten-Kalibrierung

Wenn deine Ohrhörer versehentlich die Wiedergabe pausieren, sobald du sie im Ohr zurechtrückst, kannst du mit FlyCC die Empfindlichkeit des Kraftsensors von 1 (leichteste Berührung) bis 5 (festes Drücken) anpassen. Außerdem kannst du einfaches, doppeltes und dreifaches Drücken bestimmten Funktionen zuweisen.

### 3. Geräuschunterdrückung einstellen

Im ANC-Menü kannst du die Feedforward-Mikrofone links und rechts unabhängig voneinander kalibrieren. Wenn sich bei einem Ohrhörer der Kabinendruck höher anfühlt oder die Geräuschunterdrückung schwächer ist, sorgt der Kalibrierungsregler für einen Ausgleich der Phasenumkehr.

## Firmware sicher aktualisieren (OTA)

Mit FlyCC kannst du aktualisierte Firmware-Dateien installieren, um iOS-Verbindungsprobleme zu beheben oder die Konnektivität zu verbessern. Ein unterbrochener Flash-Vorgang kann jedoch dazu führen, dass das Gerät unbrauchbar wird:

1. **Lade beide Ohrhörer und das Case vor dem Start auf über 80 % auf.**
2. Lass das Ladecase geöffnet und beide Ohrhörer darin liegen; halte das Case höchstens 30 Zentimeter von deinem Smartphone entfernt.
3. Tippe in FlyCC auf **Nach Updates suchen**. Wenn ein Update verfügbar ist, lade das Paket herunter.
4. Tippe auf **Update starten**. **Schließe den Deckel des Cases nicht, schalte Bluetooth nicht aus und wechsle nicht zu anderen Apps**, bis der Fortschrittsbalken 100 % erreicht und „Update erfolgreich“ angezeigt wird.
5. Lass die Ohrhörer nach Abschluss 60 Sekunden im geschlossenen Case, bevor du sie erneut koppelst.

::: warning Hinweis zu Pro 3 V7 TB
Bei den **AirPods Pro 3 V7 TB** verschwinden nach einem Firmware-Update in FlyCC das iOS-Popup und die Seriennummer und müssen in der FlyCC-App erneut hinzugefügt werden. Die V7-Version von Huilian (StarFun) ist davon nicht betroffen.
:::

Eine ausführliche Anleitung zum sicheren Flashen aller Replik-Chipsätze findest du unter [So aktualisierst du die Firmware gefälschter AirPods](/de/articles/how-to-update-fake-airpods-firmware).

## Probleme mit der FlyCC-Verbindung beheben

Wenn FlyCC deine Ohrhörer nicht findet:

- **Aktive Audioverbindung des Smartphones prüfen**: Stelle sicher, dass die Ohrhörer bereits in den nativen Bluetooth-Einstellungen von Android gekoppelt sind, bevor du FlyCC öffnest.
- **Berechtigung für Geräte in der Nähe erteilen**: Unter Android 12 und neuer kann FlyCC Bluetooth-LE-Geräte nur erkennen, wenn die Berechtigung „Geräte in der Nähe“ aktiviert ist.
- **Chip identifizieren**: Wenn FlyCC keine Verbindung zu deinen Ohrhörern herstellen kann, suche mit **[StarFun](/de/articles/starfun-app-guide)** nach Huilian-Chips oder mit **CloudCC** (nur als Umgehungslösung bei älteren TB-Modellen mit Speicherberechtigungsproblemen). Wenn keine App eine Verbindung herstellt, lies [Gefälschte AirPods erkennen](/de/articles/how-to-spot-fake-airpods), um zu prüfen, ob du eine günstige Jieli-Kopie hast.
- **Kopplungscache löschen**: Wenn Verbindungen abbrechen, setze den Controller mithilfe unserer [Reset-Anleitung](/de/articles/how-to-reset-fake-airpods) zurück.

<CommunityCta variant="stuck" />

## Weitere Anleitungen

- Du hast eine Huilian-Replik? Lies unsere [Anleitung zur StarFun-App](/de/articles/starfun-app-guide).
- Verwendest du Repliken täglich mit Android? Siehe [AirPods-Repliken mit Android](/de/articles/airpods-replicas-on-android).
- Suchst du weitere Tools für Chipsätze? Sieh dir den vollständigen [Katalog nützlicher Apps](/de/useful-apps) an.
- Suchst du ein geprüftes Airoha-Modell? Mach das [1-Minuten-Quiz](/de/quiz) oder stöbere im [Verzeichnis vertrauenswürdiger Verkäufer](/de/links/info).

## Häufig gestellte Fragen

::: details Ist es sicher, FlyCC auf meinem Smartphone zu installieren?
Ja. Die APKs im Community-Verzeichnis „Nützliche Apps“ stammen aus offiziellen Lieferketten der Hersteller und wurden auf Schadsoftware geprüft. Die App benötigt lediglich Bluetooth-Zugriff, um mit dem Airoha-Audioprozessor zu kommunizieren.
:::

::: details Kann ich FlyCC auf einem iPhone verwenden?
Ja. FlyCC ist im iOS App Store und als Android-APK erhältlich; beides ist unter [Nützliche Apps](/de/useful-apps#tigerbuilder) verlinkt. Alle Änderungen an EQ und Steuerung werden dauerhaft im internen Speicher der Ohrhörer abgelegt und bleiben erhalten, wenn du das Gerät wechselst.
:::

::: details Warum meldet FlyCC „Gerät nicht gefunden“?
Am häufigsten liegt das an einem nicht passenden Chipsatz: FlyCC funktioniert nur mit Airoha-Chips. Wenn du ein Huilian-Modell hast, verwende StarFun. TigerBuilder-Modelle verwenden FlyCC; CloudCC ist nur eine Umgehungslösung, wenn FlyCC auf ein Speicherberechtigungsproblem stößt. Wenn keine der Apps eine Verbindung herstellt, hast du wahrscheinlich ein günstiges Modell mit Jieli-Chip.
:::
