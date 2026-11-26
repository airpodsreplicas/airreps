---
title: 'FlyCC App-guide: Juster Airoha AirPods-kopier'
description: 'Sådan downloader, installerer og bruger du FlyCC sikkert — tilpasning af EQ, konfiguration af touchbetjening, firmwareopdateringer og fejlfinding ved forbindelsesproblemer.'
category: Brug af dine kopier
order: 13
---
# FlyCC APK-guide: Sådan konfigurerer og finjusterer du AirPods-replikaer med Airoha

FlyCC er den uundværlige ledsagerapp til AirPods-replikaer med **Airoha-chipsets** (herunder Airoha 1562AE, 1562E, 1562F og 1571AM). Da Apples indbyggede iOS-indstillinger kun giver adgang til grundlæggende funktioner, giver FlyCC adgang til chippen på lavt niveau: brugerdefineret parametrisk EQ, kalibrering af berøringssensorer, justering af aktiv støjreduktion (ANC) og OTA-opdatering af firmware.

> **Kort svar:** FlyCC er et gratis tredjepartsværktøj til Android, iOS og macOS, som er udviklet specifikt til AirPods-replikaer med Airoha. Det lader dig tilpasse lydprofiler med en indbygget equalizer, ændre følsomheden for klem og tryk samt installere firmwareopdateringer trådløst. Appen finder ikke replikaer med Huilian-, BES- eller Jieli-chips i budgetklassen.

::: tip Android, iPhone eller Mac
FlyCC fås som en Android-APK og i iOS App Store; der er links til begge på [Nyttige apps](/da/useful-apps#tigerbuilder). Du kan også køre fællesskabets macOS-version. Indstillinger, der gemmes på øretelefonerne, bevares, selvom du skifter til en anden telefon.
:::

<CommunityCta variant="apps" />

## Understøttede chipsets

FlyCC fungerer udelukkende med **Airoha / TigerBuilder-hardware**. Hvis dine øretelefoner opretter forbindelse, har du bekræftet, at de indeholder ægte Airoha-chips:

| Airoha-chipset | Eksempler på replikaer | FlyCC-understøttelse |
| :--- | :--- | :--- |
| **Airoha 1571AM** | Pro 3 V7 TB, Pro 2 V5.3 TB, AirPods 4 V3 TB | Fuld EQ, ANC, berøringsstyring, hovedsporing, OTA |
| **Airoha 1562AE** | Pro 2 V5.2 TB, AirPods Max V3 TB, Pro 1 V4.9 | Fuld EQ, ANC, berøringsstyring, hovedsporing, OTA |
| **Airoha 1563E / 1562E** | Pro 3 V6 TB, AirPods 4 V2 TB, AirPods 2 V3E | Standard-EQ, berøringsstyring, firmwareværktøjer |
| **Airoha 1561M / 1562F** | AirPods Max V3P / V2 Metal, ældre modeller | EQ og grundlæggende firmwareværktøjer |

Hvis FlyCC scanner uendeligt uden nogensinde at finde dine øretelefoner, bruger dit sæt chips fra en anden producent (såsom Huilian, som bruger [StarFun](/da/articles/starfun-app-guide)) eller en Jieli-chip i budgetklassen.

## Sådan downloader og installerer du FlyCC sikkert

Da FlyCC kommunikerer med Bluetooth-hardware, der ikke er MFi-certificeret, distribueres appen direkte som en APK i stedet for via Google Play.

1. Download den seneste verificerede APK direkte fra [mappen Nyttige apps](/da/useful-apps).
2. Gå til **Indstillinger → Sikkerhed** på din Android-enhed, og slå **"Installer ukendte apps"** til for din browser eller filhåndtering.
3. Åbn den downloadede `.apk`-fil, og tryk på **Installer**.
4. Giv de anmodede tilladelser til **Bluetooth / Enheder i nærheden** og **Placering**. (Android kræver placeringstilladelser for at scanne efter Bluetooth LE-enheder; FlyCC sporer ikke GPS-data).

## Vigtige funktioner, og hvordan du bruger dem

### 1. Brugerdefineret EQ og lydtilpasning

Nogle replikaer har en overdreven basgengivelse fra fabrikken. FlyCC indeholder en 10-bånds equalizer, så du kan finjustere lyden:

- **Reducer bas**: Sænk skyderne for 31Hz, 62Hz og 125Hz med 2–3dB for at få et renere og mere neutralt lydbillede, der minder om originale AirPods Pro.
- **Gør vokaler tydeligere**: Hæv båndene ved 1kHz og 2kHz med 1.5dB for at fremhæve podcasts og vokaler.
- **Gem på hardwaren**: Tryk på **Gem på øretelefoner**, når du er færdig med at justere. Lydindstillingerne skrives direkte til Airoha DSP'en, så den brugerdefinerede EQ forbliver aktiv, når du tilslutter til din iPhone, iPad eller pc igen.

### 2. Kalibrering af berøring og bevægelser

Hvis dine øretelefoner sættes på pause ved et uheld, når du justerer dem i øret, kan du med FlyCC ændre kraftsensorens følsomhed fra 1 (letteste tryk) til 5 (fast klem). Du kan også tilknytte bestemte funktioner til enkelt-, dobbelt- og trippeltryk.

### 3. Justering af støjreduktion

I ANC-menuen kan du med FlyCC kalibrere venstre og højre feedforward-mikrofon hver for sig. Hvis det føles, som om den ene øretelefon giver større tryk i øregangen eller svagere støjreduktion, kan du bruge kalibreringsskyderen til at afbalancere faseinverteringen.

## Sikker firmwareopdatering (OTA)

FlyCC kan installere opdateret firmware for at rette fejl i iOS-håndtryk eller forbedre forbindelsen. Opdateringen indebærer dog en risiko for, at enheden bliver ubrugelig, hvis processen afbrydes:

1. **Oplad begge øretelefoner og etuiet til over 80 %** inden start.
2. Hold opladningsetuiet åbent med begge øretelefoner placeret i det, højst 30 centimeter fra telefonen.
3. Tryk på **Søg efter opdateringer** i FlyCC. Hvis der er en opdatering, skal du downloade pakken.
4. Tryk på **Start opdatering**. **Luk ikke etuiet, slå ikke Bluetooth fra, og skift ikke app**, før statuslinjen når 100 % og viser "Opdatering gennemført."
5. Når opdateringen er færdig, skal du lade øretelefonerne blive i det lukkede etui i 60 sekunder, før du parrer dem igen.

::: warning Bemærkning om Pro 3 V7 TB
På **AirPods Pro 3 V7 TB** forsvinder iOS-pop op-vinduet og serienummeret efter en firmwareopdatering i FlyCC. De skal tilføjes igen i FlyCC-appen. V7 Huilian (StarFun) påvirkes ikke.
:::

Læs [Sådan opdaterer du firmware på falske AirPods](/da/articles/how-to-update-fake-airpods-firmware) for en omfattende vejledning i sikker opdatering af alle replika-chipsets.

## Fejlfinding af forbindelsesproblemer med FlyCC

Hvis FlyCC ikke kan finde dine øretelefoner:

- **Kontrollér telefonens aktive lydforbindelse**: Sørg for, at øretelefonerne allerede er parret i Androids indbyggede Bluetooth-indstillinger, før du åbner FlyCC.
- **Giv tilladelse til enheder i nærheden**: På Android 12 og nyere kan FlyCC ikke finde Bluetooth LE-enheder, hvis tilladelsen "Enheder i nærheden" ikke er slået til.
- **Find ud af, hvilken chip du har**: Hvis dine øretelefoner ikke vil oprette forbindelse til FlyCC, kan du prøve at scanne med **[StarFun](/da/articles/starfun-app-guide)** (til Huilian-chips) eller **CloudCC** (kun en omvej ved ældre problemer med TB-lagringstilladelser). Hvis ingen apps kan oprette forbindelse, kan du se [Sådan genkender du falske AirPods](/da/articles/how-to-spot-fake-airpods) for at undersøge, om det er en Jieli-kopi i budgetklassen.
- **Ryd parringens cache**: Hvis forbindelsen afbrydes, skal du nulstille styringenheden med vores [nulstillingsvejledning](/da/articles/how-to-reset-fake-airpods).

<CommunityCta variant="stuck" />

## Relaterede vejledninger

- Har du en Huilian-replika? Læs vores [vejledning til StarFun-appen](/da/articles/starfun-app-guide).
- Bruger du replikaer med Android til daglig? Se [AirPods-replikaer på Android](/da/articles/airpods-replicas-on-android).
- Har du brug for værktøjer til andre chips? Se hele kataloget over [nyttige apps](/da/useful-apps).
- Leder du efter en verificeret Airoha-model? Tag [quizzen på 1 minut](/da/quiz), eller se [oversigten over betroede sælgere](/da/links/info).

## Ofte stillede spørgsmål

::: details Er det sikkert at installere FlyCC på min telefon?
Ja. APK-filerne i fællesskabets mappe med nyttige apps er hentet fra officielle forsyningskæder hos producenterne og kontrolleret for malware. Appen kræver kun Bluetooth-adgang for at kommunikere med Airoha-lydprocessoren.
:::

::: details Kan jeg bruge FlyCC på en iPhone?
Ja. FlyCC findes i iOS App Store og som Android-APK; der er links til begge på [Nyttige apps](/da/useful-apps#tigerbuilder). Alle ændringer af EQ og betjening gemmes permanent i øretelefonernes interne hukommelse, så de bevares, når du skifter enhed.
:::

::: details Hvorfor viser FlyCC "Enhed ikke fundet"?
Den mest almindelige årsag er, at chipsene ikke passer sammen: FlyCC fungerer kun med Airoha-chips. Hvis du har en Huilian-model, skal du bruge StarFun. TigerBuilder-modeller bruger FlyCC; CloudCC er kun en omvej, hvis FlyCC støder på problemet med lagringstilladelser. Hvis ingen af dem kan oprette forbindelse, har du sandsynligvis en Jieli-model i budgetklassen.
:::
