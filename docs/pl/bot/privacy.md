---
title: Polityka prywatności
description: 'Jak bot Discord AirReps zbiera, wykorzystuje i chroni dane.'
ogLabel: PRAWNE
sidebar: false
---
# Polityka prywatności

Ta strona wyjaśnia, jakie dane gromadzi bot AirReps na Discordzie, dlaczego je przechowujemy oraz jak możesz poprosić o ich usunięcie.

**Ostatnia aktualizacja:** 23 sierpnia 2026 r.

## Wprowadzenie

Zespół administracyjny AirReps prowadzi bota AirReps na Discordzie („Bot”), używanego w społeczności [AirReps](https://airpodsreplicas.com). Niniejsza Polityka prywatności opisuje, jak gromadzimy, wykorzystujemy, przechowujemy i chronimy dane, gdy zapraszasz Bota lub z niego korzystasz. Korzystanie z Bota oznacza zgodę na poniższe zasady.

Te strony uzupełniają nasze [Warunki korzystania z usługi](/pl/bot/terms). Discord ma również własną [Politykę prywatności](https://discord.com/privacy).

## Gromadzone przez nas dane

Bot przechowuje dane potrzebne do działania funkcji wymienionych w Warunkach. Obejmuje to:

- identyfikatory użytkowników Discorda, nazwy użytkowników, wyświetlane nazwy, identyfikatory serwerów (gildii) oraz identyfikatory kanałów
- identyfikatory ról, gdy wybierasz rolę językową lub gdy narzędzia administracyjne wymagają sprawdzenia uprawnień
- korzystanie z poleceń (które polecenie slash zostało wykonane i kiedy), w tym opcjonalne logi poleceń administracyjnych
- treść opinii przesłaną za pomocą `/feedback`
- zgłoszenia do loterii: identyfikator użytkownika Discorda oraz, jeśli wymaga tego loteria, wpisany przez Ciebie UID KakoBuy
- analitykę członków: liczbę dołączeń i odejść, znaczniki czasu dołączeń, staż, godzinę dołączeń/odejść oraz identyfikatory używane do odróżnienia ponownego dołączenia od pierwszego dołączenia
- treść wiadomości i załączniki, gdy wymaga ich aktywna funkcja: ochronę przed oszustwami (tekst, sygnatury obrazów oraz kopię pierwszego obrazu do zgłoszenia dla moderatorów), konwerter KakoBuy (adresy URL Weidian / Taobao / 1688 / Tmall w wiadomości) oraz lustro Reddita (tekst i obrazy ze skonfigurowanego kanału ogłoszeń)

Dane te są przechowywane w powiązaniu z Twoją tożsamością na Discordzie oraz serwerami, na których używany jest Bot. Dane trwałe znajdują się w lokalnej bazie SQLite na komputerze, na którym działa Bot. Dopasowywanie oszustw korzysta z krótkiego, przechowywanego w pamięci okna ostatnich wiadomości.

Nie prosimy o adres e-mail, numer telefonu, dane płatnicze ani imię i nazwisko. UID KakoBuy jest przechowywany wyłącznie wtedy, gdy wpiszesz go podczas loterii. Jeśli samodzielnie wyślesz te dane administracji, nie będzie to związane z Botem.

## Jak wykorzystujemy Twoje dane

Wykorzystujemy te dane, aby:

- wyświetlać katalogi sprzedawców i pomoce przy składaniu zamówień (`/jenny`, `/hicity`, `/earhive`, `/ultimateguide`, `/wise`, `/text`, `/alipay`, `/eartip`, `/resethelp`)
- przeliczać waluty za pomocą `/convert`
- przydzielać wybrane przez Ciebie role językowe
- przekazywać opinie na kanał administracyjny
- prowadzić loterie (`/gs`) i weryfikować UID KakoBuy, gdy organizator włączy tę funkcję
- tworzyć dzienne, tygodniowe i miesięczne raporty dotyczące członków oraz publikować posty z kamieniami milowymi
- aktualizować liczbę członków kanału głosowego
- wysyłać wiadomość powitalną w DM po dołączeniu do skonfigurowanego serwera AirReps
- oznaczać spam związany z oszustwami w wielu kanałach, wyciszać konto, usuwać serię wiadomości, wysyłać Ci wiadomość prywatną i zgłaszać sprawę na czacie moderatorów
- odpowiadać na linki do sklepów internetowych adresem URL finalizacji zakupu KakoBuy (z kodem afiliacyjnym `airreps`)
- publikować wybrane ogłoszenia z Discorda na [r/airreps](https://www.reddit.com/r/airreps)
- diagnozować błędy i prowadzić ścieżkę audytową administracji, gdy logowanie jest włączone

Możemy analizować zagregowane liczby członków, aby ulepszać serwer. Nie sprzedajemy danych osobowych.

## Usługi stron trzecich

Bot korzysta z kilku usług, aby realizować powyższe funkcje:

- **Discord** — API obsługujące każde polecenie, zdarzenie, wiadomość prywatną i wyciszenie. Obowiązują warunki i polityka prywatności Discorda. Nie kontrolujemy Discorda.
- **Frankfurter (kursy ECB)** — `/convert` wysyła kwotę i kody walut, aby pobrać kurs. Kursy są przechowywane w pamięci przez kilka godzin.
- **Reddit** — gdy lustro jest włączone, tekst i obrazy ogłoszeń są przesyłane za pośrednictwem API Reddita do skonfigurowanego subreddita.
- **KakoBuy** — przekonwertowane adresy URL produktów są wysyłane do KakoBuy (w tym kod afiliacyjny AirReps), aby odpowiedź mogła zawierać link do finalizacji zakupu i miniaturę.

Udostępniamy dane wyłącznie wtedy, gdy jest to wymagane do działania tych funkcji, wymagane przez prawo lub konieczne do zapobieżenia poważnej szkodzie. Nie sprzedajemy ani nie wynajmujemy danych do celów reklamowych.

## Przechowywanie i usuwanie danych

Czas przechowywania danych zależy od funkcji:

- **Loterie** pozostają w SQLite do czasu ich zakończenia lub usunięcia przez organizatora (zgłoszenia, opcjonalne UID, zwycięzcy).
- **Analityka członków** (liczniki dołączeń/odejść, zestawienia godzinowe, identyfikatory osób, które odeszły, znaczniki czasu dołączeń) pozostaje przechowywana, aby nadal działały raporty dzienne, tygodniowe i miesięczne oraz wykrywanie ponownych dołączeń. Znaczniki czasu dołączeń mogą pozostać po odejściu danej osoby, aby staż był prawidłowy po jej powrocie.
- **Bufory ochrony przed oszustwami** są krótkotrwałe i przechowywane w pamięci (przez kilkadziesiąt sekund). Zgłoszenie na kanale moderatorów, w tym zapisany podgląd obrazu, pozostaje na Discordzie jak każda inna wiadomość administracyjna.
- **Opinie** są publikowane na kanale administracyjnym i pozostają tam jako wiadomość na Discordzie.
- **Logi poleceń**, gdy są włączone, są wiadomościami na Discordzie w kanale logów.
- **Posty na Reddicie** pozostają na Reddicie zgodnie z własnymi zasadami przechowywania Reddita.
- Buforowane obiekty Discorda podlegają standardowemu buforowaniu API.

Jeśli chcesz otrzymać kopię danych przechowywanych przez nas w SQLite lub poprosić o ich usunięcie (wpis do loterii, znacznik czasu dołączenia itp.), dołącz do [Discorda AirReps](https://airreps.link/discord) i napisz do administracji. Rozpatrzymy prośbę w rozsądnym terminie. Nie możemy usunąć wiadomości, wyciszeń ani postów na Reddicie, które znajdują się już wyłącznie na Discordzie lub Reddicie.

## Bezpieczeństwo

Ograniczamy liczbę członków zespołu administracyjnego, którzy mogą przeglądać przechowywane dane, i stosujemy standardowe zabezpieczenia techniczne na komputerze przechowującym plik SQLite. Żadna konfiguracja nie jest idealna. Jeśli uważasz, że doszło do wycieku danych lub uzyskano do nich dostęp bez uprawnień, niezwłocznie poinformuj administrację.

## Zmiany w niniejszej Polityce prywatności

Możemy zmieniać niniejszą politykę, gdy zmienia się Bot lub prawo. Data „Ostatnia aktualizacja” na górze wskazuje aktualną wersję. Dalsze korzystanie z Bota po wprowadzeniu zmiany oznacza akceptację nowej polityki.

## Kontakt

Pytania dotyczące niniejszej polityki lub prośby o usunięcie danych: dołącz do [Discorda AirReps](https://airreps.link/discord) i napisz do administracji.
