---
title: 'Przewodnik po aplikacji FlyCC: dostrajanie replik AirPods z układami Airoha'
description: 'Jak bezpiecznie pobrać, zainstalować i używać aplikacji FlyCC — dostrajanie korektora, mapowanie sterowania dotykowego, aktualizacje oprogramowania układowego i rozwiązywanie problemów z połączeniem.'
category: Korzystanie z replik
order: 13
---
# Przewodnik po FlyCC APK: jak konfigurować i dostrajać repliki AirPods z układami Airoha

FlyCC to niezbędna aplikacja towarzysząca do replik AirPods z **układami Airoha** (w tym Airoha 1562AE, 1562E, 1562F i 1571AM). Ponieważ natywne ustawienia iOS firmy Apple udostępniają tylko podstawowe opcje sterowania, FlyCC zapewnia dostęp do funkcji samego układu: niestandardowe strojenie parametrycznego korektora, kalibrację czujników dotykowych, regulację balansu aktywnej redukcji szumów (ANC) i wgrywanie oprogramowania sprzętowego OTA.

> **Krótka odpowiedź:** FlyCC to bezpłatne narzędzie firm trzecich na Androida, iOS i macOS, zaprojektowane specjalnie do replik AirPods opartych na układach Airoha. Pozwala dostosowywać profile dźwięku za pomocą wbudowanego korektora, zmieniać czułość ściskania i stukania oraz wgrywać aktualizacje oprogramowania sprzętowego OTA. Nie wykryje replik z układami Huilian, BES ani budżetowymi układami Jieli.

::: tip Android, iPhone lub Mac
FlyCC jest dostępna jako APK na Androida i w App Store na iOS; linki do obu wersji znajdziesz na stronie [Przydatne aplikacje](/pl/useful-apps#tigerbuilder). Możesz też uruchomić społecznościowe wydanie na macOS. Ustawienia zapisane w słuchawkach pozostają aktywne także po przełączeniu się na inny telefon.
:::

<CommunityCta variant="apps" />

## Obsługiwane układy

FlyCC działa wyłącznie ze sprzętem **Airoha / TigerBuilder**. Jeśli słuchawki się połączą, oznacza to, że mają układ Airoha:

| Układ Airoha | Przykładowe modele replik | Obsługa FlyCC |
| :--- | :--- | :--- |
| **Airoha 1571AM** | Pro 3 V7 TB, Pro 2 V5.3 TB, AirPods 4 V3 TB | Pełna obsługa EQ, ANC, sterowania dotykowego, śledzenia ruchu głowy i OTA |
| **Airoha 1562AE** | Pro 2 V5.2 TB, AirPods Max V3 TB, Pro 1 V4.9 | Pełna obsługa EQ, ANC, sterowania dotykowego, śledzenia ruchu głowy i OTA |
| **Airoha 1563E / 1562E** | Pro 3 V6 TB, AirPods 4 V2 TB, AirPods 2 V3E | Standardowa obsługa EQ, sterowania dotykowego i narzędzi do obsługi oprogramowania sprzętowego |
| **Airoha 1561M / 1562F** | AirPods Max V3P / V2 Metal, starsze egzemplarze | EQ i podstawowe narzędzia do obsługi oprogramowania sprzętowego |

Jeśli FlyCC skanuje bez końca i nigdy nie wykrywa słuchawek, używają one układu innego producenta (np. Huilian, z którym działa aplikacja [StarFun](/pl/articles/starfun-app-guide)) lub podstawowego układu Jieli.

## Jak bezpiecznie pobrać i zainstalować FlyCC

Ponieważ FlyCC komunikuje się ze sprzętem Bluetooth, który nie ma certyfikatu MFi, jest dystrybuowana bezpośrednio jako APK, a nie przez Google Play.

1. Pobierz najnowszy zweryfikowany plik APK z [katalogu przydatnych aplikacji](/pl/useful-apps).
2. Na urządzeniu z Androidem przejdź do **Ustawienia → Bezpieczeństwo** i włącz opcję **„Instaluj nieznane aplikacje”** dla przeglądarki lub menedżera plików.
3. Otwórz pobrany plik `.apk` i naciśnij **Zainstaluj**.
4. Przyznaj wymagane uprawnienia **Bluetooth / Urządzenia w pobliżu** oraz **Lokalizacja**. (Android wymaga uprawnień do lokalizacji, aby skanować urządzenia peryferyjne Bluetooth Low Energy; FlyCC nie śledzi danych GPS).

## Najważniejsze funkcje i sposób ich używania

### 1. Niestandardowy korektor i dostrajanie dźwięku

Niektóre partie replik mają fabrycznie przesadnie podbite basy. FlyCC zawiera 10-pasmowy korektor, który pozwala precyzyjniej dostroić dźwięk:

- **Redukcja basu**: Zmniejsz poziom suwaków 31 Hz, 62 Hz i 125 Hz o 2–3 dB, aby uzyskać czystszy, bardziej neutralny obraz dźwiękowy, zbliżony do oryginalnych AirPods Pro.
- **Wyrazistość wokali**: Podbij pasma 1 kHz i 2 kHz o 1,5 dB, aby wysunąć na pierwszy plan podcasty i wokale.
- **Zapisywanie w słuchawkach**: Po wprowadzeniu zmian naciśnij **Zapisz w słuchawkach**. Strojenie dźwięku zostanie zapisane bezpośrednio w procesorze DSP Airoha, dzięki czemu niestandardowe ustawienia korektora pozostaną aktywne po ponownym połączeniu z iPhonem, iPadem lub komputerem.

### 2. Kalibracja sterowania dotykowego i gestów

Jeśli słuchawki przypadkowo wstrzymują odtwarzanie, gdy poprawiasz je w uchu, FlyCC pozwala dostosować czułość czujnika siły w skali od 1 (najlżejsze stuknięcie) do 5 (mocne ściśnięcie). Możesz też przypisać konkretne funkcje do pojedynczego, podwójnego i potrójnego naciśnięcia.

### 3. Dostosowywanie redukcji szumów

W menu ANC FlyCC umożliwia niezależną kalibrację lewego i prawego mikrofonu typu feedforward. Jeśli w jednej słuchawce odczuwasz większe ciśnienie akustyczne lub słabszą redukcję szumów, suwak kalibracji wyrównuje odwrócenie fazy.

## Bezpieczna aktualizacja oprogramowania sprzętowego (OTA)

FlyCC może wgrywać zaktualizowane pliki oprogramowania sprzętowego, aby naprawić problemy z uzgadnianiem połączenia z iOS lub poprawić łączność. Wgrywanie wiąże się jednak z ryzykiem unieruchomienia urządzenia, jeśli proces zostanie przerwany:

1. **Przed rozpoczęciem naładuj obie słuchawki i etui do poziomu powyżej 80%.**
2. Trzymaj otwarte etui z obiema słuchawkami w środku, w odległości do 30 centymetrów od telefonu.
3. Naciśnij **Sprawdź aktualizacje** w FlyCC. Jeśli aktualizacja jest dostępna, pobierz pakiet.
4. Naciśnij **Rozpocznij aktualizację**. **Nie zamykaj etui, nie wyłączaj Bluetooth ani nie przełączaj aplikacji**, dopóki pasek postępu nie osiągnie 100% i nie pojawi się komunikat „Aktualizacja zakończona powodzeniem”.
5. Po zakończeniu pozostaw słuchawki w zamkniętym etui na 60 sekund, zanim sparujesz je ponownie.

::: warning Uwaga dotycząca Pro 3 V7 TB
W przypadku **AirPods Pro 3 V7 TB** po aktualizacji oprogramowania sprzętowego w FlyCC wyskakujące okienko iOS oraz numer seryjny znikają i trzeba je ponownie dodać w aplikacji FlyCC. Problem nie dotyczy wersji V7 Huilian (StarFun).
:::

Aby poznać szczegółowy przewodnik po bezpiecznym wgrywaniu oprogramowania sprzętowego do replik z różnymi układami, przeczytaj artykuł [Jak zaktualizować oprogramowanie sprzętowe podrobionych AirPods](/pl/articles/how-to-update-fake-airpods-firmware).

## Rozwiązywanie problemów z połączeniem FlyCC

Jeśli FlyCC nie wykrywa słuchawek:

- **Sprawdź aktywne połączenie audio telefonu**: Zanim otworzysz FlyCC, upewnij się, że słuchawki zostały sparowane w natywnych ustawieniach Bluetooth Androida.
- **Przyznaj uprawnienia do urządzeń w pobliżu**: W Androidzie 12 i nowszych FlyCC nie wykryje urządzeń Bluetooth LE bez włączonego uprawnienia „Urządzenia w pobliżu”.
- **Ustal, jaki masz układ**: Jeśli słuchawki nie chcą połączyć się z FlyCC, spróbuj skanowania za pomocą **[StarFun](/pl/articles/starfun-app-guide)** (w przypadku układów Huilian) lub **CloudCC** (to obejście problemu z uprawnieniami do pamięci w starszych układach TB). Jeśli żadna aplikacja się nie połączy, przeczytaj artykuł [Jak rozpoznać podrobione AirPods](/pl/articles/how-to-spot-fake-airpods), aby sprawdzić, czy masz budżetową podróbkę z układem Jieli.
- **Wyczyść pamięć podręczną parowania**: Jeśli połączenia są przerywane, zresetuj kontroler, korzystając z naszego [przewodnika resetowania](/pl/articles/how-to-reset-fake-airpods).

<CommunityCta variant="stuck" />

## Powiązane poradniki

- Masz replikę Huilian? Przeczytaj nasz [przewodnik po aplikacji StarFun](/pl/articles/starfun-app-guide).
- Używasz replik na co dzień z Androidem? Zobacz [Repliki AirPods na Androidzie](/pl/articles/airpods-replicas-on-android).
- Potrzebujesz innych narzędzi do obsługi układów? Zajrzyj do pełnego [katalogu przydatnych aplikacji](/pl/useful-apps).
- Szukasz sprawdzonego modelu Airoha? Rozwiąż [jednominutowy quiz](/pl/quiz) lub przejrzyj [katalog zaufanych sprzedawców](/pl/links/info).

## FAQ

::: details Czy instalacja FlyCC na telefonie jest bezpieczna?
Tak. Pliki APK udostępnione w społecznościowym katalogu przydatnych aplikacji pochodzą z oficjalnych kanałów dostawców i zostały sprawdzone pod kątem złośliwego oprogramowania. Aplikacja wymaga dostępu tylko do Bluetooth, aby komunikować się z procesorem dźwięku Airoha.
:::

::: details Czy mogę używać FlyCC na iPhonie?
Tak. FlyCC jest dostępna w App Store na iOS oraz jako APK na Androida; linki do obu wersji znajdziesz na stronie [Przydatne aplikacje](/pl/useful-apps#tigerbuilder). Wszystkie zmiany ustawień korektora i sterowania są trwale zapisywane w pamięci wewnętrznej słuchawek, więc pozostają aktywne po zmianie urządzenia.
:::

::: details Dlaczego FlyCC wyświetla komunikat „Nie znaleziono urządzenia”?
Najczęstszym powodem jest niezgodność układu: FlyCC działa tylko z układami Airoha. Jeśli masz model Huilian, użyj StarFun. Modele TigerBuilder działają z FlyCC; CloudCC to jedynie obejście problemu z uprawnieniami do pamięci, który może wystąpić w FlyCC. Jeśli żadna aplikacja się nie połączy, prawdopodobnie masz budżetowy model z układem Jieli.
:::
