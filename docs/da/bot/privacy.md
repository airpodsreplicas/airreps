---
title: Privatlivspolitik
description: 'Sådan indsamler, bruger og beskytter AirReps Discord-botten data.'
ogLabel: JURIDISK
sidebar: false
---
# Privatlivspolitik

Denne side beskriver, hvad AirReps Discord-botten indsamler, hvorfor vi opbevarer det, og hvordan du kan bede os om at fjerne det.

**Sidst opdateret:** 23. august 2026

## Introduktion

AirReps-teamet driver AirReps Discord-botten ("botten"), som bruges i [AirReps](https://airpodsreplicas.com)-fællesskabet. Denne privatlivspolitik beskriver, hvordan vi indsamler, bruger, opbevarer og beskytter oplysninger, når du inviterer eller bruger botten. Ved at bruge botten accepterer du nedenstående praksis.

Disse sider findes sammen med vores [servicevilkår](/da/bot/terms). Discord har også sin egen [privatlivspolitik](https://discord.com/privacy).

## Oplysninger, vi indsamler

Botten opbevarer de oplysninger, den har brug for til at køre funktionerne, der er angivet i servicevilkårene. Det omfatter:

- Discord-bruger-ID'er, brugernavne, viste navne, server- (guild-)ID'er og kanal-ID'er
- Rolle-ID'er, når du vælger en sprogrolle, eller når personalets værktøjer har brug for tilladelseskontroller
- Brug af kommandoer (hvilken slash-kommando der blev kørt, og hvornår), inklusive valgfrie logge over personalets kommandoer
- Feedbacktekst, du indsender med `/feedback`
- Giveaway-deltagelser: dit Discord-bruger-ID og, hvis giveawayen kræver det, det KakoBuy-UID, du indtaster
- Medlemsanalyse: antal ind- og udmeldelser, tidspunkter for indmeldelse, medlemsvarighed, tidspunkt på dagen for ind- og udmeldelser samt ID'er, der bruges til at skelne mellem en genindmeldelse og en første indmeldelse
- Beskedindhold og vedhæftede filer, når en aktiv funktion har brug for dem: anti-svindel (tekst, billedsignaturer og en kopi af det første billede til moderatorrapporten), KakoBuy-konverteren (Weidian- / Taobao- / 1688- / Tmall-URL'er i en besked) og Reddit-spejlingen (tekst og billeder fra den konfigurerede annonceringskanal)

Dette gemmes sammen med din Discord-identitet og de servere, hvor botten bruges. Vedvarende data ligger i en lokal SQLite-database på den maskine, der kører botten. Anti-svindel-matchning bruger et kort vindue i hukommelsen med nylige beskeder.

Vi beder ikke om din e-mailadresse, dit telefonnummer, dine betalingsoplysninger eller dit juridiske navn. Et KakoBuy-UID gemmes kun, hvis du indtaster et i en giveaway. Hvis du selv sender disse oplysninger til personalet, er det uden for bottens funktion.

## Sådan bruger vi dine oplysninger

Vi bruger disse data til at:

- Vise sælgerkataloger og hjælp til bestilling (`/jenny`, `/hicity`, `/earhive`, `/ultimateguide`, `/wise`, `/text`, `/alipay`, `/eartip`, `/resethelp`)
- Omregne valuta med `/convert`
- Tildele de sprogroller, du vælger
- Sende feedback til en personalekanal
- Afholde giveaways (`/gs`) og validere KakoBuy-UID'er, når en vært aktiverer dette
- Udarbejde daglige / ugentlige / månedlige medlemsrapporter og milepælsopslag
- Opdatere antallet af medlemmer i stemmekanalen
- Sende en velkomstbesked via DM, når du tilslutter dig den konfigurerede AirReps-guild
- Markere svindelspam på tværs af kanaler, sætte kontoen i timeout, slette beskedserien, sende dig en DM og rapportere det til moderatorchatten
- Svare på markedspladslinks med en KakoBuy-checkout-URL (affiliatelinkkode `airreps`)
- Krydsposte udvalgte Discord-annonceringer til [r/airreps](https://www.reddit.com/r/airreps)
- Fejlsøge og føre et revisionsspor for personalet, når logning er slået til

Vi kan se på aggregerede medlemstal for at forbedre serveren. Vi sælger ikke personlige oplysninger.

## Tredjepartstjenester

Botten kommunikerer med flere tjenester for at udføre ovenstående:

- **Discord** — API'et, der kører alle kommandoer, hændelser, DM'er og timeouts. Discords vilkår og privatlivspolitik gælder. Vi kontrollerer ikke Discord.
- **Frankfurter (ECB-kurser)** — `/convert` sender beløbet og valutakoderne for at hente en kurs. Kurser gemmes i hukommelsen i nogle få timer.
- **Reddit** — når spejlingen er slået til, uploades annonceringstekst og billeder via Reddits API til den konfigurerede subreddit.
- **KakoBuy** — konverterede produkt-URL'er sendes til KakoBuy (inklusive en AirReps-affiliatelinkkode), så svaret kan indeholde et checkoutlink og et miniaturebillede.

Vi deler kun data, når det er nødvendigt for at drive disse funktioner, når loven kræver det, eller for at forhindre alvorlig skade. Vi sælger eller udlejer ikke data til annoncering.

## Opbevaring og sletning af data

Hvor længe noget gemmes, afhænger af funktionen:

- **Giveaways** forbliver i SQLite, indtil en vært afslutter eller sletter dem (deltagelser, valgfrie UID'er, vindere).
- **Medlemsanalyse** (tællere for ind- og udmeldelser, timeintervaller, ID'er for udmeldte og tidspunkter for indmeldelse) forbliver gemt, så daglige/ugentlige/månedlige rapporter og registrering af genindmeldelser fortsat fungerer. Tidspunkter for indmeldelse kan forblive gemt, efter at nogen forlader serveren, så medlemsvarigheden er korrekt, hvis de vender tilbage.
- **Anti-svindel**-buffere har kort levetid i hukommelsen (tiere af sekunder). Moderatorrapporten, inklusive en gemt billedforhåndsvisning, forbliver i Discord som enhver anden personalebesked.
- **Feedback** opslås i en personalekanal og findes derefter dér som en Discord-besked.
- **Kommandologge**, når de er aktiveret, er Discord-beskeder i en logkanal.
- **Reddit-opslag** forbliver på Reddit efter Reddits egne regler for opbevaring.
- Cachede Discord-objekter følger normal API-caching.

Hvis du ønsker en kopi af eller sletning af data, vi har gemt i SQLite (giveaway-deltagelse, tidspunkt for indmeldelse og lignende), skal du tilslutte dig [AirReps Discord](https://airreps.link/discord) og skrive til personalet. Vi behandler anmodninger inden for rimelig tid. Vi kan ikke slette beskeder, timeouts eller Reddit-opslag, som nu kun findes på Discord eller Reddit.

## Sikkerhed

Vi begrænser, hvem på personaleteamet der kan se gemte data, og vi bruger almindelige tekniske sikkerhedsforanstaltninger på værten, der indeholder SQLite-filen. Ingen opsætning er perfekt. Hvis du mener, at noget er lækket eller tilgået uden tilladelse, skal du straks fortælle det til personalet.

## Ændringer af denne privatlivspolitik

Vi kan revidere denne politik, når botten eller loven ændrer sig. Datoen "Sidst opdateret" øverst angiver den aktuelle version. Hvis du fortsætter med at bruge botten efter en ændring, accepterer du den nye politik.

## Kontakt

Spørgsmål om denne politik eller en anmodning om sletning: tilslut dig [AirReps Discord](https://airreps.link/discord) og skriv til personalet.
