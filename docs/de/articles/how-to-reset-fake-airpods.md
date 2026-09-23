---
title: 'So setzt du gefälschte AirPods (Nachbildungen) zurück: Soft Reset vs. Hard Reset'
description: 'Eine sichere Schritt-für-Schritt-Anleitung zum Zurücksetzen gefälschter AirPods – der Soft Reset bei Kopplungsproblemen, der umfassendere Hard Reset und wann ein Zurücksetzen überhaupt nicht die richtige Lösung ist.'
category: Fehlerbehebung
order: 9
---
# Gefälschte AirPods zurücksetzen (Replikate): Soft-Reset vs. Hard-Reset

Das Zurücksetzen ist das Erste, was die meisten versuchen, wenn ihre Replikate Probleme machen, und oft ist es auch die richtige Entscheidung — aber „Zurücksetzen“ umfasst eigentlich zwei verschiedene Verfahren, die unterschiedliche Probleme beheben. Wenn du sie verwechselst, kannst du einen ganzen Nachmittag damit verbringen, ohne etwas zu ändern.

Hier die Kurzfassung: Ein **Soft-Reset** behebt Probleme mit der Kopplung, ohne die gespeicherten Einstellungen deiner Ohrhörer anzutasten. Ein **Hard-Reset** ist eine gründlichere Bereinigung für den Fall, dass der Soft-Reset nicht dauerhaft funktioniert. Bevor du beginnst, solltest du wissen, dass sich das Zurücksetzverhalten je nach Chipsatz, Hersteller und Firmware-Version unterscheiden kann. Betrachte diese Schritte daher als in der Community übliches Verfahren und nicht als universelle Tastenkombination. Wenn ein Schritt nicht zu dem passt, was du siehst, bestätige die aktuelle Methode im [Leitfaden zu häufigen Problemen](/de/troubleshooting/other-common-bugs) oder frag im Discord nach, statt zu raten.

> **Kurze Antwort:** Um gefälschte AirPods per Soft-Reset zurückzusetzen, vergiss sie im Bluetooth-Menü deines Telefons, schalte Bluetooth aus, lege die Ohrhörer bei geöffnetem Deckel in das Ladecase, halte die Taste auf der Rückseite 5–10 Sekunden lang gedrückt, bis die LED blinkt, und schließe den Deckel für 60 Sekunden. Bei starken Synchronisierungsproblemen oder iCloud-Fehlern hältst du die Taste auf der Rückseite **15 Sekunden** lang gedrückt, bis die LED zunächst gelb und dann weiß blinkt, um einen vollständigen Zurücksetzen des Controller auf die Werkseinstellungen durchzuführen.

## Soft-Reset (hier beginnen)

Ein Soft-Reset behebt alltägliche Probleme: Ein Ohrhörer verbindet sich nicht, eine Kopplung bricht ständig ab oder die AirPods werden beim Öffnen des Deckels nicht angezeigt. Dabei löschst du den Bluetooth-Kopplungsstatus, setzt die Ohrhörer aber nicht vollständig zurück.

![So führst du einen Soft-Reset deiner AirPods durch](/airpodssoftreset.webp)

1. Vergiss das Gerät in den Bluetooth-Einstellungen und schalte Bluetooth anschließend aus.
2. Öffne den Deckel und halte die Taste auf der Rückseite einige Sekunden lang gedrückt, bis die Leuchte blinkt, und schließe dann den Deckel. Keine Sorge, wenn deine Leuchte nicht genau wie auf dem Bild blinkt.
3. Warte eine volle Minute. Schalte Bluetooth anschließend wieder ein, öffne den Deckel und versuche erneut, eine Verbindung herzustellen.
4. Wenn die Verbindung weiterhin nicht hergestellt werden kann, nimm die Ohrhörer heraus und setze sie wieder ein. Schließe den Deckel und warte, bis die Leuchte erlischt. Öffne ihn dann wieder und versuche es erneut.

Ein Hinweis, der viele verwirrt: Es kann **3–4 Soft-Resets** dauern, bis es funktioniert. Das ist normal — gib nach dem ersten Versuch nicht auf. Wenn mehrere Soft-Resets hintereinander nichts bewirken, fahre mit einem Hard-Reset fort.

## Hard-Reset

Wenn der Soft-Reset nicht funktioniert, leert der Hard-Reset des Leitfadens jegliche Restladung, sodass die Ohrhörer ihren Status vollständig vergessen.

1. Vergiss die AirPods in den Bluetooth-Einstellungen.
2. Nimm die Ohrhörer aus dem Case und lasse sie mehrere Stunden draußen liegen, damit sich der Akku vollständig entlädt. Lass auch das Case offen — es soll keine Restladung zurückbleiben. Warte daher mindestens einen ganzen Tag, bei Bedarf länger.
3. Sobald sie entladen sind, setze die Ohrhörer wieder in das Case und lade das Case auf.
4. Führe nun einen Soft-Reset durch — rechne auch hier mit **3–4 Versuchen**.

## Der gründlichere Reset mit der Taste am Case

In unserem [Fix für die iCloud-Kompatibilität](/de/troubleshooting/AirReps-Incompatibility-with-iCloud) ist außerdem ein stärkerer Reset mit der Taste am Case dokumentiert. Halte bei eingesetzten Ohrhörern und geöffnetem Deckel die Kopplungstaste auf der Rückseite etwa **15 Sekunden** lang gedrückt, bis die Leuchte gelb und anschließend weiß blinkt, und schließe dann das Case. Das kommt bei diesen Klonen einem Zurücksetzen auf die Werkseinstellungen am nächsten.

Eine mildere Variante derselben Tastenkombination wird bei einem bestimmten Fehlerbild verwendet: Wenn nur ein Ohrhörer funktioniert und bei jedem Öffnen des Cases langsam blinkt, setzt das Halten der Taste auf der Rückseite für **2–3 Sekunden** die Kopplung zurück, während sich die Ohrhörer im Case befinden.

Da die genaue Dauer je nach Chipsatz und Produktionscharge variiert, solltest du das aktuelle Verfahren bestätigen, bevor du dich darauf verlässt. Wenn sich dein Modell anders verhält, sind die [Hinweise zur Konnektivität](/de/introduction/connectivity) und die Community deine besten Anlaufstellen.

## Ein Reset ersetzt niemals die erneute Kopplung

Das ist das häufigste Missverständnis: Ein Reset stellt keine Verbindung wieder her. Er löscht nur den gespeicherten Kopplungsstatus. Das bedeutet, dass du **deine AirPods anschließend erneut koppeln musst** — über das iOS-Popup auf einem iPhone oder über das normale Bluetooth-Menü auf anderen Geräten. Wenn die Kopplung selbst nach einem Reset das Problem ist, arbeite den [Leitfaden zur Fehlerbehebung bei Verbindungsproblemen](/de/articles/fake-airpods-wont-connect) durch, statt erneut zurückzusetzen.

## Wann ein Reset die falsche Lösung ist

Ein Reset hilft nur bei Problemen mit der Kopplung und Verbindung. In diesen Fällen bringt er nichts:

- **Ein Jieli-Klon, den keine App erkennt.** Wenn keine der [Firmware-Apps](/de/useful-apps) der Community eine Verbindung zu deinen Ohrhörern herstellen kann, ändert ein Reset nichts — das ist eine Einschränkung des Low-End-Chipsatzes und kein Fehler.
- **Ein Fehler mit einer bekannten, speziellen Lösung.** Probleme mit der iCloud-Kopplung unter macOS und der festhängende Lautstärkeregler haben eigene Verfahren. Wenn du vorher zurücksetzt, verschwendest du nur Zeit; der [Leitfaden zu häufigen Problemen](/de/troubleshooting/other-common-bugs) verweist auf beide.
- **Ein Hardwaredefekt.** Wenn ein Ohrhörer tatsächlich defekt ist, wird ihn keine Anzahl von Resets wiederbeleben. Dann solltest du dich an deinen [Verkäufer](/de/links/info) wenden.

## Einstellungen, die du möglicherweise erneut vornehmen musst

Nach einem Reset können einige deiner Einstellungen auf die Standardwerte zurückgesetzt werden. Namensänderungen, Tippsteuerungen und ähnliche Einstellungen werden **über iOS** vorgenommen — leihe dir einmal ein iPhone, richte sie dort ein, und normalerweise werden sie auf den Ohrhörern gespeichert und bleiben erhalten. Auch das iOS-Kopplungs-Popup kann sich wieder wie bei der Ersteinrichtung verhalten. Sei also nicht überrascht, wenn es erneut erscheint oder den generischen Namen anzeigt.

Verwandte Anleitungen zur Fehlerbehebung und Einrichtung:
- Werden die Ohrhörer weiterhin nicht erkannt? Gehe den Leitfaden [Gefälschte AirPods verbinden sich nicht](/de/articles/fake-airpods-wont-connect) durch.
- Verwendest du ein Android-Gerät? Erfahre unter [AirPods-Replikate unter Android](/de/articles/airpods-replicas-on-android), wie Einstellungen übernommen werden.
- Mit einem modernen iPhone gekoppelt? Informiere dich unter [Funktionieren gefälschte AirPods mit neuen iPhones?](/de/articles/do-fake-airpods-work-with-new-iphone) über Besonderheiten der Kompatibilität.
- Fragst du dich, ob ein widerspenstiges Paar echt oder ein Klon ist? Nutze unseren [Leitfaden zum Erkennen gefälschter AirPods](/de/articles/how-to-spot-fake-airpods).

## FAQ

::: details Was ist der Unterschied zwischen einem Soft-Reset und einem Hard-Reset bei gefälschten AirPods?
Bei einem Soft-Reset werden die Ohrhörer vergessen und erneut gekoppelt, um Verbindungsprobleme zu beheben. Bei einem Hard-Reset werden die Ohrhörer vollständig entladen, bevor der Soft-Reset erneut durchgeführt wird. Dadurch wird ein tiefergehender Status gelöscht, wenn der Soft-Reset nicht dauerhaft funktioniert. Das lange Drücken der Taste am Case ist bei Modellen, die dies unterstützen, ein stärkerer Reset im Stil eines Zurücksetzens auf die Werkseinstellungen.
:::

::: details Wie oft sollte ich einen Soft-Reset versuchen?
Plane 3–4 Versuche ein. Das ist bei Replikaten die dokumentierte Normalität — wenn ein einzelner Versuch nicht dauerhaft funktioniert, bedeutet das nicht, dass das Verfahren fehlgeschlagen ist.
:::

::: details Ändert das Zurücksetzen gefälschter AirPods meine Einstellungen?
Das ist möglich. Nach einem Reset können dein eigener Name und deine Tippsteuerungen verschwunden sein, da sie über iOS festgelegt werden. Richte sie über ein iPhone erneut ein; anschließend sollten sie auf den Ohrhörern gespeichert werden.
:::

::: details Behebt ein Reset das Problem, wenn meine Firmware-Apps den Klon nicht erkennen?
Nein. Wenn keine Community-App eine Verbindung herstellen kann, hast du wahrscheinlich einen Low-End-Jieli-Chipsatz, und ein Reset ändert daran nichts. Auf der Seite [Nützliche Apps](/de/useful-apps) kannst du prüfen, welche Apps zu welchen Chipsätzen passen.
:::
