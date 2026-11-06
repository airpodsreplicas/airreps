---
title: 'Jak zaktualizować oprogramowanie układowe podrabianych AirPods: poradnik krok po kroku'
description: 'Jak bezpiecznie zaktualizować oprogramowanie układowe klonów AirPods za pomocą FlyCC, CloudCC i Starfun — zasady bezpiecznego ładowania, jak uniknąć unieruchomienia urządzeń i kiedy nie ruszać oprogramowania układowego.'
category: Rozwiązywanie problemów
order: 16
---
# Jak zaktualizować oprogramowanie sprzętowe podróbek AirPods: instrukcja krok po kroku

W przeciwieństwie do oryginalnych słuchawek Apple AirPods, które aktualizują się po cichu w tle za pośrednictwem systemu iOS, podróbki AirPods aktualizuje się przy użyciu społecznościowych aplikacji towarzyszących działających na Androidzie, iOS lub macOS. Aktualizacja oprogramowania sprzętowego może rozwiązać problemy z uzgadnianiem połączenia z iOS, poprawić stabilność aktywnej redukcji hałasu (ANC) lub naprawić zrywanie połączeń.

Pamiętaj jednak, że wgrywanie oprogramowania zapisuje dane bezpośrednio w wewnętrznej pamięci flash słuchawki. Przerwana aktualizacja może trwale uszkodzić kontroler. W tym poradniku opisujemy bezpieczne, sprawdzone przez społeczność procedury wgrywania oprogramowania dla wszystkich głównych chipsetów stosowanych w podróbkach.

> **Krótka odpowiedź:** Aby zaktualizować oprogramowanie sprzętowe podróbek AirPods, najpierw zidentyfikuj chipset i wybierz odpowiednie narzędzie: **FlyCC** (Airoha, w tym TigerBuilder) lub **Starfun** (Huilian). Upewnij się, że poziom naładowania obu słuchawek i etui przekracza 80%. Pozostaw otwartą pokrywę etui, nie wyjmuj z niego słuchawek, rozpocznij aktualizację OTA w aplikacji i nie zamykaj pokrywy, nie przełączaj Bluetooth ani nie zamykaj aplikacji, dopóki postęp nie osiągnie 100%.

::: warning Zasada numer jeden: jeśli działa, nie ruszaj
Aktualizacje oprogramowania sprzętowego w podróbkach nie działają tak jak poprawki do gier. Wydaje się je głównie po to, by naprawić poważne problemy spowodowane dużymi aktualizacjami iOS lub rozwiązać poważne błędy sprzętowe. Jeśli słuchawki łączą się bez problemów, świetnie brzmią, a ANC działa bez zarzutu, **nie aktualizuj oprogramowania sprzętowego**. Niepotrzebne wgrywanie oprogramowania tylko zwiększa ryzyko uszkodzenia słuchawek.
:::

## Lista kontrolna bezpieczeństwa przed aktualizacją

Zanim naciśniesz przycisk aktualizacji, bezwzględnie sprawdź, czy spełnione są te cztery warunki:

1. **Poziom naładowania powyżej 80%**: Upewnij się, że poziom naładowania obu słuchawek i etui wynosi co najmniej 80%. Jeśli słuchawka rozładuje się w trakcie wgrywania, program rozruchowy ulegnie uszkodzeniu.
2. **Podłącz etui do zasilania**: Na czas aktualizacji podłącz etui do ładowarki ściennej 5 V/1 A lub powerbanku.
3. **Pozostaw pokrywę otwartą**: Przez cały czas przesyłania danych słuchawki muszą pozostawać w etui, osadzone na stykach ładowania, a pokrywa etui musi być otwarta.
4. **Wyłącz automatyczną blokadę / usypianie ekranu**: Nie pozwól, by ekran telefonu się wygasił. Jeśli telefon przejdzie w głęboki tryb uśpienia lub zamknie procesy działające w tle, transfer Bluetooth może się zatrzymać.

## Krok 1: Zidentyfikuj chipset i aplikację

Wgranie pliku oprogramowania przeznaczonego dla układu Airoha na płytkę Huilian natychmiast uszkodzi urządzenie. Wybierz narzędzie odpowiednie do swojego chipsetu z naszego [katalogu przydatnych aplikacji](/pl/useful-apps):

- **Chipsety Airoha (1562AE, 1562E, 1571AM)** → Użyj **FlyCC** (przeczytaj nasz [poradnik po aplikacji FlyCC](/pl/articles/flycc-app-guide)).
- **Chipsety TigerBuilder (1562AE/TB, 1571AM/TB)** → Użyj **FlyCC**. Aplikacja CloudCC jest przestarzała, ponieważ TigerBuilder zintegrował funkcję OTA z FlyCC. Używaj jej tylko jako rozwiązania zastępczego, jeśli napotkasz problem z uprawnieniami do pamięci.
- **Chipsety Huilian (247, 277, 377, 377H3)** → Użyj **Starfun**.
- **Chipsety Jieli (Jerry)** → Podróbki Jieli z niższej półki nie obsługują aktualizacji oprogramowania sprzętowego OTA.

## Krok 2: Instrukcje aktualizacji krok po kroku

### Metoda A: Aktualizacja za pomocą FlyCC (Airoha)

1. Połącz AirPods z urządzeniem z Androidem za pomocą standardowych ustawień Bluetooth.
2. Uruchom **FlyCC** i upewnij się, że model jest widoczny na ekranie głównym.
3. Stuknij **Firmware Update** (lub **OTA Update**).
4. Stuknij **Check for Updates**. Jeśli aplikacja wykryje nową wersję, wyświetli numer kompilacji i listę zmian.
5. Stuknij **Start Update**. Aktualizacja przebiega w dwóch etapach: najpierw plik jest przesyłany do lewej słuchawki, a następnie do prawej.
6. Gdy postęp osiągnie 100%, poczekaj na komunikat: *„Update Successful”*.
7. Zamknij pokrywę etui i pozostaw je bez zmian przez 60 sekund, aby mikrokontrolery mogły się ponownie uruchomić.

### Metoda B: Rozwiązanie zastępcze CloudCC (TigerBuilder)

Urządzenia TigerBuilder aktualizuje się za pomocą FlyCC (metoda A). Użyj CloudCC tylko wtedy, gdy FlyCC napotka problem z uprawnieniami do pamięci:

1. Umieść obie słuchawki w etui i pozostaw otwartą pokrywę.
2. Otwórz **CloudCC** i stuknij **Search Device**.
3. Po wykryciu urządzenia wybierz urządzenie TigerBuilder.
4. Przejdź do karty **Firmware** i stuknij **Query Latest Version**.
5. Wybierz pakiet z chmury i stuknij **Download and Update**.
6. Połóż telefon tuż obok etui i pozostaw go tam, aż pojawi się komunikat o zakończeniu.

### Metoda C: Aktualizacja za pomocą Starfun (Huilian)

1. Upewnij się, że słuchawki są połączone z telefonem, a pokrywa etui jest otwarta.
2. Otwórz **Starfun** i stuknij ikonę **Settings / Firmware**.
3. Porównaj bieżącą wersję oprogramowania sprzętowego z najnowszą wersją dostępną w chmurze.
4. Stuknij **Upgrade**. Aplikacja zapisze kolejno bloki konfiguracji.
5. Po ponownym uruchomieniu zapomnij urządzenie w menu Bluetooth telefonu i wykonaj miękki reset.

## Co zrobić, jeśli aktualizacja zawiesi się lub zakończy niepowodzeniem

Jeśli aktualizacja zatrzyma się na określonym procencie (np. utknie na poziomie 45% na ponad 5 minut):

1. **Nie zamykaj pokrywy i nie wyjmuj słuchawek.**
2. Sprawdź, czy połączenie Bluetooth zostało przerwane. Jeśli aplikacja na to pozwala, stuknij **Retry** lub uruchom aplikację ponownie, nie wyjmując słuchawek z etui.
3. Jeśli słuchawki całkowicie przestaną reagować, skorzystaj z naszego [poradnika resetowania podróbek AirPods](/pl/articles/how-to-reset-fake-airpods), aby wykonać 15-sekundowy twardy reset kontrolera.
4. Otwórz ponownie aplikację do aktualizacji — w większości przypadków tryb odzyskiwania programu rozruchowego pozwoli wgrać pakiet od początku.

## Powiązane poradniki dotyczące rozwiązywania problemów

- Słuchawki nie pojawiają się w aplikacji do aktualizacji oprogramowania sprzętowego? Zobacz [Podróbki AirPods nie łączą się](/pl/articles/fake-airpods-wont-connect).
- Po aktualizacji występują problemy? Wykonaj instrukcje z poradnika [Jak zresetować podróbki AirPods](/pl/articles/how-to-reset-fake-airpods).
- Korzystasz z urządzeń Apple? Przeczytaj [Czy podróbki AirPods działają z nowymi iPhone’ami?](/pl/articles/do-fake-airpods-work-with-new-iphone).
- Potrzebujesz linków do pobrania aplikacji? Odwiedź stronę [Przydatne aplikacje](/pl/useful-apps).

## FAQ

::: details Czy mogę zaktualizować oprogramowanie sprzętowe podróbek AirPods za pomocą iPhone’a?
Nie. System iOS nie pozwala aplikacjom towarzyszącym zapisywać oprogramowania sprzętowego przez Bluetooth w akcesoriach, które nie mają certyfikatu MFi. Do wgrania aktualizacji musisz pożyczyć telefon z Androidem lub użyć zgodnego komputera Mac. Po aktualizacji oprogramowanie pozostanie na słuchawkach na stałe.
:::

::: details Czy aktualizacja zapewni podróbkom AirPods dostęp do sieci Znajdź?
Nie. Sieć Znajdź opiera się na zastrzeżonych certyfikatach kryptograficznych Apple, których nie da się dodać za pomocą aktualizacji oprogramowania sprzętowego.
:::

::: details Czy aktualizacja oprogramowania sprzętowego może uszkodzić moje podróbki AirPods?
Tak, jeśli aktualizacja zostanie przerwana z powodu rozładowanej baterii, przedwczesnego zamknięcia pokrywy lub wgrania pliku oprogramowania przeznaczonego dla innego chipsetu. Zawsze przestrzegaj powyższej listy kontrolnej bezpieczeństwa.
:::
