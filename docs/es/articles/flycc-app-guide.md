---
title: 'Guía de FlyCC APK: Cómo configurar y ajustar réplicas de AirPods de Airoha'
description: "FlyCC para réplicas TigerBuilder: descargas en Android y iPhone, ecualizador y actualizaciones según el modelo, permisos y conexión."
category: Cómo usar tus réplicas
order: 13
---
# Guía de FlyCC APK: cómo configurar y ajustar réplicas de AirPods de Airoha

FlyCC es la aplicación complementaria que nuestro [catálogo de aplicaciones útiles](/es/useful-apps#tigerbuilder) indica para las réplicas de **TigerBuilder**. TigerBuilder es un fabricante de réplicas, no una marca de chips: sus modelos usan chipsets **Airoha** como el 1562AE, el 1563E y el 1571AM. Según el modelo y su firmware, FlyCC puede ajustar la ecualización, mostrar opciones específicas de ese modelo e instalar las actualizaciones de firmware que haya publicado el fabricante.

> **Respuesta rápida:** FlyCC es una aplicación gratuita de terceros para réplicas de AirPods de TigerBuilder (basadas en Airoha). Está disponible como APK para Android y como app para iPhone en el App Store; ambas están enlazadas en [Aplicaciones útiles](/es/useful-apps#tigerbuilder). Lo que puede hacer depende de tu modelo exacto, del firmware y de la versión de la app: normalmente la ecualización y, en modelos seleccionados, actualizaciones de firmware. Los modelos Huilian, HR, BES y KKX usan las otras aplicaciones del catálogo.

::: tip Versiones para Android y iPhone
FlyCC tiene un APK para Android y una versión para iPhone en el App Store. Que la app funcione en tu teléfono no significa que sea compatible con tus auriculares: los menús y las actualizaciones que muestra dependen del modelo que detecta, del firmware de ese modelo y de la versión de la app. Nuestro catálogo no incluye una versión independiente para Mac. El App Store permite instalar la app de iPhone en Mac con chip de Apple, pero indica que no está verificada para macOS, así que esta guía no cubre su uso en Mac.
:::

## Qué réplicas usan FlyCC

Parte del vendedor y de la versión que compraste, no solo del nombre del chip. Las [páginas de versiones](/es/version-info/general) indican FlyCC para modelos de TigerBuilder como los AirPods Pro 3 V7 TB, AirPods 4 V3 TB, AirPods Pro 2 V5.3 TB y AirPods Max V3. Consulta la página de tu versión antes de instalar nada.

Un chip Airoha por sí solo no determina la aplicación. Los modelos HR también usan chips Airoha, pero aparecen con BullSuper y G&Link; los modelos Huilian usan StarFun, y algunas versiones Airoha antiguas no tienen ninguna aplicación compatible. Saber qué aplicación se conecta es una pista útil, pero que FlyCC no encuentre tus auriculares no demuestra que tengan otro chip ni que no sean el modelo que pediste. Los permisos, la versión de la app y la compatibilidad del modelo influyen (consulta la solución de problemas más abajo).

## Cómo descargar e instalar FlyCC de forma segura

Usa los enlaces de [Aplicaciones útiles](/es/useful-apps#tigerbuilder) en lugar de copias resubidas a otros sitios.

**iPhone:** Instala FlyCC desde el App Store y permite el acceso a Bluetooth cuando iOS lo solicite. La app requiere iOS 13 o posterior (versión 2.0.16, comprobado el 22 de octubre de 2026).

**Android:** La versión para Android es un APK que se descarga directamente, no una app de Google Play.

1. Descarga el APK desde [Aplicaciones útiles](/es/useful-apps#tigerbuilder).
2. Cuando Android lo pida, permite **Instalar aplicaciones desconocidas** para el navegador o el gestor de archivos con el que abras el archivo. Puedes desactivar ese permiso después.
3. Abre el archivo `.apk` y toca **Instalar**.
4. Concede el permiso de Bluetooth que solicite la app. En Android 12 y versiones posteriores aparece como **Dispositivos cercanos**. En versiones anteriores de Android, o con apps más antiguas, la búsqueda de dispositivos Bluetooth puede requerir el permiso de **Ubicación** ([documentación para desarrolladores de Android](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

FlyCC es software de terceros y AirReps no ha realizado ninguna auditoría de seguridad. Es normal que una app para auriculares pida acceso a Bluetooth o a dispositivos cercanos; ten cuidado con solicitudes que no tengan nada que ver con los auriculares. La documentación de Android explica por qué el sistema pide estos permisos, no qué hace una app concreta con ellos. En iPhone, la información de privacidad del App Store la declara el propio desarrollador, y Apple advierte de que no ha sido verificada por Apple ([ficha del App Store](https://apps.apple.com/us/app/flycc/id1661245709)).

## Qué puede hacer FlyCC

Los menús que muestra FlyCC dependen del modelo que detecta, así que dos pares pueden verse bastante distintos en la app. Las notas de versión de la app para iPhone incluyen correcciones para menús que faltaban (versiones 2.0.12 y 2.0.14), por lo que un menú que no aparece puede deberse a la versión de la app o a la compatibilidad, y no a que haya otro chip.

### Ecualización y sonido

La ecualización es el principal motivo por el que la guía recomienda FlyCC a quienes tienen modelos de TigerBuilder (consulta [calidad de sonido](/es/introduction/sound-quality)). Haz cambios pequeños y escucha el resultado. Por ejemplo, baja un poco los graves si tu lote suena retumbante. Los miembros de la comunidad comparten ajustes de ecualización en el [Discord de AirReps](https://airreps.link/discord). Si cambias a otro teléfono, comprueba que tu ecualización sigue aplicándose, ya que esto puede variar según el modelo.

### Controles

Los controles de toque y presión de las réplicas se cambian normalmente en los ajustes de Bluetooth del iPhone, igual que en los AirPods originales (consulta la [guía de funciones](/es/introduction/features)). Si FlyCC muestra ajustes de controles para tu modelo, puedes usarlos ahí, pero no todos los modelos los ofrecen.

### Actualizaciones de firmware (OTA)

Según su descripción en el App Store, FlyCC ofrece actualizaciones de firmware para productos seleccionados, y sus versiones 1.1.1 y 1.1.2 (2024) añadieron compatibilidad OTA con la plataforma AB157x de Airoha. Si FlyCC ofrece una actualización para tu modelo:

1. Comprueba que la necesitas: que solucione un problema que realmente tienes o que la recomiende tu vendedor o la [página de tu versión](/es/version-info/general). Si tus auriculares funcionan bien, no pasa nada por dejar el firmware como está.
2. Lee las instrucciones de actualización que FlyCC muestra para tu modelo y síguelas.
3. Mantén cargados los auriculares y el estuche, el teléfono cerca con la app abierta, y no interrumpas la actualización hasta que la app confirme que ha terminado.

Si una actualización falla, contacta con tu vendedor o pregunta en Discord en lugar de probar firmware de otra aplicación. El proceso completo está en [Cómo actualizar el firmware de unos AirPods falsos](/es/articles/how-to-update-fake-airpods-firmware).

## Solución de problemas de conexión de FlyCC

Si FlyCC no encuentra tus auriculares:

- **Conéctalos primero**: Empareja los auriculares en los ajustes de Bluetooth del teléfono y luego abre FlyCC.
- **Revisa los permisos**: En Android 12 y versiones posteriores, FlyCC necesita el permiso **Dispositivos cercanos**; en versiones anteriores de Android puede necesitar **Ubicación**. En iPhone, revisa **Ajustes → Privacidad y seguridad → Bluetooth**.
- **Actualiza la app**: FlyCC 2.0.16 para iPhone incluye una corrección para algunos usuarios que no podían conectarse.
- **Comprueba que la app corresponde a tu modelo**: Consulta la página de tu versión. Si el modelo de tu vendedor es de otro fabricante, usa la aplicación indicada para él en [Aplicaciones útiles](/es/useful-apps). CloudCC está obsoleto para los modelos de TigerBuilder y solo sirve como solución temporal para el problema de permisos de almacenamiento que se describe allí.
- **No tomes un escaneo fallido como prueba**: Si después de estas comprobaciones ninguna de las aplicaciones indicadas se conecta, pregunta en [Discord](https://airreps.link/discord) indicando tu vendedor y modelo. Los clones Jieli más baratos no funcionan con ninguna de las aplicaciones. Si no estás seguro de qué has recibido, consulta [Cómo identificar unos AirPods falsos](/es/articles/how-to-spot-fake-airpods).
- **Borra la caché de emparejamiento**: Si la conexión se corta, restablece el emparejamiento con nuestra [guía de restablecimiento](/es/articles/how-to-reset-fake-airpods).

## Guías relacionadas

- ¿Usas réplicas con Android a diario? Consulta [Réplicas de AirPods en Android](/es/articles/airpods-replicas-on-android).
- ¿Necesitas utilidades para otros chips? Consulta el [catálogo completo de aplicaciones útiles](/es/useful-apps).
- ¿Tus auriculares no se conectan? Sigue los pasos de [Los AirPods falsos no se conectan](/es/articles/fake-airpods-wont-connect).
- ¿Buscas modelos Airoha verificados? Explora el [directorio de vendedores de confianza](/es/links/info).

## Preguntas frecuentes

::: details ¿Es seguro instalar FlyCC en mi teléfono?
FlyCC es software de terceros que AirReps no ha auditado, así que toma las precauciones habituales: descárgalo desde el enlace de Aplicaciones útiles o desde el App Store, comprueba que los permisos que pide estén relacionados con Bluetooth y rechaza todo lo que no tenga relación. La información de privacidad del App Store es una declaración del propio desarrollador, no una auditoría de Apple.
:::

::: details ¿Puedo usar FlyCC en un iPhone?
Sí. FlyCC está en el App Store para iPhone (iOS 13 o posterior; versión 2.0.16, comprobado el 22 de octubre de 2026), y el framework [Core Bluetooth](https://developer.apple.com/bluetooth/) de Apple permite que las apps de iPhone interactúen con accesorios Bluetooth de baja energía. Lo que FlyCC puede hacer en un iPhone depende de tu modelo, de su firmware y de la versión de la app, y las actualizaciones de firmware se ofrecen para productos seleccionados, no para todos los pares. Android sigue siendo una opción con el APK de Aplicaciones útiles.
:::

::: details ¿Por qué FlyCC no encuentra mis auriculares?
Las causas más habituales son que falte el permiso de Bluetooth o de dispositivos cercanos, una versión antigua de la app, que los auriculares aún no estén conectados al teléfono o que FlyCC no sea compatible con el modelo. FlyCC se indica para modelos de TigerBuilder; los modelos Huilian usan StarFun y los modelos HR usan BullSuper o G&Link. Un escaneo fallido no demuestra qué chip llevan, así que consulta el modelo de tu vendedor en las páginas de versiones y pregunta en Discord si ninguna de las aplicaciones indicadas se conecta.
:::
