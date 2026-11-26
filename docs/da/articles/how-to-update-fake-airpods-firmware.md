---
title: Sådan opdaterer du firmware på falske AirPods sikkert
description: 'Opdater firmware på AirPods-kopier sikkert med FlyCC (Airoha/TB) og StarFun (Huilian): 80 %-reglen for batteri, forebyggelse af at gøre enheden ubrugelig, og hvornår du ikke skal opdatere.'
category: Fejlfinding
order: 16
---
# Sådan opdaterer du firmwaren på falske AirPods: trinvis vejledning

I modsætning til ægte Apple AirPods, der opdateres lydløst i baggrunden via iOS, opdateres AirPods-kopier via ledsagerapps fra fællesskabet. Både **FlyCC** og **StarFun** findes til Android og i iOS App Store, selvom Android-APK'er stadig er den mest pålidelige løsning til fuld OTA-flashing på tværs af alle chipsets. Firmwareopdateringer kan løse iOS-forbindelsesproblemer, forbedre stabiliteten af aktiv støjreduktion (ANC) eller afhjælpe forbindelsesafbrydelser.

Firmwareflashning skriver dog direkte til øretelefonernes interne flashlager. En afbrudt opdatering kan gøre en controller permanent ubrugelig. Denne vejledning gennemgår sikre, afprøvede flashprocedurer fra fællesskabet for alle større chipsets til kopier.

> **Kort svar:** Hvis du vil opdatere firmwaren på AirPods-kopier, skal du først identificere dit chipset, så du kan vælge det rette værktøj: **FlyCC** (Airoha, herunder TigerBuilder) eller **StarFun** (Huilian). Sørg for, at begge øretelefoner og opladningsetuiet er opladet til over 80 %. Lad etuiets låg være åbent, behold begge øretelefoner i etuiet, start OTA-opdateringen i appen, og undlad at lukke låget, slå Bluetooth til eller fra eller afslutte appen, indtil forløbet når 100 %.

::: warning Den vigtigste regel: Hvis det virker, så lad det være
Firmwareopdateringer på kopier fungerer ikke som patches til videospil. De udgives primært for at rette fejl, der opstår som følge af større iOS-opdateringer, eller for at afhjælpe alvorlige hardwarefejl. Hvis dine øretelefoner i øjeblikket opretter forbindelse uden problemer, lyder godt, og ANC fungerer fejlfrit, **skal du ikke opdatere firmwaren**. Unødvendig flashning indebærer kun en risiko for at gøre enheden ubrugelig.
:::

<CommunityCta variant="apps" />

## Tjekliste til sikkerhed før opdatering

Kontrollér uden undtagelse, at disse fire betingelser er opfyldt, før du trykker på opdateringsknappen:

1. **Batteriniveau over 80 %**: Sørg for, at både øretelefonerne og opladningsetuiet er opladet mindst 80 %. Hvis en øretelefon løber tør for strøm midt under flashningen, bliver bootloaderen ødelagt.
2. **Lad etuiet være tilsluttet strøm**: Tilslut opladningsetuiet til en 5 V/1 A-vægadapter eller powerbank under opdateringen.
3. **Lad låget være åbent**: Øretelefonerne skal blive siddende på opladningskontakterne med etuiets låg åbent under hele overførslen.
4. **Deaktiver automatisk låsning/skærmslukning**: Hold telefonskærmen tændt. Hvis telefonen går i dyb dvale eller lukker baggrundsprocesser, kan Bluetooth-overførslen gå i stå.

## Trin 1: Identificér dit chipset og din app

Hvis du flasher en firmwarefil, der er beregnet til en Airoha-chip, på et Huilian-printkort, bliver enheden straks ubrugelig. Vælg det værktøj, der passer til din chip, i vores [katalog over nyttige apps](/da/useful-apps):

- **Airoha-chipsets (1562AE, 1562E, 1571AM)** → Brug **FlyCC** (Læs vores [FlyCC-appvejledning](/da/articles/flycc-app-guide)).
- **TigerBuilder-chipsets (1562AE/TB, 1571AM/TB)** → Brug **FlyCC**. CloudCC er forældet, siden TigerBuilder integrerede OTA-funktionalitet i FlyCC; brug det kun som en løsning, hvis du støder på problemet med lagertilladelser.
- **Huilian-chipsets (247, 277, 377, 377H3)** → Brug **StarFun** (Læs vores [StarFun-appvejledning](/da/articles/starfun-app-guide)).
- **Jieli-chipsets (Jerry)** → Jieli-kopier i den lave ende understøtter ikke OTA-firmwareopdateringer.

## Trin 2: Trinvise opdateringsprocedurer

### Metode A: Opdatering med FlyCC (Airoha)

1. Tilslut dine AirPods til telefonen via de almindelige Bluetooth-indstillinger.
2. Åbn **FlyCC**, og kontrollér, at din model vises på startskærmen.
3. Tryk på **Firmware Update** (eller **OTA Update**).
4. Tryk på **Check for Updates**. Hvis appen finder en ny version, viser den buildnummeret og ændringsloggen.
5. Tryk på **Start Update**. Du vil se to trin: overførsel af firmwarefilen til den venstre øretelefon og derefter til den højre.
6. Når forløbet når 100 %, skal du vente på meddelelsen: *"Update Successful"*.
7. Luk opladningsetuiets låg, og lad etuiet stå urørt i 60 sekunder, så mikrokontrollerne kan genstarte.

::: warning Bemærkning om Pro 3 V7 TB-firmware
Efter en firmwareopdatering i FlyCC på **AirPods Pro 3 V7 TB** forsvinder iOS-pop op-vinduet og serienummeret, og de skal tilføjes igen i FlyCC-appen. V7 Huilian (StarFun) er ikke berørt.
:::

### Metode B: CloudCC-løsning (TigerBuilder)

TigerBuilder-enheder opdateres via FlyCC (metode A). Brug kun CloudCC, hvis FlyCC støder på problemet med lagertilladelser:

1. Læg begge øretelefoner i etuiet med låget åbent.
2. Åbn **CloudCC**, og tryk på **Search Device**.
3. Vælg din TigerBuilder-enhed, når den er fundet.
4. Gå til fanen **Firmware**, og tryk på **Query Latest Version**.
5. Vælg sky-pakken, og tryk på **Download and Update**.
6. Læg telefonen lige ved siden af opladningsetuiet, indtil meddelelsen bekræfter, at opdateringen er fuldført.

### Metode C: Opdatering med StarFun (Huilian)

1. Sørg for, at øretelefonerne er tilsluttet telefonen, og at låget er åbent.
2. Åbn **StarFun**, og tryk på ikonet **Settings / Firmware**.
3. Sammenlign den aktuelle firmwareversion med den nyeste version i skyen.
4. Tryk på **Upgrade**. Appen skriver konfigurationsblokkene sekventielt.
5. Når enheden er genstartet, skal du glemme enheden i telefonens Bluetooth-menu og foretage en blød nulstilling.

## Hvad gør du, hvis en opdatering fryser eller mislykkes?

Hvis en opdatering går i stå ved en bestemt procent (f.eks. fryser ved 45 % i over 5 minutter):

1. **Luk ikke låget, og tag ikke øretelefonerne ud.**
2. Kontrollér, om Bluetooth er blevet afbrudt. Hvis appen giver mulighed for det, skal du trykke på **Retry** eller genstarte appen, mens øretelefonerne bliver siddende.
3. Hvis øretelefonerne bliver helt uresponsive, skal du følge vores [vejledning til nulstilling af falske AirPods](/da/articles/how-to-reset-fake-airpods) for at udføre en hård nulstilling af controlleren på 15 sekunder.
4. Åbn opdateringsappen igen — i de fleste tilfælde gør genoprettelses-bootloaderen det muligt at flashe pakken igen fra 0 %.

<CommunityCta variant="stuck" />

## Relaterede fejlfindingsvejledninger

- Bruger du en Huilian-kopi? Følg [StarFun-appvejledningen](/da/articles/starfun-app-guide).
- Vises øretelefonerne ikke i firmwareappen? Se [Falske AirPods kan ikke oprette forbindelse](/da/articles/fake-airpods-wont-connect) eller [Sådan nulstiller du falske AirPods](/da/articles/how-to-reset-fake-airpods).
- Har du brug for downloadlinks til apps? Besøg [Nyttige apps](/da/useful-apps).
- Opgraderer du fra en ældre kopi, der ikke kan opdateres? Tag [den 1-minuts quiz](/da/quiz), eller se [pålidelige sælgere](/da/links/info).

## Ofte stillede spørgsmål

::: details Kan jeg opdatere firmwaren på AirPods-kopier med en iPhone?
Både **FlyCC** og **StarFun** findes i iOS App Store til EQ, indstillinger og kontrol af firmwarestatus (og FlyCC til iOS understøtter kontrol af og opdatering til nyere TigerBuilder-modeller som V5.3 TB). For ældre modeller, eller hvis en iOS-app ikke vil starte en OTA-flashning, er det mest pålidelige alternativ at låne en Android-telefon og bruge APK'en fra [Nyttige apps](/da/useful-apps). Når firmwaren er opdateret, forbliver den permanent på øretelefonerne.
:::

::: details Giver en opdatering mine AirPods-kopier adgang til Apples Find My-netværk?
Nej. Find My-netværket er afhængigt af Apples egne kryptografiske certifikater, som ikke kan tilføjes via firmwareopdateringer.
:::

::: details Kan en firmwareopdatering gøre mine falske AirPods ubrugelige?
Ja, hvis opdateringen afbrydes, fordi batteriet løber tør, låget lukkes for tidligt, eller der flashes en firmwarefil, som er beregnet til et andet chipset. Følg altid sikkerhedstjeklisten før opdatering ovenfor.
:::
