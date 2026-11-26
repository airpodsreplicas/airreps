---
title: Virker falske AirPods på Mac? Opsætning og løsning på lydstyrkeproblemer
description: 'Sådan tilslutter du AirPods-kopier til macOS — sådan løser du fejlen med lydstyrkeskyderen, der kun har to niveauer, iCloud-skifteadfærden, og hvilket chipset der fungerer bedst på MacBooks.'
category: Brug af dine kopier
order: 17
---
# Virker falske AirPods med Mac? Opsætning, lydstyrkeskyder og løsninger

Det er som regel nemt at forbinde AirPods-kopier til en iPhone, men brugen af dem med en MacBook, Mac mini eller iMac har sine egne særheder. macOS genkender ganske vist kopier som almindelige Bluetooth-lydenheder, men brugerne støder ofte på to velkendte problemer: **fejlen med lydstyrkeskyderen, der kun har to trin**, på ældre Mac-modeller eller Intel-Macs og forvirrende **skift mellem flere enheder**.

Moderne chipsæt (især Huilian og nyere Airoha-chips) er blevet meget bedre til at få kopier til at fungere med macOS. Her er den aktuelle, definitive vejledning til opsætning og fejlfinding af falske AirPods på Mac.

> **Kort svar:** Ja, falske AirPods fungerer pålideligt med Mac til lydafspilning, videoopkald og mediekontrol. Men chipsæt, der ikke er fra Huilian (som TigerBuilder/Airoha eller Bluetrum), kan have en macOS-”lydstyrkefejl”, hvor lydstyrkeskyderen springer brat mellem 0 % og 100 %. Hvis du bruger en Mac dagligt, får du jævn, indbygget regulering af lydstyrken og fungerende skift via iCloud Connect ved at købe en **Huilian-baseret kopi — som Pro 3 V7 Huilian ($67–68), Pro 2 V5.4 Huilian ($58) eller AirPods 4 V2 Huilian ($39–42)**.

::: tip Bruger du Mac? Vælg chipsæt med omhu
Hvis en MacBook eller iMac er din primære computer, bør du ikke købe en generisk kopi fra en markedsplads. Fællesskabet anbefaler specifikt **Huilian-chipsæt** til macOS-brugere på grund af deres indbyggede integration med lydstyrketabellen og stabile overdragelse via iCloud.
:::

<CommunityCta variant="ask" />

## Sådan parrer du falske AirPods med en Mac

Det er nemt at parre AirPods-kopier med macOS:

1. Åbn **Systemindstillinger → Bluetooth** på din Mac, og sørg for, at Bluetooth er slået til.
2. Læg begge øretelefoner i opladningsetuiet, og lad låget stå åbent.
3. Tryk på **indstillingsknappen på bagsiden af etuiet, og hold den nede i 3–5 sekunder**, indtil statusindikatoren begynder at blinke hvidt.
4. Find dine AirPods på listen over **Enheder i nærheden** på din Mac, og klik på **Opret forbindelse**.
5. Når de er parret, skal du klikke på knappen **Valgmuligheder** ved siden af enhedens navn for at indstille ANC-handlinger ved langt tryk og mikrofonindstillinger.

## Sådan løser du fejlen med lydstyrkeskyderen i macOS

Det mest rapporterede macOS-problem med kopier er **fejlen, hvor lydstyrken springer**: Når du trykker på tastaturets lydstyrketaster eller trækker i macOS-skyderen på menulinjen, ændres lydstyrken ikke jævnt. I stedet forbliver lydstyrken på 100 %, indtil den sænkes til under cirka 10 %, hvor lyden pludselig slås helt fra.

### Hvorfor sker det?
macOS bruger en protokol til synkronisering af hardwarelydstyrke (`Absolute Volume`) via Bluetooth AAC. Billige kopier og visse ældre Airoha-versioner rapporterer deres interne lydstyrketabeller forkert til macOS, så operativsystemet opfatter ændringer i lydstyrken som en tænd/sluk-knap.

### Løsningen
1. **Softwareløsningen**: Fællesskabet vedligeholder en open source-løsning på problemet med lydstyrkeskyderen, som adskiller softwarelydstyrken fra hardwaretabellerne. Følg vores trinvise [vejledning til løsning af problemer med lydstyrkeskyderen i macOS](/da/troubleshooting/macOS-volume-slider-fixup) for at køre terminalrettelsen.
2. **Hardwareløsningen**: Hvis du endnu ikke har købt dem, så vælg en af de fem Huilian-modeller: **AirPods Pro 3 V7 Huilian** ($67–68, vores bedste valg), **Pro 3 V6 Huilian** ($43–45), **AirPods Pro 2 V5.4 Huilian** ($58), **Pro 2 V5.3 Huilian** ($56) eller **AirPods 4 V2 Huilian** ($39–42). Huilian-modellerne har tilpassede lydstyrketrin og iCloud Connect, uden at der er brug for løsninger fra tredjeparter.

<span class="pick-buy">Pro 3 V7 Huilian hos [Earhive](https://airreps.link/eprov7hl) [HiCity](https://airreps.link/hcprov7hl) [Jenny](https://airreps.link/jprov7hl)</span> <span class="pick-buy">Pro 2 V5.4 Huilian hos [Earhive](https://airreps.link/eprov54hl) [HiCity](https://airreps.link/hcprov54hl) [Jenny](https://airreps.link/jprov54hl)</span> <span class="pick-buy">AirPods 4 V2 Huilian hos [Earhive](https://airreps.link/e4v2hl) [HiCity](https://airreps.link/hc4v2hl) [Jenny](https://airreps.link/j4v2hl)</span>

<CommunityCta variant="stuck" />

## Skift mellem flere enheder via iCloud på Mac

En af de største fordele ved Apples hardware er, at du kan lytte til musik på en iPhone og få lyden til at skifte problemfrit til en MacBook, når du ser en video.

- **Med Huilian-kopier (Pro 3 V7 / V6, Pro 2 V5.4 / V5.3, AirPods 4 V2)**: Når øretelefonerne er parret med din iPhone, synkroniseres de med dit Apple-id via **iCloud Connect**. Når du sætter dig ved din Mac, vises de automatisk i lydmenuen uden manuel genparring via Bluetooth.
- **Med Airoha- / TigerBuilder-kopier**: De understøtter forbindelser til flere enheder (2–3 enheder), men synkroniseres ikke via Apples iCloud-token. Hvis du vil skifte fra din telefon til din Mac, skal du klikke på **Opret forbindelse** i Mac’ens Bluetooth-menu.

## Sådan optimerer du mikrofonkvaliteten til Zoom og FaceTime

Bluetooth-båndbredden er grundlæggende begrænset, når der samtidig overføres lyd begge veje (mikrofoninput + stereolyd). På macOS kan lyd fra kopiernes mikrofoner nogle gange lyde komprimeret for dem, du taler med.

Sådan får du den klareste lyd under arbejdsmøder:
1. Åbn **Systemindstillinger → Lyd → Input**.
2. Vælg din Macs indbyggede mikrofon som **inputenhed** (den har bedre retningsbestemt beamforming i studiekvalitet).
3. Behold AirPods som **outputenhed**.
4. Dermed bevares AAC-stereolydkanalen med høj bithastighed til dine ører, samtidig med at mødedeltagerne får klar mikrofonlyd.

## Relaterede vejledninger

- Skal du vælge mellem Pro 3-modeller i topklassen til Mac? Læs [AirPods Pro 3 V7 Huilian vs. V7 TB](/da/articles/airpods-pro-3-v7-huilian-vs-v7-tb).
- Bruger du en Huilian-kopi? Se [vejledningen til StarFun-appen](/da/articles/starfun-app-guide).
- Oplever du problemer med parringen? Følg vejledningen [Falske AirPods kan ikke oprette forbindelse](/da/articles/fake-airpods-wont-connect) eller [Sådan nulstiller du falske AirPods](/da/articles/how-to-reset-fake-airpods).
- Er du i tvivl om, hvilken Mac-venlig model du skal købe? Tag [testen, der tager ét minut](/da/quiz), eller se [fortegnelsen over pålidelige forhandlere](/da/links/info).

## Ofte stillede spørgsmål

::: details Vises batterivinduet for falske AirPods i macOS?
macOS har ikke et animeret forbindelsesvindue som iOS. Falske AirPods viser dog deres batteriprocent tydeligt på macOS-menulinjen og i lydwidgetten i Kontrolcenter.
:::

::: details Kan jeg bruge fællesskabets firmwareapps på en Mac?
Ja, der findes visse værktøjer (blandt andet webbaserede flashværktøjer og macOS-versioner af FlyCC) til Airoha-chipsæt. De fleste apps fra fællesskabet fungerer dog bedst på en billig Android-telefon.
:::

::: details Virker rumlig lyd på en Mac med falske AirPods?
På Macs med Apple Silicon (M1/M2/M3/M4) understøtter kopier i den højere prisklasse (som V5.4 og V7) fast rumlig lyd. Rumlig lyd med hovedsporing understøttes på udvalgte modeller, men funktionen virker mest naturligt sammen med en iPhone.
:::
