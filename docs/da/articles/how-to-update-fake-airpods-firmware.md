---
title: 'Sådan opdaterer du firmware på falske AirPods: Trin-for-trin-guide'
description: 'Sådan opdaterer du firmware på AirPods-kopier sikkert ved hjælp af FlyCC, CloudCC og Starfun — regler for sikker opladning, hvordan du undgår at gøre dem ubrugelige, og hvornår du bør lade firmwaren være.'
category: Fejlfinding
order: 16
---
# Sådan opdaterer du firmware på falske AirPods: trin-for-trin-guide

I modsætning til ægte Apple AirPods, som opdateres lydløst i baggrunden via iOS, opdateres replikaer af AirPods gennem community-følgeapps, der kører på Android eller macOS. Opdatering af firmware kan løse iOS-håndtryksfejl, forbedre stabiliteten af aktiv støjreduktion (ANC) eller afhjælpe forbindelsesafbrydelser.

Firmwareopdatering skriver dog direkte til øretelefonernes interne flashlager. En afbrudt opdatering kan permanent ødelægge en controller. Denne guide gennemgår de sikre, community-testede flashprocedurer for alle større replika-chipsæt.

> **Kort svar:** Hvis du vil opdatere firmwaren på replikaer af AirPods, skal du først identificere dit chipsæt for at vælge det korrekte værktøj: **FlyCC** (Airoha), **CloudCC** (TigerBuilder) eller **Starfun** (Huilian). Sørg for, at begge øretelefoner og opladningsetuiet er opladet til over 80 %. Hold låget åbent, lad begge øretelefoner sidde i etuiet, start OTA-opdateringen i appen, og luk ikke låget, slå ikke Bluetooth fra, og afslut ikke appen, før status når 100 %.

::: warning Den vigtigste regel: Hvis det virker, så lad det være
Firmwareopdateringer på replikaer fungerer ikke som patches til videospil. De udgives primært for at rette ændringer, der forårsager problemer efter større iOS-opdateringer, eller for at løse alvorlige hardwarefejl. Hvis dine øretelefoner i øjeblikket opretter forbindelse uden problemer, lyder godt, og ANC fungerer fejlfrit, **skal du ikke opdatere firmwaren**. Unødvendig flashing medfører kun risiko for at ødelægge enheden.
:::

## Sikkerhedstjek før opdatering

Før du trykker på opdateringsknappen, skal du uden undtagelse kontrollere disse fire forhold:

1. **Batteriniveau over 80 %**: Sørg for, at begge øretelefoner og opladningsetuiet er opladet mindst 80 %. Hvis en øretelefon løber tør for strøm midt under flashingen, bliver bootloaderen beskadiget.
2. **Hold etuiet tilsluttet strøm**: Tilslut opladningsetuiet til en 5 V/1 A-vægadapter eller powerbank under opdateringen.
3. **Lad låget være åbent**: Øretelefonerne skal blive siddende i deres opladningskontakter med etuiets låg åbent under hele overførslen.
4. **Deaktivér automatisk låsning/skærmslukning**: Hold telefonens skærm aktiv. Hvis telefonen går i dyb dvale eller lukker baggrundsprocesser, kan Bluetooth-overførslen gå i stå.

## Trin 1: Identificér dit chipsæt og din app

Hvis du flasher en firmwarebinærfil, der er beregnet til en Airoha-chip, på et Huilian-kort, ødelægges enheden øjeblikkeligt. Match dit værktøj med dit chipsæt fra vores [katalog over nyttige apps](/da/useful-apps):

- **Airoha-chipsæt (1562AE, 1562E, 1571AM)** $\to$ Brug **FlyCC** (Læs vores [guide til FlyCC-appen](/da/articles/flycc-app-guide)).
- **TigerBuilder-chipsæt (1562AE/TB, 1571AM/TB)** $\to$ Brug **CloudCC**.
- **Huilian-chipsæt (247, 277, 377, 377H3)** $\to$ Brug **Starfun**.
- **Jieli (Jerry)-chipsæt** $\to$ Jieli-kloner i den lavere ende understøtter ikke OTA-firmwareopdateringer.

## Trin 2: Trin-for-trin-procedurer til opdatering

### Metode A: Opdatering med FlyCC (Airoha)

1. Tilslut dine AirPods til din Android-enhed via standardindstillingerne for Bluetooth.
2. Start **FlyCC**, og kontrollér, at din model vises på startskærmen.
3. Tryk på **Firmware Update** (eller **OTA Update**).
4. Tryk på **Check for Updates**. Hvis der registreres en ny version, viser appen buildnummeret og ændringsloggen.
5. Tryk på **Start Update**. Du vil se to trin: først overføres binærfilen til den venstre øretelefon og derefter til den højre.
6. Når status når 100 %, skal du vente på meddelelsen: *"Update Successful"*.
7. Luk opladningsetuiets låg, og lad det være urørt i 60 sekunder, så mikrocontrollerne kan genstarte.

### Metode B: Opdatering med CloudCC (TigerBuilder)

1. Læg begge øretelefoner i etuiet med låget åbent.
2. Åbn **CloudCC**, og tryk på **Search Device**.
3. Vælg din TigerBuilder-enhed, når den er registreret.
4. Gå til fanen **Firmware**, og tryk på **Query Latest Version**.
5. Vælg cloud-pakken, og tryk på **Download and Update**.
6. Lad telefonen ligge direkte ved siden af opladningsetuiet, indtil meddelelsen bekræfter, at processen er færdig.

### Metode C: Opdatering med Starfun (Huilian)

1. Sørg for, at øretelefonerne er tilsluttet din telefon, og at låget er åbent.
2. Åbn **Starfun**, og tryk på ikonet **Settings / Firmware**.
3. Sammenlign den aktuelle firmwareversion med den seneste cloud-udgivelse.
4. Tryk på **Upgrade**. Appen skriver konfigurationsblokkene sekventielt.
5. Efter genstart skal du glemme enheden i telefonens Bluetooth-menu og udføre en blød nulstilling.

## Hvad skal du gøre, hvis en opdatering fryser eller mislykkes?

Hvis en opdatering går i stå ved en bestemt procentdel (f.eks. står fast på 45 % i over 5 minutter):

1. **Luk ikke låget, og fjern ikke øretelefonerne.**
2. Kontrollér, om Bluetooth blev afbrudt. Hvis appen tillader det, skal du trykke på **Retry** eller genstarte appen, mens øretelefonerne bliver liggende.
3. Hvis øretelefonerne bliver helt ufølsomme, skal du følge vores [guide til nulstilling af falske AirPods](/da/articles/how-to-reset-fake-airpods) for at udføre en hård nulstilling af controlleren på 15 sekunder.
4. Åbn opdateringsappen igen — i de fleste tilfælde giver recovery-bootloaderen dig mulighed for at flashe pakken igen fra 0 %.

## Relaterede fejlfindingsguider

- Vises øretelefonerne ikke i firmwareappen? Se [Falske AirPods opretter ikke forbindelse](/da/articles/fake-airpods-wont-connect).
- Oplever du fejl efter en opdatering? Følg [Sådan nulstiller du falske AirPods](/da/articles/how-to-reset-fake-airpods).
- Bruger du en opsætning med Apples økosystem? Læs [Virker falske AirPods med nye iPhones?](/da/articles/do-fake-airpods-work-with-new-iphone).
- Har du brug for links til app-downloads? Besøg [Nyttige apps](/da/useful-apps).

## Ofte stillede spørgsmål

::: details Kan jeg opdatere firmwaren på replikaer af AirPods på en iPhone?
Nej. iOS tillader ikke ledsageapps at skrive firmware via Bluetooth til ikke-MFi-tilbehør. Du skal låne en Android-telefon (eller bruge en kompatibel Mac) for at flashe firmwareopdateringer. Når firmwaren er opdateret, forbliver den permanent på øretelefonerne.
:::

::: details Vil en opdatering give mine AirPods-replikaer Apples Find My-netværk?
Nej. Find My-netværket er afhængigt af proprietære kryptografiske Apple-certifikater, som ikke kan tilføjes via firmwareopdateringer.
:::

::: details Kan en firmwareopdatering ødelægge mine falske AirPods?
Ja, hvis opdateringen afbrydes på grund af et afladet batteri, hvis låget lukkes for tidligt, eller hvis du flasher en firmwarebinærfil, der er beregnet til et andet chipsæt. Følg altid sikkerhedstjekket før opdatering ovenfor.
:::
