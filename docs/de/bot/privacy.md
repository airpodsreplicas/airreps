---
title: Datenschutzrichtlinie
description: 'Wie der AirReps-Discord-Bot Daten sammelt, verwendet und schützt.'
ogLabel: RECHTLICHES
sidebar: false
---
# Datenschutzrichtlinie

Auf dieser Seite wird erläutert, welche Daten der AirReps-Discord-Bot erfasst, warum wir sie aufbewahren und wie du uns bitten kannst, sie zu löschen.

**Zuletzt aktualisiert:** 23. August 2026

## Einleitung

Das AirReps-Staff-Team betreibt den AirReps-Discord-Bot („der Bot“), der in der [AirReps](https://airpodsreplicas.com)-Community verwendet wird. Diese Datenschutzrichtlinie beschreibt, wie wir Informationen erfassen, verwenden, speichern und schützen, wenn du den Bot einlädst oder verwendest. Die Nutzung des Bots bedeutet, dass du den unten beschriebenen Vorgehensweisen zustimmst.

Diese Seiten stehen neben unseren [Nutzungsbedingungen](/de/bot/terms). Discord hat ebenfalls eine eigene [Datenschutzrichtlinie](https://discord.com/privacy).

## Erfasste Informationen

Der Bot speichert die Daten, die er zum Ausführen der in den Nutzungsbedingungen aufgeführten Funktionen benötigt. Dazu gehören:

- Discord-Benutzer-IDs, Benutzernamen, Anzeigenamen, Server-(Guild-)IDs und Kanal-IDs
- Rollen-IDs, wenn du eine Sprachrolle auswählst oder wenn Staff-Tools Berechtigungsprüfungen durchführen müssen
- Befehlsnutzung (welcher Slash-Befehl ausgeführt wurde und wann), einschließlich optionaler Protokolle von Staff-Befehlen
- Feedbacktext, den du mit `/feedback` übermittelst
- Giveaway-Teilnahmen: deine Discord-Benutzer-ID und, falls das Giveaway dies erfordert, die von dir eingegebene KakoBuy-UID
- Mitgliederanalysen: Beitritts- und Austrittszahlen, Beitrittszeitpunkte, Verweildauer, Uhrzeit der Beitritte/Austritte und IDs, anhand derer ein erneuter Beitritt von einem erstmaligen Beitritt unterschieden werden kann
- Nachrichteninhalte und Anhänge, wenn eine aktive Funktion diese benötigt: Anti-Scam (Text, Bildsignaturen und eine Kopie des ersten Bildes für den Mod-Bericht), der KakoBuy-Konverter (Weidian-/Taobao-/1688-/Tmall-URLs in einer Nachricht) und der Reddit-Spiegel (Text und Bilder aus dem konfigurierten Ankündigungskanal)

Diese Daten werden deiner Discord-Identität und den Servern zugeordnet, auf denen der Bot verwendet wird. Dauerhafte Daten befinden sich in einer lokalen SQLite-Datenbank auf dem Rechner, auf dem der Bot ausgeführt wird. Für das Anti-Scam-Matching wird ein kurzer Speicherzeitraum mit kürzlich eingegangenen Nachrichten im Arbeitsspeicher verwendet.

Wir fragen dich nicht nach deiner E-Mail-Adresse, Telefonnummer, Zahlungsdaten oder deinem rechtlichen Namen. Eine KakoBuy-UID wird nur gespeichert, wenn du sie bei einem Giveaway eingibst. Wenn du diese Daten selbst an das Staff-Team mailst, fällt das nicht in den Zuständigkeitsbereich des Bots.

## Verwendung deiner Informationen

Wir verwenden diese Daten, um:

- Verkäuferkataloge und Bestellhilfen anzuzeigen (`/jenny`, `/hicity`, `/earhive`, `/ultimateguide`, `/wise`, `/text`, `/alipay`, `/eartip`, `/resethelp`)
- Mit `/convert` Währungen umzurechnen
- Von dir ausgewählte Sprachrollen zuzuweisen
- Feedback an einen Staff-Kanal weiterzuleiten
- Giveaways (`/gs`) durchzuführen und KakoBuy-UIDs zu überprüfen, wenn ein Host diese Option aktiviert
- Tägliche, wöchentliche und monatliche Mitgliederberichte sowie Meilensteinbeiträge zu erstellen
- Die Mitgliederzahl des Sprachkanals zu aktualisieren
- Eine Willkommens-DM zu senden, wenn du dem konfigurierten AirReps-Guild beitrittst
- Kanalübergreifenden Scam-Spam zu markieren, das Konto in eine Auszeit zu versetzen, die Nachrichtenserie zu löschen, dir eine DM zu senden und den Vorfall im Mod-Chat zu melden
- Auf Marketplace-Links mit einer KakoBuy-Checkout-URL zu antworten (Affiliate-Code `airreps`)
- Ausgewählte Discord-Ankündigungen in [r/airreps](https://www.reddit.com/r/airreps) zu veröffentlichen
- Fehler zu untersuchen und bei aktiviertem Logging einen Prüfpfad für das Staff-Team zu führen

Wir können aggregierte Mitgliederzahlen ansehen, um den Server zu verbessern. Wir verkaufen keine personenbezogenen Daten.

## Dienste von Drittanbietern

Der Bot kommuniziert mit mehreren Diensten, um die oben genannten Funktionen auszuführen:

- **Discord** — die API, über die jeder Befehl, jedes Ereignis, jede DM und jede Auszeit ausgeführt wird. Es gelten die Nutzungsbedingungen und die Datenschutzrichtlinie von Discord. Wir haben keine Kontrolle über Discord.
- **Frankfurter (EZB-Kurse)** — `/convert` sendet den Betrag und die Währungscodes, um einen Kurs abzurufen. Die Kurse werden einige Stunden im Arbeitsspeicher zwischengespeichert.
- **Reddit** — wenn der Spiegel aktiviert ist, werden Ankündigungstexte und Bilder über die Reddit-API in das konfigurierte Subreddit hochgeladen.
- **KakoBuy** — umgewandelte Produkt-URLs werden an KakoBuy gesendet (einschließlich eines AirReps-Affiliate-Codes), damit die Antwort einen Checkout-Link und ein Vorschaubild enthalten kann.

Wir geben Daten nur weiter, wenn dies für den Betrieb dieser Funktionen erforderlich ist, gesetzlich vorgeschrieben ist oder der Verhinderung eines schweren Schadens dient. Wir verkaufen oder vermieten keine Daten zu Werbezwecken.

## Aufbewahrung und Löschung von Daten

Wie lange etwas gespeichert wird, hängt von der jeweiligen Funktion ab:

- **Giveaways** bleiben in SQLite gespeichert, bis ein Host sie beendet oder löscht (Teilnahmen, optionale UIDs, Gewinner).
- **Mitgliederanalysen** (Beitritts-/Austrittszähler, Stundenkategorien, IDs ausgeschiedener Mitglieder, Beitrittszeitpunkte) bleiben gespeichert, damit tägliche, wöchentliche und monatliche Berichte sowie die Erkennung erneuter Beitritte weiterhin funktionieren. Beitrittszeitpunkte können nach dem Austritt einer Person erhalten bleiben, damit die Verweildauer bei einer Rückkehr korrekt ist.
- **Anti-Scam-Puffer** werden nur kurzzeitig im Arbeitsspeicher gehalten (einige Dutzend Sekunden). Der Bericht im Mod-Kanal, einschließlich einer gespeicherten Bildvorschau, bleibt wie jede andere Staff-Nachricht in Discord erhalten.
- **Feedback** wird in einem Staff-Kanal veröffentlicht und bleibt dort als Discord-Nachricht bestehen.
- **Befehlsprotokolle** sind, wenn aktiviert, Discord-Nachrichten in einem Protokollkanal.
- **Reddit-Beiträge** bleiben gemäß den eigenen Aufbewahrungsregeln von Reddit auf Reddit bestehen.
- Zwischengespeicherte Discord-Objekte unterliegen der üblichen API-Zwischenspeicherung.

Wenn du eine Kopie oder Löschung von Daten möchtest, die wir in SQLite gespeichert haben (Giveaway-Teilnahme, Beitrittszeitpunkt und Ähnliches), tritt dem [AirReps Discord](https://airreps.link/discord) bei und schreibe dem Staff-Team. Wir werden Anfragen innerhalb einer angemessenen Frist bearbeiten. Wir können keine Nachrichten, Auszeiten oder Reddit-Beiträge löschen, die inzwischen nur noch auf Discord oder Reddit vorhanden sind.

## Sicherheit

Wir beschränken, wer im Staff-Team gespeicherte Daten einsehen kann, und verwenden übliche technische Schutzmaßnahmen auf dem Host, auf dem sich die SQLite-Datei befindet. Keine Konfiguration ist vollkommen sicher. Wenn du glaubst, dass Daten offengelegt oder ohne Berechtigung abgerufen wurden, informiere das Staff-Team sofort.

## Änderungen an dieser Datenschutzrichtlinie

Wir können diese Richtlinie überarbeiten, wenn sich der Bot oder die Rechtslage ändert. Das Datum „Zuletzt aktualisiert“ oben gibt die aktuelle Version an. Wenn du den Bot nach einer Änderung weiter verwendest, akzeptierst du die neue Richtlinie.

## Kontakt

Fragen zu dieser Richtlinie oder einen Löschantrag: tritt dem [AirReps Discord](https://airreps.link/discord) bei und schreibe dem Staff-Team.
