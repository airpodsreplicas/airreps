---
description: "So kannst du zum AirReps-Projekt beitragen. Forke das Repository, richte deine Umgebung ein, nimm Änderungen vor und erstelle einen Pull Request."
---

# Richtlinien zum Mitwirken

Wir freuen uns über dein Interesse, an unserem Projekt mitzuwirken. Um den Prozess so einfach wie möglich zu gestalten, haben wir unten eine ausführliche Schritt-für-Schritt-Anleitung zusammengestellt.

::: tip
Für eine komfortable Verwaltung deiner Beiträge empfehlen wir [GitHub Desktop](https://desktop.github.com/), einen grafischen GitHub-Client.
:::

## Repository forken und klonen

Befolge diese Schritte, um das Repository zu forken, es zu klonen, einen neuen Branch zu erstellen und deine lokale Entwicklungsumgebung einzurichten:

1. Gehe zur GitHub-Seite des Projekts, [indem du hier klickst](https://github.com/AirPodsReplicas/AirReps)
2. Klicke oben rechts auf `Fork`. Dadurch wird eine Kopie des Repositories in deinem GitHub-Konto erstellt
3. Öffne [GitHub Desktop](https://desktop.github.com/).
4. Navigiere im oberen Menü von GitHub Desktop zu `File` > `Clone Repository...`.
5. In der Kategorie GitHub.com solltest du das Repository sehen, das du geforkt hast.
6. Klicke auf `Clone`, um das Repository zu klonen.
7. Navigiere nach Abschluss des Klonvorgangs zu `Current Branch` und wähle `New Branch`. Gib hier einen beschreibenden Namen für deinen neuen Branch ein.

::: warning
Der main-Branch ist geschützt. Direkte Bearbeitung ist daher nicht erlaubt. Erstelle immer einen neuen Branch für deine Änderungen.
:::

8. Navigiere in deiner lokalen Umgebung zum Verzeichnis `airreps`.
9. Öffne das Projekt in einer integrierten Entwicklungsumgebung (IDE) deiner Wahl. Wir empfehlen [Visual Studio Code](https://code.visualstudio.com/), eine funktionsreiche, kostenlose IDE. Du kannst auch KI-gestützte IDEs wie [Cursor](https://cursor.com/) oder [Google's Antigravity](https://antigravity.google) verwenden, die das Mitwirken durch Code-Vorschläge und Dokumentationshilfen deutlich erleichtern.

## Entwicklungsumgebung einrichten

Wähle eine der beiden folgenden Optionen, um deine Entwicklungsumgebung einzurichten:

### Option 1 (Empfohlen)

So richtest du eine optimale Entwicklungsumgebung ein:

1. [Installiere Bun](https://bun.sh/). Dieses Projekt verwendet Bun als Paketmanager und Runtime.
2. [Installiere Node.js](https://nodejs.org/). Wir empfehlen die Long-Term-Support-Version (LTS).
3. Öffne nach der Installation das Terminal in deiner IDE und führe folgenden Befehl aus:

```shell
bun install
```

4. Starte den Entwicklungsserver für die Dokumentation:

```shell
bun run docs:dev
```

5. Das Terminal zeigt dann eine lokale URL an, z. B. `http://localhost:5173`. Öffne diese URL in deinem Webbrowser, um die Dokumentation zu sehen. Die Seite wird automatisch aktualisiert, wenn du die Quelldateien bearbeitest.

### Option 2

Diese Methode ermöglicht es dir, direkt mit Markdown-Dateien zu arbeiten, wobei bestimmte VitePress-Features möglicherweise nicht korrekt dargestellt werden.

1. Öffne [Visual Studio Code](https://code.visualstudio.com/) oder deine bevorzugte IDE.
2. Installiere die Erweiterung [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) für Visual Studio Code. Diese findest du im Tab `Extensions` in der Seitenleiste.
3. Öffne eine beliebige Markdown-Datei aus dem Verzeichnis `docs`.
4. Um die Markdown-Vorschau zu aktivieren, öffne die Befehlspalette mit `Ctrl + Shift + P` (Windows) oder `Cmd + Shift + P` (Mac).
5. Suche nach `Markdown Preview` und wähle `Markdown: Open Preview`.

::: warning
Beachte, dass VitePress zusätzliche Features bietet, die in Standard-Markdown nicht verfügbar sind. Daher kann diese Methode die endgültige Formatierung auf der eigentlichen Dokumentationswebsite nicht exakt widerspiegeln.
:::

## Änderungen einreichen

Wenn du deine Änderungen vorgenommen hast, befolge die folgenden Schritte, um sie zur Überprüfung einzureichen:

1. Falls du Option 1 unter [Entwicklungsumgebung einrichten](#option-1-empfohlen) gewählt hast, stelle sicher, dass die Seiten korrekt gebaut werden, indem du folgenden Befehl ausführst:

```shell
bun run docs:build
```

::: danger
Wenn die Ausgabe `Command failed` oder eine andere Fehlermeldung zeigt, liegt ein Problem vor. Die Fehlermeldung sollte Aufschluss über das Problem geben. Wenn du dir unsicher bist, kannst du unsere Teammitglieder in unserem [Discord-Server](https://airreps.link/discord) kontaktieren.
:::

2. Öffne GitHub Desktop. Im linken Bereich wird die Anzahl der geänderten Dateien angezeigt.
3. Du kannst die Änderungen an jeder Datei einsehen. Wähle jeweils eine Datei aus und fülle das Feld `Summary (required)` aus. Bei Bedarf kannst du im Feld `Description` weitere Details angeben. Klicke auf `Commit to the branch you created`, um deine Änderungen zu committen.
4. Klicke nun auf `Push changes to x` *(wobei x der Name des von dir erstellten Branches ist)*, um deine Änderungen auf GitHub hochzuladen.

::: tip
Wenn du alle Dateien committet hast, gut gemacht! Dein nächster Schritt ist es, deine Änderungen auf GitHub zu pushen und einen Pull Request zu erstellen.
:::

## Pull Request erstellen

Befolge diese Schritte, um einen Pull Request zu erstellen und das Zusammenführen deiner Änderungen mit dem main-Branch vorzuschlagen:

1. Wenn alle Änderungen committet und zu deinem Remote-Branch gepusht sind, ist es Zeit, einen Pull Request zu erstellen.
2. Gehe zu deinem geforkten Repository auf der GitHub-Website.
3. Klicke auf `New pull request`. Du wirst zur Seite des Original-Repositories weitergeleitet.
4. Stelle sicher, dass das Basis-Repository `base: main` ist und das Head-Repository `<dein_benutzername>/<dein_branch_name>` lautet.
5. Überprüfe deine Änderungen und fülle das Formular mit einer klaren Beschreibung aus, was du geändert hast und warum. *Als Referenz kannst du dir diesen [beispielhaften Pull Request](https://github.com/AirPodsReplicas/AirReps/pull/20) ansehen.*
6. Klicke auf `Create pull request`.
7. Nach dem Einreichen deines Pull Requests wird GitHub Actions versuchen, deine Änderungen zu bauen, um Probleme zu erkennen. Wenn keine Probleme vorliegen, wird ein Repository-Mitwirkender deine Änderungen überprüfen und sie entweder zusammenführen oder weitere Änderungen anfordern.

## Womit kannst du beitragen?

Nach einem erfolgreichen Merge wird dein GitHub-Profil automatisch im Abschnitt `Contributors` am unteren Rand unserer Startseite aufgeführt. Solltest du bevorzugen, dass dein Profil aus irgendeinem Grund nicht in diesem Abschnitt erscheint, wende dich bitte an ein Teammitglied, das dir bei der Entfernung des Profils hilft.

- **Tippfehler oder Fehler beheben** - Einen Fehler entdeckt? Reiche eine schnelle Korrektur ein!
- **Veraltete Informationen aktualisieren** - Hilf dabei, den Guide aktuell zu halten
- **Neue Inhalte hinzufügen** - Dokumentiere neue Addons, Features oder Konfigurationen
- **Verständlichkeit verbessern** - Mache Erklärungen leichter verständlich
- **Screenshots hinzufügen** - Visuelle Anleitungen sind immer hilfreich
- **Verbesserungen vorschlagen** - Hast du Ideen? Eröffne ein Issue zur Diskussion

Vielen Dank für dein Engagement zur Verbesserung unseres Projekts!
