---
title: Jak bezpiecznie zaktualizować oprogramowanie układowe podróbek AirPods
description: 'Bezpiecznie aktualizuj oprogramowanie układowe replik AirPods za pomocą FlyCC (Airoha/TB) i StarFun (Huilian): zasada 80% baterii, zapobieganie zablokowaniu urządzenia i sytuacje, w których nie należy aktualizować.'
category: Rozwiązywanie problemów
order: 16
---
# Jak zaktualizować oprogramowanie układowe podróbek AirPods: przewodnik krok po kroku

W przeciwieństwie do oryginalnych słuchawek Apple AirPods, które aktualizują się po cichu w tle za pośrednictwem iOS, repliki AirPods aktualizuje się za pomocą społecznościowych aplikacji towarzyszących. Zarówno **FlyCC**, jak i **StarFun** są dostępne na Androidzie i w App Store na iOS, choć pliki APK na Androida nadal są najpewniejszą metodą pełnego wgrywania aktualizacji OTA na każdym chipsecie. Aktualizacja oprogramowania układowego może rozwiązać problemy z komunikacją z iOS, poprawić stabilność aktywnej redukcji szumów (ANC) lub naprawić zrywanie połączenia.

Wgrywanie oprogramowania układowego zapisuje jednak dane bezpośrednio w pamięci flash słuchawki. Przerwana aktualizacja może trwale uszkodzić kontroler. W tym przewodniku opisujemy bezpieczne, sprawdzone przez społeczność procedury wgrywania oprogramowania dla wszystkich głównych chipsetów stosowanych w replikach.

> **Krótka odpowiedź:** Aby zaktualizować oprogramowanie układowe replik AirPods, najpierw rozpoznaj chipset i wybierz odpowiednie narzędzie: **FlyCC** (Airoha, w tym TigerBuilder) lub **StarFun** (Huilian). Upewnij się, że obie słuchawki i etui ładujące są naładowane w co najmniej 80%. Pozostaw otwarte wieczko etui, nie wyjmuj z niego słuchawek, rozpocznij aktualizację OTA w aplikacji i nie zamykaj etui, nie wyłączaj Bluetooth ani nie zamykaj aplikacji, dopóki postęp nie osiągnie 100%.

::: warning Zasada nadrzędna: jeśli działa, nie ruszaj
Aktualizacje oprogramowania układowego replik nie działają tak jak łatki do gier. Wydaje się je głównie po to, aby naprawić problemy spowodowane dużymi aktualizacjami iOS lub rozwiązać poważne błędy sprzętowe. Jeśli słuchawki łączą się bez problemów, dobrze brzmią, a ANC działa bez zarzutu, **nie aktualizuj oprogramowania układowego**. Niepotrzebne wgrywanie oprogramowania wiąże się jedynie z ryzykiem uszkodzenia urządzenia.
:::

<CommunityCta variant="apps" />

## Lista kontrolna bezpieczeństwa przed aktualizacją

Zanim naciśniesz przycisk aktualizacji, bez wyjątku sprawdź, czy spełnione są poniższe cztery warunki:

1. **Poziom naładowania powyżej 80%**: Upewnij się, że obie słuchawki i etui ładujące są naładowane w co najmniej 80%. Jeśli słuchawka rozładuje się w trakcie wgrywania, bootloader ulegnie uszkodzeniu.
2. **Pozostaw etui podłączone do zasilania**: Podczas aktualizacji podłącz etui ładujące do zasilacza sieciowego 5 V/1 A lub powerbanku.
3. **Pozostaw otwarte wieczko**: Przez cały czas przesyłania słuchawki muszą pozostawać w etui, osadzone na stykach ładujących, a jego wieczko musi być otwarte.
4. **Wyłącz automatyczną blokadę / wygaszanie ekranu**: Nie pozwól, aby ekran telefonu zgasł. Jeśli telefon przejdzie w tryb głębokiego uśpienia lub zamknie procesy działające w tle, przesyłanie przez Bluetooth może się zatrzymać.

## Krok 1: Rozpoznaj chipset i aplikację

Wgranie pliku oprogramowania układowego przeznaczonego dla układu Airoha na płytkę Huilian natychmiast uszkodzi urządzenie. Dopasuj narzędzie do swojego układu na podstawie naszego [katalogu przydatnych aplikacji](/pl/useful-apps):

- **Chipsety Airoha (1562AE, 1562E, 1571AM)** → Użyj **FlyCC** (przeczytaj [przewodnik po aplikacji FlyCC](/pl/articles/flycc-app-guide)).
- **Chipsety TigerBuilder (1562AE/TB, 1571AM/TB)** → Użyj **FlyCC**. CloudCC nie jest już rozwijany, ponieważ TigerBuilder zintegrował funkcję aktualizacji OTA z FlyCC; używaj go tylko jako obejścia, jeśli napotkasz problem z uprawnieniami do pamięci.
- **Chipsety Huilian (247, 277, 377, 377H3)** → Użyj **StarFun** (przeczytaj [przewodnik po aplikacji StarFun](/pl/articles/starfun-app-guide)).
- **Chipsety Jieli (Jerry)** → Tanie repliki oparte na układach Jieli nie obsługują aktualizacji oprogramowania układowego OTA.

## Krok 2: Procedury aktualizacji krok po kroku

### Metoda A: Aktualizacja za pomocą FlyCC (Airoha)

1. Połącz słuchawki AirPods z telefonem za pomocą standardowych ustawień Bluetooth.
2. Uruchom **FlyCC** i sprawdź, czy model jest widoczny na ekranie głównym.
3. Dotknij opcji **Firmware Update** (lub **OTA Update**).
4. Dotknij opcji **Check for Updates**. Jeśli zostanie wykryta nowa wersja, aplikacja wyświetli numer kompilacji i listę zmian.
5. Dotknij opcji **Start Update**. Zobaczysz dwa etapy: przesyłanie pliku do lewej słuchawki, a następnie do prawej.
6. Gdy postęp osiągnie 100%, poczekaj na komunikat: *„Update Successful”*.
7. Zamknij wieczko etui ładującego i pozostaw je na 60 sekund bez ruszania, aby mikrokontrolery mogły się ponownie uruchomić.

::: warning Informacja o oprogramowaniu układowym Pro 3 V7 TB
Po aktualizacji oprogramowania układowego w FlyCC na modelu **AirPods Pro 3 V7 TB** wyskakujące okno iOS oraz numer seryjny znikają i trzeba je dodać ponownie w aplikacji FlyCC. Problem nie dotyczy modelu V7 Huilian (StarFun).
:::

### Metoda B: Obejście z użyciem CloudCC (TigerBuilder)

Urządzenia TigerBuilder aktualizuje się za pomocą FlyCC (metoda A). Używaj CloudCC tylko wtedy, gdy FlyCC napotka problem z uprawnieniami do pamięci:

1. Umieść obie słuchawki w etui i pozostaw otwarte wieczko.
2. Otwórz **CloudCC** i dotknij opcji **Search Device**.
3. Po wykryciu wybierz urządzenie TigerBuilder.
4. Przejdź do karty **Firmware** i dotknij opcji **Query Latest Version**.
5. Wybierz pakiet z chmury i dotknij opcji **Download and Update**.
6. Trzymaj telefon tuż obok etui ładującego, aż pojawi się komunikat potwierdzający zakończenie.

### Metoda C: Aktualizacja za pomocą StarFun (Huilian)

1. Upewnij się, że słuchawki są połączone z telefonem, a wieczko etui jest otwarte.
2. Otwórz **StarFun** i dotknij ikony **Settings / Firmware**.
3. Porównaj bieżącą wersję oprogramowania układowego z najnowszą wersją dostępną w chmurze.
4. Dotknij opcji **Upgrade**. Aplikacja zapisze kolejno bloki konfiguracji.
5. Po ponownym uruchomieniu zapomnij urządzenie w menu Bluetooth telefonu i wykonaj miękki reset.

## Co zrobić, jeśli aktualizacja zawiesi się lub nie powiedzie

Jeśli aktualizacja zatrzyma się na określonym procencie (np. na ponad 5 minut utknie na 45%):

1. **Nie zamykaj wieczka etui ani nie wyjmuj słuchawek.**
2. Sprawdź, czy połączenie Bluetooth nie zostało zerwane. Jeśli aplikacja na to pozwala, dotknij opcji **Retry** lub uruchom ją ponownie, nie ruszając słuchawek.
3. Jeśli słuchawki przestaną całkowicie reagować, skorzystaj z naszego [przewodnika resetowania podróbek AirPods](/pl/articles/how-to-reset-fake-airpods), aby wykonać 15-sekundowy twardy reset kontrolera.
4. Otwórz ponownie aplikację do aktualizacji — w większości przypadków tryb odzyskiwania bootloadera pozwoli ponownie wgrać pakiet od 0%.

<CommunityCta variant="stuck" />

## Powiązane poradniki dotyczące rozwiązywania problemów

- Używasz repliki Huilian? Skorzystaj z [przewodnika po aplikacji StarFun](/pl/articles/starfun-app-guide).
- Słuchawki nie są widoczne w aplikacji do aktualizacji? Zobacz [Podróbki AirPods nie łączą się](/pl/articles/fake-airpods-wont-connect) lub [Jak zresetować podróbki AirPods](/pl/articles/how-to-reset-fake-airpods).
- Potrzebujesz linków do pobrania aplikacji? Odwiedź stronę [Przydatne aplikacje](/pl/useful-apps).
- Chcesz wymienić starszą replikę, której nie można zaktualizować? Rozwiąż [jednominutowy quiz](/pl/quiz) lub przejrzyj [zaufanych sprzedawców](/pl/links/info).

## FAQ

::: details Czy mogę zaktualizować oprogramowanie układowe replik AirPods na iPhonie?
Zarówno **FlyCC**, jak i **StarFun** są dostępne w App Store na iOS i umożliwiają korzystanie z korektora, zmianę ustawień oraz sprawdzanie stanu oprogramowania układowego (a FlyCC na iOS obsługuje sprawdzanie i aktualizowanie nowszych modeli TigerBuilder, takich jak V5.3 TB). Jeśli jednak masz starszy model albo aplikacja na iOS nie rozpocznie aktualizacji OTA, najpewniejszym rozwiązaniem jest pożyczenie telefonu z Androidem i pobranie pliku APK z sekcji [Przydatne aplikacje](/pl/useful-apps). Po aktualizacji oprogramowanie układowe pozostaje na słuchawkach na stałe.
:::

::: details Czy aktualizacja zapewni moim replikom AirPods dostęp do sieci Znajdź?
Nie. Sieć Znajdź opiera się na zastrzeżonych certyfikatach kryptograficznych Apple, których nie da się dodać za pomocą aktualizacji oprogramowania układowego.
:::

::: details Czy aktualizacja oprogramowania układowego może uszkodzić moje podróbki AirPods?
Tak, jeśli aktualizacja zostanie przerwana z powodu rozładowanej baterii, przedwczesnego zamknięcia wieczka lub wgrania pliku oprogramowania układowego przeznaczonego dla innego chipsetu. Zawsze stosuj się do powyższej listy kontrolnej bezpieczeństwa przed aktualizacją.
:::
