---
description: Lær hvordan du bidrager til AirReps-projektet ved at følge denne trin-for-trin guide. Fork og klon repositoryet, opsæt dit udviklingsmiljø, foretag ændringer og indsend en pull request til gennemgang. Begynd at bidrage i dag!
---

# Retningslinjer for Bidrag

Vi er glade for din interesse i at bidrage til vores projekt. For at gøre din bidragsproces nemmere har vi udarbejdet en detaljeret trin-for-trin guide nedenfor.

::: tip
For nemmere håndtering af dine bidrag anbefaler vi at bruge [GitHub Desktop](https://desktop.github.com/), en GUI-baseret GitHub-klient.
:::

## Fork og Kloning af Repositoryet

Følg disse trin for at forke repositoryet, klone det, oprette en ny branch og opsætte dit lokale udviklingsmiljø:

1. Gå til projektets GitHub-side [ved at klikke her](https://github.com/AirPodsReplicas/AirReps)
2. Klik på `Fork` i øverste højre hjørne. Dette vil oprette en kopi af repositoryet i din GitHub-konto
3. Åbn [GitHub Desktop](https://desktop.github.com/).
4. I topmenuen i GitHub Desktop, naviger til `File` > `Clone Repository...`.
5. I kategorien GitHub.com skulle du se det repository, du forkede.
6. For at klone repositoryet, klik på `Clone`.
7. Når kloningsprocessen er færdig, naviger til `Current Branch`, og vælg derefter `New Branch`. Her indtaster du et beskrivende navn til din nye branch.

::: warning
Main-branchen er en beskyttet branch. Direkte redigering er derfor ikke tilladt. Opret altid en ny branch til dine ændringer.
:::

8. Naviger til `airreps`-mappen i dit lokale miljø.
9. Åbn projektet i et Integreret Udviklingsmiljø (IDE) efter eget valg. Vi anbefaler [Visual Studio Code](https://code.visualstudio.com/), et funktionsrigt, gratis IDE. Du kan også bruge AI-drevne IDE'er som [Cursor](https://cursor.com/) eller [Google's Antigravity](https://antigravity.google), som kan gøre det meget nemmere at bidrage ved at hjælpe med kodeforslag og dokumentation.

## Opsætning af Udviklingsmiljøet

Vælg mellem de to muligheder nedenfor for at opsætte dit udviklingsmiljø:

### Mulighed 1 (Anbefalet)

For at opsætte et optimalt udviklingsmiljø:

1. [Installer Bun](https://bun.sh/). Dette projekt bruger Bun som pakkehåndtering og runtime.
2. [Installer Node.js](https://nodejs.org/). Vi anbefaler Long-Term Support (LTS) versionen.
3. Efter installation, åbn terminalen i dit IDE og kør følgende kommando:

```shell
bun install
```

4. Start dokumentationsudviklingsserveren:

```shell
bun run docs:dev
```

5. Terminalen vil derefter vise en lokal URL, såsom `http://localhost:5173`. Besøg denne URL i din webbrowser for at se dokumentationen. Siden opdateres automatisk, når du ændrer kildefilerne.

### Mulighed 2

Denne metode lader dig arbejde direkte med markdown-filer, selvom den måske ikke præcist gengiver specifikke VitePress-funktioner.

1. Åbn [Visual Studio Code](https://code.visualstudio.com/) eller dit foretrukne IDE.
2. Installer [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) udvidelsen til Visual Studio Code. Den kan findes i `Extensions`-fanen i sidebjælken.
3. Åbn en vilkårlig markdown-fil fra `docs`-mappen.
4. For at aktivere Markdown Preview, åbn kommandopaletten med `Ctrl + Shift + P` (Windows) eller `Cmd + Shift + P` (Mac).
5. Søg efter `Markdown Preview` og vælg `Markdown: Open Preview`.

::: warning
Husk at VitePress tilbyder ekstra funktioner, der ikke er tilgængelige i standard markdown. Derfor afspejler denne metode muligvis ikke præcist den endelige formatering, når den ses på den faktiske dokumentationshjemmeside.
:::

## Indsendelse af Ændringer

Når du har foretaget ændringer, følg nedenstående trin for at indsende dem til gennemgang:

1. Hvis du valgte Mulighed 1 under [Opsætning af Udviklingsmiljøet](#mulighed-1-anbefalet), sørg for at siderne bygger korrekt ved at køre følgende kommando:

```shell
bun run docs:build
```

::: danger
Hvis outputtet viser `Command failed` eller anden fejlmeddelelse, er der et problem. Fejlmeddelelsen burde give indsigt i problemet. Hvis du er usikker på problemet, kan du kontakte vores medarbejdere på vores [Discord Server](https://airreps.link/discord).
:::

2. Åbn GitHub Desktop. Den venstre rude vil vise antallet af ændrede filer.
3. Du kan se ændringerne i hver fil. Vælg én fil ad gangen og udfyld feltet `Summary (required)`. Hvis nødvendigt, giv yderligere detaljer i `Description`-feltet. Klik på `Commit to the branch you created` for at committe dine ændringer.
4. Klik nu på `Push changes to x` *(x er navnet på den branch, du oprettede)* for at uploade dine ændringer til GitHub.

::: tip
Hvis du har committet alle filerne, godt gået! Dit næste skridt er at pushe dine ændringer til GitHub og oprette en Pull Request.
:::

## Oprettelse af en Pull Request

Følg disse trin for at oprette en pull request og foreslå at flette dine ændringer ind i main-branchen:

1. Med alle dine ændringer committet og pushet til din remote branch, er det tid til at oprette en pull request.
2. Gå til dit forkede repository på GitHubs hjemmeside.
3. Klik på `New pull request`. Du bliver omdirigeret til det originale repositorys side.
4. Sørg for at base repository er `base: main` og head repository er `<dit_brugernavn>/<din_branch_navn>`.
5. Gennemgå dine ændringer og udfyld formularen med en klar beskrivelse af, hvad du ændrede og hvorfor. *som reference kan du tjekke denne [eksemplariske pull request](https://github.com/AirPodsReplicas/AirReps/pull/20).*
6. Klik på `Create pull request`.
7. Efter du indsender din pull request, vil GitHub Actions forsøge at bygge dine ændringer for at opdage eventuelle problemer. Hvis der ikke er nogen problemer, vil en repository-bidragyder gennemgå dine ændringer og enten flette dem eller bede om yderligere ændringer.

## Hvad Kan Du Bidrage Med?

Efter en vellykket fletning vil din GitHub-profil automatisk blive inkluderet i `Contributors`-sektionen nederst på vores hjemmeside. Hvis du af en eller anden grund foretrækker, at din profil udelades fra denne sektion, bedes du kontakte et medlem af vores personale for hjælp med profilfjernelse.

- **Ret stavefejl eller fejl** - Har du opdaget en fejl? Indsend en hurtig rettelse!
- **Opdater forældet information** - Hjælp med at holde guiden aktuel
- **Tilføj nyt indhold** - Dokumenter nye tilføjelser, funktioner eller konfigurationer
- **Forbedre klarhed** - Gør forklaringer nemmere at forstå
- **Tilføj skærmbilleder** - Visuelle guides er altid hjælpsomme
- **Foreslå forbedringer** - Har du idéer? Åbn et issue for at diskutere

Tak for dit engagement i at forbedre vores projekt!
