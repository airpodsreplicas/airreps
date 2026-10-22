---
title: 'Guía de FlyCC APK: Cómo configurar y ajustar réplicas de AirPods de Airoha'
description: 'Cómo descargar, instalar y usar FlyCC de forma segura — ajuste de ecualización personalizado, asignación de controles táctiles, actualizaciones de firmware y solución de fallos de conexión.'
category: Cómo usar tus réplicas
order: 13
---
# Guía de FlyCC APK: cómo configurar y ajustar réplicas de AirPods de Airoha

FlyCC es la aplicación complementaria esencial para las réplicas de AirPods que funcionan con **chipsets Airoha** (incluidos Airoha 1562AE, 1562E, 1562F y 1571AM). Como los ajustes nativos de iOS de Apple solo exponen controles básicos, FlyCC proporciona acceso de bajo nivel al chip: ajuste de ecualización paramétrica personalizada, calibración del sensor táctil, equilibrio de la cancelación activa de ruido (ANC) y actualización del firmware mediante OTA.

> **Respuesta rápida:** FlyCC es una utilidad gratuita de terceros para Android y macOS diseñada específicamente para réplicas de AirPods basadas en Airoha. Permite personalizar perfiles de sonido mediante un ecualizador integrado, modificar la sensibilidad de pellizcos/toques y actualizar el firmware mediante OTA. No detectará réplicas con chips Huilian, BES o Jieli económicos.

::: tip Se requiere Android o Mac
FlyCC no se puede instalar desde la App Store de Apple para iOS debido a las restricciones de Apple sobre hardware de terceros. Para configurar tus auriculares Airoha, instala el APK de Android en cualquier smartphone Android o ejecuta la versión comunitaria para macOS. Los ajustes guardados en los auriculares se mantienen incluso cuando vuelves a conectarlos a un iPhone.
:::

## Chipsets compatibles

FlyCC funciona exclusivamente con **hardware Airoha**. Si tus auriculares se conectan, habrás confirmado que llevan chips Airoha auténticos:

- **Airoha 1562AE / 1571AM** — Compatibilidad completa: calibración ANC con dos micrófonos, ecualización personalizada, controles de audio espacial con seguimiento de la cabeza y actualizaciones OTA.
- **Airoha 1562E / 1563E** — Ecualización estándar, controles táctiles y herramientas de firmware.
- **Airoha 1562F** — Controles heredados de ANC y ecualización.

Si FlyCC realiza el escaneo indefinidamente y nunca detecta tus auriculares, tu par utiliza chips de otro fabricante (como Huilian, que usa [Starfun](/es/useful-apps), o TigerBuilder, que usa [CloudCC](/es/useful-apps)) o un chip Jieli básico.

## Cómo descargar e instalar FlyCC de forma segura

Como FlyCC se comunica con hardware Bluetooth que no es MFi, se distribuye directamente como APK en lugar de hacerlo mediante Google Play.

1. Descarga el APK verificado más reciente directamente desde el [directorio de aplicaciones útiles](/es/useful-apps).
2. En tu dispositivo Android, ve a **Ajustes → Seguridad** y activa **«Instalar aplicaciones desconocidas»** para tu navegador o gestor de archivos.
3. Abre el archivo `.apk` descargado y toca **Instalar**.
4. Concede los permisos solicitados de **Bluetooth / Dispositivos cercanos** y **Ubicación**. (Android requiere permisos de ubicación para buscar periféricos Bluetooth de baja energía; FlyCC no rastrea datos GPS).

## Funciones principales y cómo usarlas

### 1. Ecualización personalizada y ajuste de audio

De fábrica, algunos lotes de réplicas tienen una respuesta de graves exagerada. FlyCC incluye un ecualizador de 10 bandas para perfeccionar la salida de audio:

- **Reducción de graves**: Baja los controles deslizantes de 31 Hz, 62 Hz y 125 Hz entre 2 y 3 dB para obtener un escenario sonoro más limpio y neutro, similar al de los AirPods Pro originales.
- **Claridad vocal**: Aumenta las bandas de 1 kHz y 2 kHz en 1,5 dB para destacar los pódcasts y las voces.
- **Guardado en el hardware**: Una vez realizados los ajustes, toca **Guardar en los auriculares**. La configuración acústica se escribe directamente en el DSP de Airoha, por lo que la ecualización personalizada seguirá activa cuando vuelvas a conectar los auriculares a tu iPhone, iPad o PC.

### 2. Calibración táctil y de gestos

Si tus auriculares activan pausas accidentales cuando los ajustas en el oído, FlyCC te permite modificar la sensibilidad del sensor de fuerza desde 1 (toque más ligero) hasta 5 (presión firme). También puedes reasignar las pulsaciones simples, dobles y triples a funciones específicas.

### 3. Ajuste de la cancelación de ruido

En el menú de ANC, FlyCC permite calibrar de forma independiente los micrófonos de alimentación anticipada izquierdo y derecho. Si un auricular parece tener una mayor presión en el oído o una cancelación más débil, el control deslizante de calibración reajusta la inversión de fase.

## Actualización segura del firmware (OTA)

FlyCC puede instalar binarios de firmware actualizados para corregir errores de comunicación con iOS o mejorar la conectividad. Sin embargo, la actualización conlleva un riesgo inherente de dejar el dispositivo inutilizable si se interrumpe:

1. **Carga ambos auriculares y el estuche por encima del 80 %** antes de comenzar.
2. Mantén abierto el estuche de carga, con ambos auriculares colocados en su interior y a menos de 30 centímetros del teléfono.
3. Toca **Buscar actualizaciones** en FlyCC. Si hay una actualización disponible, descarga el paquete.
4. Toca **Iniciar actualización**. **No cierres la tapa del estuche, desactives el Bluetooth ni cambies de aplicación** hasta que la barra de progreso llegue al 100 % y muestre «Actualización correcta».
5. Cuando termine, deja los auriculares en el estuche cerrado durante 60 segundos antes de volver a emparejarlos.

Para consultar una guía completa sobre cómo actualizar de forma segura todos los chipsets de réplicas, lee [Cómo actualizar el firmware de unos AirPods falsos](/es/articles/how-to-update-fake-airpods-firmware).

## Solución de problemas de conexión de FlyCC

Si FlyCC no detecta tus auriculares:

- **Comprueba la conexión de audio activa del teléfono**: Asegúrate de que los auriculares ya estén emparejados en los ajustes de Bluetooth nativos de Android antes de abrir FlyCC.
- **Concede permisos para Dispositivos cercanos**: En Android 12 y versiones posteriores, FlyCC no puede detectar dispositivos Bluetooth LE sin tener activado el permiso «Dispositivos cercanos».
- **Identifica tu chip**: Si tus auriculares no se conectan a FlyCC, prueba a escanearlos con **CloudCC** o **Starfun**. Si ninguna aplicación se conecta, consulta [Cómo identificar unos AirPods falsos](/es/articles/how-to-spot-fake-airpods) para comprobar si tienes un clon Jieli económico.
- **Borra la caché de emparejamiento**: Si las conexiones se interrumpen, restablece el controlador mediante nuestra [guía de restablecimiento](/es/articles/how-to-reset-fake-airpods).

## Guías relacionadas

- ¿Usas réplicas con Android a diario? Consulta [Réplicas de AirPods en Android](/es/articles/airpods-replicas-on-android).
- ¿Necesitas utilidades para otros chips? Consulta el [catálogo completo de aplicaciones útiles](/es/useful-apps).
- ¿Tus auriculares no se conectan? Sigue los pasos de [Los AirPods falsos no se conectan](/es/articles/fake-airpods-wont-connect).
- ¿Buscas modelos Airoha verificados? Explora el [directorio de vendedores de confianza](/es/links/info).

## Preguntas frecuentes

::: details ¿Es seguro instalar FlyCC en mi teléfono?
Sí. Los APK alojados en el directorio comunitario de aplicaciones útiles se extraen de las cadenas de suministro oficiales de los fabricantes y se verifican para garantizar que estén libres de malware. Solo requiere acceso Bluetooth para comunicarse con el procesador de audio Airoha.
:::

::: details ¿Puedo usar FlyCC en un iPhone?
No. Apple no permite que las aplicaciones de terceros accedan a perfiles serie Bluetooth sin procesar para hardware que no es MFi. Debes usar un teléfono Android o un Mac para cambiar los ajustes de FlyCC. Sin embargo, todos los cambios de ecualización y controles se escriben permanentemente en la memoria interna de los auriculares, por lo que se transfieren automáticamente a tu iPhone.
:::

::: details ¿Por qué FlyCC muestra «Dispositivo no encontrado»?
La razón más habitual es una incompatibilidad de chips: FlyCC solo funciona con chips Airoha. Si tienes un modelo Huilian, usa Starfun; si tienes un modelo TigerBuilder, usa CloudCC. Si ninguno se conecta, probablemente tengas una unidad Jieli económica.
:::
