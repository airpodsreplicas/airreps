---
title: 'StarFun APK-vejledning: EQ og firmware til Huilian AirPods-replikaer'
description: 'Hvor du kan hente StarFun til Android og iOS, hvilke Huilian AirPods-replikaer der bruger appen, hvordan du justerer EQ og opdaterer firmware sikkert, og hvad du skal tjekke, når appen ikke kan finde dine øretelefoner.'
category: Brug af dine replikaer
order: 20
---
# StarFun APK-guide: EQ og firmware til Huilian AirPods-kopier

StarFun er ledsagerappen til AirPods-kopier med **Huilian**-chipsæt (247, 277, 377 og 377H3). Den gør for Huilian-modeller det, som [FlyCC](/da/articles/flycc-app-guide) gør for Airoha- og TigerBuilder-modeller: Du kan bruge den til at justere EQ og opdatere firmwaren. Hvis du ejer en Huilian-kopi, såsom AirPods Pro 3 V7 Huilian eller Pro 2 V5.4, er StarFun appen, du skal installere.

> **Kort svar:** StarFun er appen til AirPods-kopier med Huilian: AirPods Pro 3 V7 Huilian og V6 Huilian, AirPods Pro 2 V5.4 og V5.3 Huilian samt AirPods 4 V2 Huilian. Hent den som en Android-APK eller fra iOS App Store via [Useful Apps](/da/useful-apps#huilian). Brug den til at justere EQ og kun til at opdatere firmwaren, hvis noget er gået i stykker. TigerBuilder-modeller bruger i stedet FlyCC. Hvis ingen app kan oprette forbindelse til dine øretelefoner, er de sandsynligvis en Jieli-kopi i den lave ende.

## Hvilke kopier bruger StarFun

Dette er de versioner i guiden, hvis versionstabeller angiver StarFun som appen til EQ og indstillinger:

| Model | Version | Chipsæt | iCloud Connect |
| :--- | :--- | :--- | :--- |
| AirPods Pro 3 | V7 Huilian | Huilian 377H3 | ✅ |
| AirPods Pro 3 | V6 Huilian | Huilian 247 | ✅ |
| AirPods Pro 2 | V5.4 Huilian | Huilian 377 | ✅ |
| AirPods Pro 2 | V5.3 Huilian | Huilian 277 Pro Max | ✅ |
| AirPods 4 | V2 Huilian | Huilian 247 | ✅ |

AirPods 3-tabellen angiver også StarFun til V1.2 (Huilian A10), men de betroede forhandlere fører i øjeblikket ikke nogen AirPods 3.

Disse fem er også guidens modeller med iCloud Connect. iCloud Connect findes kun på Huilian-baserede kopier, så hvis du har købt et par for at skifte mellem dine Apple-enheder, er StarFun appen til dig. Sammenlign versioner på versionssiderne for [Pro](/da/version-info/pro) og [AirPods](/da/version-info/airpods).

## Hent StarFun til Android eller iOS

StarFun fås i to versioner, som begge er linket på [Useful Apps](/da/useful-apps#huilian):

- **Android:** [StarFun APK](https://airreps.link/starfun)
- **iPhone:** [StarFun i App Store](https://airreps.link/istarfun)

Android-versionen er en APK og ikke en Google Play-download. Hvis Android blokerer installationen, skal du aktivere **Installer fra ukendte kilder** (også kaldet **Installer ukendte apps**) for din browser eller filhåndtering. Du finder normalt indstillingen under Sikkerhed eller Tilgængelighed i dine indstillinger. Åbn derefter den downloadede `.apk`-fil, og tryk på **Installer**.

Før du åbner StarFun, skal du forbinde øretelefonerne til telefonen via dens normale Bluetooth-indstillinger.

## Juster EQ

EQ'en kan variere fra forhandler til forhandler, så samme version kan lyde forskelligt fra det ene parti til det næste. StarFun er appen, som guiden anbefaler til justering af EQ på Huilian-enheder, ligesom FlyCC anbefales til TigerBuilder og BullSuper til HR. På AirPods 4 V2 Huilian synkroniseres brugerdefinerede StarFun-EQ-profiler direkte med iOS.

Vil du ikke finjustere EQ fra bunden? Fællesskabets medlemmer deler deres egne EQ-indstillinger på Discord (se sidst i denne guide). Læs [Lydkvalitet](/da/introduction/sound-quality) for at se, hvordan kopierne lyder direkte fra æsken.

## Opdater firmwaren med StarFun

Start med fællesskabets vigtigste regel: **Hvis det virker, så lad det være.** Firmwareopdateringer udgives primært for at rette fejl, der skyldes større iOS-opdateringer eller alvorlige hardwarefejl. Hvis dine øretelefoner forbindes uden problemer og lyder, som de skal, øger en opdatering kun risikoen for at gøre dem ubrugelige.

Hvis du har brug for en opdatering, skal du først følge sikkerhedstjeklisten:

1. Oplad begge øretelefoner og etuiet til over 80 %.
2. Lad etuiet være tilsluttet strøm under opdateringen.
3. Lad begge øretelefoner blive siddende i etuiet med låget åbent.
4. Hold telefonens skærm tændt, så overførslen ikke går i stå.

Opdater derefter i StarFun:

1. Sørg for, at øretelefonerne er forbundet til telefonen, og at låget er åbent.
2. Åbn **StarFun**, og tryk på ikonet **Indstillinger/firmware**.
3. Sammenlign den aktuelle firmwareversion med den seneste version i skyen.
4. Tryk på **Opgrader**. Appen skriver konfigurationsblokkene efter hinanden.
5. Når øretelefonerne genstarter, skal du glemme dem i telefonens Bluetooth-menu og foretage en blød nulstilling.

Brug kun StarFun med Huilian-øretelefoner. Hvis du installerer firmware, der er beregnet til et andet chipsæt, kan øretelefonerne blive ubrugelige, og firmware til en Airoha-chip ødelægger straks et Huilian-kort.

Hvis opdateringen fryser på en procentdel i mere end 5 minutter, må du ikke lukke låget eller tage øretelefonerne ud. Prøv igen, eller genstart appen, mens øretelefonerne stadig sidder i etuiet. Hvis øretelefonerne holder helt op med at reagere, skal du følge den hårde nulstilling i [Sådan nulstiller du falske AirPods](/da/articles/how-to-reset-fake-airpods) og derefter åbne StarFun igen. I de fleste tilfælde kan opdateringen installeres igen fra 0 %. [Guiden til firmwareopdatering](/da/articles/how-to-update-fake-airpods-firmware) dækker alle chipsæt.

## Kan StarFun ikke finde dine øretelefoner?

Gennemgå disse trin i rækkefølge:

- **Par dem først i Bluetooth-indstillingerne.** StarFun kræver, at øretelefonerne allerede er forbundet til telefonen.
- **Tjek chippen.** StarFun er til Huilian-modeller. TigerBuilder-modeller (Airoha) bruger FlyCC, og HR-modeller bruger BullSuper. Den sædvanlige måde at identificere chippen på er at prøve appsene på [Useful Apps](/da/useful-apps) én ad gangen og se, hvilken der opretter forbindelse.
- **Opretter ingen app forbindelse?** Så er dit par sandsynligvis en kopi i den helt lave ende med et Jieli-chipsæt, som ingen af fællesskabets apps understøtter. Ægte Apple AirPods reagerer heller ikke på disse apps.
- **Bliver forbindelsen ved med at falde ud?** Ryd parringscachen med en nulstilling af controlleren fra [nulstillingsguiden](/da/articles/how-to-reset-fake-airpods). Se [Falske AirPods kan ikke oprette forbindelse](/da/articles/fake-airpods-wont-connect) for generelle parringsproblemer.

## Relateret læsning

- Har du en TigerBuilder-model? Læs [FlyCC APK-guiden](/da/articles/flycc-app-guide).
- Overvejer du de to V7-versioner? Sammenlign [AirPods Pro 3 V7 Huilian og V7 TB](/da/articles/airpods-pro-3-v7-huilian-vs-v7-tb).
- Bruger du dine kopier med en Mac? Guiden anbefaler Huilian-modeller; se [Virker falske AirPods med Mac?](/da/articles/fake-airpods-on-mac)
- Alle appdownloads samlet ét sted: [Useful Apps](/da/useful-apps).

## Spørg fællesskabet

Vil du have et EQ-udgangspunkt i stedet for at finjustere fra bunden? Fællesskabets medlemmer deler deres egne EQ-indstillinger på [AirReps Discord](https://airreps.link/dghelp), og de fleste forudindstillinger er fastgjort i **#help-and-advice**. Fortæl dem, hvilken Huilian-version du ejer, når du spørger.

## Ofte stillede spørgsmål

::: details Findes StarFun til iPhone?
Ja. StarFun findes i iOS App Store såvel som som en Android-APK. Der er links til begge på [Useful Apps](/da/useful-apps#huilian).
:::

::: details Hvilke AirPods-kopier virker med StarFun?
Huilian-baserede kopier: AirPods Pro 3 V7 Huilian og V6 Huilian, AirPods Pro 2 V5.4 og V5.3 Huilian samt AirPods 4 V2 Huilian. Firmwareguiden angiver Huilian 247-, 277-, 377- og 377H3-chipsættene til StarFun.
:::

::: details Hvilken app bruger TigerBuilder-kopier?
FlyCC. TigerBuilder-modeller, herunder AirPods Pro 3 V7 TB, bruger FlyCC, mens StarFun er til Huilian-chipsæt. Hvis du installerer firmware, der er beregnet til et andet chipsæt, kan øretelefonerne blive ubrugelige, så sørg altid for, at appen passer til chippen.
:::

::: details Hvor kan jeg hente StarFun APK?
Fra [StarFun-downloadlinket](https://airreps.link/starfun) på siden [Useful Apps](/da/useful-apps#huilian). Hvis Android blokerer installationen, skal du aktivere "Installer fra ukendte kilder" i dine indstillinger.
:::
