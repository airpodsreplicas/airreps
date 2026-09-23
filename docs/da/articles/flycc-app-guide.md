---
title: 'FlyCC APK-vejledning: Sådan konfigurerer og finjusterer du Airoha AirPods-kopier'
description: 'Sådan downloader, installerer og bruger du FlyCC sikkert — tilpasset EQ-justering, tilknytning af berøringskontroller, firmwareopdateringer og fejlfinding af forbindelsesfejl.'
category: Brug af dine kopier
order: 13
---
# FlyCC APK-guide: Sådan konfigurerer og finjusterer du Airoha-baserede AirPods-kopier

FlyCC er den nødvendige ledsagerapp til AirPods-kopier, der bruger **Airoha-chipset** (herunder Airoha 1562AE, 1562E, 1562F og 1571AM). Da Apples oprindelige iOS-indstillinger kun giver adgang til overfladiske funktioner, giver FlyCC adgang på lavt niveau til chippen: tilpasset parametrisk EQ-justering, kalibrering af berøringssensorer, balancering af aktiv støjreduktion (ANC) og OTA-firmwareopdatering.

> **Kort svar:** FlyCC er et gratis tredjepartsværktøj til Android og macOS, som er specielt udviklet til Airoha-baserede AirPods-kopier. Det giver dig mulighed for at tilpasse lydprofiler via en indbygget equalizer, ændre følsomheden for tryk og tryk på sensoren samt installere firmwareopdateringer trådløst. Det registrerer ikke kopier, der bruger Huilian-, BES- eller billige Jieli-chips.

::: tip Android eller Mac er påkrævet
FlyCC kan ikke installeres fra Apple iOS App Store på grund af Apples begrænsninger for tredjepartshardware. Hvis du vil konfigurere dine Airoha-øretelefoner, skal du installere Android-APK'en på en Android-smartphone eller bruge community-udgaven til macOS. Indstillinger, der gemmes på øretelefonerne, bevares, selv når du skifter tilbage til en iPhone.
:::

## Understøttede chipset

FlyCC fungerer udelukkende med **Airoha-hardware**. Hvis dine øretelefoner opretter forbindelse, har du bekræftet, at der sidder ægte Airoha-silicium i dem:

- **Airoha 1562AE / 1571AM** — Fuld funktionsunderstøttelse: ANC-kalibrering med to mikrofoner, tilpasset EQ, til/fra-funktioner for rumlig lyd med hovedsporing og OTA-opdateringer.
- **Airoha 1562E / 1563E** — Standard-EQ, berøringskontroller og firmwareværktøjer.
- **Airoha 1562F** — Ældre ANC- og EQ-kontroller.

Hvis FlyCC scanner uendeligt og aldrig registrerer dine øretelefoner, bruger dit par silicium fra en anden producent (f.eks. Huilian, som bruger [Starfun](/da/useful-apps), eller TigerBuilder, som bruger [CloudCC](/da/useful-apps)) eller en Jieli-chip på begynderniveau.

## Sådan downloader og installerer du FlyCC sikkert

Da FlyCC kommunikerer med Bluetooth-hardware, der ikke er MFi-godkendt, distribueres den direkte som en APK i stedet for via Google Play.

1. Download den seneste verificerede APK direkte fra [mappen med nyttige apps](/da/useful-apps).
2. Gå på din Android-enhed til **Indstillinger → Sikkerhed**, og aktivér **"Installer ukendte apps"** for din browser eller filhåndtering.
3. Åbn den downloadede `.apk`-fil, og tryk på **Installer**.
4. Giv de ønskede tilladelser til **Bluetooth / enheder i nærheden** og **Placering**. (Android kræver placeringstilladelser for at scanne efter Bluetooth-enheder med lavt energiforbrug; FlyCC sporer ikke GPS-data).

## Vigtige funktioner og sådan bruger du dem

### 1. Tilpasset EQ og lydjustering

Nogle kopipartier har fra fabrikken en overdrevet basgengivelse. FlyCC har en 10-bånds equalizer, så du kan finjustere lydoutputtet:

- **Reduktion af bas**: Sænk skyderne for 31Hz, 62Hz og 125Hz med 2–3 dB for et renere og mere neutralt lydbillede, der matcher AirPods Pro fra detailhandlen.
- **Klarere vokal**: Hæv båndene ved 1kHz og 2kHz med 1,5 dB for at fremhæve podcasts og vokaler.
- **Gem på hardware**: Når du er færdig med at justere, skal du trykke på **Gem på øretelefoner**. Lydjusteringen skrives direkte til Airoha DSP'en, hvilket betyder, at den tilpassede EQ forbliver aktiv, når du opretter forbindelse til din iPhone, iPad eller pc igen.

### 2. Kalibrering af berøring og bevægelser

Hvis dine øretelefoner ved et uheld sætter afspilningen på pause, når du justerer dem i øret, giver FlyCC dig mulighed for at justere tryksensorens følsomhed fra 1 (letteste tryk) til 5 (fast klem). Du kan også tilknytte enkelt-, dobbelt- og trippeltryk til bestemte funktioner.

### 3. Justering af støjreduktion

I ANC-menuen giver FlyCC mulighed for uafhængig kalibrering af venstre og højre fremadrettede mikrofoner. Hvis det føles, som om den ene øretelefon giver højere tryk i øret eller svagere støjreduktion, genbalancerer kalibreringsskyderen faseinverteringen.

## Sikker firmwareopdatering (OTA)

FlyCC kan installere opdaterede firmwarebinære filer for at rette fejl i iOS-håndtrykket eller forbedre forbindelsen. Firmwareinstallation indebærer dog en risiko for, at enheden gøres ubrugelig, hvis processen afbrydes:

1. **Oplad begge øretelefoner og etuiet til over 80 %** før start.
2. Hold opladningsetuiet åbent med begge øretelefoner placeret i det og inden for 30 centimeter fra din telefon.
3. Tryk på **Søg efter opdateringer** i FlyCC. Hvis der findes en opdatering, skal du downloade pakken.
4. Tryk på **Start opdatering**. **Luk ikke låget på etuiet, slå ikke Bluetooth fra, og skift ikke app**, før statuslinjen når 100 % og viser "Opdatering gennemført".
5. Når processen er færdig, skal du lade øretelefonerne blive i det lukkede etui i 60 sekunder, før du parrer dem igen.

Læs [Sådan opdaterer du firmware på falske AirPods](/da/articles/how-to-update-fake-airpods-firmware) for en omfattende vejledning i sikker firmwareinstallation på alle kopichipsæt.

## Fejlfinding ved forbindelsesproblemer med FlyCC

Hvis FlyCC nægter at finde dine øretelefoner:

- **Kontrollér telefonens aktive lydforbindelse**: Sørg for, at øretelefonerne allerede er parret i Androids oprindelige Bluetooth-indstillinger, før du åbner FlyCC.
- **Giv tilladelse til enheder i nærheden**: På Android 12 og nyere kan FlyCC ikke registrere Bluetooth LE-enheder uden den aktiverede tilladelse til **"Enheder i nærheden"**.
- **Identificér din chip**: Hvis dine øretelefoner nægter at oprette forbindelse til FlyCC, kan du prøve at scanne med **CloudCC** eller **Starfun**. Hvis ingen app opretter forbindelse, kan du se [Sådan genkender du falske AirPods](/da/articles/how-to-spot-fake-airpods) for at undersøge, om der er tale om en billig Jieli-kopi.
- **Ryd parringscachen**: Hvis forbindelsen afbrydes, skal du nulstille controlleren ved hjælp af vores [nulstillingsvejledning](/da/articles/how-to-reset-fake-airpods).

## Relaterede vejledninger

- Bruger du kopier sammen med Android til daglig? Se [AirPods-kopier på Android](/da/articles/airpods-replicas-on-android).
- Har du brug for andre chipværktøjer? Se det komplette [katalog over nyttige apps](/da/useful-apps).
- Nægter øretelefonerne at oprette forbindelse? Følg vejledningen i [Falske AirPods opretter ikke forbindelse](/da/articles/fake-airpods-wont-connect).
- Leder du efter verificerede Airoha-modeller? Gennemse [fortegnelsen over pålidelige sælgere](/da/links/info).

## Ofte stillede spørgsmål

::: details Er FlyCC sikkert at installere på min telefon?
Ja. APK-filerne i communityets mappe med nyttige apps er hentet fra officielle producenters forsyningskæder og kontrolleret for malware. Appen kræver kun Bluetooth-adgang for at kommunikere med Airoha-lydprocessoren.
:::

::: details Kan jeg bruge FlyCC på en iPhone?
Nej. Apple tillader ikke tredjepartsapps at få adgang til rå Bluetooth-serieprofiler for hardware, der ikke er MFi-godkendt. Du skal bruge en Android-telefon eller en Mac for at ændre FlyCC-indstillinger. Alle EQ- og kontrolændringer skrives dog permanent til øretelefonernes interne hukommelse, så de overføres automatisk til din iPhone.
:::

::: details Hvorfor viser FlyCC "Enhed ikke fundet"?
Den mest almindelige årsag er et mismatch mellem chipsættet og appen: FlyCC fungerer kun med Airoha-chips. Hvis du har en Huilian-model, skal du bruge Starfun; hvis du har en TigerBuilder-model, skal du bruge CloudCC. Hvis ingen af dem opretter forbindelse, har du sandsynligvis en billig Jieli-enhed.
:::
