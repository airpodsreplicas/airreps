---
title: 'FlyCC-APK-Anleitung: Airoha-AirPods-Nachbauten konfigurieren und abstimmen'
description: 'So lädst du FlyCC sicher herunter, installierst und verwendest es – mit benutzerdefinierter EQ-Abstimmung, Touch-Steuerungsbelegung, Firmware-Updates und Tipps zur Behebung von Verbindungsproblemen.'
category: Deine Nachbauten verwenden
order: 13
---
# FlyCC-APK-Leitfaden: So konfigurierst und optimierst du Airoha-AirPods-Replikate

FlyCC ist die unverzichtbare Begleit-App für AirPods-Replikate mit **Airoha-Chipsätzen** (darunter Airoha 1562AE, 1562E, 1562F und 1571AM). Da Apples native iOS-Einstellungen nur oberflächliche Steuerelemente bieten, ermöglicht FlyCC den Zugriff auf niedrigerer Ebene: individuelle parametrische EQ-Einstellungen, Kalibrierung der Berührungssensoren, Anpassung der aktiven Geräuschunterdrückung (ANC) und OTA-Firmware-Updates.

> **Kurzantwort:** FlyCC ist ein kostenloses Dienstprogramm von Drittanbietern für Android, iOS und macOS, das speziell für AirPods-Replikate mit Airoha-Chips entwickelt wurde. Damit kannst du Klangprofile über einen integrierten Equalizer anpassen, die Empfindlichkeit für Drücken und Tippen ändern und Firmware-Updates über Funk einspielen. Replikate mit Huilian-, BES- oder preisgünstigen Jieli-Chips werden nicht erkannt.

::: tip Android, iPhone oder Mac
FlyCC ist als Android-APK und im iOS App Store verfügbar; beide Versionen sind unter [Nützliche Apps](/de/useful-apps#tigerbuilder) verlinkt. Du kannst auch die macOS-Version der Community verwenden. Die in den Ohrhörern gespeicherten Einstellungen bleiben erhalten, auch wenn du zu einem anderen Smartphone wechselst.
:::

## Unterstützte Chipsätze

FlyCC funktioniert ausschließlich mit **Airoha-Hardware**. Wenn deine Ohrhörer eine Verbindung herstellen, hast du bestätigt, dass sie mit echtem Airoha-Silizium ausgestattet sind:

- **Airoha 1562AE / 1571AM** — Volle Unterstützung aller Funktionen: ANC-Kalibrierung mit zwei Mikrofonen, benutzerdefinierter EQ, Schalter für räumliches Audio mit Kopfbewegungsverfolgung und OTA-Updates.
- **Airoha 1562E / 1563E** — Standard-EQ, Touch-Steuerung und Firmware-Tools.
- **Airoha 1562F** — Ältere ANC- und EQ-Steuerungen.

Wenn FlyCC endlos sucht und deine Ohrhörer nie findet, verwenden sie Silizium eines anderen Herstellers (zum Beispiel Huilian, das [Starfun](/de/useful-apps) verwendet) oder einen Einsteiger-Chip von Jieli.

## FlyCC sicher herunterladen und installieren

Da FlyCC mit Bluetooth-Hardware ohne MFi-Zertifizierung kommuniziert, wird die App direkt als APK und nicht über Google Play verbreitet.

1. Lade die neueste verifizierte APK direkt aus dem [Verzeichnis „Nützliche Apps“](/de/useful-apps) herunter.
2. Öffne auf deinem Android-Gerät **Einstellungen → Sicherheit** und aktiviere für deinen Browser oder Dateimanager die Option **„Unbekannte Apps installieren“**.
3. Öffne die heruntergeladene `.apk`-Datei und tippe auf **Installieren**.
4. Erteile die angeforderten Berechtigungen für **Bluetooth / Geräte in der Nähe** und **Standort**. (Android benötigt Standortberechtigungen, um Bluetooth-LE-Geräte in der Nähe zu suchen; FlyCC erfasst keine GPS-Daten.)

## Wichtigste Funktionen und ihre Verwendung

### 1. Benutzerdefinierter EQ und Klangoptimierung

Einige Replikat-Chargen haben ab Werk übermäßig starke Bässe. FlyCC enthält einen 10-Band-Equalizer, mit dem sich die Klangwiedergabe verfeinern lässt:

- **Bass absenken**: Verringere die Regler für 31 Hz, 62 Hz und 125 Hz um 2–3 dB, um einen klareren, neutraleren Klang zu erzielen, der dem Klang der originalen AirPods Pro entspricht.
- **Stimmen klarer machen**: Hebe die Bänder bei 1 kHz und 2 kHz um 1,5 dB an, damit Podcasts und Stimmen besser hervortreten.
- **Auf der Hardware speichern**: Tippe nach der Anpassung auf **Auf Ohrhörern speichern**. Die Klangeinstellungen werden direkt auf den Airoha-DSP geschrieben. Der benutzerdefinierte EQ bleibt dadurch aktiv, wenn du die Ohrhörer wieder mit deinem iPhone, iPad oder PC verbindest.

### 2. Touch- und Gestensteuerung kalibrieren

Wenn deine Ohrhörer beim Anpassen im Ohr versehentlich pausieren, kannst du mit FlyCC die Empfindlichkeit des Kraftsensors von 1 (leichteste Berührung) bis 5 (festes Drücken) anpassen. Außerdem kannst du einzelnen, doppelten und dreifachen Tastendrücken bestimmte Funktionen zuweisen.

### 3. Geräuschunterdrückung anpassen

Im ANC-Menü kannst du mit FlyCC die linken und rechten Feedforward-Mikrofone unabhängig voneinander kalibrieren. Wenn sich bei einem Ohrhörer der Druck im Gehörgang höher anfühlt oder die Geräuschunterdrückung schwächer ist, kann der Kalibrierungsregler die Phasenumkehr neu ausbalancieren.

## Firmware sicher aktualisieren (OTA)

Mit FlyCC lassen sich aktualisierte Firmware-Dateien einspielen, um Fehler beim iOS-Verbindungsaufbau zu beheben oder die Konnektivität zu verbessern. Das Einspielen birgt jedoch das Risiko, das Gerät unbrauchbar zu machen, falls der Vorgang unterbrochen wird:

1. **Lade beide Ohrhörer und das Case vor Beginn auf über 80 % auf.**
2. Lass das Ladecase offen und beide Ohrhörer darin. Halte es höchstens 30 Zentimeter von deinem Smartphone entfernt.
3. Tippe in FlyCC auf **Nach Updates suchen**. Wenn ein Update verfügbar ist, lade das Paket herunter.
4. Tippe auf **Update starten**. **Schließe das Case nicht, schalte Bluetooth nicht aus und wechsle nicht zu einer anderen App**, bis der Fortschrittsbalken 100 % erreicht und „Update erfolgreich“ angezeigt wird.
5. Lass die Ohrhörer nach Abschluss 60 Sekunden lang im geschlossenen Case, bevor du sie erneut koppelst.

Eine ausführliche Anleitung zum sicheren Einspielen von Firmware für alle Replikat-Chipsätze findest du unter [So aktualisierst du die Firmware gefälschter AirPods](/de/articles/how-to-update-fake-airpods-firmware).

## Probleme mit der FlyCC-Verbindung beheben

Wenn FlyCC deine Ohrhörer nicht findet:

- **Prüfe die aktive Audioverbindung deines Smartphones**: Stelle sicher, dass die Ohrhörer bereits in den nativen Bluetooth-Einstellungen von Android gekoppelt sind, bevor du FlyCC öffnest.
- **Erteile die Berechtigung für Geräte in der Nähe**: Unter Android 12 und neuer kann FlyCC Bluetooth-LE-Geräte nur erkennen, wenn die Berechtigung „Geräte in der Nähe“ aktiviert ist.
- **Finde heraus, welchen Chip du hast**: Wenn deine Ohrhörer keine Verbindung zu FlyCC herstellen, versuche es mit **CloudCC** oder **Starfun**. Wenn keine App eine Verbindung herstellt, lies [So erkennst du gefälschte AirPods](/de/articles/how-to-spot-fake-airpods), um zu prüfen, ob du ein preisgünstiges Jieli-Imitat hast.
- **Kopplungscache löschen**: Wenn die Verbindung abbricht, setze den Controller mithilfe unserer [Anleitung zum Zurücksetzen](/de/articles/how-to-reset-fake-airpods) zurück.

## Verwandte Anleitungen

- Du verwendest Replikate täglich mit Android? Lies [AirPods-Replikate unter Android](/de/articles/airpods-replicas-on-android).
- Du benötigst andere Tools für Chipsätze? Sieh dir den vollständigen [Katalog nützlicher Apps](/de/useful-apps) an.
- Stellen die Ohrhörer keine Verbindung her? Folge der Anleitung [Gefälschte AirPods stellen keine Verbindung her](/de/articles/fake-airpods-wont-connect).
- Du suchst verifizierte Airoha-Modelle? Stöbere im [Verzeichnis vertrauenswürdiger Verkäufer](/de/links/info).

## Häufig gestellte Fragen

::: details Ist es sicher, FlyCC auf meinem Smartphone zu installieren?
Ja. Die im Community-Verzeichnis „Nützliche Apps“ bereitgestellten APKs stammen aus offiziellen Lieferketten der Hersteller und wurden auf Schadsoftware geprüft. Die App benötigt lediglich Bluetooth-Zugriff, um mit dem Airoha-Audioprozessor zu kommunizieren.
:::

::: details Kann ich FlyCC auf einem iPhone verwenden?
Ja. FlyCC ist sowohl im iOS App Store als auch als Android-APK verfügbar; beide Versionen sind unter [Nützliche Apps](/de/useful-apps#tigerbuilder) verlinkt. Alle EQ- und Steuerungsänderungen werden dauerhaft im internen Speicher der Ohrhörer gespeichert und bleiben daher erhalten, wenn du das Gerät wechselst.
:::

::: details Warum zeigt FlyCC „Gerät nicht gefunden“ an?
Am häufigsten liegt es an inkompatiblem Silizium: FlyCC funktioniert nur mit Airoha-Chips. Wenn du ein Huilian-Modell hast, verwende Starfun. TigerBuilder-Modelle funktionieren mit FlyCC; CloudCC ist nur eine Ausweichlösung, falls FlyCC auf ein Problem mit der Speicherberechtigung stößt. Wenn keine Verbindung hergestellt werden kann, hast du wahrscheinlich ein preisgünstiges Jieli-Modell.
:::
