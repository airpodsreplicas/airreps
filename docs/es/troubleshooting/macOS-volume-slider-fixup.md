---
description: Una solución alternativa para el problema de la versión Intel de macOS de no poder controlar el volumen de salida usando la barra deslizadora de volumen integrada del sistema.
---

# El Problema: La Barra Deslizadora de Volumen no Funciona.

Este es uno de los problemas más conocidos en la versión **Intel** de macOS, donde la barra deslizadora de volumen que controla el volumen de audio simplemente no funciona, y solo actúa como un interruptor (le ocurre a la mayoría de las réplicas, aunque algunas no se ven afectadas). Aunque Apple nunca investigaría el problema, podemos evitarlo con una [herramienta de código abierto](https://github.com/briankendall/proxy-audio-device).

:::warning
Esta guía es para aquellos que tienen Macs basados en Intel (i3, i5, i7; no chip serie M). Si tu Mac con Apple Silicon (chip serie M) no reproduce audio con tus AirReps actuales, consulta la sección de [Bugs Comunes](/es/troubleshooting/other-common-bugs.md).
:::

## **Prerrequisitos**

Antes del tutorial, asegúrate de que:
- Tienes acceso `sudo` (o tu cuenta de macOS tiene acceso administrativo)
- Instalador de paquetes `brew` (si no, simplemente sigue esta [sección](#instalacion-de-brew))

:::tip
PD: usar `brew` es mucho más fácil que la instalación manual, pero si quieres omitir usar `brew`, puedes leer esto y seguir los pasos [aquí](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **Instalación de `brew`**

Si no tienes `brew` instalado en tu sistema, podemos empezar aquí. Entra a [esta](https://brew.sh/) página, copia el comando y ejecútalo en Terminal.

![Instalación usando Terminal](/volume_fix/brew-installation.gif)

:::warning
Se te puede pedir que ingreses tu contraseña, procede e ingresa tu contraseña como de costumbre (tu contraseña puede parecer oculta, pero no lo está en este caso).
:::

## **Instalación**

### **Descargar**
Una vez que todo esté listo, puedes empezar abriendo Terminal, luego ejecuta el siguiente comando:
`brew install --cask proxy-audio-device`

![instalar proxy-audio-device](/volume_fix/app-installation.gif)

:::tip
Durante la instalación, es normal que el audio del sistema tenga pequeños fallos. Así que asegúrate de hacer esto en un ambiente sin manipulación de audio (Sin software de audio ejecutándose).
:::

### **Configuración**
1. Navega a Launchpad, ejecuta el recién instalado `Proxy Audio Device Settings` para comenzar el proceso de configuración, se verá algo así:

![ícono de la app](/volume_fix/app_icon.png)

2. Una vez abierto, aparecerá una ventana así.

![interfaz de la app](/volume_fix/app_window.png)

No te tentes a salir de este tutorial, la mayoría de personas como tú pueden configurarlo así:

- `Proxy device name`: Nombre de la salida, puedes dejarlo como está.
- `Proxied device`: Fuente de audio (selecciona el nombre de tu AirRep)
- `Buffer size`: Tiempo permitido para que macOS procese audio (simplificado) (por favor **déjalo como está**, ya que 512 es suficiente para la mayoría)
- `Proxy device is active`: Cómo funciona el software en segundo plano. Aquí es donde se pone complicado, pero se reduce a estas opciones:
    + Si no te importa el corte de audio (sonidos de corta duración), elige `When proxied device is active`
    + Para la mayoría, elige `When user is not idle`
    + Para personas que quieren audio consistente, o gaming, elige `Always`.

3. Finalmente, navega a Centro de Control > Sonido > el ícono ">", y elige el dispositivo de audio recién creado (`Proxy Audio Device` por defecto).

![elegir dispositivo de audio](/volume_fix/change-audio-device.gif)


## **Efectos Secundarios**

Aunque está bien usarlo la mayor parte del tiempo, algunos usuarios pueden enfrentar estos problemas:
::: details Sin ícono de "Sonidos" en la barra superior
Esto... es lo que hay en realidad, tienes que navegar a "Centro de Control" para controlar el audio (o atajo).
:::

:::details Sin audio al desconectar
La app solo está diseñada para engancharse siempre al dispositivo elegido. Tienes que volver a seleccionar manualmente "Altavoz Interno" por ti mismo.
:::

:::details Crujidos/pops o audio de un solo lado
Puedes solucionar esto aumentando el tamaño del buffer / o eligiendo `Always` en la opción `Proxy Device in Active` de la app.
:::

## **Desinstalación**

Si deseas eliminar la app, simplemente ejecuta este comando en Terminal:

`brew remove --cask proxy-audio-device`

...luego reinicia tu sistema.

## **Opcional: Encuesta**

He creado una encuesta [aquí](http://poll-maker.com/poll5643879x05fb4568-166) para determinar si esta solución realmente funciona. Es increíblemente simple de hacer y ayuda mucho a obtener una imagen completa de esta solución, ¡te agradeceré mucho si compartes tus opiniones!

[![encuesta](/volume_fix/poll.png)](http://poll-maker.com/poll5643879x05fb4568-166)
