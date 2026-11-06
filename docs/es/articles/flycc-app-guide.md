---
title: 'Guía de FlyCC APK: Cómo configurar y ajustar réplicas de AirPods con Airoha'
description: 'Cómo descargar, instalar y usar FlyCC de forma segura: ajuste de ecualización personalizado, asignación de controles táctiles, actualizaciones de firmware y solución de problemas de conexión.'
category: Usar tus réplicas
order: 13
---
# Guía de FlyCC APK: cómo configurar y ajustar réplicas de AirPods con Airoha

FlyCC es la aplicación complementaria esencial para las réplicas de AirPods que usan **chipsets Airoha** (incluidos Airoha 1562AE, 1562E, 1562F y 1571AM). Como los ajustes nativos de iOS de Apple solo ofrecen controles superficiales, FlyCC brinda acceso de bajo nivel al chip: ajuste paramétrico personalizado del ecualizador, calibración del sensor táctil, balance de la cancelación activa de ruido (ANC) y actualización del firmware por OTA.

> **Respuesta rápida:** FlyCC es una utilidad gratuita de terceros para Android, iOS y macOS, diseñada específicamente para réplicas de AirPods basadas en Airoha. Permite personalizar los perfiles de sonido mediante un ecualizador integrado, modificar la sensibilidad al pellizco y al toque, y actualizar el firmware por OTA. No detectará réplicas con chips Huilian, BES o Jieli de gama básica.

::: tip Android, iPhone o Mac
FlyCC está disponible como APK para Android y en la App Store de iOS; puedes encontrar enlaces a ambas versiones en [Aplicaciones útiles](/es/useful-apps#tigerbuilder). También puedes usar la versión comunitaria para macOS. Los ajustes guardados en los auriculares se mantienen incluso al cambiar de teléfono.
:::

## Chipsets compatibles

FlyCC funciona exclusivamente con **hardware Airoha**. Si detecta tus auriculares al conectarse, habrás confirmado que llevan un chip Airoha auténtico:

- **Airoha 1562AE / 1571AM** — Compatibilidad completa: calibración ANC con dos micrófonos, ecualizador personalizado, controles de audio espacial con seguimiento de cabeza y actualizaciones OTA.
- **Airoha 1562E / 1563E** — Ecualizador estándar, controles táctiles y herramientas de firmware.
- **Airoha 1562F** — Controles heredados de ANC y ecualizador.

Si FlyCC busca indefinidamente y nunca detecta tus auriculares, tu par lleva un chip de otro fabricante (como Huilian, que usa [Starfun](/es/useful-apps)) o un chip Jieli de gama básica.

## Cómo descargar e instalar FlyCC de forma segura

Como FlyCC se comunica con hardware Bluetooth que no cuenta con certificación MFi, se distribuye directamente como APK, no a través de Google Play.

1. Descarga el APK verificado más reciente desde el [directorio de Aplicaciones útiles](/es/useful-apps).
2. En tu dispositivo Android, ve a **Ajustes → Seguridad** y activa **"Instalar aplicaciones desconocidas"** para el navegador o el gestor de archivos.
3. Abre el archivo `.apk` descargado y pulsa **Instalar**.
4. Concede los permisos solicitados de **Bluetooth / Dispositivos cercanos** y **Ubicación**. (Android requiere permisos de ubicación para buscar periféricos Bluetooth de bajo consumo; FlyCC no rastrea datos GPS).

## Funciones principales y cómo usarlas

### 1. Ecualizador personalizado y ajuste de audio

Algunas tandas de réplicas tienen, de fábrica, unos graves exagerados. FlyCC incluye un ecualizador de 10 bandas para afinar la salida de audio:

- **Reducción de graves**: Baja los controles deslizantes de 31Hz, 62Hz y 125Hz entre 2 y 3dB para obtener un sonido más limpio y neutro, similar al de los AirPods Pro originales.
- **Claridad de voces**: Sube las bandas de 1kHz y 2kHz en 1.5dB para destacar los pódcast y las voces.
- **Guardar en el hardware**: Cuando termines de ajustar, pulsa **Save to Earbuds**. El ajuste acústico se escribe directamente en el DSP Airoha, por lo que el ecualizador personalizado sigue activo al volver a conectar los auriculares a tu iPhone, iPad o PC.

### 2. Calibración táctil y de gestos

Si los auriculares se pausan accidentalmente cuando te los acomodas en la oreja, FlyCC permite ajustar la sensibilidad del sensor de fuerza del 1 (toque más ligero) al 5 (presión firme). También puedes reasignar las pulsaciones simples, dobles y triples a funciones específicas.

### 3. Ajuste de la cancelación de ruido

En el menú ANC, FlyCC permite calibrar de forma independiente los micrófonos de retroalimentación anticipada izquierdo y derecho. Si sientes más presión en el canal auditivo o una cancelación más débil en uno de los auriculares, el control deslizante de calibración reajusta la inversión de fase.

## Actualización segura del firmware (OTA)

FlyCC puede instalar archivos binarios de firmware actualizados para corregir errores de sincronización con iOS o mejorar la conectividad. Sin embargo, la actualización conlleva un riesgo inherente de dejar los auriculares inutilizables si se interrumpe:

1. **Carga ambos auriculares y el estuche por encima del 80%** antes de empezar.
2. Mantén abierto el estuche de carga, con ambos auriculares dentro y a menos de 30 centímetros del teléfono.
3. Pulsa **Check for Updates** en FlyCC. Si hay una actualización disponible, descarga el paquete.
4. Pulsa **Start Update**. **No cierres la tapa del estuche, desactives el Bluetooth ni cambies de aplicación** hasta que la barra de progreso llegue al 100% y aparezca "Update Succeeded".
5. Al terminar, deja los auriculares dentro del estuche cerrado durante 60 segundos antes de volver a emparejarlos.

Para obtener una guía completa sobre cómo actualizar de forma segura todos los chipsets de réplicas, consulta [Cómo actualizar el firmware de unos AirPods falsos](/es/articles/how-to-update-fake-airpods-firmware).

## Solución de problemas de conexión con FlyCC

Si FlyCC no detecta tus auriculares:

- **Comprueba la conexión de audio activa del teléfono**: Asegúrate de que los auriculares ya estén emparejados en los ajustes nativos de Bluetooth de Android antes de abrir FlyCC.
- **Concede permisos para Dispositivos cercanos**: En Android 12 y versiones posteriores, FlyCC no puede detectar dispositivos Bluetooth LE si no está activado el permiso "Dispositivos cercanos".
- **Identifica el chip**: Si FlyCC no logra conectarse a tus auriculares, prueba a buscarlos con **CloudCC** o **Starfun**. Si ninguna aplicación se conecta, consulta [Cómo identificar AirPods falsos](/es/articles/how-to-spot-fake-airpods) para comprobar si tienes una réplica básica con chip Jieli.
- **Borra la caché de emparejamiento**: Si se interrumpen las conexiones, restablece el controlador siguiendo nuestra [guía de restablecimiento](/es/articles/how-to-reset-fake-airpods).

## Guías relacionadas

- ¿Usas réplicas a diario con Android? Consulta [Réplicas de AirPods en Android](/es/articles/airpods-replicas-on-android).
- ¿Necesitas utilidades para otros chips? Consulta el catálogo completo de [Aplicaciones útiles](/es/useful-apps).
- ¿Tus auriculares no se conectan? Sigue los pasos de [Los AirPods falsos no se conectan](/es/articles/fake-airpods-wont-connect).
- ¿Buscas modelos Airoha verificados? Explora el [directorio de vendedores de confianza](/es/links/info).

## Preguntas frecuentes

::: details ¿Es seguro instalar FlyCC en mi teléfono?
Sí. Los APK alojados en el directorio comunitario de Aplicaciones útiles se extraen de las cadenas de suministro oficiales de los fabricantes y se verifica que estén libres de malware. Solo requiere acceso a Bluetooth para comunicarse con el procesador de audio Airoha.
:::

::: details ¿Puedo usar FlyCC en un iPhone?
Sí. FlyCC está disponible en la App Store de iOS y como APK para Android; puedes encontrar enlaces a ambas versiones en [Aplicaciones útiles](/es/useful-apps#tigerbuilder). Todos los cambios del ecualizador y los controles se guardan permanentemente en la memoria interna de los auriculares, así que se mantienen al cambiar de dispositivo.
:::

::: details ¿Por qué FlyCC muestra "Device Not Found"?
La razón más común es la incompatibilidad del chip: FlyCC solo funciona con chips Airoha. Si tienes un modelo Huilian, usa Starfun. Los modelos TigerBuilder usan FlyCC; CloudCC es solo una alternativa si FlyCC tiene problemas con los permisos de almacenamiento. Si no se conecta ninguna aplicación, probablemente tienes unos auriculares Jieli de gama básica.
:::
