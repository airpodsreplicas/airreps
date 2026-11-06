---
title: 'Przewodnik po APK FlyCC: jak skonfigurować i dostroić podróbki AirPods z układem Airoha'
description: 'Jak bezpiecznie pobrać, zainstalować i używać FlyCC — niestandardowe ustawienia korektora EQ, przypisywanie funkcji sterowaniu dotykowemu, aktualizacje oprogramowania układowego i rozwiązywanie problemów z połączeniem.'
category: Korzystanie z podróbek
order: 13
---
# Przewodnik po APK FlyCC: jak konfigurować i dostrajać repliki AirPods z układami Airoha

FlyCC to niezbędna aplikacja towarzysząca do replik AirPods z **układami Airoha** (w tym Airoha 1562AE, 1562E, 1562F i 1571AM). Ponieważ natywne ustawienia iOS firmy Apple udostępniają tylko podstawowe opcje, FlyCC zapewnia dostęp do funkcji układu: niestandardowe strojenie korektorem parametrycznym, kalibrację czujników dotykowych, regulację aktywnej redukcji szumów (ANC) i instalowanie oprogramowania układowego OTA.

> **Krótka odpowiedź:** FlyCC to bezpłatne narzędzie innej firmy na Androida, iOS i macOS, zaprojektowane specjalnie do replik AirPods z układami Airoha. Umożliwia dostosowywanie profili dźwięku za pomocą wbudowanego korektora, zmianę czułości ściskania i stukania oraz instalowanie aktualizacji oprogramowania układowego OTA. Nie wykryje replik opartych na układach Huilian, BES ani budżetowych układach Jieli.

::: tip Android, iPhone lub Mac
FlyCC jest dostępny jako APK na Androida i w sklepie App Store dla iOS; linki do obu wersji znajdują się na stronie [Przydatne aplikacje](/pl/useful-apps#tigerbuilder). Możesz też skorzystać z udostępnionego przez społeczność wydania na macOS. Ustawienia zapisane w słuchawkach pozostają aktywne nawet po przejściu na inny telefon.
:::

## Obsługiwane układy

FlyCC działa wyłącznie ze **sprzętem Airoha**. Jeśli słuchawki się połączą, oznacza to, że są wyposażone w oryginalny układ Airoha:

- **Airoha 1562AE / 1571AM** — pełna obsługa funkcji: kalibracja ANC z dwoma mikrofonami, niestandardowy korektor, opcje dźwięku przestrzennego ze śledzeniem ruchów głowy i aktualizacje OTA.
- **Airoha 1562E / 1563E** — standardowy korektor, sterowanie dotykowe i narzędzia do obsługi oprogramowania układowego.
- **Airoha 1562F** — starsze opcje sterowania ANC i korektorem.

Jeśli FlyCC skanuje bez końca i nigdy nie wykrywa słuchawek, Twoja para korzysta z układu innego producenta (na przykład Huilian, który używa aplikacji [Starfun](/pl/useful-apps)) albo podstawowego układu Jieli.

## Jak bezpiecznie pobrać i zainstalować FlyCC

Ponieważ FlyCC komunikuje się ze sprzętem Bluetooth, który nie ma certyfikatu MFi, jest udostępniany bezpośrednio jako APK, a nie przez Google Play.

1. Pobierz najnowszy, zweryfikowany plik APK z [katalogu Przydatnych aplikacji](/pl/useful-apps).
2. Na urządzeniu z Androidem przejdź do **Ustawienia → Zabezpieczenia** i włącz opcję **„Instaluj nieznane aplikacje”** dla przeglądarki lub menedżera plików.
3. Otwórz pobrany plik `.apk` i wybierz **Zainstaluj**.
4. Przyznaj wymagane uprawnienia do **Bluetootha / urządzeń w pobliżu** i **lokalizacji**. (Android wymaga uprawnień do lokalizacji, aby skanować urządzenia peryferyjne Bluetooth Low Energy; FlyCC nie śledzi danych GPS).

## Najważniejsze funkcje i sposób korzystania z nich

### 1. Niestandardowy korektor i dostrajanie dźwięku

Niektóre serie replik mają fabrycznie przesadnie podbite basy. FlyCC zawiera 10-pasmowy korektor, który pozwala dopracować brzmienie:

- **Redukcja basów**: obniż suwaki 31Hz, 62Hz i 125Hz o 2–3dB, aby uzyskać czystsze, bardziej neutralne brzmienie zbliżone do detalicznych AirPods Pro.
- **Wyrazistość wokali**: podnieś pasma 1kHz i 2kHz o 1,5dB, aby uwydatnić podcasty i wokale.
- **Zapisywanie w pamięci słuchawek**: po wprowadzeniu zmian stuknij **Zapisz w słuchawkach**. Ustawienia akustyczne zostaną zapisane bezpośrednio w procesorze DSP Airoha, dzięki czemu niestandardowy korektor będzie aktywny także po ponownym połączeniu z iPhonem, iPadem lub komputerem.

### 2. Kalibracja dotyku i gestów

Jeśli podczas poprawiania słuchawek w uchu przypadkowo wstrzymują odtwarzanie, FlyCC pozwala dostosować czułość czujnika siły w skali od 1 (najdelikatniejsze stuknięcie) do 5 (mocne ściśnięcie). Możesz też przypisać konkretne funkcje pojedynczemu, podwójnemu i potrójnemu naciśnięciu.

### 3. Regulacja redukcji szumów

W menu ANC FlyCC umożliwia niezależną kalibrację lewego i prawego mikrofonu do redukcji szumów. Jeśli w jednej słuchawce odczuwasz większe ciśnienie lub słabszą redukcję, suwak kalibracji pozwala wyrównać odwrócenie fazy.

## Bezpieczna aktualizacja oprogramowania układowego (OTA)

FlyCC może instalować zaktualizowane pliki oprogramowania układowego, aby naprawić błędy komunikacji z iOS lub poprawić łączność. Przerwanie procesu wiąże się jednak z ryzykiem trwałego uszkodzenia urządzenia:

1. **Przed rozpoczęciem naładuj obie słuchawki i etui powyżej 80%.**
2. Pozostaw otwarte etui z obiema słuchawkami w środku, nie dalej niż 30 centymetrów od telefonu.
3. Stuknij **Sprawdź aktualizacje** w FlyCC. Jeśli aktualizacja jest dostępna, pobierz pakiet.
4. Stuknij **Rozpocznij aktualizację**. **Nie zamykaj pokrywy etui, nie wyłączaj Bluetootha ani nie przełączaj aplikacji**, dopóki pasek postępu nie osiągnie 100%, a na ekranie nie pojawi się komunikat „Aktualizacja zakończona pomyślnie”.
5. Po zakończeniu pozostaw słuchawki w zamkniętym etui na 60 sekund, a następnie sparuj je ponownie.

Szczegółowe informacje o bezpiecznej aktualizacji replik ze wszystkimi typami układów znajdziesz w poradniku [Jak zaktualizować oprogramowanie układowe podrobionych AirPods](/pl/articles/how-to-update-fake-airpods-firmware).

## Rozwiązywanie problemów z połączeniem FlyCC

Jeśli FlyCC nie wykrywa słuchawek:

- **Sprawdź aktywne połączenie audio telefonu**: przed uruchomieniem FlyCC upewnij się, że słuchawki są już sparowane w natywnych ustawieniach Bluetooth Androida.
- **Przyznaj uprawnienia do urządzeń w pobliżu**: w Androidzie 12 i nowszych FlyCC nie wykryje urządzeń Bluetooth LE, jeśli nie włączono uprawnienia „Urządzenia w pobliżu”.
- **Ustal typ układu**: jeśli słuchawki nie łączą się z FlyCC, spróbuj skanowania za pomocą **CloudCC** lub **Starfun**. Jeśli żadna aplikacja nie nawiąże połączenia, zapoznaj się z poradnikiem [Jak rozpoznać podrobione AirPods](/pl/articles/how-to-spot-fake-airpods), aby sprawdzić, czy masz budżetową podróbkę z układem Jieli.
- **Wyczyść pamięć parowania**: jeśli połączenia są przerywane, zresetuj kontroler, korzystając z naszego [poradnika resetowania](/pl/articles/how-to-reset-fake-airpods).

## Powiązane poradniki

- Używasz replik na co dzień z Androidem? Zobacz [Repliki AirPods z Androidem](/pl/articles/airpods-replicas-on-android).
- Potrzebujesz narzędzi do innych układów? Zajrzyj do pełnego [katalogu Przydatnych aplikacji](/pl/useful-apps).
- Słuchawki nie chcą się połączyć? Skorzystaj z poradnika [Podrobione AirPods nie chcą się połączyć](/pl/articles/fake-airpods-wont-connect).
- Szukasz sprawdzonych modeli Airoha? Przejrzyj [katalog zaufanych sprzedawców](/pl/links/info).

## FAQ

::: details Czy instalacja FlyCC na telefonie jest bezpieczna?
Tak. Pliki APK udostępnione w katalogu Przydatnych aplikacji społeczności pochodzą z oficjalnych łańcuchów dostaw producentów i zostały sprawdzone pod kątem złośliwego oprogramowania. Aplikacja wymaga jedynie dostępu do Bluetootha, aby komunikować się z procesorem audio Airoha.
:::

::: details Czy mogę używać FlyCC na iPhonie?
Tak. FlyCC jest dostępny w sklepie App Store dla iOS oraz jako APK na Androida; linki do obu wersji znajdują się na stronie [Przydatne aplikacje](/pl/useful-apps#tigerbuilder). Wszystkie zmiany ustawień korektora i sterowania są na stałe zapisywane w pamięci wewnętrznej słuchawek, więc pozostają aktywne po zmianie urządzenia.
:::

::: details Dlaczego FlyCC wyświetla komunikat „Nie znaleziono urządzenia”?
Najczęstszym powodem jest niezgodność układu: FlyCC działa wyłącznie z układami Airoha. Jeśli masz model Huilian, użyj Starfun. Modele TigerBuilder obsługują FlyCC; CloudCC to tylko obejście problemu, gdy FlyCC nie ma uprawnień do pamięci. Jeśli żadna aplikacja się nie połączy, prawdopodobnie masz budżetowy model z układem Jieli.
:::
