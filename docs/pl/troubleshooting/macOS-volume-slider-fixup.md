---
title: Suwak Głośności jest Nieskuteczny na macOS
description: Napraw problem ze suwakiem głośności w macOS na Intel Macs. Proste obejście pozwalające odzyskać kontrolę nad wyjściem dźwięku.
---
# Problem: suwak głośności nie działa.

Jest to jeden z najlepiej znanych problemów w wersji **Intel** macOS, gdzie suwak głośności sterujący poziomem dźwięku po prostu nie działa, a jedynie zachowuje się jak przełącznik (dotyczy to większości replik, choć niektóre działają poprawnie). Ponieważ Apple prawdopodobnie nigdy nie zajmie się tym problemem, możemy go obejść za pomocą [narzędzia open sourced](https://github.com/briankendall/proxy-audio-device).

:::warning
Ten poradnik przeznaczony jest dla osób posiadających Maci z procesorem Intel (i3, i5, i7; nie chipy serii M). Jeśli Twój Mac z Apple Silicon (chip serii M) nie odtwarza dźwięku z aktualnymi AirReps, sprawdź [Częste błędy](/pl/troubleshooting/other-common-bugs).
:::

## **Wymagania wstępne**

Przed rozpoczęciem upewnij się, że:
- Masz dostęp do `sudo` (Twoje konto macOS musi mieć uprawnienia administratora)
- Masz zainstalowany instalator pakietów `brew` (jeśli nie, postępuj zgodnie z tą [sekcją](#brew-installation))

:::tip
PS: używanie `brew` jest znacznie prostsze niż instalacja ręczna, ale jeśli chcesz pominąć `brew`, możesz przeczytać to i postępować według kroków [tutaj](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **Instalacja `brew`**

Jeśli nie masz zainstalowanego `brew` na swoim systemie, możemy zacząć tutaj. Otwórz tę stronę: [https://brew.sh/](https://brew.sh/), skopiuj polecenie i uruchom je w Terminalu.

<video src="/volume_fix/brew-installation.webm" poster="/volume_fix/brew-installation-poster.webp" width="500" height="443" autoplay loop muted playsinline aria-label="Instalacja za pomocą Terminala"></video>

:::warning
Możesz zostać poproszony o podanie hasła — wpisz je jak zwykle (może wyglądać, jakby było ukryte, ale w tym przypadku tak nie jest).
:::

## **Instalacja**

### **Pobieranie**
Gdy wszystko będzie gotowe, otwórz Terminal i uruchom następujące polecenie:
`brew install --cask proxy-audio-device`

<video src="/volume_fix/app-installation.webm" poster="/volume_fix/app-installation-poster.webp" width="500" height="346" autoplay loop muted playsinline aria-label="zainstaluj proxy-audio-device"></video>

:::tip
Podczas instalacji normalne jest chwilowe przycinanie dźwięku. Rób to, gdy żaden dźwięk nie jest odtwarzany ani edytowany (bez uruchomionego oprogramowania do obróbki dźwięku).
:::

### **Konfiguracja**
1. Przejdź do Launchpada, uruchom świeżo zainstalowane `Proxy Audio Device Settings`, aby rozpocząć konfigurację, okno wygląda mniej więcej tak:

![ikona aplikacji](/volume_fix/app_icon.png)

2. Po otwarciu pojawi się okno jak poniżej.

![UI aplikacji](/volume_fix/app_window.png)

Nie zamykaj tego poradnika — większość użytkowników może skonfigurować to w następujący sposób:

- `Proxy device name`: Nazwa wyjścia; możesz zostawić bez zmian.
- `Proxied device`: Źródło dźwięku (wybierz nazwę swojego AirReps)
- `Buffer size`: Dozwolony czas na przetwarzanie dźwięku przez macOS (uproszczone) (proszę **nie zmieniać**, 512 wystarcza dla większości użytkowników)
- `Proxy device is active`: Jak oprogramowanie działa w tle. To jest moment, gdzie robi się trochę trudniej, ale sprowadza się to do tych opcji:
    + Jeśli nie przeszkadza Ci przerywanie dźwięku (krótkotrwałe dźwięki), wybierz `When proxied device is active`
    + Dla większości osób wybierz `When user is not idle`
    + Dla osób, które chcą stałego dźwięku, np. do grania, wybierz `Always`.

3. Na koniec przejdź do Control Center > Sound > ikonka ">", i wybierz nowo utworzone urządzenie audio (`Proxy Audio Device` domyślnie).

<video src="/volume_fix/change-audio-device.webm" poster="/volume_fix/change-audio-device-poster.webp" width="500" height="558" autoplay loop muted playsinline aria-label="wybierz urządzenie audio"></video>


## **Skutki uboczne**

Choć zazwyczaj da się z tego korzystać bez problemu, niektórzy użytkownicy mogą napotkać następujące problemy:
::: details Brak ikony "Sounds" na górnym pasku
Niestety, musisz przechodzić do Control Center, aby sterować dźwiękiem (lub użyć skrótu klawiaturowego).
:::

:::details Brak dźwięku po rozłączeniu
Aplikacja jest zaprojektowana tak, aby zawsze podłączać się do wybranego urządzenia. Musisz ręcznie wybrać z powrotem "Internal Speaker".
:::

:::details Trzaski/pęknięcia lub dźwięk w jednym kanale
Możesz obejść to, zwiększając rozmiar bufora lub wybierając `Always` w opcji `Proxy device is active` w aplikacji.
:::

## **Odinstalowywanie**

Jeśli chcesz usunąć aplikację, wystarczy uruchomić to polecenie w Terminalu:

`brew remove --cask proxy-audio-device`

...następnie uruchom ponownie system.

## **Opcjonalnie: Ankieta**

Przygotowałem ankietę [tutaj](https://poll-maker.com/poll5643879x05fb4568-166), aby sprawdzić, czy to obejście naprawdę działa. Jest wyjątkowo prosta do wypełnienia i bardzo pomaga uzyskać pełniejszy obraz tej metody. Będę wdzięczny za podzielenie się opinią!

[![ankieta](/volume_fix/poll.png)](https://poll-maker.com/poll5643879x05fb4568-166)
