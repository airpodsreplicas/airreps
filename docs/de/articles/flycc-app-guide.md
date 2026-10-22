---
title: 'FlyCC APK-Anleitung: So konfigurierst und optimierst du Airoha-AirPods-Replikate'
description: "FlyCC für TigerBuilder-AirPods-Repliken: Android- und iPhone-Downloads, modellabhängiger EQ, Updates, Berechtigungen und Verbindungsprobleme."
category: Deine Replikate verwenden
order: 13
---
# FlyCC APK-Leitfaden: So konfigurierst und optimierst du Airoha-AirPods-Replikate

FlyCC ist die Begleit-App, die unser [Katalog nützlicher Apps](/de/useful-apps#tigerbuilder) für **TigerBuilder**-Replikate aufführt. TigerBuilder ist ein Hersteller von Replikaten, keine Chipmarke: Seine Modelle basieren auf **Airoha**-Chipsätzen wie dem 1562AE, 1563E und 1571AM. Je nach Modell und Firmware kann FlyCC den EQ anpassen, modellspezifische Einstellungen anzeigen und Firmware-Updates installieren, die der Hersteller veröffentlicht hat.

> **Kurzantwort:** FlyCC ist eine kostenlose Drittanbieter-App für TigerBuilder-AirPods-Replikate (auf Airoha-Basis). Sie ist als Android-APK und als iPhone-App im App Store erhältlich; beides ist unter [Nützliche Apps](/de/useful-apps#tigerbuilder) verlinkt. Was sie kann, hängt von deinem genauen Modell, der Firmware und der App-Version ab: meist den EQ und Firmware-Updates für ausgewählte Modelle. Huilian-, HR-, BES- und KKX-Modelle verwenden die anderen Apps im Katalog.

::: tip Android- und iPhone-Version
FlyCC gibt es als Android-APK und als iPhone-Version im App Store. Dass die App auf deinem Smartphone läuft, heißt nicht, dass sie dein Paar unterstützt: Welche Menüs und Updates sie anzeigt, hängt vom erkannten Modell, dessen Firmware und der App-Version ab. In unserem Katalog gibt es keine eigene Mac-Version. Der App Store erlaubt die iPhone-App auf Macs mit Apple-Chip, weist aber darauf hin, dass sie nicht für macOS verifiziert ist. Deshalb behandelt dieser Leitfaden die Nutzung auf dem Mac nicht.
:::

## Welche Replikate verwenden FlyCC?

Geh vom Verkäufer und der Version aus, die du gekauft hast, nicht nur vom Chipnamen. Die [Versionsseiten](/de/version-info/general) führen FlyCC für TigerBuilder-Modelle wie die AirPods Pro 3 V7 TB, AirPods 4 V3 TB, AirPods Pro 2 V5.3 TB und AirPods Max V3. Sieh dir die Seite zu deiner Version an, bevor du etwas installierst.

Ein Airoha-Chip allein entscheidet nicht über die App. HR-Modelle nutzen ebenfalls Airoha-Chips, sind aber mit BullSuper und G&Link aufgeführt, Huilian-Modelle verwenden StarFun, und einige ältere Airoha-Versionen haben gar keine App-Unterstützung. Welche App eine Verbindung herstellt, ist ein nützlicher Hinweis, aber ein fehlgeschlagener FlyCC-Scan beweist nicht, dass dein Paar einen anderen Chip hat oder nicht das bestellte Modell ist. Berechtigungen, die App-Version und die Modellunterstützung spielen alle eine Rolle (siehe Fehlerbehebung unten).

## So lädst du FlyCC sicher herunter und installierst es

Verwende die Links unter [Nützliche Apps](/de/useful-apps#tigerbuilder) statt erneut hochgeladener Dateien von anderen Websites.

**iPhone:** Installiere FlyCC aus dem App Store und erlaube den Bluetooth-Zugriff, wenn iOS danach fragt. Die App setzt iOS 13 oder neuer voraus (Version 2.0.16, Stand: 22. Oktober 2026).

**Android:** Die Android-Version ist ein APK-Download, keine App aus Google Play.

1. Lade die APK unter [Nützliche Apps](/de/useful-apps#tigerbuilder) herunter.
2. Wenn Android danach fragt, erlaube **Unbekannte Apps installieren** für den Browser oder Dateimanager, mit dem du die Datei öffnest. Du kannst diese Berechtigung danach wieder deaktivieren.
3. Öffne die `.apk`-Datei und tippe auf **Installieren**.
4. Erteile die Bluetooth-Berechtigung, die die App anfordert. Unter Android 12 und neuer erscheint sie als **Geräte in der Nähe**. Unter älteren Android-Versionen oder bei älteren Apps kann der Bluetooth-Scan stattdessen die Berechtigung **Standort** erfordern ([Android-Entwicklerdokumentation](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

FlyCC ist Software eines Drittanbieters, und AirReps hat sie keiner Sicherheitsprüfung unterzogen. Zugriff auf Bluetooth oder Geräte in der Nähe ist für eine Ohrhörer-App zu erwarten; sei vorsichtig bei Anfragen, die nichts mit den Ohrhörern zu tun haben. Die Android-Dokumentation erklärt, warum das System diese Berechtigungen abfragt, nicht, was eine bestimmte App damit macht. Auf dem iPhone sind die Datenschutzangaben im App Store eine Selbstauskunft des Entwicklers, und Apple weist darauf hin, dass sie nicht von Apple überprüft wurden ([App-Store-Seite](https://apps.apple.com/us/app/flycc/id1661245709)).

## Was FlyCC kann

Welche Menüs FlyCC anzeigt, hängt vom erkannten Modell ab, daher können zwei Paare in der App ganz unterschiedlich aussehen. Die Versionshinweise der iPhone-Version nennen Korrekturen für fehlende Menüs (Versionen 2.0.12 und 2.0.14). Ein fehlendes Menü kann also an der App-Version oder der Kompatibilität liegen und ist kein Zeichen für einen anderen Chip.

### EQ und Klang

Der EQ ist der Hauptgrund, warum der Guide Besitzer von TigerBuilder-Modellen zu FlyCC schickt (siehe [Klangqualität](/de/introduction/sound-quality)). Nimm kleine Änderungen vor und hör genau hin. Senke zum Beispiel den Bass etwas ab, wenn deine Charge dröhnend klingt. Community-Mitglieder teilen EQ-Presets im [AirReps-Discord](https://airreps.link/discord). Prüfe nach einem Wechsel zu einem anderen Smartphone, ob dein EQ noch aktiv ist, denn das kann je nach Modell variieren.

### Steuerung

Tipp- und Drucksteuerungen von Replikaten werden normalerweise in den Bluetooth-Einstellungen des iPhones geändert, wie bei echten AirPods (siehe [Funktionsübersicht](/de/introduction/features)). Wenn FlyCC für dein Modell Steuerungseinstellungen anzeigt, kannst du sie dort nutzen, aber nicht jedes Modell bietet sie.

### Firmware-Updates (OTA)

Laut der App-Store-Beschreibung von FlyCC werden Firmware-Upgrades für ausgewählte Produkte angeboten, und die Versionen 1.1.1 und 1.1.2 (2024) haben OTA-Unterstützung für Airohas AB157x-Plattform hinzugefügt. Wenn FlyCC ein Update für dein Modell anbietet:

1. Prüfe, ob du es brauchst: eine Lösung für ein Problem, das du tatsächlich hast, oder ein Hinweis deines Verkäufers bzw. auf deiner [Versionsseite](/de/version-info/general). Wenn dein Paar gut funktioniert, kannst du die Firmware ruhig so lassen.
2. Lies die Update-Anweisungen, die FlyCC für dein Modell anzeigt, und befolge sie.
3. Halte Ohrhörer und Case geladen, das Smartphone in der Nähe und die App geöffnet, und unterbrich das Update nicht, bis die App den Abschluss bestätigt.

Wenn ein Update fehlschlägt, wende dich an deinen Verkäufer oder frag im Discord nach, statt Firmware aus einer anderen App auszuprobieren. Den vollständigen Ablauf findest du unter [Firmware gefälschter AirPods aktualisieren](/de/articles/how-to-update-fake-airpods-firmware).

## Fehlerbehebung bei FlyCC-Verbindungsproblemen

Wenn FlyCC deine Ohrhörer nicht findet:

- **Zuerst verbinden**: Kopple die Ohrhörer in den Bluetooth-Einstellungen deines Smartphones und öffne danach FlyCC.
- **Berechtigungen prüfen**: Unter Android 12 und neuer benötigt FlyCC die Berechtigung **Geräte in der Nähe**; unter älteren Android-Versionen kann **Standort** nötig sein. Auf dem iPhone prüfst du **Einstellungen → Datenschutz & Sicherheit → Bluetooth**.
- **App aktualisieren**: FlyCC 2.0.16 für das iPhone nennt eine Korrektur für einige Nutzer, die keine Verbindung herstellen konnten.
- **Prüfen, ob die App zu deinem Modell passt**: Sieh auf der Seite deiner Version nach. Wenn das Modell deines Verkäufers von einem anderen Hersteller stammt, verwende die dafür unter [Nützliche Apps](/de/useful-apps) aufgeführte App. CloudCC ist für TigerBuilder-Modelle veraltet und nur als Workaround für das dort beschriebene Problem mit der Speicherberechtigung gedacht.
- **Einen fehlgeschlagenen Scan nicht als Beweis werten**: Wenn nach diesen Schritten keine der aufgeführten Apps eine Verbindung herstellt, frag im [Discord](https://airreps.link/discord) nach und nenne Verkäufer und Modell. Sehr günstige Jieli-Klone funktionieren mit keiner der Apps. Wenn du unsicher bist, was du erhalten hast, lies [So erkennst du gefälschte AirPods](/de/articles/how-to-spot-fake-airpods).
- **Kopplungscache löschen**: Wenn die Verbindung abbricht, setze die Kopplung mit unserem [Reset-Leitfaden](/de/articles/how-to-reset-fake-airpods) zurück.

## Verwandte Anleitungen

- Verwendest du Replikate täglich mit Android? Siehe [AirPods-Replikate unter Android](/de/articles/airpods-replicas-on-android).
- Benötigst du Dienstprogramme für andere Chips? Sieh dir den vollständigen [Katalog nützlicher Apps](/de/useful-apps) an.
- Stellen die Ohrhörer keine Verbindung her? Folge der Anleitung [Gefälschte AirPods stellen keine Verbindung her](/de/articles/fake-airpods-wont-connect).
- Suchst du verifizierte Airoha-Modelle? Durchsuche das [Verzeichnis vertrauenswürdiger Verkäufer](/de/links/info).

## Häufig gestellte Fragen

::: details Ist die Installation von FlyCC auf meinem Smartphone sicher?
FlyCC ist Software eines Drittanbieters, die AirReps keiner Sicherheitsprüfung unterzogen hat. Sei also normal vorsichtig: Lade die App über den Link unter Nützliche Apps oder aus dem App Store herunter, prüfe, ob sich ihre Berechtigungsanfragen auf Bluetooth beziehen, und lehne alles ab, was nichts damit zu tun hat. Die Datenschutzangaben im App Store sind eine Selbstauskunft des Entwicklers, keine Prüfung durch Apple.
:::

::: details Kann ich FlyCC auf einem iPhone verwenden?
Ja. FlyCC ist im App Store für das iPhone erhältlich (iOS 13 oder neuer; Version 2.0.16, Stand: 22. Oktober 2026), und Apples [Core Bluetooth](https://developer.apple.com/bluetooth/)-Framework ermöglicht iPhone-Apps die Kommunikation mit Bluetooth-Low-Energy-Zubehör. Was FlyCC auf dem iPhone kann, hängt von deinem Modell, dessen Firmware und der App-Version ab, und Firmware-Updates werden für ausgewählte Produkte angeboten, nicht für jedes Paar. Android bleibt über die APK unter Nützliche Apps eine Option.
:::

::: details Warum findet FlyCC meine Ohrhörer nicht?
Die häufigsten Ursachen sind eine fehlende Berechtigung für Bluetooth oder Geräte in der Nähe, eine veraltete App-Version, Ohrhörer, die noch nicht mit dem Smartphone verbunden sind, oder ein Modell, das FlyCC nicht unterstützt. FlyCC ist für TigerBuilder-Modelle aufgeführt; Huilian-Modelle verwenden StarFun und HR-Modelle BullSuper oder G&Link. Ein fehlgeschlagener Scan beweist nicht, welcher Chip verbaut ist. Prüfe daher das Modell deines Verkäufers auf den Versionsseiten und frag im Discord nach, wenn keine der aufgeführten Apps eine Verbindung herstellt.
:::
