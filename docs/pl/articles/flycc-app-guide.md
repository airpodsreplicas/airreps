---
title: 'Przewodnik po FlyCC APK: jak skonfigurować i dostroić repliki Airoha AirPods'
description: 'Jak bezpiecznie pobierać, instalować i używać FlyCC — dostrajanie niestandardowego korektora, mapowanie sterowania dotykowego, aktualizacje oprogramowania układowego i rozwiązywanie problemów z połączeniem.'
category: Korzystanie z replik
order: 13
---
# Przewodnik po FlyCC APK: jak skonfigurować i dostroić repliki AirPods z układami Airoha

FlyCC to niezbędna aplikacja towarzysząca dla replik AirPods działających na **układach Airoha** (w tym Airoha 1562AE, 1562E, 1562F i 1571AM). Ponieważ natywne ustawienia iOS firmy Apple udostępniają tylko podstawowe opcje, FlyCC zapewnia dostęp do niskopoziomowych funkcji układu: niestandardowego parametrycznego korektora EQ, kalibracji czujników dotykowych, regulacji aktywnej redukcji hałasu (ANC) oraz wgrywania oprogramowania układowego OTA.

> **Szybka odpowiedź:** FlyCC to bezpłatne narzędzie firm trzecich na Androida i macOS, zaprojektowane specjalnie dla replik AirPods opartych na układach Airoha. Umożliwia dostosowywanie profili dźwiękowych za pomocą wbudowanego korektora, modyfikowanie czułości uszczypnięć i stuknięć oraz wgrywanie aktualizacji oprogramowania układowego OTA. Nie wykryje replik wyposażonych w układy Huilian, BES ani budżetowe układy Jieli.

::: tip Wymagany Android lub Mac
FlyCC nie można zainstalować ze sklepu Apple App Store na iOS z powodu ograniczeń Apple dotyczących sprzętu firm trzecich. Aby skonfigurować słuchawki Airoha, zainstaluj APK na dowolnym smartfonie z Androidem albo uruchom społecznościowe wydanie na macOS. Ustawienia zapisane w słuchawkach pozostają aktywne nawet po ponownym przełączeniu ich na iPhone’a.
:::

## Obsługiwane układy

FlyCC działa wyłącznie ze **sprzętem Airoha**. Jeśli słuchawki się łączą, oznacza to, że mają w środku autentyczny układ Airoha:

- **Airoha 1562AE / 1571AM** — pełna obsługa funkcji: kalibracja ANC z dwoma mikrofonami, niestandardowy korektor EQ, przełączniki dźwięku przestrzennego ze śledzeniem ruchu głowy oraz aktualizacje OTA.
- **Airoha 1562E / 1563E** — standardowy korektor EQ, sterowanie dotykowe i narzędzia do obsługi oprogramowania układowego.
- **Airoha 1562F** — starsze elementy sterujące ANC i EQ.

Jeśli FlyCC skanuje w nieskończoność i nigdy nie wykrywa słuchawek, Twoja para korzysta z układu innego producenta (np. Huilian, który używa [Starfun](/pl/useful-apps), albo TigerBuilder, który używa [CloudCC](/pl/useful-apps)) lub podstawowego układu Jieli.

## Jak bezpiecznie pobrać i zainstalować FlyCC

Ponieważ FlyCC komunikuje się ze sprzętem Bluetooth, który nie ma certyfikatu MFi, jest rozpowszechniany bezpośrednio jako APK, a nie za pośrednictwem Google Play.

1. Pobierz najnowszy zweryfikowany plik APK bezpośrednio z [katalogu przydatnych aplikacji](/pl/useful-apps).
2. Na urządzeniu z Androidem przejdź do **Ustawienia → Bezpieczeństwo** i włącz opcję **„Instalowanie nieznanych aplikacji”** dla przeglądarki lub menedżera plików.
3. Otwórz pobrany plik `.apk` i stuknij **Zainstaluj**.
4. Przyznaj wymagane uprawnienia **Bluetooth / Urządzenia w pobliżu** oraz **Lokalizacja**. (Android wymaga uprawnień do lokalizacji podczas skanowania urządzeń peryferyjnych Bluetooth Low Energy; FlyCC nie śledzi danych GPS).

## Najważniejsze funkcje i sposób ich używania

### 1. Niestandardowy korektor EQ i dostrajanie dźwięku

Niektóre partie replik mają fabrycznie przesadnie podbite basy. FlyCC zawiera 10-pasmowy korektor, który pozwala dopracować brzmienie:

- **Redukcja basów**: obniż suwaki 31 Hz, 62 Hz i 125 Hz o 2–3 dB, aby uzyskać czystszą i bardziej neutralną scenę dźwiękową, zbliżoną do oryginalnych AirPods Pro.
- **Wyraźniejsze wokale**: podnieś pasma 1 kHz i 2 kHz o 1,5 dB, aby uwydatnić podcasty i wokale.
- **Zapisywanie w sprzęcie**: po wprowadzeniu zmian stuknij **Zapisz w słuchawkach**. Ustawienia akustyczne zostaną zapisane bezpośrednio w procesorze DSP Airoha, dzięki czemu niestandardowy korektor EQ pozostanie aktywny po ponownym połączeniu z iPhone’em, iPadem lub komputerem.

### 2. Kalibracja dotyku i gestów

Jeśli słuchawki przypadkowo wstrzymują odtwarzanie podczas poprawiania ich w uszach, FlyCC pozwala dostosować czułość czujnika nacisku w skali od 1 (najlżejsze stuknięcie) do 5 (mocne ściśnięcie). Możesz także przypisać pojedyncze, podwójne i potrójne naciśnięcia do konkretnych funkcji.

### 3. Dostosowywanie redukcji hałasu

W menu ANC FlyCC umożliwia niezależną kalibrację mikrofonów wychwytujących dźwięki zewnętrzne w lewej i prawej słuchawce. Jeśli masz wrażenie, że w jednej słuchawce ciśnienie w uchu jest wyższe lub redukcja hałasu słabsza, suwak kalibracji ponownie wyważy odwrócenie fazy.

## Bezpieczna aktualizacja oprogramowania układowego (OTA)

FlyCC może wgrywać zaktualizowane pliki oprogramowania układowego, aby naprawiać błędy uzgadniania połączenia z iOS lub poprawiać łączność. Wgrywanie wiąże się jednak z ryzykiem nieodwracalnego zablokowania urządzenia, jeśli proces zostanie przerwany:

1. **Naładuj obie słuchawki i etui powyżej 80%** przed rozpoczęciem.
2. Pozostaw otwarte etui z obiema słuchawkami w środku, w odległości do 30 centymetrów od telefonu.
3. Stuknij **Sprawdź dostępność aktualizacji** w FlyCC. Jeśli aktualizacja jest dostępna, pobierz pakiet.
4. Stuknij **Rozpocznij aktualizację**. **Nie zamykaj pokrywy etui, nie wyłączaj Bluetooth ani nie przełączaj aplikacji**, dopóki pasek postępu nie osiągnie 100% i nie pojawi się komunikat „Aktualizacja zakończona pomyślnie”.
5. Po zakończeniu pozostaw słuchawki w zamkniętym etui przez 60 sekund, a następnie sparuj je ponownie.

Kompleksowy przewodnik bezpiecznego wgrywania oprogramowania układowego do replik z wszystkimi typami układów znajdziesz tutaj: [Jak zaktualizować oprogramowanie układowe podrabianych AirPods](/pl/articles/how-to-update-fake-airpods-firmware).

## Rozwiązywanie problemów z połączeniem FlyCC

Jeśli FlyCC nie chce wykryć słuchawek:

- **Sprawdź aktywne połączenie audio telefonu**: upewnij się, że słuchawki zostały już sparowane w natywnych ustawieniach Bluetooth Androida przed otwarciem FlyCC.
- **Przyznaj uprawnienia do urządzeń w pobliżu**: na Androidzie 12 i nowszych FlyCC nie może wykrywać urządzeń Bluetooth LE bez włączonego uprawnienia **„Urządzenia w pobliżu”**.
- **Zidentyfikuj układ**: jeśli słuchawki nie chcą połączyć się z FlyCC, spróbuj przeskanować je za pomocą **CloudCC** lub **Starfun**. Jeśli żadna aplikacja nie może się połączyć, zajrzyj do [Jak rozpoznać podrabiane AirPods](/pl/articles/how-to-spot-fake-airpods), aby sprawdzić, czy masz budżetową podróbkę z układem Jieli.
- **Wyczyść pamięć podręczną parowania**: jeśli połączenia są zrywane, zresetuj kontroler, korzystając z naszego [przewodnika resetowania](/pl/articles/how-to-reset-fake-airpods).

## Powiązane przewodniki

- Używasz replik na co dzień z Androidem? Zobacz [Repliki AirPods na Androidzie](/pl/articles/airpods-replicas-on-android).
- Potrzebujesz narzędzi do innych układów? Sprawdź pełny [katalog przydatnych aplikacji](/pl/useful-apps).
- Słuchawki nie chcą się połączyć? Przejdź przez przewodnik [Podrabiane AirPods nie chcą się połączyć](/pl/articles/fake-airpods-wont-connect).
- Szukasz zweryfikowanych modeli Airoha? Przejrzyj [katalog zaufanych sprzedawców](/pl/links/info).

## FAQ

::: details Czy instalacja FlyCC na telefonie jest bezpieczna?
Tak. Pliki APK umieszczone w należącym do społeczności katalogu przydatnych aplikacji pochodzą z oficjalnych łańcuchów dostaw producentów i zostały zweryfikowane pod kątem obecności złośliwego oprogramowania. Aplikacja wymaga jedynie dostępu do Bluetooth, aby komunikować się z procesorem audio Airoha.
:::

::: details Czy mogę używać FlyCC na iPhonie?
Nie. Apple nie zezwala aplikacjom firm trzecich na dostęp do surowych profili szeregowych Bluetooth w przypadku sprzętu bez certyfikatu MFi. Do zmiany ustawień FlyCC musisz użyć telefonu z Androidem lub komputera Mac. Wszystkie zmiany korektora EQ i sterowania są jednak trwale zapisywane w pamięci wewnętrznej słuchawek, więc automatycznie przenoszą się na iPhone’a.
:::

::: details Dlaczego FlyCC wyświetla komunikat „Nie znaleziono urządzenia”?
Najczęstszą przyczyną jest niezgodność układu: FlyCC działa wyłącznie z układami Airoha. Jeśli masz model Huilian, użyj Starfun; jeśli masz model TigerBuilder, użyj CloudCC. Jeśli żadna aplikacja nie może się połączyć, prawdopodobnie masz budżetowy model z układem Jieli.
:::
