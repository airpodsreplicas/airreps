---
title: El Control Deslizante de Volumen No Funciona en macOS
description: Soluciona el problema del control deslizante de volumen de macOS en Intel Macs. Una solución alternativa sencilla para recuperar el control sobre tu salida de audio.
---
# El problema: la barra deslizante de volumen no funciona.

This is one of the most well-known problems on the **Intel** version of macOS, where the volume slider bar that controls audio volume simply won't work, but only acts as a switch (it affects most replicas, though some are unaffected). While Apple themselves would never look into the problem, we can circumvent this with an [open sourced tool](https://github.com/briankendall/proxy-audio-device).

:::warning
This guide is meant for those that have Intel-based Macs (i3, i5, i7; not M series chip). If your Apple Silicon (M series chip) Mac won't play audio with your current AirReps, check out the [Errores comunes](/es/troubleshooting/other-common-bugs) section.
:::

## **Prerequisito**

Antes del tutorial, por favor asegúrate de que:
- Tienes acceso a `sudo` (tu cuenta de macOS debe tener privilegios administrativos)
- Tienes el instalador de paquetes `brew` (si no, sigue esta [sección](#brew-installation))

:::tip
PD: usar `brew` es mucho más fácil que la instalación manual, pero si quieres omitir `brew`, puedes leer esto y seguir los pasos [aquí](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **`brew` Installation**

Si no tienes `brew` instalado en tu sistema, podemos empezar aquí. Entra en [esta página](https://brew.sh/), copia el comando y ejecútalo en Terminal.

<video src="/volume_fix/brew-installation.webm" poster="/volume_fix/brew-installation-poster.webp" width="500" height="443" autoplay loop muted playsinline aria-label="Instalación usando Terminal"></video>

:::warning
Es posible que te pidan que introduzcas tu contraseña; adelante, introdúcela como de costumbre (tu contraseña puede parecer oculta, pero en este caso no lo está).
:::

## **Installation**

### **Download**
Una vez que todo esté listo, puedes comenzar abriendo Terminal y luego ejecutando el siguiente comando:
`brew install --cask proxy-audio-device`

<video src="/volume_fix/app-installation.webm" poster="/volume_fix/app-installation-poster.webp" width="500" height="346" autoplay loop muted playsinline aria-label="instalar proxy-audio-device"></video>

:::tip
Durante la instalación es normal que el audio del sistema tenga pequeños fallos. Haz esto mientras no se esté reproduciendo ni editando audio (sin software de manipulación de audio en ejecución).
:::

### **Setting Up**
1. Navega a Launchpad, ejecuta la recién instalada `Proxy Audio Device Settings` para comenzar el proceso de configuración, se verá algo así:

![icono de la app](/volume_fix/app_icon.png)

2. Una vez abierto, aparecerá una ventana como esta.

![interfaz de la app](/volume_fix/app_window.png)

No te sientas tentado a cerrar este tutorial; la mayoría de la gente puede configurarlo así:

- `Proxy device name`: Nombre de la salida; puedes dejarlo tal cual.
- `Proxied device`: Fuente de audio (selecciona el nombre de tu AirRep)
- `Buffer size`: Tiempo permitido para que macOS procese el audio (simplificado) (por favor **déjalo tal cual**, ya que 512 es suficiente para la mayoría de usuarios)
- `Proxy device is active`: Cómo funciona el software en segundo plano. Aquí es donde se complica un poco, pero se resume en estas opciones:
    + If you don't mind the audio cutting off (short-duration sounds), pick `When proxied device is active`
    + For most people, pick `When user is not idle`
    + For people who want consistent audio, or gaming, pick `Always`.

3. Finalmente, navega a Control Center > Sound > the ">" icon, y selecciona el dispositivo de audio recién creado (`Proxy Audio Device` por defecto).

<video src="/volume_fix/change-audio-device.webm" poster="/volume_fix/change-audio-device-poster.webp" width="500" height="558" autoplay loop muted playsinline aria-label="seleccionar dispositivo de audio"></video>


## **Efectos secundarios**

Aunque está bien usarlo la mayor parte del tiempo, algunos usuarios pueden enfrentar estos problemas:
:::details Sin icono "Sounds" en la barra superior
Desafortunadamente, tendrás que navegar al Control Center para controlar el audio (o usar un atajo de teclado).
:::

:::details Sin audio al desconectar
La app está diseñada para engancharse siempre al dispositivo seleccionado. Tienes que volver a seleccionar manualmente "Internal Speaker".
:::

:::details Chasquidos/pop o audio por un solo lado
Puedes evitar esto aumentando el tamaño del buffer, o seleccionando `Always` en la opción `Proxy device is active` de la app.
:::

## **Desinstalación**

Si deseas eliminar la app, simplemente ejecuta este comando en el Terminal:

`brew remove --cask proxy-audio-device`

...luego reinicia tu sistema.

## **Opcional: Encuesta**

He creado una encuesta [aquí](https://poll-maker.com/poll5643879x05fb4568-166) para averiguar si esta solución realmente funciona. Es increíblemente simple de hacer y ayuda mucho a obtener una visión completa de este método. ¡Agradecería mucho si compartes tu opinión!

[![encuesta](/volume_fix/poll.png)](https://poll-maker.com/poll5643879x05fb4568-166)
