---
title: 'Sådan opdaterer du firmware på falske AirPods: Trin-for-trin-guide'
description: 'Sådan opdaterer du firmware på AirPods-kopier sikkert ved hjælp af FlyCC, CloudCC og Starfun — regler for sikker opladning, hvordan du undgår at gøre dem ubrugelige, og hvornår du bør lade firmwaren være.'
category: Fejlfinding
order: 16
---
# Sådan opdaterer du firmware på falske AirPods: trin-for-trin-guide

Ægte Apple AirPods opdateres automatisk via dine Apple-enheder. Det gør replikaer ikke. Deres firmware kommer fra producenten og installeres via en ledsagerapp, og kun til de modeller, producenten understøtter. En opdatering kan løse kompatibilitetsproblemer med iOS eller forbindelsesafbrydelser og tilføjer nogle gange funktioner.

En opdatering skriver ny firmware til øretelefonerne, så en afbrudt eller forkert opdatering kan gøre dem ubrugelige. Den præcise fremgangsmåde afhænger af modellen og appen, så denne guide gennemgår, hvad du skal tjekke, og hvordan du opdaterer sikkert, i stedet for én bestemt rækkefølge for alle par.

> **Kort svar:** Find først ud af, hvilken præcis model og sælger du har, og brug derefter den app, der er angivet for producenten i [Nyttige apps](/da/useful-apps): **FlyCC** til TigerBuilder-modeller (Airoha) eller **StarFun** til Huilian, begge til Android og iPhone. Hvis appen tilbyder en opdatering til din model, så følg instruktionerne på skærmen, hold øretelefonerne opladet og tæt på telefonen, og afbryd ikke opdateringen. Hvis dit par fungerer godt, og opdateringen ikke løser et problem, du har, så spring den over.

::: warning Den vigtigste regel: Hvis det virker, så lad det være
Firmwareopdateringer til replikaer retter for det meste problemer, der skyldes større iOS-opdateringer, eller kendte fejl. Hvis dine øretelefoner opretter forbindelse uden problemer, lyder godt, og ANC fungerer, og opdateringen ikke løser et problem, du faktisk har, **skal du ikke opdatere firmwaren**. En unødvendig opdatering giver kun ekstra risiko.
:::

## Før du opdaterer

1. **Kend din præcise model og sælger**: Tjek din ordre og sælgerens produktnavn, og find derefter versionen på [versionssiderne](/da/version-info/general). Chipnumre i sælgernes annoncer er ikke pålidelige i sig selv.
2. **Hav en grund**: Kig efter en besked fra sælgeren, en note på siden for din version eller en bekræftet løsning på [AirReps Discord](https://airreps.link/discord) på et problem, du har.
3. **Brug den nyeste version af den rigtige app** fra [Nyttige apps](/da/useful-apps), og giv de Bluetooth-tilladelser, den beder om.
4. **Oplad først**: Oplad øretelefonerne og etuiet, før du starter, så intet løber tør for strøm under opdateringen.
5. **Hold forbindelsen stabil**: Hold telefonen tæt på, skærmen tændt og appen åben, indtil opdateringen er færdig.

## Trin 1: Match appen med din producent

Vores [katalog over nyttige apps](/da/useful-apps) er opdelt efter producent. Brug den app, der er angivet for din model:

- **TigerBuilder** (Airoha-chips som 1562AE, 1563E og 1571AM) → **FlyCC**, til Android og iPhone. Læs vores [guide til FlyCC-appen](/da/articles/flycc-app-guide). **CloudCC** er blevet udfaset, siden TigerBuilder integrerede OTA i FlyCC; brug den kun som en midlertidig løsning på problemet med lagertilladelser.
- **Huilian** → **StarFun**, til Android og iPhone.
- **HR**-, **BES**- og **V2.5/KKX**-modeller → de apps, der står under de overskrifter i Nyttige apps.
- **Billige Jieli (Jerry)-kopier** → ingen app i kataloget understøtter dem.

Ikke alle apps tilbyder firmwareopdateringer til alle de modeller, de kan oprette forbindelse til. Installér kun opdateringer, som den rigtige app tilbyder til den registrerede model, og indlæs aldrig firmware, der er beregnet til et andet produkt.

## Trin 2: Kør opdateringen i appen

Opdateringsskærmene er forskellige fra app til app og fra model til model, så følg det, din app viser, i stedet for en generel rækkefølge:

1. Forbind øretelefonerne i telefonens Bluetooth-indstillinger, åbn derefter appen, og vent på, at den registrerer din model.
2. Åbn appens firmware- eller opdateringsfunktion, hvis den har en, og sammenlign den installerede version med den, der tilbydes. Hvis appen siger, at du allerede har den nyeste firmware, er du færdig.
3. Læs de instruktioner, appen giver for din model, herunder hvor øretelefonerne skal være under opdateringen, og følg dem nøjagtigt.
4. Start opdateringen, og lad alt være, indtil appen bekræfter, at den er gennemført. Luk ikke appen, slå ikke Bluetooth fra, og gå ikke væk med telefonen.
5. Tjek bagefter versionen i appen, og test øretelefonerne. Hvis parringen driller, så glem og par dem igen (se [Sådan nulstiller du falske AirPods](/da/articles/how-to-reset-fake-airpods)).

På **iPhone** tilbyder både FlyCC og StarFun firmwareopgraderinger til udvalgte produkter. FlyCC's noter i App Store nævner OTA-understøttelse af Airohas AB157x-platform siden version 1.1.1, og StarFun nævner OTA blandt sine funktioner ([FlyCC](https://apps.apple.com/us/app/flycc/id1661245709) og [StarFun](https://apps.apple.com/us/app/starfun/id1633624617) i App Store, kontrolleret den 22. oktober 2026). På **Android** skal du bruge APK-filerne fra Nyttige apps. Android 12 og nyere beder om tilladelsen Enheder i nærheden, mens ældre Android-versioner eller ældre apps kan kræve tilladelse til Placering for at scanne efter Bluetooth-enheder ([Androids udviklerdokumentation](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

## Hvad skal du gøre, hvis en opdatering fryser eller mislykkes?

- **Giv den tid, og bevar forbindelsen**: Lad øretelefonerne være, hvor appen bad dig placere dem, og hold telefonen tæt på. Hvis appen har sin egen funktion til at prøve igen, så brug den.
- **Skift ikke til en anden app eller firmwarefil** for at redde en mislykket opdatering.
- **Kontakt din sælger**, hvis opdateringen mislykkes, eller øretelefonerne holder op med at reagere. Oplys dit ordrenummer, din model, appens navn og version samt din telefon og OS-version, og vedhæft skærmbilleder af eventuelle fejl. Du kan også spørge på [AirReps Discord](https://airreps.link/discord).

Gendannelse afhænger af modellen, så der findes ingen universel nulstilling, der kan gøre en mislykket opdatering god igen. [Nulstillingsguiden](/da/articles/how-to-reset-fake-airpods) er til parringsproblemer, ikke et værktøj til at gendanne firmware.

## Relaterede fejlfindingsguider

- Vises øretelefonerne ikke i firmwareappen? Se [Falske AirPods opretter ikke forbindelse](/da/articles/fake-airpods-wont-connect).
- Oplever du fejl efter en opdatering? Følg [Sådan nulstiller du falske AirPods](/da/articles/how-to-reset-fake-airpods).
- Bruger du en opsætning med Apples økosystem? Læs [Virker falske AirPods med nye iPhones?](/da/articles/do-fake-airpods-work-with-new-iphone).
- Har du brug for links til app-downloads? Besøg [Nyttige apps](/da/useful-apps).

## Ofte stillede spørgsmål

::: details Kan jeg opdatere firmwaren på replikaer af AirPods på en iPhone?
Ja, på udvalgte modeller. FlyCC og StarFun findes som iPhone-apps i App Store, og begge tilbyder firmwareopgraderinger til nogle produkter. Ikke alle par får en opdatering på iPhone: Det afhænger af modellen, dens firmware og appversionen. Vores [side om AirPods Pro 2](/da/version-info/pro#airpods-pro-2) anbefaler for eksempel at tjekke firmwaren på V5.3 TB i FlyCC på iOS. Android er også en mulighed via APK-filerne i Nyttige apps, så længe du bruger den app, der er angivet for din model.
:::

::: details Vil en opdatering give mine AirPods-replikaer Apples Find My-netværk?
Nej. Find My-netværket er afhængigt af proprietære kryptografiske Apple-certifikater, som ikke kan tilføjes via firmwareopdateringer.
:::

::: details Kan en firmwareopdatering ødelægge mine falske AirPods?
Ja, det kan den. En opdatering, der afbrydes af et fladt batteri eller en mistet forbindelse, eller firmware, der er beregnet til et andet produkt, kan gøre et par ubrugeligt. Installér kun opdateringer, som den rigtige app tilbyder til din model, følg dens instruktioner, og spring opdateringer over, du ikke har brug for.
:::
