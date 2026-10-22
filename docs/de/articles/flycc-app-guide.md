---
title: 'FlyCC APK-Anleitung: So konfigurierst und optimierst du Airoha-AirPods-Replikate'
description: 'So lädst du FlyCC sicher herunter, installierst und verwendest es – benutzerdefinierte EQ-Abstimmung, Belegung der Touch-Steuerung, Firmware-Updates und Fehlerbehebung bei Verbindungsfehlern.'
category: Deine Replikate verwenden
order: 13
---
# FlyCC APK-Leitfaden: So konfigurierst und optimierst du Airoha-AirPods-Replikate

FlyCC ist die unverzichtbare Begleit-App für AirPods-Replikate mit **Airoha-Chipsätzen** (einschließlich Airoha 1562AE, 1562E, 1562F und 1571AM). Da Apples native iOS-Einstellungen nur grundlegende Steuerungsmöglichkeiten bieten, ermöglicht FlyCC den Zugriff auf die Hardware: individuelle parametrische EQ-Anpassungen, Kalibrierung der Berührungssensoren, Ausbalancierung der aktiven Geräuschunterdrückung (ANC) und das Flashen von OTA-Firmware.

> **Kurzantwort:** FlyCC ist ein kostenloses Android- und macOS-Dienstprogramm eines Drittanbieters, das speziell für AirPods-Replikate auf Airoha-Basis entwickelt wurde. Damit kannst du Klangprofile über einen integrierten Equalizer anpassen, die Empfindlichkeit von Drücken und Tippen verändern und Firmware-Updates per OTA flashen. Replikate mit Huilian-, BES- oder günstigen Jieli-Chips werden nicht erkannt.

::: tip Android oder Mac erforderlich
FlyCC kann aufgrund von Apples Einschränkungen für Hardware von Drittanbietern nicht aus dem Apple iOS App Store installiert werden. Um deine Airoha-Ohrhörer zu konfigurieren, installiere die Android-APK auf einem beliebigen Android-Smartphone oder führe die Community-Version für macOS aus. Auf den Ohrhörern gespeicherte Einstellungen bleiben auch erhalten, wenn du wieder zu einem iPhone wechselst.
:::

## Unterstützte Chipsätze

FlyCC funktioniert ausschließlich mit **Airoha-Hardware**. Wenn deine Ohrhörer eine Verbindung herstellen, hast du bestätigt, dass sich darin echter Airoha-Silizium befindet:

- **Airoha 1562AE / 1571AM** — Vollständige Funktionsunterstützung: ANC-Kalibrierung mit zwei Mikrofonen, individueller EQ, Schalter für räumliches Audio mit Kopfverfolgung und OTA-Updates.
- **Airoha 1562E / 1563E** — Standard-EQ, Berührungssteuerung und Firmware-Tools.
- **Airoha 1562F** — Ältere ANC- und EQ-Steuerung.

Wenn FlyCC auf unbestimmte Zeit scannt und deine Ohrhörer nie erkennt, verwendet dein Paar den Chip eines anderen Herstellers (etwa Huilian, das [Starfun](/de/useful-apps) verwendet, oder TigerBuilder, das [CloudCC](/de/useful-apps) verwendet) oder einen Jieli-Einstiegs-Chip.

## So lädst du FlyCC sicher herunter und installierst es

Da FlyCC mit Bluetooth-Hardware ohne MFi-Zertifizierung kommuniziert, wird die App direkt als APK und nicht über Google Play verteilt.

1. Lade die neueste verifizierte APK direkt aus dem Verzeichnis [Nützliche Apps](/de/useful-apps) herunter.
2. Öffne auf deinem Android-Gerät **Einstellungen → Sicherheit** und aktiviere **„Unbekannte Apps installieren“** für deinen Browser oder Dateimanager.
3. Öffne die heruntergeladene `.apk`-Datei und tippe auf **Installieren**.
4. Erteile die angeforderten Berechtigungen für **Bluetooth / Geräte in der Nähe** und den **Standort**. (Android benötigt Standortberechtigungen, um Bluetooth-Peripheriegeräte mit niedrigem Energieverbrauch zu erkennen; FlyCC verfolgt keine GPS-Daten.)

## Wichtige Funktionen und ihre Verwendung

### 1. Individueller EQ und Audiooptimierung

Einige Chargen von Replikaten haben ab Werk eine übermäßig starke Basswiedergabe. FlyCC enthält einen 10-Band-Equalizer zur Feinabstimmung der Audioausgabe:

- **Bass reduzieren**: Senke die Regler für 31 Hz, 62 Hz und 125 Hz um 2–3 dB ab, um ein klareres, neutraleres Klangbild ähnlich dem der originalen AirPods Pro zu erhalten.
- **Stimmklarheit**: Erhöhe die Bänder bei 1 kHz und 2 kHz um 1,5 dB, damit Podcasts und Stimmen stärker hervortreten.
- **Auf der Hardware speichern**: Tippe nach der Anpassung auf **Auf Ohrhörern speichern**. Die akustische Abstimmung wird direkt in den Airoha-DSP geschrieben. Dadurch bleibt der individuelle EQ aktiv, wenn du wieder eine Verbindung zu deinem iPhone, iPad oder PC herstellst.

### 2. Kalibrierung von Berührungen und Gesten

Wenn deine Ohrhörer beim Justieren im Ohr versehentlich Pausen auslösen, kannst du mit FlyCC die Empfindlichkeit des Kraftsensors von 1 (leichtestes Tippen) bis 5 (fester Druck) anpassen. Außerdem kannst du einfaches, doppeltes und dreifaches Drücken bestimmten Funktionen zuweisen.

### 3. Abstimmung der Geräuschunterdrückung

Im ANC-Menü ermöglicht FlyCC die unabhängige Kalibrierung der nach vorne gerichteten Mikrofone links und rechts. Wenn sich bei einem Ohrhörer der Druck im Ohr höher anfühlt oder die Geräuschunterdrückung schwächer ist, gleicht der Kalibrierungsregler die Phasenumkehr aus.

## Sicheres Aktualisieren der Firmware (OTA)

FlyCC kann aktualisierte Firmware-Binärdateien flashen, um iOS-Verbindungsfehler zu beheben oder die Verbindung zu verbessern. Das Flashen birgt jedoch ein grundsätzliches Risiko, die Ohrhörer unbrauchbar zu machen, falls der Vorgang unterbrochen wird:

1. **Lade beide Ohrhörer und das Ladecase vor dem Start auf über 80 % auf.**
2. Lass das Ladecase geöffnet und beide Ohrhörer darin liegen, und halte es innerhalb von 30 Zentimetern von deinem Smartphone.
3. Tippe in FlyCC auf **Nach Updates suchen**. Wenn ein Update verfügbar ist, lade das Paket herunter.
4. Tippe auf **Update starten**. **Schließe den Deckel des Cases nicht, schalte Bluetooth nicht aus und wechsle nicht zu einer anderen App**, bis der Fortschrittsbalken 100 % erreicht und „Update erfolgreich“ anzeigt.
5. Lass die Ohrhörer nach Abschluss 60 Sekunden lang im geschlossenen Case, bevor du sie erneut koppelst.

Eine umfassende Anleitung zum sicheren Flashen aller Replikat-Chipsätze findest du unter [So aktualisierst du die Firmware gefälschter AirPods](/de/articles/how-to-update-fake-airpods-firmware).

## Fehlerbehebung bei FlyCC-Verbindungsproblemen

Wenn FlyCC deine Ohrhörer nicht erkennt:

- **Überprüfe die aktive Audioverbindung deines Smartphones**: Stelle sicher, dass die Ohrhörer bereits in den nativen Bluetooth-Einstellungen von Android gekoppelt sind, bevor du FlyCC öffnest.
- **Erteile die Berechtigung für Geräte in der Nähe**: Unter Android 12 und neuer kann FlyCC Bluetooth-LE-Geräte nicht erkennen, wenn die Berechtigung **„Geräte in der Nähe“** nicht aktiviert ist.
- **Identifiziere deinen Chip**: Wenn deine Ohrhörer keine Verbindung zu FlyCC herstellen, versuche, mit **CloudCC** oder **Starfun** zu scannen. Wenn keine App eine Verbindung herstellt, lies [So erkennst du gefälschte AirPods](/de/articles/how-to-spot-fake-airpods), um nach einem günstigen Jieli-Klon zu suchen.
- **Lösche den Kopplungscache**: Wenn die Verbindungen abbrechen, führe mithilfe unseres [Reset-Leitfadens](/de/articles/how-to-reset-fake-airpods) einen Controller-Reset durch.

## Verwandte Anleitungen

- Verwendest du Replikate täglich mit Android? Siehe [AirPods-Replikate unter Android](/de/articles/airpods-replicas-on-android).
- Benötigst du Dienstprogramme für andere Chips? Sieh dir den vollständigen [Katalog nützlicher Apps](/de/useful-apps) an.
- Stellen die Ohrhörer keine Verbindung her? Folge der Anleitung [Gefälschte AirPods stellen keine Verbindung her](/de/articles/fake-airpods-wont-connect).
- Suchst du verifizierte Airoha-Modelle? Durchsuche das [Verzeichnis vertrauenswürdiger Verkäufer](/de/links/info).

## Häufig gestellte Fragen

::: details Ist die Installation von FlyCC auf meinem Smartphone sicher?
Ja. Die im Community-Verzeichnis für nützliche Apps gehosteten APKs stammen aus offiziellen Lieferketten der Hersteller und wurden auf Schadsoftware geprüft. Die App benötigt nur Bluetooth-Zugriff, um mit dem Airoha-Audioprozessor zu kommunizieren.
:::

::: details Kann ich FlyCC auf einem iPhone verwenden?
Nein. Apple erlaubt Apps von Drittanbietern nicht, auf serielle Bluetooth-Profile für Hardware ohne MFi-Zertifizierung zuzugreifen. Du musst ein Android-Smartphone oder einen Mac verwenden, um die FlyCC-Einstellungen zu ändern. Alle EQ- und Steuerungsänderungen werden jedoch dauerhaft im internen Speicher der Ohrhörer abgelegt und automatisch auf dein iPhone übertragen.
:::

::: details Warum zeigt FlyCC „Gerät nicht gefunden“ an?
Der häufigste Grund ist eine nicht passende Hardware: FlyCC funktioniert nur mit Airoha-Chips. Wenn du ein Huilian-Modell besitzt, verwende Starfun; bei einem TigerBuilder-Modell verwendest du CloudCC. Wenn keine dieser Apps eine Verbindung herstellt, hast du wahrscheinlich ein günstiges Jieli-Modell.
:::
