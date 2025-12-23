---
description: Rozwiązanie problemu z wersją Intel macOS dotyczącego kontrolowania wyjścia głośności za pomocą wbudowanego suwaka głośności systemu.
translationStatus: machine-translated
---

# Problem: Suwak Głośności Nie Działa.

Jest to jeden z najbardziej znanych problemów w wersji **Intel** macOS, gdzie suwak głośności kontrolujący głośność po prostu nie działa, tylko funkcjonuje jako przełącznik (dzieje się tak dla większości klonów, chociaż niektóre nie są dotknięte). Podczas gdy sam Apple nigdy nie zbadałby tego problemu, możemy go obejść za pomocą [narzędzia open source](https://github.com/briankendall/proxy-audio-device).

:::warning
Ten przewodnik jest przeznaczony dla tych, którzy mają Maki oparte na Intel (i3, i5, i7; nie chipsety serii M). Jeśli Twój Mac z Apple Silicon (chipsety serii M) nie odtwarza dźwięku z aktualnymi AirReps, sprawdź sekcję [Typowe Błędy](/pl/troubleshooting/other-common-bugs.md).
:::

## **Wymagania Wstępne**

Przed przystąpieniem do samouczka, upewnij się, że masz:
- Dostęp `sudo` (lub Twoje konto macOS ma dostęp administracyjny)
- Menedżer pakietów `brew` (jeśli nie, po prostu wykonaj tę [sekcję](#instalacja-brew))

:::tip
PS: użycie `brew` jest znacznie łatwiejsze niż ręczna instalacja, ale jeśli chcesz pominąć używanie `brew`, możesz przeczytać to i wykonać kroki [tutaj](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **Instalacja `brew`**

Jeśli nie masz zainstalowanego `brew` w swoim systemie, możemy zacząć tutaj. Przejdź na [tę](https://brew.sh/) stronę, skopiuj polecenie i uruchom je w Terminalu.

![Instalacja za pomocą Terminala](/volume_fix/brew-installation.gif)

:::warning
Możesz zostać poproszony o wprowadzenie hasła, śmiało wprowadź hasło jak zwykle (Twoje hasło może wyglądać jakby było ukryte, ale w tym przypadku tak nie jest).
:::

## **Instalacja**

### **Pobieranie**
Gdy wszystko jest gotowe, możesz zacząć od otwarcia Terminala, następnie uruchom następujące polecenie:
`brew install --cask proxy-audio-device`

![zainstaluj proxy-audio-device](/volume_fix/app-installation.gif)

:::tip
Podczas instalacji jest normalne, że dźwięk systemowy trochę glitchuje. Upewnij się więc, że robisz to w środowisku bez przetwarzania dźwięku (żadne oprogramowanie do manipulacji dźwiękiem nie jest uruchomione).
:::

### **Konfiguracja**
1. Przejdź do Launchpada, uruchom nowo zainstalowane `Proxy Audio Device Settings`, aby rozpocząć proces konfiguracji, będzie wyglądać mniej więcej tak:

![ikona aplikacji](/volume_fix/app_icon.png)

2. Po otwarciu, wyświetli się okno jak to.

![interfejs aplikacji](/volume_fix/app_window.png)

Nie daj się skusić, aby kliknąć z dala od tego samouczka, większość osób jak Ty może je skonfigurować tak:

- `Proxy device name`: Nazwa wyjścia, możesz zostawić jak jest.
- `Proxied device`: Źródło dźwięku (wybierz nazwę swoich AirReps)
- `Buffer size`: Dozwolony czas dla macOS do przetworzenia dźwięku (uproszczone) (proszę **zostawić jak jest**, ponieważ 512 jest wystarczające dla większości)
- `Proxy device is active`: Jak oprogramowanie działa w tle. Tu robi się trudne, ale sprowadza się do tych opcji:
    + Jeśli nie przeszkadzają Ci przerwania dźwięku (krótkie czasy trwania dźwięku), wybierz `When proxied device is active`
    + Dla większości osób, wybierz `When user is not idle`
    + Dla osób, które chcą spójnego dźwięku lub grania, wybierz `Always`.

3. Na koniec przejdź do Centrum sterowania > Dźwięk > ikona ">", i wybierz nowo utworzone urządzenie audio (`Proxy Audio Device` domyślnie).

![wybierz urządzenie audio](/volume_fix/change-audio-device.gif)


## **Efekty Uboczne**

Chociaż jest to w porządku przez większość czasu, niektórzy użytkownicy mogą doświadczyć tych problemów:
::: details Brak ikony "Dźwięk" na górnym pasku
To jest... niefortunne, musisz przejść do "Centrum sterowania", aby kontrolować dźwięk (lub użyć skrótu).
:::

:::details Brak dźwięku przy rozłączaniu
Aplikacja ma tylko jedno urządzenie celowe. Musisz ręcznie ponownie wybrać "Wbudowany głośnik".
:::

:::details Trzeszczenie/pykanie lub dźwięk jednostronny
Możesz to obejść, zwiększając rozmiar bufora / lub wybierając `Always` w opcji `Proxy Device in Active` w aplikacji.
:::

## **Odinstalowanie**

Jeśli chcesz usunąć aplikację, możesz po prostu uruchomić to polecenie w Terminalu:

`brew remove --cask proxy-audio-device`

...następnie uruchom ponownie system.

## **Opcjonalne: Ankieta**

Stworzyłem ankietę [tutaj](http://poll-maker.com/poll5643879x05fb4568-166), aby dowiedzieć się, czy to rozwiązanie faktycznie działa. Jest to bardzo proste do zrobienia i bardzo pomaga w uzyskaniu pełnego obrazu tego rozwiązania, byłbym bardzo wdzięczny, gdybyś podzielił się swoimi przemyśleniami!

[![ankieta](/volume_fix/poll.png)](http://poll-maker.com/poll5643879x05fb4568-166)
