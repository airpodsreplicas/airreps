---
title: 'FlyCC APK-guide: Sådan konfigurerer og finjusterer du Airoha AirPods-kopier'
description: 'Sådan downloader, installerer og bruger du FlyCC sikkert — tilpasset EQ-justering, tilknytning af touchbetjening, firmwareopdateringer og fejlfinding af forbindelsesproblemer.'
category: Brug af dine kopier
order: 13
---
# FlyCC APK-guide: Sådan konfigurerer og finjusterer du Airoha AirPods-kopier

FlyCC er den uundværlige ledsagerapp til AirPods-kopier med **Airoha-chipsets** (herunder Airoha 1562AE, 1562E, 1562F og 1571AM). Da Apples indbyggede iOS-indstillinger kun giver adgang til de mest grundlæggende funktioner, giver FlyCC adgang til chippen på lavt niveau: brugerdefineret parametrisk EQ, kalibrering af berøringssensorer, justering af aktiv støjreduktion (ANC) og OTA-firmwareopdateringer.

> **Kort svar:** FlyCC er et gratis tredjepartsværktøj til Android, iOS og macOS, der er udviklet specifikt til AirPods-kopier med Airoha-chips. Det giver dig mulighed for at tilpasse lydprofiler med en indbygget equalizer, ændre følsomheden for klem og tryk samt installere firmwareopdateringer trådløst. Det registrerer ikke kopier med Huilian-, BES- eller budget-Jieli-chips.

::: tip Android, iPhone eller Mac
FlyCC fås som en Android-APK og i iOS App Store; der er links til begge på [Nyttige apps](/da/useful-apps#tigerbuilder). Du kan også bruge communityens macOS-version. Indstillinger, der gemmes på øretelefonerne, bevares, selv når du skifter til en anden telefon.
:::

## Understøttede chipsets

FlyCC fungerer udelukkende med **Airoha-hardware**. Hvis øretelefonerne opretter forbindelse, har du bekræftet, at de indeholder ægte Airoha-chips:

- **Airoha 1562AE / 1571AM** — Fuld funktionsunderstøttelse: ANC-kalibrering med to mikrofoner, brugerdefineret EQ, til/fra-indstillinger for rumlig lyd med hovedsporing og OTA-opdateringer.
- **Airoha 1562E / 1563E** — Standard-EQ, berøringskontroller og firmwareværktøjer.
- **Airoha 1562F** — Ældre ANC- og EQ-kontroller.

Hvis FlyCC scanner på ubestemt tid uden at finde dine øretelefoner, bruger dit par chips fra en anden producent (f.eks. Huilian, som bruger [Starfun](/da/useful-apps)) eller en Jieli-chip i begynderklassen.

## Sådan downloader og installerer du FlyCC sikkert

Da FlyCC kommunikerer med Bluetooth-hardware, der ikke er MFi-certificeret, distribueres appen direkte som en APK i stedet for via Google Play.

1. Download den seneste verificerede APK direkte fra [oversigten over nyttige apps](/da/useful-apps).
2. Gå til **Indstillinger → Sikkerhed** på din Android-enhed, og aktivér **"Installer ukendte apps"** for din browser eller filhåndtering.
3. Åbn den downloadede `.apk`-fil, og tryk på **Installer**.
4. Giv de ønskede tilladelser til **Bluetooth / enheder i nærheden** og **placering**. (Android kræver placeringstilladelser for at søge efter Bluetooth Low Energy-enheder; FlyCC sporer ikke GPS-data).

## Vigtige funktioner og brug af dem

### 1. Brugerdefineret EQ og lydjustering

Nogle kopier har fra fabrikken en overdrevet basgengivelse. FlyCC har en equalizer med 10 bånd, så du kan finjustere lyden:

- **Reducering af bas**: Sænk skyderne for 31Hz, 62Hz og 125Hz med 2–3dB for at få et renere og mere neutralt lydbillede, der minder om originale AirPods Pro.
- **Tydeligere vokaler**: Hæv båndene ved 1kHz og 2kHz med 1.5dB for at fremhæve podcasts og vokaler.
- **Gem på øretelefonerne**: Tryk på **Gem på øretelefoner**, når du er færdig med at justere. Lydindstillingerne skrives direkte til Airoha-DSP'en, så din brugerdefinerede EQ forbliver aktiv, når du igen opretter forbindelse til din iPhone, iPad eller pc.

### 2. Kalibrering af berøring og bevægelser

Hvis øretelefonerne ved et uheld sætter afspilningen på pause, når du justerer dem i øret, kan du med FlyCC justere følsomheden for tryksensoren fra 1 (letteste tryk) til 5 (fast klem). Du kan også tilknytte bestemte funktioner til enkelt-, dobbelt- og trippeltryk.

### 3. Justering af støjreduktion

I ANC-menuen kan du kalibrere venstre og højre feedforward-mikrofon uafhængigt af hinanden. Hvis det føles, som om trykket i øregangen er højere i den ene øretelefon, eller støjreduktionen er svagere, kan du bruge kalibreringsskyderen til at genbalancere faseinversionen.

## Sikker firmwareopdatering (OTA)

FlyCC kan installere opdaterede firmwarefiler for at rette fejl i iOS-forbindelseshåndtrykket eller forbedre forbindelsen. Opdatering indebærer dog en risiko for, at enheden bliver ubrugelig, hvis processen afbrydes:

1. **Oplad begge øretelefoner og etuiet til over 80 %** inden start.
2. Hold opladningsetuiet åbent med begge øretelefoner i, højst 30 centimeter fra telefonen.
3. Tryk på **Søg efter opdateringer** i FlyCC. Hvis der er en opdatering, skal du downloade pakken.
4. Tryk på **Start opdatering**. **Luk ikke etuiets låg, slå ikke Bluetooth fra, og skift ikke app**, før statuslinjen når 100 % og viser "Opdatering gennemført".
5. Når processen er færdig, skal du lade øretelefonerne ligge i det lukkede etui i 60 sekunder, før du parrer dem igen.

Læs [Sådan opdaterer du firmware på falske AirPods](/da/articles/how-to-update-fake-airpods-firmware) for en omfattende guide til sikker opdatering af alle chipsets i kopier.

## Fejlfinding af forbindelsesproblemer med FlyCC

Hvis FlyCC ikke kan finde dine øretelefoner:

- **Tjek telefonens aktive lydforbindelse**: Sørg for, at øretelefonerne allerede er parret i Androids indbyggede Bluetooth-indstillinger, før du åbner FlyCC.
- **Giv tilladelse til enheder i nærheden**: På Android 12 og nyere kan FlyCC ikke finde Bluetooth LE-enheder, medmindre tilladelsen "Enheder i nærheden" er aktiveret.
- **Find ud af, hvilken chip du har**: Hvis øretelefonerne ikke opretter forbindelse til FlyCC, kan du prøve at søge med **CloudCC** eller **Starfun**. Hvis ingen af appsene opretter forbindelse, kan du se [Sådan genkender du falske AirPods](/da/articles/how-to-spot-fake-airpods) for at undersøge, om du har en billig Jieli-kopi.
- **Ryd parringscachen**: Hvis forbindelsen afbrydes, skal du nulstille controlleren ved hjælp af vores [nulstillingsguide](/da/articles/how-to-reset-fake-airpods).

## Relaterede vejledninger

- Bruger du kopier til daglig med Android? Se [AirPods-kopier på Android](/da/articles/airpods-replicas-on-android).
- Har du brug for værktøjer til andre chips? Se hele [kataloget over nyttige apps](/da/useful-apps).
- Vil øretelefonerne ikke oprette forbindelse? Følg vejledningen [Falske AirPods opretter ikke forbindelse](/da/articles/fake-airpods-wont-connect).
- Leder du efter verificerede Airoha-modeller? Se [oversigten over betroede sælgere](/da/links/info).

## FAQ

::: details Er det sikkert at installere FlyCC på min telefon?
Ja. APK-filerne i communityens oversigt over nyttige apps stammer fra officielle leverandørkæder og er kontrolleret for malware. Appen kræver kun adgang til Bluetooth for at kommunikere med Airoha-lydprocessoren.
:::

::: details Kan jeg bruge FlyCC på en iPhone?
Ja. FlyCC findes både i iOS App Store og som en Android-APK; der er links til begge på [Nyttige apps](/da/useful-apps#tigerbuilder). Alle ændringer af EQ og kontroller gemmes permanent i øretelefonernes interne hukommelse, så de bevares, når du skifter enhed.
:::

::: details Hvorfor siger FlyCC "Enhed ikke fundet"?
Den mest almindelige årsag er et mismatch mellem chipsene: FlyCC fungerer kun med Airoha-chips. Hvis du har en Huilian-model, skal du bruge Starfun. TigerBuilder-modeller bruger FlyCC; CloudCC er kun en løsning, hvis FlyCC støder på et problem med lagringstilladelser. Hvis ingen af appsene kan oprette forbindelse, har du sandsynligvis en billig Jieli-enhed.
:::
