---
description: "Jak wnosić wkład do projektu AirReps. Sforkuj repozytorium, skonfiguruj środowisko, wprowadź zmiany i prześlij pull request."
---

# Wytyczne dotyczące współtworzenia

Cieszymy się, że chcesz wnosić wkład w nasz projekt. Aby usprawnić proces, przygotowaliśmy szczegółowy przewodnik krok po kroku poniżej.

::: tip
Dla wygody zarządzania swoimi wkładami zalecamy używanie [GitHub Desktop](https://desktop.github.com/), klienta GitHub z interfejsem graficznym.
:::

## Sforkowanie i sklonowanie repozytorium

Wykonaj poniższe kroki, aby sforkować repozytorium, sklonować je, utworzyć nową gałąź i skonfigurować lokalne środowisko deweloperskie:

1. Przejdź na stronę projektu na GitHubie [klikając tutaj](https://github.com/AirPodsReplicas/AirReps)
2. Kliknij `Fork` w prawym górnym rogu. Spowoduje to utworzenie kopii repozytorium na Twoim koncie GitHub.
3. Otwórz [GitHub Desktop](https://desktop.github.com/).
4. W górnym menu GitHub Desktop przejdź do `File` > `Clone Repository...`.
5. W kategorii GitHub.com powinno pojawić się repozytorium, które sforkowałeś.
6. Aby sklonować repozytorium, kliknij `Clone`.
7. Po zakończeniu procesu klonowania przejdź do `Current Branch`, a następnie wybierz `New Branch`. Wprowadź opisową nazwę dla nowej gałęzi.

::: warning
Główna gałąź jest chroniona. W związku z tym bezpośrednie edytowanie nie jest dozwolone. Zawsze twórz nową gałąź na swoje zmiany.
:::

8. Przejdź do katalogu `airreps` w swoim lokalnym środowisku.
9. Otwórz projekt w dowolnym Zintegrowanym Środowisku Programistycznym (IDE). Polecamy [Visual Studio Code](https://code.visualstudio.com/), rozbudowane, darmowe IDE. Możesz też użyć środowisk wspomaganych sztuczną inteligencją, takich jak [Cursor](https://cursor.com/) lub [Google's Antigravity](https://antigravity.google), które mogą ułatwić wnoszenie wkładu dzięki podpowiedziom kodu i dokumentacji.

## Konfiguracja środowiska deweloperskiego

Wybierz jedną z dwóch poniższych opcji, aby skonfigurować środowisko deweloperskie:

### Opcja 1 (zalecana)

Aby ustawić optymalne środowisko deweloperskie:

1. [Zainstaluj Bun](https://bun.sh/). Ten projekt używa Bun jako menedżera pakietów i środowiska uruchomieniowego.
2. [Zainstaluj Node.js](https://nodejs.org/). Zalecamy wersję Long-Term Support (LTS).
3. Po instalacji otwórz terminal w swoim IDE i wykonaj następujące polecenie:

```shell
bun install
```

4. Uruchom serwer deweloperski dokumentacji:

```shell
bun run docs:dev
```

5. Terminal wyświetli lokalny adres URL, np. `http://localhost:5173`. Odwiedź ten adres w przeglądarce, aby zobaczyć dokumentację. Strona będzie się automatycznie odświeżać podczas modyfikowania plików źródłowych.

### Opcja 2

Ta metoda pozwala pracować bezpośrednio z plikami markdown, chociaż może nie renderować dokładnie niektórych funkcji VitePress.

1. Otwórz [Visual Studio Code](https://code.visualstudio.com/) lub swoje ulubione IDE.
2. Zainstaluj rozszerzenie [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) dla Visual Studio Code. Znajdziesz je na karcie `Extensions` w pasku bocznym.
3. Otwórz dowolny plik markdown z katalogu `docs`.
4. Aby włączyć podgląd Markdown, otwórz paletę poleceń za pomocą `Ctrl + Shift + P` (Windows) lub `Cmd + Shift + P` (Mac).
5. Wyszukaj `Markdown Preview` i wybierz `Markdown: Open Preview`.

::: warning
Pamiętaj, że VitePress oferuje dodatkowe funkcje niedostępne w standardowym markdown. Dlatego ta metoda może nie odzwierciedlać dokładnie końcowego formatowania widocznego na oficjalnej stronie dokumentacji.
:::

## Przesyłanie zmian

Gdy wprowadzisz zmiany, wykonaj poniższe kroki, aby je przesłać do przeglądu:

1. Jeśli wybrałeś Opcję 1 w sekcji [Konfiguracja środowiska deweloperskiego](#opcja-1-zalecana), upewnij się, że strony poprawnie się zbudują, uruchamiając następujące polecenie:

```shell
bun run docs:build
```

::: danger
Jeśli wyjście wyświetli `Command failed` lub inny komunikat o błędzie, coś jest nie tak. Komunikat o błędzie powinien wskazać przyczynę problemu. Jeśli nie masz pewności, skontaktuj się z członkami naszego zespołu na naszym [serwerze Discord](https://airreps.link/discord).
:::

2. Otwórz GitHub Desktop. W lewym panelu zobaczysz liczbę zmienionych plików.
3. Możesz przejrzeć zmiany wprowadzane w każdym pliku. Wybierz po jednym pliku i wypełnij pole `Summary (required)`. W razie potrzeby podaj dodatkowe szczegóły w polu `Description`. Kliknij `Commit to the branch you created`, aby zatwierdzić zmiany.
4. Następnie kliknij `Push changes to x` *(x to nazwa gałęzi, którą utworzyłeś)*, aby wysłać zmiany na GitHub.

::: tip
Jeśli zatwierdziłeś wszystkie pliki — świetnie! Następnym krokiem będzie wypchnięcie zmian na GitHub i utworzenie Pull Requesta.
:::

## Tworzenie Pull Requesta

Wykonaj poniższe kroki, aby utworzyć pull request z propozycją scalania Twoich zmian do głównej gałęzi:

1. Po zatwierdzeniu i wypchnięciu wszystkich zmian na zdalną gałąź pora utworzyć pull request.
2. Przejdź do swojego sforkowanego repozytorium na stronie GitHub.
3. Kliknij `New pull request`. Zostaniesz przekierowany na stronę oryginalnego repozytorium.
4. Upewnij się, że repozytorium bazowe to `base: main`, a repozytorium źródłowe to `<your_username>/<your_branch_name>`.
5. Przejrzyj swoje zmiany i wypełnij formularz jasnym opisem, co zmieniłeś i dlaczego. *Dla odniesienia; możesz zobaczyć ten [przykładowy pull request](https://github.com/AirPodsReplicas/AirReps/pull/20).*
6. Kliknij `Create pull request`.
7. Po wysłaniu pull requesta GitHub Actions spróbuje zbudować Twoje zmiany, aby wykryć ewentualne problemy. Jeśli nie będzie problemów, współtwórca repozytorium przejrzy Twoje zmiany i albo je zmerguje, albo poprosi o dalsze poprawki.

## Co możesz wnieść?

Po pomyślnym zmergowaniu Twój profil GitHub zostanie automatycznie dodany do sekcji `Contributors` znajdującej się na dole naszej strony głównej. Jeśli z jakiegokolwiek powodu wolisz, aby Twój profil nie był tam uwzględniony, skontaktuj się z członkiem naszego zespołu, aby usunąć profil.

- **Poprawki literówek lub błędów** - Zauważyłeś pomyłkę? Prześlij szybką poprawkę!
- **Aktualizacja nieaktualnych informacji** - Pomóż utrzymać przewodnik na bieżąco
- **Dodawanie nowych treści** - Dokumentuj nowe dodatki, funkcje lub konfiguracje
- **Poprawa przejrzystości** - Ułatwiaj zrozumienie wyjaśnień
- **Dodawanie zrzutów ekranu** - Przewodniki wizualne zawsze się przydają
- **Sugestie ulepszeń** - Masz pomysł? Otwórz issue, aby omówić go z nami

Dziękujemy za Twoje zaangażowanie w usprawnianie naszego projektu!
