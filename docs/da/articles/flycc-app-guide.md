---
title: 'FlyCC APK-vejledning: Sådan konfigurerer og finjusterer du Airoha AirPods-kopier'
description: "FlyCC til TigerBuilder AirPods-kopier: Android- og iPhone-downloads, modelafhængig EQ og opdatering, tilladelser og forbindelsesproblemer."
category: Brug af dine kopier
order: 13
---
# FlyCC APK-guide: Sådan konfigurerer og finjusterer du Airoha-baserede AirPods-kopier

FlyCC er den ledsagerapp, som vores [katalog over nyttige apps](/da/useful-apps#tigerbuilder) angiver til **TigerBuilder**-kopier. TigerBuilder er en producent af kopier, ikke et chipmærke: producentens modeller er bygget på **Airoha**-chipsæt som 1562AE, 1563E og 1571AM. Afhængigt af modellen og dens firmware kan FlyCC justere EQ, vise indstillinger, der er specifikke for modellen, og installere firmwareopdateringer, som producenten har udgivet.

> **Kort svar:** FlyCC er en gratis tredjepartsapp til TigerBuilder-kopier af AirPods (baseret på Airoha). Den findes som Android-APK og som iPhone-app i App Store, og begge er linket i [Nyttige apps](/da/useful-apps#tigerbuilder). Hvad appen kan, afhænger af din præcise model, firmware og appversion: typisk EQ og firmwareopdateringer til udvalgte modeller. Huilian-, HR-, BES- og KKX-modeller bruger de andre apps i kataloget.

::: tip Android- og iPhone-versioner
FlyCC findes som Android-APK og som iPhone-version i App Store. At appen er på din telefon, betyder ikke, at den understøtter dit par: de menuer og opdateringer, den viser, afhænger af den model, den registrerer, modellens firmware og appversionen. Der er ingen separat Mac-udgave i vores katalog. App Store tillader iPhone-appen på Mac-computere med Apple-chip, men angiver, at den ikke er verificeret til macOS, så denne guide dækker ikke brug på Mac.
:::

## Hvilke kopier bruger FlyCC?

Tag udgangspunkt i den sælger og version, du har købt, ikke kun chipnavnet. [Versionssiderne](/da/version-info/general) angiver FlyCC til TigerBuilder-modeller som AirPods Pro 3 V7 TB, AirPods 4 V3 TB, AirPods Pro 2 V5.3 TB og AirPods Max V3. Tjek siden for din version, før du installerer noget.

En Airoha-chip afgør ikke alene, hvilken app du skal bruge. HR-modeller bruger også Airoha-chips, men står opført med BullSuper og G&Link, Huilian-modeller bruger StarFun, og nogle ældre Airoha-versioner har slet ingen app-understøttelse. Hvilken app der opretter forbindelse, er et nyttigt fingerpeg, men en mislykket FlyCC-scanning beviser ikke, at dit par har en anden chip eller ikke er den model, du bestilte. Tilladelser, appversionen og modelunderstøttelse spiller alle ind (se fejlfinding nedenfor).

## Sådan downloader og installerer du FlyCC sikkert

Brug linkene i [Nyttige apps](/da/useful-apps#tigerbuilder) i stedet for filer, der er lagt op igen på andre sider.

**iPhone:** Installér FlyCC fra App Store, og giv Bluetooth-adgang, når iOS spørger. Appen kræver iOS 13 eller nyere (version 2.0.16 ved kontrol den 22. oktober 2026).

**Android:** Android-versionen er en APK-download, ikke en app fra Google Play.

1. Download APK'en fra [Nyttige apps](/da/useful-apps#tigerbuilder).
2. Når Android spørger, skal du tillade **Installer ukendte apps** for den browser eller filhåndtering, du åbner filen med. Du kan slå tilladelsen fra igen bagefter.
3. Åbn `.apk`-filen, og tryk på **Installer**.
4. Giv den Bluetooth-tilladelse, appen beder om. På Android 12 og nyere vises den som **Enheder i nærheden**. På ældre Android-versioner, eller med ældre apps, kan Bluetooth-scanning i stedet kræve tilladelse til **Placering** ([Androids udviklerdokumentation](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

FlyCC er tredjepartssoftware, og AirReps har ikke foretaget nogen sikkerhedsgennemgang af den. Adgang til Bluetooth eller enheder i nærheden er forventelig for en app til øretelefoner; vær forsigtig med anmodninger, der intet har med øretelefonerne at gøre. Androids dokumentation forklarer, hvorfor systemet beder om disse tilladelser, ikke hvad en bestemt app gør med dem. På iPhone er privatlivsoplysningerne i App Store udviklerens egne angivelser, og Apple oplyser, at de ikke er verificeret af Apple ([App Store-siden](https://apps.apple.com/us/app/flycc/id1661245709)).

## Hvad FlyCC kan

De menuer, FlyCC viser, afhænger af den model, appen registrerer, så to par kan se ret forskellige ud i appen. Udgivelsesnoterne for iPhone-versionen nævner rettelser af manglende menuer (version 2.0.12 og 2.0.14), så en menu, der ikke vises, kan skyldes appversionen eller kompatibilitet frem for en anden chip.

### EQ og lyd

EQ er hovedgrunden til, at guiden henviser ejere af TigerBuilder-modeller til FlyCC (se [lydkvalitet](/da/introduction/sound-quality)). Lav små ændringer, og lyt efter. Sænk for eksempel bassen en smule, hvis dit parti lyder buldrende. Medlemmer af fællesskabet deler EQ-forudindstillinger på [AirReps Discord](https://airreps.link/discord). Når du skifter til en anden telefon, så tjek, at din EQ stadig gælder, da det kan variere fra model til model.

### Betjening

Tryk- og klembetjening på kopier ændres normalt i iPhonens Bluetooth-indstillinger, ligesom på ægte AirPods (se [guiden til funktioner](/da/introduction/features)). Hvis FlyCC viser betjeningsindstillinger for din model, kan du bruge dem dér, men ikke alle modeller har dem.

### Firmwareopdateringer (OTA)

FlyCC's beskrivelse i App Store siger, at firmwareopgraderinger tilbydes til udvalgte produkter, og version 1.1.1 og 1.1.2 (2024) tilføjede OTA-understøttelse af Airohas AB157x-platform. Hvis FlyCC tilbyder en opdatering til din model:

1. Tjek, at du har brug for den: en rettelse af et problem, du faktisk har, eller en besked fra din sælger eller på din [versionsside](/da/version-info/general). Hvis dit par fungerer godt, er det helt fint at lade firmwaren være.
2. Læs de opdateringsinstruktioner, FlyCC viser for din model, og følg dem.
3. Hold øretelefonerne og etuiet opladet, hold telefonen tæt på med appen åben, og afbryd ikke opdateringen, før appen bekræfter, at den er færdig.

Hvis en opdatering mislykkes, så kontakt din sælger eller spørg på Discord i stedet for at prøve firmware fra en anden app. Hele processen står i [Sådan opdaterer du firmware på falske AirPods](/da/articles/how-to-update-fake-airpods-firmware).

## Fejlfinding ved forbindelsesproblemer med FlyCC

Hvis FlyCC ikke finder dine øretelefoner:

- **Forbind dem først**: Par øretelefonerne i telefonens Bluetooth-indstillinger, og åbn derefter FlyCC.
- **Tjek tilladelserne**: På Android 12 og nyere skal FlyCC have tilladelsen **Enheder i nærheden**; på ældre Android-versioner kan den kræve **Placering**. På iPhone skal du tjekke **Indstillinger → Anonymitet & sikkerhed → Bluetooth**.
- **Opdatér appen**: FlyCC 2.0.16 til iPhone nævner en rettelse for nogle brugere, der ikke kunne oprette forbindelse.
- **Tjek, at appen passer til din model**: Se siden for din version. Hvis din sælgers model kommer fra en anden producent, så brug den app, der er angivet for den i [Nyttige apps](/da/useful-apps). CloudCC er udfaset for TigerBuilder-modeller og er kun tænkt som en midlertidig løsning på det problem med lagertilladelser, der er beskrevet dér.
- **Se ikke én mislykket scanning som et bevis**: Hvis ingen af de angivne apps opretter forbindelse efter disse tjek, så spørg på [Discord](https://airreps.link/discord) og oplys din sælger og model. Meget billige Jieli-kopier fungerer ikke med nogen af appsene. Hvis du er i tvivl om, hvad du har modtaget, så se [Sådan genkender du falske AirPods](/da/articles/how-to-spot-fake-airpods).
- **Ryd parringscachen**: Hvis forbindelsen afbrydes, så nulstil parringen med vores [nulstillingsvejledning](/da/articles/how-to-reset-fake-airpods).

## Relaterede vejledninger

- Bruger du kopier sammen med Android til daglig? Se [AirPods-kopier på Android](/da/articles/airpods-replicas-on-android).
- Har du brug for andre chipværktøjer? Se det komplette [katalog over nyttige apps](/da/useful-apps).
- Nægter øretelefonerne at oprette forbindelse? Følg vejledningen i [Falske AirPods opretter ikke forbindelse](/da/articles/fake-airpods-wont-connect).
- Leder du efter verificerede Airoha-modeller? Gennemse [fortegnelsen over pålidelige sælgere](/da/links/info).

## Ofte stillede spørgsmål

::: details Er FlyCC sikkert at installere på min telefon?
FlyCC er tredjepartssoftware, som AirReps ikke har sikkerhedsgennemgået, så brug almindelig forsigtighed: Download den fra linket i Nyttige apps eller fra App Store, tjek at dens anmodninger om tilladelser handler om Bluetooth, og afvis alt, der ikke har noget med det at gøre. Privatlivsoplysningerne i App Store er udviklerens egne angivelser, ikke en kontrol foretaget af Apple.
:::

::: details Kan jeg bruge FlyCC på en iPhone?
Ja. FlyCC findes i App Store til iPhone (iOS 13 eller nyere; version 2.0.16 ved kontrol den 22. oktober 2026), og Apples [Core Bluetooth](https://developer.apple.com/bluetooth/)-framework lader iPhone-apps arbejde med Bluetooth Low Energy-tilbehør. Hvad FlyCC kan på en iPhone, afhænger af din model, dens firmware og appversionen, og firmwareopdateringer tilbydes til udvalgte produkter, ikke til alle par. Android er stadig en mulighed via APK'en i Nyttige apps.
:::

::: details Hvorfor kan FlyCC ikke finde mine øretelefoner?
De mest almindelige årsager er en manglende tilladelse til Bluetooth eller enheder i nærheden, en forældet appversion, øretelefoner, der endnu ikke er forbundet til telefonen, eller en model, som FlyCC ikke understøtter. FlyCC er angivet til TigerBuilder-modeller; Huilian-modeller bruger StarFun, og HR-modeller bruger BullSuper eller G&Link. En mislykket scanning beviser ikke, hvilken chip der sidder i, så tjek din sælgers model på versionssiderne, og spørg på Discord, hvis ingen af de angivne apps opretter forbindelse.
:::
