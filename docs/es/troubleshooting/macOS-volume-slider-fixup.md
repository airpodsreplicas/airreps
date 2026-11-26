---
title: El Control Deslizante de Volumen No Funciona en macOS
description: Soluciona el problema del control deslizante de volumen de macOS en Intel Macs. Una solución alternativa sencilla para recuperar el control sobre tu salida de audio.
---

# El problema: la barra deslizante de volumen no funciona

Este es uno de los problemas más conocidos en la versión **Intel** de macOS, donde la barra deslizante de volumen no controla el volumen de forma progresiva, sino que actúa solo como un interruptor (afecta a la mayoría de las réplicas, aunque algunas no se ven afectadas). Como Apple no va a solucionar esto, podemos evitar el problema con una [herramienta de código abierto](https://github.com/briankendall/proxy-audio-device).

::: warning
Esta guía está pensada para quienes tienen Macs con procesador Intel (i3, i5, i7; no chips de la serie M). Si tu Mac con Apple Silicon (serie M) no reproduce audio con tus AirReps actuales, revisa la sección [Otros Errores Comunes](/es/troubleshooting/other-common-bugs).
:::

## **Prerrequisitos**

Antes del tutorial, por favor asegúrate de que:
- Tienes acceso a `sudo` (tu cuenta de macOS debe tener privilegios administrativos)
- Tienes el instalador de paquetes `brew` (si no, sigue esta [sección](#brew-installation))

::: tip brew o instalación manual
PD: usar `brew` es mucho más fácil que la instalación manual, pero si quieres omitir `brew`, puedes seguir los pasos [aquí](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **Instalación de `brew`** {#brew-installation}

Si no tienes `brew` instalado en tu sistema, podemos empezar aquí. Entra en [esta página](https://brew.sh/), copia el comando y ejecútalo en Terminal.

<video src="/volume_fix/brew-installation.webm" poster="/volume_fix/brew-installation-poster.webp" width="500" height="443" autoplay loop muted playsinline aria-label="Instalación usando Terminal"></video>

::: warning
Es posible que te pidan que introduzcas tu contraseña; adelante, introdúcela como de costumbre (tu contraseña puede parecer oculta mientras escribes, pero se está registrando).
:::

## **Instalación**

### **Descarga**
Una vez que todo esté listo, puedes comenzar abriendo Terminal y ejecutando el siguiente comando:
`brew install --cask proxy-audio-device`

<video src="/volume_fix/app-installation.webm" poster="/volume_fix/app-installation-poster.webp" width="500" height="346" autoplay loop muted playsinline aria-label="instalar proxy-audio-device"></video>

::: tip Pausa el audio durante la instalación
Durante la instalación es normal que el audio del sistema tenga pequeños fallos. Haz esto mientras no se esté reproduciendo ni editando audio (sin software de manipulación de audio en ejecución).
:::

### **Configuración**
1. Navega a Launchpad y ejecuta la recién instalada `Proxy Audio Device Settings` para comenzar el proceso de configuración; se verá algo así:

![icono de la app](/volume_fix/app_icon.png)

2. Una vez abierto, aparecerá una ventana como esta.

![interfaz de la app](/volume_fix/app_window.png)

No te sientas tentado a cerrar este tutorial; la mayoría de la gente puede configurarlo así:

- `Proxy device name`: Nombre de la salida; puedes dejarlo tal cual.
- `Proxied device`: Fuente de audio (selecciona el nombre de tu AirRep)
- `Buffer size`: Tiempo permitido para que macOS procese el audio (simplificado) (por favor **déjalo tal cual**, ya que 512 es suficiente para la mayoría de usuarios)
- `Proxy device is active`: Cómo funciona el software en segundo plano. Se resume en estas opciones:
    + Si no te importa que el audio se corte brevemente en sonidos cortos, elige `When proxied device is active`
    + Para la mayoría de las personas, elige `When user is not idle`
    + Para quienes buscan audio constante o videojuegos, elige `Always`.

3. Finalmente, navega a Centro de control > Sonido > el icono `>`, y selecciona el dispositivo de audio recién creado (`Proxy Audio Device` por defecto).

<video src="/volume_fix/change-audio-device.webm" poster="/volume_fix/change-audio-device-poster.webp" width="500" height="558" autoplay loop muted playsinline aria-label="seleccionar dispositivo de audio"></video>

## **Efectos secundarios**

Aunque está bien usarlo la mayor parte del tiempo, algunos usuarios pueden enfrentar estos problemas:

::: details Sin icono "Sonido" en la barra superior
Desafortunadamente, tendrás que navegar al Centro de control para controlar el audio (o usar un atajo de teclado).
:::

::: details Sin audio al desconectar
La app está diseñada para engancharse siempre al dispositivo seleccionado. Tienes que volver a seleccionar manualmente "Altavoces internos".
:::

::: details Chasquidos/pop o audio por un solo lado
Puedes evitar esto aumentando el tamaño del buffer, o seleccionando `Always` en la opción `Proxy device is active` de la app.
:::

<CommunityCta variant="stuck" />

## **Desinstalación**

Si deseas eliminar la app, simplemente ejecuta este comando en el Terminal:

`brew remove --cask proxy-audio-device`

...luego reinicia tu sistema.

## **Opcional: Encuesta**

He creado una encuesta [aquí](https://poll-maker.com/poll5643879x05fb4568-166) para averiguar si esta solución realmente funciona. Es increíblemente simple de hacer y ayuda mucho a obtener una visión completa de este método. ¡Agradecería mucho si compartes tu opinión!

[![encuesta](/volume_fix/poll.png)](https://poll-maker.com/poll5643879x05fb4568-166)
