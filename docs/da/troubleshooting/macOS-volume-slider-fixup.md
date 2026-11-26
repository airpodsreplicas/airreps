---
title: Lydstyrkeskyder er Ineffektiv på macOS
description: Ret problemet med macOS-lydstyrkeskyderen på Intel Macs. En enkel løsning til at genvinde kontrollen over din lydudgang.
---

# Problemet: Lydstyrkeskyderen virker ikke

Dette er et af de mest kendte problemer på **Intel**-versionen af macOS, hvor lydstyrkeskyderen til at styre lydstyrken ikke fungerer, men kun opfører sig som en tænd/sluk-knap (det påvirker de fleste replikaer, selvom nogle går fri). Selvom Apple aldrig vil løse problemet, kan vi omgå det med et [open source-værktøj](https://github.com/briankendall/proxy-audio-device).

::: warning
Denne vejledning er beregnet til dem, der har Intel-baserede Macs (i3, i5, i7; ikke M-serie-chip). Hvis din Apple Silicon (M-serie-chip) Mac ikke afspiller lyd med dine nuværende AirReps, tjek venligst sektionen [Almindelige fejl](/da/troubleshooting/other-common-bugs).
:::

## **Forudsætninger**

Før vejledningen skal du sørge for, at du:
- Har `sudo`-adgang (din macOS-konto skal have administratorrettigheder)
- Har pakkehåndteringen `brew` installeret (hvis ikke, følg denne [sektion](#brew-installation))

::: tip brew eller manuel installation
PS: Det er meget nemmere at bruge `brew` end manuel installation, men hvis du vil springe `brew` over, kan du følge trinnene [her](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **`brew`-installation** {#brew-installation}

Hvis du ikke har `brew` installeret på dit system, starter vi her. Åbn [denne side](https://brew.sh/), kopiér kommandoen, og kør den i Terminal.

<video src="/volume_fix/brew-installation.webm" poster="/volume_fix/brew-installation-poster.webp" width="500" height="443" autoplay loop muted playsinline aria-label="Installation via Terminal"></video>

::: warning
Du bliver muligvis bedt om at indtaste din adgangskode — indtast den som normalt (den ser måske skjult ud, mens du skriver, hvilket er helt normalt).
:::

## **Installation**

### **Download**
Når alt er klar, skal du åbne Terminal og køre følgende kommando:
`brew install --cask proxy-audio-device`

<video src="/volume_fix/app-installation.webm" poster="/volume_fix/app-installation-poster.webp" width="500" height="346" autoplay loop muted playsinline aria-label="installer proxy-audio-device"></video>

::: tip Stop lyden under installationen
Under installationen er det normalt, at systemlyden hakker en smule. Gør derfor dette, mens der ikke afspilles eller redigeres lyd.
:::

### **Opsætning**
1. Åbn Launchpad, og start den nyinstallerede app `Proxy Audio Device Settings` for at begynde opsætningen. Den ser sådan ud:

![appens ikon](/volume_fix/app_icon.png)

2. Når den er åbnet, vises et vindue som dette:

![appens UI](/volume_fix/app_window.png)

Lad være med at lukke vejledningen endnu — de fleste kan sætte den op sådan her:

- `Proxy device name`: Navnet på lydudgangen; du kan lade det stå som standard.
- `Proxied device`: Lydkilde (vælg navnet på dine AirReps)
- `Buffer size`: Den tid macOS har til at behandle lyd (forenklet) (**lad den stå som standard**, da 512 er nok for de fleste brugere)
- `Proxy device is active`: Hvordan programmet kører i baggrunden. Vælg en af disse muligheder:
    + Hvis du ikke har noget imod, at korte lyde kan blive afbrudt, vælg `When proxied device is active`
    + For de fleste brugere, vælg `When user is not idle`
    + Hvis du vil have stabil lyd hele tiden eller spiller spil, vælg `Always`.

3. Til sidst skal du gå til Kontrolcenter > Lyd > `>`-ikonet og vælge den nyoprettede lydenhed (`Proxy Audio Device` som standard).

<video src="/volume_fix/change-audio-device.webm" poster="/volume_fix/change-audio-device-poster.webp" width="500" height="558" autoplay loop muted playsinline aria-label="vælg lyd-enhed"></video>

## **Bivirkninger**

Selvom løsningen fungerer fint det meste af tiden, kan nogle brugere opleve disse ting:

::: details Intet "Lyd"-ikon på topbjælken
Desværre skal du bruge Kontrolcenter til at styre lyden (eller bruge en tastaturgenvej).
:::

::: details Ingen lyd, når enheden afbrydes
Appen er designet til altid at sende lyd til den valgte enhed. Du skal derfor manuelt vælge "Indbygget højttaler" igen, når du afbryder.
:::

::: details Knæk/pop eller lyd kun i én side
Du kan løse dette ved at øge bufferstørrelsen eller vælge `Always` under `Proxy device is active` i appen.
:::

<CommunityCta variant="stuck" />

## **Afinstallation**

Hvis du ønsker at fjerne appen, kan du blot køre denne kommando i Terminal:

`brew remove --cask proxy-audio-device`

...og derefter genstarte din Mac.

## **Valgfrit: Spørgeskema**

Jeg har lavet en afstemning [her](https://poll-maker.com/poll5643879x05fb4568-166) for at finde ud af, om denne løsning faktisk virker for folk. Det tager kun et øjeblik, og det hjælper meget med at få det fulde billede. Tak hvis du vil dele dine erfaringer!

[![afstemning](/volume_fix/poll.png)](https://poll-maker.com/poll5643879x05fb4568-166)
