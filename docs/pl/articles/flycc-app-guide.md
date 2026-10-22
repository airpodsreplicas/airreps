---
title: 'Przewodnik po FlyCC APK: jak skonfigurować i dostroić repliki Airoha AirPods'
description: "FlyCC dla replik TigerBuilder: Android i iPhone, EQ i aktualizacje zależne od modelu, uprawnienia i rozwiązywanie problemów z połączeniem."
category: Korzystanie z replik
order: 13
---
# Przewodnik po FlyCC APK: jak skonfigurować i dostroić repliki AirPods z układami Airoha

FlyCC to aplikacja towarzysząca, którą nasz [katalog przydatnych aplikacji](/pl/useful-apps#tigerbuilder) wskazuje dla replik **TigerBuilder**. TigerBuilder to producent replik, a nie marka układów: jego modele są zbudowane na układach **Airoha**, takich jak 1562AE, 1563E i 1571AM. W zależności od modelu i jego oprogramowania układowego FlyCC może dostosować korektor (EQ), pokazać ustawienia właściwe dla danego modelu i zainstalować aktualizacje oprogramowania udostępnione przez producenta.

> **Szybka odpowiedź:** FlyCC to bezpłatna aplikacja firmy trzeciej dla replik AirPods od TigerBuilder (opartych na układach Airoha). Jest dostępna jako plik APK na Androida i jako aplikacja na iPhone’a w App Store — obie wersje znajdziesz w [Przydatnych aplikacjach](/pl/useful-apps#tigerbuilder). Jej możliwości zależą od konkretnego modelu, oprogramowania i wersji aplikacji: zwykle jest to korektor EQ oraz aktualizacje oprogramowania dla wybranych modeli. Modele Huilian, HR, BES i KKX korzystają z innych aplikacji z katalogu.

::: tip Wersje na Androida i iPhone’a
FlyCC jest dostępne jako plik APK na Androida i jako wersja na iPhone’a w App Store. To, że aplikacja działa na twoim telefonie, nie oznacza, że obsługuje twoje słuchawki: wyświetlane menu i aktualizacje zależą od wykrytego modelu, jego oprogramowania i wersji aplikacji. W naszym katalogu nie ma osobnej wersji na Maca. App Store pozwala zainstalować aplikację na iPhone’a na Macach z układem Apple, ale zaznacza, że nie została zweryfikowana pod kątem macOS, dlatego ten przewodnik nie opisuje korzystania z niej na Macu.
:::

## Które repliki korzystają z FlyCC?

Zacznij od sprzedawcy i wersji, którą kupiłeś, a nie tylko od nazwy układu. [Strony wersji](/pl/version-info/general) wskazują FlyCC dla modeli TigerBuilder, takich jak AirPods Pro 3 V7 TB, AirPods 4 V3 TB, AirPods Pro 2 V5.3 TB i AirPods Max V3. Zanim cokolwiek zainstalujesz, sprawdź stronę swojej wersji.

Sam układ Airoha nie przesądza o wyborze aplikacji. Modele HR również korzystają z układów Airoha, ale w katalogu przypisano im BullSuper i G&Link, modele Huilian używają StarFun, a niektóre starsze wersje z układami Airoha w ogóle nie są obsługiwane przez żadną aplikację. To, która aplikacja się połączy, jest przydatną wskazówką, ale nieudane wyszukiwanie w FlyCC nie dowodzi, że twoje słuchawki mają inny układ ani że nie są modelem, który zamówiłeś. Znaczenie mają też uprawnienia, wersja aplikacji i obsługa danego modelu (zobacz rozwiązywanie problemów poniżej).

## Jak bezpiecznie pobrać i zainstalować FlyCC

Korzystaj z linków w [Przydatnych aplikacjach](/pl/useful-apps#tigerbuilder), a nie z plików ponownie wrzuconych na inne strony.

**iPhone:** Zainstaluj FlyCC z App Store i zezwól na dostęp do Bluetooth, gdy iOS o to poprosi. Aplikacja wymaga iOS 13 lub nowszego (wersja 2.0.16 według stanu z 22 października 2026 r.).

**Android:** Wersja na Androida to plik APK do pobrania, a nie aplikacja ze Sklepu Google Play.

1. Pobierz plik APK z [Przydatnych aplikacji](/pl/useful-apps#tigerbuilder).
2. Gdy Android o to poprosi, zezwól na **Instalowanie nieznanych aplikacji** dla przeglądarki lub menedżera plików, którym otwierasz plik. Później możesz wyłączyć to uprawnienie.
3. Otwórz plik `.apk` i stuknij **Zainstaluj**.
4. Przyznaj uprawnienie Bluetooth, o które prosi aplikacja. Na Androidzie 12 i nowszych pojawia się ono jako **Urządzenia w pobliżu**. Na starszych wersjach Androida lub w przypadku starszych aplikacji wyszukiwanie urządzeń Bluetooth może zamiast tego wymagać uprawnienia **Lokalizacja** ([dokumentacja Androida dla deweloperów](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

FlyCC to oprogramowanie firmy trzeciej, a AirReps nie przeprowadził jego audytu bezpieczeństwa. Dostęp do Bluetooth lub urządzeń w pobliżu jest czymś normalnym w aplikacji do słuchawek; uważaj na prośby, które nie mają nic wspólnego ze słuchawkami. Dokumentacja Androida wyjaśnia, dlaczego system prosi o te uprawnienia, a nie to, co konkretna aplikacja z nimi robi. Na iPhonie informacje o prywatności w App Store to deklaracja samego dewelopera, a Apple zaznacza, że nie zostały one zweryfikowane przez Apple ([strona w App Store](https://apps.apple.com/us/app/flycc/id1661245709)).

## Co potrafi FlyCC

Menu wyświetlane przez FlyCC zależą od wykrytego modelu, więc dwie pary słuchawek mogą wyglądać w aplikacji zupełnie inaczej. Informacje o wersjach aplikacji na iPhone’a wymieniają poprawki brakujących menu (wersje 2.0.12 i 2.0.14), więc brak jakiegoś menu może wynikać z wersji aplikacji lub zgodności, a nie z innego układu.

### Korektor i dźwięk

Korektor EQ to główny powód, dla którego przewodnik kieruje właścicieli modeli TigerBuilder do FlyCC (zobacz [jakość dźwięku](/pl/introduction/sound-quality)). Wprowadzaj niewielkie zmiany i słuchaj efektu. Na przykład lekko obniż basy, jeśli twoja partia brzmi dudniąco. Członkowie społeczności udostępniają ustawienia korektora na [Discordzie AirReps](https://airreps.link/discord). Po przejściu na inny telefon sprawdź, czy twoje ustawienia EQ nadal działają, ponieważ zależy to od modelu.

### Sterowanie

Sterowanie dotykiem i naciśnięciem w replikach zmienia się zwykle w ustawieniach Bluetooth iPhone’a, tak jak w oryginalnych AirPods (zobacz [przewodnik po funkcjach](/pl/introduction/features)). Jeśli FlyCC pokazuje ustawienia sterowania dla twojego modelu, możesz z nich skorzystać, ale nie każdy model je oferuje.

### Aktualizacje oprogramowania (OTA)

Według opisu w App Store FlyCC oferuje aktualizacje oprogramowania dla wybranych produktów, a wersje 1.1.1 i 1.1.2 (2024) dodały obsługę OTA dla platformy AB157x firmy Airoha. Jeśli FlyCC oferuje aktualizację dla twojego modelu:

1. Sprawdź, czy jej potrzebujesz: czy rozwiązuje problem, który faktycznie masz, albo czy zaleca ją sprzedawca lub [strona twojej wersji](/pl/version-info/general). Jeśli słuchawki działają dobrze, możesz spokojnie zostawić oprogramowanie bez zmian.
2. Przeczytaj instrukcje aktualizacji, które FlyCC wyświetla dla twojego modelu, i postępuj zgodnie z nimi.
3. Utrzymuj naładowane słuchawki i etui, trzymaj telefon blisko z otwartą aplikacją i nie przerywaj aktualizacji, dopóki aplikacja nie potwierdzi jej zakończenia.

Jeśli aktualizacja się nie powiedzie, skontaktuj się ze sprzedawcą lub zapytaj na Discordzie, zamiast próbować oprogramowania z innej aplikacji. Cały proces opisuje przewodnik [Jak zaktualizować oprogramowanie sprzętowe podróbek AirPods](/pl/articles/how-to-update-fake-airpods-firmware).

## Rozwiązywanie problemów z połączeniem FlyCC

Jeśli FlyCC nie znajduje twoich słuchawek:

- **Najpierw je połącz**: sparuj słuchawki w ustawieniach Bluetooth telefonu, a potem otwórz FlyCC.
- **Sprawdź uprawnienia**: na Androidzie 12 i nowszych FlyCC potrzebuje uprawnienia **Urządzenia w pobliżu**; na starszych wersjach Androida może potrzebować uprawnienia **Lokalizacja**. Na iPhonie sprawdź **Ustawienia → Prywatność i ochrona → Bluetooth**.
- **Zaktualizuj aplikację**: FlyCC 2.0.16 na iPhone’a zawiera poprawkę dla części użytkowników, którzy nie mogli się połączyć.
- **Upewnij się, że aplikacja pasuje do twojego modelu**: sprawdź stronę swojej wersji. Jeśli model twojego sprzedawcy pochodzi od innego producenta, użyj aplikacji wskazanej dla niego w [Przydatnych aplikacjach](/pl/useful-apps). CloudCC zostało wycofane dla modeli TigerBuilder i służy wyłącznie jako obejście problemu z uprawnieniami do pamięci opisanego na tamtej stronie.
- **Nie traktuj jednego nieudanego wyszukiwania jako dowodu**: jeśli po tych krokach żadna ze wskazanych aplikacji się nie połączy, zapytaj na [Discordzie](https://airreps.link/discord), podając sprzedawcę i model. Bardzo tanie klony z układem Jieli nie działają z żadną z tych aplikacji. Jeśli nie masz pewności, co otrzymałeś, zajrzyj do [Jak rozpoznać podrabiane AirPods](/pl/articles/how-to-spot-fake-airpods).
- **Wyczyść pamięć podręczną parowania**: jeśli połączenie się zrywa, zresetuj parowanie, korzystając z naszego [przewodnika resetowania](/pl/articles/how-to-reset-fake-airpods).

## Powiązane przewodniki

- Używasz replik na co dzień z Androidem? Zobacz [Repliki AirPods na Androidzie](/pl/articles/airpods-replicas-on-android).
- Potrzebujesz narzędzi do innych układów? Sprawdź pełny [katalog przydatnych aplikacji](/pl/useful-apps).
- Słuchawki nie chcą się połączyć? Przejdź przez przewodnik [Podrabiane AirPods nie chcą się połączyć](/pl/articles/fake-airpods-wont-connect).
- Szukasz zweryfikowanych modeli Airoha? Przejrzyj [katalog zaufanych sprzedawców](/pl/links/info).

## FAQ

::: details Czy instalacja FlyCC na telefonie jest bezpieczna?
FlyCC to oprogramowanie firmy trzeciej, którego AirReps nie poddał audytowi bezpieczeństwa, więc zachowaj zwykłą ostrożność: pobieraj je z linku w Przydatnych aplikacjach lub z App Store, sprawdź, czy prośby o uprawnienia dotyczą Bluetooth, i odrzucaj wszystko, co nie ma z tym związku. Informacje o prywatności w App Store to deklaracja dewelopera, a nie audyt przeprowadzony przez Apple.
:::

::: details Czy mogę używać FlyCC na iPhonie?
Tak. FlyCC jest dostępne w App Store na iPhone’a (iOS 13 lub nowszy; wersja 2.0.16 według stanu z 22 października 2026 r.), a framework [Core Bluetooth](https://developer.apple.com/bluetooth/) firmy Apple pozwala aplikacjom na iPhone’a współpracować z akcesoriami Bluetooth Low Energy. To, co FlyCC potrafi na iPhonie, zależy od twojego modelu, jego oprogramowania i wersji aplikacji, a aktualizacje oprogramowania są dostępne dla wybranych produktów, nie dla każdej pary. Android nadal pozostaje opcją dzięki plikowi APK z Przydatnych aplikacji.
:::

::: details Dlaczego FlyCC nie może znaleźć moich słuchawek?
Najczęstsze przyczyny to brak uprawnienia do Bluetooth lub urządzeń w pobliżu, nieaktualna wersja aplikacji, słuchawki, które nie są jeszcze połączone z telefonem, albo model nieobsługiwany przez FlyCC. FlyCC jest wskazane dla modeli TigerBuilder; modele Huilian korzystają ze StarFun, a modele HR z BullSuper lub G&Link. Nieudane wyszukiwanie nie dowodzi, jaki układ jest w środku, więc sprawdź model swojego sprzedawcy na stronach wersji i zapytaj na Discordzie, jeśli żadna ze wskazanych aplikacji się nie połączy.
:::
