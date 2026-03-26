---
description: "Jak wnosić wkład w projekt AirReps. Sforkuj repozytorium, skonfiguruj środowisko, wprowadź zmiany i prześlij pull request."
---

# Wytyczne dotyczące współtworzenia

Cieszy nas Twoje zainteresowanie wniesieniem wkładu do naszego projektu. Aby usprawnić proces współpracy, poniżej zamieściliśmy szczegółowy, krok po kroku przewodnik.

::: tip
Dla ułatwienia zarządzania swoimi wkładami zalecamy używanie [GitHub Desktop](https://desktop.github.com/), graficznego klienta GitHub.
:::

## Forkowanie i klonowanie repozytorium

Wykonaj poniższe kroki, aby sforkować repozytorium, sklonować je, utworzyć nową gałąź i skonfigurować lokalne środowisko programistyczne:

1. Przejdź na stronę GitHub projektu [klikając tutaj](https://github.com/AirPodsReplicas/AirReps)
2. Kliknij `Fork` w prawym górnym rogu. Spowoduje to utworzenie kopii repozytorium na Twoim koncie GitHub.
3. Otwórz [GitHub Desktop](https://desktop.github.com/).
4. W górnym menu GitHub Desktop przejdź do `File` > `Clone Repository...`.
5. W kategorii GitHub.com powinno pojawić się repozytorium, które sforkowałeś.
6. Aby sklonować repozytorium, kliknij `Clone`.
7. Po zakończeniu klonowania przejdź do `Current Branch`, a następnie wybierz `New Branch`. Wpisz opisową nazwę dla nowej gałęzi.

::: warning
Gałąź main jest chroniona. W związku z tym edycja bezpośrednio na niej jest niedozwolona. Zawsze twórz nową gałąź dla swoich zmian.
:::

8. Przejdź do katalogu `airreps` w swoim lokalnym środowisku.
9. Otwórz projekt w wybranym Zintegrowanym Środowisku Programistycznym (IDE). Polecamy [Visual Studio Code](https://code.visualstudio.com/), rozbudowane, darmowe IDE. Możesz również korzystać z IDE wspomaganych przez AI, takich jak [Cursor](https://cursor.com/) lub [Google's Antigravity](https://antigravity.google), które mogą ułatwić pracę, pomagając przy podpowiedziach kodu i dokumentacji.

## Konfigurowanie środowiska programistycznego

Wybierz jedną z dwóch poniższych opcji, aby skonfigurować środowisko:

### Opcja 1 (zalecana)

Aby ustawić optymalne środowisko programistyczne:

1. [Zainstaluj Bun](https://bun.sh/). Projekt używa Bun jako menedżera pakietów i runtime.
2. [Zainstaluj Node.js](https://nodejs.org/). Zalecamy wersję Long-Term Support (LTS).
3. Po instalacji otwórz terminal w swoim IDE i wykonaj następujące polecenie:

```shell
bun install
```

4. Uruchom serwer deweloperski dokumentacji:

```shell
bun run docs:dev
```

5. W terminalu pojawi się lokalny adres URL, na przykład `http://localhost:5173`. Odwiedź ten adres w przeglądarce, aby zobaczyć dokumentację. Strona będzie automatycznie odświeżana w miarę modyfikowania plików źródłowych.

### Opcja 2

Ta metoda pozwala pracować bezpośrednio z plikami markdown, choć może nie odwzorowywać dokładnie niektórych funkcji VitePress.

1. Otwórz [Visual Studio Code](https://code.visualstudio.com/) lub swoje ulubione IDE.
2. Zainstaluj rozszerzenie [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) dla Visual Studio Code. Znajdziesz je na karcie `Extensions` w pasku bocznym.
3. Otwórz dowolny plik markdown z katalogu `docs`.
4. Aby włączyć podgląd Markdown, otwórz paletę poleceń skrótem `Ctrl + Shift + P` (Windows) lub `Cmd + Shift + P` (Mac).
5. Wyszukaj `Markdown Preview` i wybierz `Markdown: Open Preview`.

::: warning
Pamiętaj, że VitePress oferuje dodatkowe funkcje niedostępne w standardowym markdown. Z tego powodu ta metoda może nie odzwierciedlać dokładnego formatowania, jakie zobaczysz na oficjalnej stronie dokumentacji.
:::

## Zgłaszanie zmian

Gdy wprowadzisz zmiany, wykonaj poniższe kroki, aby przesłać je do przeglądu:

1. Jeśli wybrałeś Opcję 1 w sekcji [Konfigurowanie środowiska programistycznego](#opcja-1-zalecana), upewnij się, że strony budują się poprawnie, uruchamiając następujące polecenie:

```shell
bun run docs:build
```

::: danger
Jeśli w wyjściu pojawi się `Command failed` lub inny komunikat o błędzie, oznacza to problem. Komunikat o błędzie powinien dać wskazówki, co jest nie tak. Jeśli nie jesteś pewien, skontaktuj się z członkami naszego zespołu na naszym [serwerze Discord](https://airreps.link/discord).
:::

2. Otwórz GitHub Desktop. Lewy panel pokaże liczbę zmienionych plików.
3. Możesz przejrzeć zmiany w każdym pliku. Wybierz pojedynczy plik na raz i wypełnij pole `Summary (required)`. W razie potrzeby podaj dodatkowe szczegóły w polu `Description`. Kliknij `Commit to the branch you created`, aby zatwierdzić zmiany.
4. Teraz kliknij `Push changes to x` *(gdzie x to nazwa utworzonej gałęzi)*, aby przesłać swoje zmiany na GitHub.

::: tip
Jeśli zatwierdziłeś wszystkie pliki — świetnie! Kolejnym krokiem będzie wypchnięcie zmian na GitHub i utworzenie Pull Requesta.
:::

## Tworzenie Pull Requesta

Wykonaj poniższe kroki, aby utworzyć pull request proponujący scalenie Twoich zmian do gałęzi main:

1. Gdy wszystkie zmiany są zatwierdzone i wypchnięte na zdalną gałąź, czas utworzyć pull request.
2. Przejdź do swojego sforkowanego repozytorium na stronie GitHub.
3. Kliknij `New pull request`. Zostaniesz przekierowany na stronę oryginalnego repozytorium.
4. Upewnij się, że repozytorium bazowe to `base: main`, a repozytorium źródłowe to `<your_username>/<your_branch_name>`.
5. Przejrzyj swoje zmiany i wypełnij formularz jasnym opisem, co zmieniłeś i dlaczego. *dla odniesienia; możesz sprawdzić ten [przykładowy pull request](https://github.com/AirPodsReplicas/AirReps/pull/20).*
6. Kliknij `Create pull request`.
7. Po przesłaniu pull requesta GitHub Actions spróbuje zbudować Twoje zmiany, aby wykryć ewentualne problemy. Jeśli nie wystąpią błędy, współtwórca repozytorium przejrzy Twoje zmiany i albo je połączy (merge), albo poprosi o dalsze poprawki.

## Co możesz wnieść?

Po pomyślnym scałkowaniu Twojego PR, Twój profil GitHub zostanie automatycznie dodany do sekcji `Contributors` znajdującej się na dole naszej strony głównej. Jeśli z jakiegoś powodu wolisz, aby Twój profil nie był tam uwzględniony, skontaktuj się z członkiem naszego zespołu, aby pomóc w usunięciu profilu.

- **Poprawki literówek lub błędów** - Zauważyłeś błąd? Prześlij szybką poprawkę!
- **Aktualizacja nieaktualnych informacji** - Pomóż utrzymać przewodnik na bieżąco
- **Dodawanie nowych treści** - Dokumentuj nowe dodatki, funkcje lub konfiguracje
- **Poprawa czytelności** - Uczyń wyjaśnienia łatwiejszymi do zrozumienia
- **Dodawanie zrzutów ekranu** - Przewodniki wizualne są zawsze pomocne
- **Proponowanie ulepszeń** - Masz pomysł? Otwórz issue, aby omówić

Dziękujemy za zaangażowanie w ulepszanie naszego projektu!
