---
description: En løsning på Intel-versionen af macOS's problem med at kunne kontrollere lydstyrkeudgang ved hjælp af systemets indbyggede lydstyrkeskyder.
---

# Problemet: Lydstyrkeskyderen virker ikke.

Dette er et af de mest kendte problemer på **Intel**-versionen af macOS, hvor lydstyrkeskyderen, der kontrollerer lydstyrken, simpelthen ikke virker, men kun fungerer som en kontakt (sker for de fleste kopier derude, selvom nogle ikke er påvirket). Mens Apple selv aldrig ville undersøge problemet, kan vi omgå dette med et [open source-værktøj](https://github.com/briankendall/proxy-audio-device).

:::warning
Denne guide er beregnet til dem, der har Intel-baserede Mac'er (i3, i5, i7; ikke M-serie chip). Hvis din Apple Silicon (M-serie chip) Mac ikke afspiller lyd med dine nuværende AirReps, tjek [Almindelige Fejl](/da/troubleshooting/other-common-bugs.md) sektionen.
:::

## **Forudsætninger**

Før tutorialen, sørg venligst for at du:
- Har `sudo`-adgang (eller din macOS-konto har administrativ adgang)
- `brew` pakkehåndtering (hvis ikke, følg blot denne [sektion](#brew-installation))

:::tip
PS: at bruge `brew` er meget nemmere end manuel installation, men hvis du vil springe over at bruge `brew`, kan du læse dette og følge trinene [her](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **`brew` Installation**

Hvis du ikke har fået `brew` installeret på dit system, kan vi starte her. Gå ind på [denne](https://brew.sh/) side, kopier kommandoen og kør den i Terminal.

![Installation ved hjælp af Terminal](/volume_fix/brew-installation.gif)

:::warning
Du kan blive bedt om at indtaste din adgangskode, gå videre og indtast din adgangskode som normalt (din adgangskode kan se ud som om den er skjult, men det er den ikke i dette tilfælde).
:::

## **Installation**

### **Download**
Når alt er klar, kan du starte med at åbne Terminal, kør derefter følgende kommando:
`brew install --cask proxy-audio-device`

![installer proxy-audio-device](/volume_fix/app-installation.gif)

:::tip
Under installation er det normalt, at systemlyden glitcher lidt. Så sørg for at du gør dette i et miljø uden lydbehandling (ingen lydmanipulationssoftware kører).
:::

### **Opsætning**
1. Naviger til Launchpad, kør den nyinstallerede `Proxy Audio Device Settings` for at begynde opsætningsprocessen, den vil se nogenlunde sådan ud:

![appens ikon](/volume_fix/app_icon.png)

2. Når den åbnes, vises et vindue som dette.

![appens brugerflade](/volume_fix/app_window.png)

Bliv ikke fristet til at klikke væk fra denne tutorial, de fleste mennesker som dig kan sætte dem op sådan:

- `Proxy device name`: Navn på outputtet, du kan lade dem være som de er.
- `Proxied device`: Lydkilde (vælg dit AirReps navn)
- `Buffer size`: Tilladt tid for macOS at behandle lyd (forsimplet) (lad dem venligst **være som de er**, da 512 er tilstrækkeligt for de fleste)
- `Proxy device is active`: Hvordan softwaren arbejder i baggrunden. Det er her det bliver svært, men det koger ned til disse muligheder:
    + Hvis du ikke har noget imod lydafbrydelser (korte lydvarighed), vælg `When proxied device is active`
    + For de fleste mennesker, vælg `When user is not idle`
    + For folk der vil have konsistent lyd, eller gaming, vælg `Always`.

3. Til sidst, naviger til Kontrolcenter > Lyd > ">" ikonet, og vælg den nyoprettede lydenhed (`Proxy Audio Device` som standard).

![vælg lydenhed](/volume_fix/change-audio-device.gif)


## **Bivirkninger**

Selvom det er fint at bruge det meste af tiden, kan nogle brugere opleve disse problemer:
::: details Intet "Lyd" ikon i topbjælken
Dette er... uheldigt faktisk, du skal navigere til "Kontrolcenter" for at kontrollere lyden (eller bruge genvej).
:::

:::details Ingen lyd ved frakobling
Appen er kun designet til altid at hænge fast på den valgte enhed. Du skal manuelt genvælge "Intern højttaler" selv.
:::

:::details Knitren/pop eller ensidet lyd
Du kan komme uden om dette ved at øge bufferstørrelsen / eller vælge `Always` i `Proxy Device in Active` muligheden i appen.
:::

## **Afinstallation**

Hvis du ønsker at fjerne appen, kan du blot køre denne kommando i Terminal:

`brew remove --cask proxy-audio-device`

...genstart derefter dit system.

## **Valgfrit: Undersøgelse**

Jeg har lavet en afstemning [her](http://poll-maker.com/poll5643879x05fb4568-166) for at finde ud af om denne løsning faktisk virker. Det er utroligt simpelt at gøre, og det hjælper meget med at få et helt billede af denne løsning, jeg ville sætte stor pris på, hvis du deler dine tanker!

[![afstemning](/volume_fix/poll.png)](http://poll-maker.com/poll5643879x05fb4568-166)
