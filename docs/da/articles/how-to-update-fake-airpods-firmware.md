---
title: 'Sådan opdaterer du firmwaren på falske AirPods: trinvis vejledning'
description: 'Sådan opdaterer du sikkert firmwaren på AirPods-kopier med FlyCC, CloudCC og Starfun — regler for sikker opladning, sådan undgår du at gøre dem ubrugelige, og hvornår du bør lade firmwaren være.'
category: Fejlfinding
order: 16
---
# Sådan opdaterer du firmware på falske AirPods: trinvis vejledning

I modsætning til ægte Apple AirPods, der opdateres lydløst i baggrunden via iOS, opdateres AirPods-kopier via ledsagerapps fra fællesskabet, som kører på Android, iOS eller macOS. En firmwareopdatering kan løse fejl i iOS-håndtrykket, forbedre stabiliteten af aktiv støjreduktion (ANC) eller afhjælpe forbindelsesudfald.

Firmwareopdateringer skriver dog direkte til øretelefonernes interne flashlager. Hvis en opdatering afbrydes, kan controlleren blive permanent ødelagt. Denne vejledning gennemgår de sikre, fællesskabstestede fremgangsmåder til firmwareopdatering for alle større kopichipsæt.

> **Kort svar:** For at opdatere firmware på AirPods-kopier skal du først identificere chipsættet og vælge det rigtige værktøj: **FlyCC** (Airoha, inklusive TigerBuilder) eller **Starfun** (Huilian). Sørg for, at begge øretelefoner og opladningsetuiet er opladet til over 80 %. Lad låget til etuiet være åbent, behold begge øretelefoner i etuiet, start OTA-opdateringen i appen, og luk ikke låget, slå ikke Bluetooth fra, og afslut ikke appen, før forløbet når 100 %.

::: warning Den vigtigste regel: Hvis det virker, så lad det være
Firmwareopdateringer på kopier fungerer ikke som opdateringer til videospil. De udgives primært for at rette fejl, der opstår som følge af større iOS-opdateringer, eller for at løse alvorlige hardwarefejl. Hvis dine øretelefoner i øjeblikket opretter forbindelse uden problemer, lyder godt, og ANC fungerer fejlfrit, **skal du ikke opdatere firmwaren**. Unødvendig firmwareopdatering medfører kun risiko for at ødelægge enheden.
:::

## Tjekliste for sikkerhed før opdatering

Kontrollér uden undtagelse, at følgende fire betingelser er opfyldt, før du trykker på opdateringsknappen:

1. **Batteriniveau over 80 %**: Sørg for, at både øretelefonerne og opladningsetuiet er opladet til mindst 80 %. Hvis en øretelefon løber tør for strøm midt i opdateringen, bliver bootloaderen beskadiget.
2. **Hold etuiet tilsluttet strøm**: Tilslut opladningsetuiet til en 5V/1A-vægadapter eller en powerbank under opdateringen.
3. **Lad låget være åbent**: Øretelefonerne skal blive siddende på opladningskontakterne med låget åbent under hele overførslen.
4. **Deaktiver automatisk låsning/skærmslukning**: Hold telefonskærmen tændt. Hvis telefonen går i dyb dvale eller lukker baggrundsprocesser, kan Bluetooth-overførslen gå i stå.

## Trin 1: Identificér chipsæt og app

Hvis du installerer en firmwarefil, der er beregnet til en Airoha-chip, på et Huilian-kort, ødelægges enheden øjeblikkeligt. Vælg det værktøj, der passer til dit chipsæt, i vores [katalog over nyttige apps](/da/useful-apps):

- **Airoha-chipsæt (1562AE, 1562E, 1571AM)** → Brug **FlyCC** (læs vores [vejledning til FlyCC-appen](/da/articles/flycc-app-guide)).
- **TigerBuilder-chipsæt (1562AE/TB, 1571AM/TB)** → Brug **FlyCC**. CloudCC er udfaset, siden TigerBuilder integrerede OTA-funktionalitet i FlyCC; brug det kun som en løsning, hvis du støder på problemet med lagringstilladelser.
- **Huilian-chipsæt (247, 277, 377, 377H3)** → Brug **Starfun**.
- **Jieli-chipsæt (Jerry)** → Jieli-kopier i den lave ende understøtter ikke OTA-firmwareopdateringer.

## Trin 2: Trinvise opdateringsprocedurer

### Metode A: Opdatering med FlyCC (Airoha)

1. Tilslut dine AirPods til din Android-enhed via de almindelige Bluetooth-indstillinger.
2. Start **FlyCC**, og kontrollér, at din model vises på startskærmen.
3. Tryk på **Firmware Update** (eller **OTA Update**).
4. Tryk på **Check for Updates**. Hvis der registreres en ny version, viser appen buildnummeret og ændringsloggen.
5. Tryk på **Start Update**. Du vil se to trin: overførsel af firmwarefilen til den venstre øretelefon og derefter til den højre.
6. Når status når 100 %, skal du vente på meddelelsen: *"Update Successful"*.
7. Luk låget til opladningsetuiet, og lad det stå urørt i 60 sekunder, så mikrokontrollerne kan genstarte.

### Metode B: CloudCC-løsning (TigerBuilder)

TigerBuilder-enheder opdateres via FlyCC (metode A). Brug kun CloudCC, hvis FlyCC støder på problemet med lagringstilladelser:

1. Læg begge øretelefoner i etuiet, og lad låget være åbent.
2. Åbn **CloudCC**, og tryk på **Search Device**.
3. Vælg din TigerBuilder-enhed, når den registreres.
4. Gå til fanen **Firmware**, og tryk på **Query Latest Version**.
5. Vælg sky-pakken, og tryk på **Download and Update**.
6. Hold telefonen lige ved siden af opladningsetuiet, indtil beskeden bekræfter, at opdateringen er fuldført.

### Metode C: Opdatering med Starfun (Huilian)

1. Sørg for, at øretelefonerne er tilsluttet telefonen, og at låget er åbent.
2. Åbn **Starfun**, og tryk på ikonet **Settings / Firmware**.
3. Sammenlign den aktuelle firmwareversion med den nyeste version i skyen.
4. Tryk på **Upgrade**. Appen skriver konfigurationsblokkene én ad gangen.
5. Når enheden er genstartet, skal du glemme enheden i telefonens Bluetooth-menu og udføre en blød nulstilling.

## Hvad skal du gøre, hvis en opdatering fryser eller mislykkes?

Hvis en opdatering går i stå ved en bestemt procent (f.eks. fryser ved 45 % i mere end 5 minutter):

1. **Luk ikke låget, og tag ikke øretelefonerne ud.**
2. Kontrollér, om Bluetooth blev afbrudt. Hvis appen giver mulighed for det, skal du trykke på **Retry** eller genstarte appen, mens øretelefonerne bliver siddende.
3. Hvis øretelefonerne bliver helt ufølsomme, skal du følge vores [vejledning til nulstilling af falske AirPods](/da/articles/how-to-reset-fake-airpods) for at udføre en hård nulstilling af controlleren på 15 sekunder.
4. Åbn opdateringsappen igen — i de fleste tilfælde kan gendannelsesbootloaderen geninstallere pakken fra 0 %.

## Relaterede fejlfindingsvejledninger

- Vises øretelefonerne ikke i firmwareappen? Se [Falske AirPods kan ikke oprette forbindelse](/da/articles/fake-airpods-wont-connect).
- Oplever du fejl efter en opdatering? Følg [Sådan nulstiller du falske AirPods](/da/articles/how-to-reset-fake-airpods).
- Bruger du et Apple-økosystem? Læs [Virker falske AirPods med nye iPhones?](/da/articles/do-fake-airpods-work-with-new-iphone).
- Har du brug for links til apphentning? Besøg [Nyttige apps](/da/useful-apps).

## Ofte stillede spørgsmål

::: details Kan jeg opdatere firmwaren på AirPods-kopier på en iPhone?
Nej. iOS tillader ikke ledsagerapps at skrive firmware via Bluetooth til tilbehør, der ikke er MFi-certificeret. Du skal låne en Android-telefon (eller bruge en kompatibel Mac) til at installere firmwareopdateringer. Når firmwaren er opdateret, forbliver den permanent på øretelefonerne.
:::

::: details Giver en opdatering mine AirPods-kopier adgang til Apples Find My-netværk?
Nej. Find My-netværket er afhængigt af Apples proprietære kryptografiske certifikater, som ikke kan tilføjes via firmwareopdateringer.
:::

::: details Kan en firmwareopdatering ødelægge mine falske AirPods?
Ja, hvis opdateringen afbrydes, fordi batteriet løber tør, låget lukkes for tidligt, eller der installeres en firmwarefil, som er beregnet til et andet chipsæt. Følg altid sikkerhedstjeklisten før opdatering ovenfor.
:::
