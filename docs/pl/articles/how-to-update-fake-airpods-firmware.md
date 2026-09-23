---
title: 'Jak zaktualizować oprogramowanie sprzętowe podrabianych słuchawek AirPods: przewodnik krok po kroku'
description: 'Jak bezpiecznie zaktualizować oprogramowanie sprzętowe replik AirPods za pomocą FlyCC, CloudCC i Starfun — zasady bezpiecznego ładowania, unikanie ucegleń i sytuacje, w których lepiej pozostawić oprogramowanie sprzętowe bez zmian.'
category: Rozwiązywanie problemów
order: 16
---
# Jak zaktualizować oprogramowanie sprzętowe podróbek AirPods: przewodnik krok po kroku

W przeciwieństwie do oryginalnych słuchawek Apple AirPods, które aktualizują się po cichu w tle za pośrednictwem iOS, repliki AirPods aktualizują się przez społecznościowe aplikacje pomocnicze działające na Androidzie lub macOS. Aktualizacja oprogramowania sprzętowego może rozwiązać problemy z uzgadnianiem połączenia z iOS, poprawić stabilność aktywnej redukcji hałasu (ANC) lub naprawić zrywanie połączeń.

Jednak wgrywanie oprogramowania sprzętowego zapisuje dane bezpośrednio w wewnętrznej pamięci flash słuchawki. Przerwana aktualizacja może trwale unieruchomić kontroler. Ten przewodnik opisuje bezpieczne, przetestowane przez społeczność procedury wgrywania oprogramowania dla wszystkich głównych chipsetów stosowanych w replikach.

> **Krótka odpowiedź:** Aby zaktualizować oprogramowanie sprzętowe repliki AirPods, najpierw zidentyfikuj chipset i wybierz odpowiednie narzędzie: **FlyCC** (Airoha), **CloudCC** (TigerBuilder) lub **Starfun** (Huilian). Upewnij się, że obie słuchawki i etui ładujące są naładowane powyżej 80%. Pozostaw otwartą pokrywę etui, umieść w nim obie słuchawki, rozpocznij aktualizację OTA w aplikacji i nie zamykaj pokrywy, nie przełączaj Bluetooth ani nie zamykaj aplikacji, dopóki postęp nie osiągnie 100%.

::: warning Najważniejsza zasada: jeśli działa, nie ruszaj
Aktualizacje oprogramowania sprzętowego replik nie działają tak jak poprawki do gier. Są wydawane głównie w celu naprawienia problemów powodowanych przez duże aktualizacje iOS lub rozwiązania poważnych błędów sprzętowych. Jeśli słuchawki obecnie płynnie się łączą, świetnie brzmią, a ANC działa bez zarzutu, **nie aktualizuj oprogramowania sprzętowego**. Niepotrzebne wgrywanie oprogramowania zwiększa jedynie ryzyko trwałego uszkodzenia urządzenia.
:::

## Lista kontrolna bezpieczeństwa przed aktualizacją

Przed naciśnięciem przycisku aktualizacji bez wyjątków sprawdź te cztery warunki:

1. **Poziom baterii powyżej 80%**: Upewnij się, że obie słuchawki i etui ładujące są naładowane co najmniej w 80%. Jeśli słuchawce zabraknie energii w trakcie wgrywania, program rozruchowy zostanie uszkodzony.
2. **Pozostaw etui podłączone do zasilania**: Podłącz etui ładujące do ściennego zasilacza 5 V/1 A lub powerbanku na czas aktualizacji.
3. **Pozostaw otwartą pokrywę**: Przez cały transfer słuchawki muszą znajdować się na pinach ładujących, a pokrywa etui musi być otwarta.
4. **Wyłącz automatyczną blokadę / wygaszanie ekranu**: Nie pozwól, aby ekran telefonu się wygasił. Jeśli telefon przejdzie w głęboki sen lub zamknie procesy działające w tle, transfer Bluetooth może się zatrzymać.

## Krok 1: Zidentyfikuj chipset i aplikację

Wgranie pliku binarnego oprogramowania przeznaczonego dla układu Airoha na płytkę Huilian natychmiast trwale uszkodzi urządzenie. Dopasuj narzędzie do chipsetu, korzystając z naszego [katalogu przydatnych aplikacji](/pl/useful-apps):

- **Chipsety Airoha (1562AE, 1562E, 1571AM)** $\to$ Użyj **FlyCC** (przeczytaj nasz [przewodnik po aplikacji FlyCC](/pl/articles/flycc-app-guide)).
- **Chipsety TigerBuilder (1562AE/TB, 1571AM/TB)** $\to$ Użyj **CloudCC**.
- **Chipsety Huilian (247, 277, 377, 377H3)** $\to$ Użyj **Starfun**.
- **Chipsety Jieli (Jerry)** $\to$ Klony Jieli z niższej półki nie obsługują aktualizacji oprogramowania sprzętowego OTA.

## Krok 2: Procedury aktualizacji krok po kroku

### Metoda A: Aktualizacja za pomocą FlyCC (Airoha)

1. Połącz AirPods z urządzeniem z Androidem za pomocą standardowych ustawień Bluetooth.
2. Uruchom **FlyCC** i sprawdź, czy model jest widoczny na ekranie głównym.
3. Stuknij **Aktualizacja oprogramowania sprzętowego** (lub **Aktualizacja OTA**).
4. Stuknij **Sprawdź aktualizacje**. Jeśli zostanie wykryta nowa wersja, aplikacja wyświetli numer kompilacji i listę zmian.
5. Stuknij **Rozpocznij aktualizację**. Zobaczysz dwa etapy: przesyłanie pliku binarnego do lewej słuchawki, a następnie do prawej.
6. Gdy postęp osiągnie 100%, zaczekaj na komunikat: *„Aktualizacja zakończona pomyślnie”*.
7. Zamknij pokrywę etui ładującego i pozostaw je nieruszone przez 60 sekund, aby umożliwić ponowne uruchomienie mikrokontrolerów.

### Metoda B: Aktualizacja za pomocą CloudCC (TigerBuilder)

1. Umieść obie słuchawki w etui i pozostaw otwartą pokrywę.
2. Otwórz **CloudCC** i stuknij **Wyszukaj urządzenie**.
3. Po wykryciu wybierz swoje urządzenie TigerBuilder.
4. Przejdź do karty **Oprogramowanie sprzętowe** i stuknij **Sprawdź najnowszą wersję**.
5. Wybierz pakiet z chmury i stuknij **Pobierz i aktualizuj**.
6. Trzymaj telefon bezpośrednio obok etui ładującego, dopóki komunikat nie potwierdzi zakończenia.

### Metoda C: Aktualizacja za pomocą Starfun (Huilian)

1. Upewnij się, że słuchawki są połączone z telefonem, a pokrywa jest otwarta.
2. Otwórz **Starfun** i stuknij ikonę **Ustawienia / Oprogramowanie sprzętowe**.
3. Porównaj bieżącą wersję oprogramowania sprzętowego z najnowszą wersją dostępną w chmurze.
4. Stuknij **Aktualizuj**. Aplikacja zapisze kolejno bloki konfiguracji.
5. Po ponownym uruchomieniu wybierz opcję zapomnienia urządzenia w menu Bluetooth telefonu i wykonaj miękki reset.

## Co zrobić, jeśli aktualizacja zawiesi się lub zakończy niepowodzeniem

Jeśli aktualizacja zatrzyma się na określonym poziomie (np. na 45% przez ponad 5 minut):

1. **Nie zamykaj pokrywy ani nie wyjmuj słuchawek.**
2. Sprawdź, czy Bluetooth został rozłączony. Jeśli aplikacja na to pozwala, stuknij **Ponów** lub uruchom aplikację ponownie, pozostawiając słuchawki na miejscu.
3. Jeśli słuchawki całkowicie przestaną reagować, skorzystaj z naszego [przewodnika Jak zresetować podróbki AirPods](/pl/articles/how-to-reset-fake-airpods), aby wykonać 15-sekundowy twardy reset kontrolera.
4. Otwórz ponownie aplikację aktualizującą — w większości przypadków program rozruchowy odzyskiwania umożliwi ponowne wgranie pakietu od 0%.

## Powiązane przewodniki rozwiązywania problemów

- Słuchawki nie pojawiają się w aplikacji oprogramowania sprzętowego? Zobacz [Podróbki AirPods nie łączą się](/pl/articles/fake-airpods-wont-connect).
- Występują problemy po aktualizacji? Skorzystaj z poradnika [Jak zresetować podróbki AirPods](/pl/articles/how-to-reset-fake-airpods).
- Korzystasz z ekosystemu Apple? Przeczytaj [Czy podróbki AirPods działają z nowymi iPhone’ami?](/pl/articles/do-fake-airpods-work-with-new-iphone).
- Potrzebujesz linków do pobrania aplikacji? Odwiedź stronę [Przydatne aplikacje](/pl/useful-apps).

## FAQ

::: details Czy mogę zaktualizować oprogramowanie sprzętowe repliki AirPods na iPhonie?
Nie. iOS nie pozwala aplikacjom pomocniczym zapisywać oprogramowania sprzętowego przez Bluetooth w akcesoriach innych niż MFi. Musisz pożyczyć telefon z Androidem (lub użyć zgodnego komputera Mac), aby wgrać aktualizacje oprogramowania sprzętowego. Po aktualizacji oprogramowanie pozostanie na stałe w słuchawkach.
:::

::: details Czy aktualizacja zapewni mojej replice AirPods dostęp do sieci Apple Znajdź?
Nie. Sieć Znajdź opiera się na zastrzeżonych certyfikatach kryptograficznych Apple, których nie można dodać za pomocą aktualizacji oprogramowania sprzętowego.
:::

::: details Czy aktualizacja oprogramowania sprzętowego może trwale uszkodzić moje podróbki AirPods?
Tak, jeśli aktualizacja zostanie przerwana z powodu rozładowanej baterii, zbyt wczesnego zamknięcia pokrywy lub wgrania pliku binarnego oprogramowania przeznaczonego dla innego chipsetu. Zawsze przestrzegaj powyższej listy kontrolnej bezpieczeństwa przed aktualizacją.
:::
