---
title: 'Guía de la app FlyCC: ajusta réplicas de AirPods con Airoha'
description: 'Cómo descargar, instalar y usar FlyCC de forma segura: ajuste personalizado del ecualizador, asignación de controles táctiles, actualizaciones de firmware y solución de problemas de conexión.'
category: Usar tus réplicas
order: 13
---
# Guía de FlyCC APK: cómo configurar y ajustar réplicas de AirPods con Airoha

FlyCC es la aplicación complementaria esencial para las réplicas de AirPods que usan **chipsets Airoha** (incluidos Airoha 1562AE, 1562E, 1562F y 1571AM). Como los ajustes nativos de iOS de Apple solo ofrecen controles básicos, FlyCC brinda acceso de bajo nivel al chip: ajuste personalizado de ecualización paramétrica, calibración de los sensores táctiles, balance de la cancelación activa de ruido (ANC) e instalación de firmware OTA.

> **Respuesta rápida:** FlyCC es una utilidad gratuita de terceros para Android, iOS y macOS, diseñada específicamente para réplicas de AirPods con tecnología Airoha. Permite personalizar perfiles de sonido mediante un ecualizador integrado, modificar la sensibilidad al pellizco o al toque e instalar actualizaciones de firmware por OTA. No detecta réplicas con chips Huilian, BES o Jieli económicos.

::: tip Android, iPhone o Mac
FlyCC está disponible como APK para Android y en la App Store de iOS; ambos enlaces están en [Aplicaciones útiles](/es/useful-apps#tigerbuilder). También puedes usar la versión comunitaria para macOS. Los ajustes guardados en los auriculares se mantienen incluso cuando cambias de teléfono.
:::

<CommunityCta variant="apps" />

## Chipsets compatibles

FlyCC funciona exclusivamente con **hardware Airoha / TigerBuilder**. Si la aplicación detecta tus auriculares, habrás confirmado que llevan un chip Airoha auténtico:

| Chipset Airoha | Ejemplos de modelos réplica | Compatibilidad con FlyCC |
| :--- | :--- | :--- |
| **Airoha 1571AM** | Pro 3 V7 TB, Pro 2 V5.3 TB, AirPods 4 V3 TB | EQ completa, ANC, controles táctiles, seguimiento de cabeza, OTA |
| **Airoha 1562AE** | Pro 2 V5.2 TB, AirPods Max V3 TB, Pro 1 V4.9 | EQ completa, ANC, controles táctiles, seguimiento de cabeza, OTA |
| **Airoha 1563E / 1562E** | Pro 3 V6 TB, AirPods 4 V2 TB, AirPods 2 V3E | EQ estándar, controles táctiles, herramientas de firmware |
| **Airoha 1561M / 1562F** | AirPods Max V3P / V2 Metal, modelos antiguos | EQ y herramientas básicas de firmware |

Si FlyCC sigue buscando indefinidamente y nunca detecta tus auriculares, tu par lleva un chip de otro fabricante (como Huilian, que usa [StarFun](/es/articles/starfun-app-guide)) o un chip Jieli básico.

## Cómo descargar e instalar FlyCC de forma segura

Como FlyCC se comunica con dispositivos Bluetooth que no cuentan con certificación MFi, se distribuye directamente como APK y no a través de Google Play.

1. Descarga la última versión verificada del APK desde el [directorio de Aplicaciones útiles](/es/useful-apps).
2. En tu dispositivo Android, ve a **Ajustes → Seguridad** y activa **"Instalar aplicaciones desconocidas"** para el navegador o el administrador de archivos.
3. Abre el archivo `.apk` descargado y pulsa **Instalar**.
4. Concede los permisos solicitados de **Bluetooth / Dispositivos cercanos** y **Ubicación**. (Android exige permisos de ubicación para buscar periféricos Bluetooth de bajo consumo; FlyCC no rastrea datos GPS).

## Funciones principales y cómo usarlas

### 1. EQ personalizada y ajuste de audio

Algunas tandas de réplicas tienen unos graves exagerados de fábrica. FlyCC incluye un ecualizador de 10 bandas para afinar el sonido:

- **Reducción de graves**: Baja 2–3 dB los controles de 31Hz, 62Hz y 125Hz para obtener un sonido más limpio y neutral, similar al de los AirPods Pro originales.
- **Claridad de las voces**: Sube 1,5 dB las bandas de 1kHz y 2kHz para destacar los pódcast y las voces.
- **Guardar en los auriculares**: Cuando termines, pulsa **Guardar en los auriculares**. El ajuste acústico se guarda directamente en el DSP Airoha, por lo que la EQ personalizada seguirá activa al volver a conectarlos al iPhone, iPad o PC.

### 2. Calibración del tacto y los gestos

Si los auriculares se pausan accidentalmente al ajustártelos, FlyCC permite modificar la sensibilidad del sensor de presión de 1 (toque más suave) a 5 (presión firme). También puedes asignar funciones específicas a las pulsaciones simples, dobles y triples.

### 3. Ajuste de la cancelación de ruido

En el menú de ANC, FlyCC permite calibrar por separado los micrófonos de retroalimentación directa izquierdo y derecho. Si notas más presión en el oído o una cancelación más débil en uno de los auriculares, el control deslizante de calibración ajusta el balance de la inversión de fase.

## Actualización segura del firmware (OTA)

FlyCC puede instalar archivos binarios de firmware actualizados para corregir errores de enlace con iOS o mejorar la conectividad. Sin embargo, el proceso conlleva el riesgo de dejar los auriculares inservibles si se interrumpe:

1. **Carga ambos auriculares y el estuche por encima del 80%** antes de empezar.
2. Mantén abierto el estuche de carga, con ambos auriculares dentro y a menos de 30 centímetros del teléfono.
3. Pulsa **Buscar actualizaciones** en FlyCC. Si hay una actualización disponible, descarga el paquete.
4. Pulsa **Iniciar actualización**. **No cierres la tapa del estuche, desactives el Bluetooth ni cambies de aplicación** hasta que la barra de progreso llegue al 100% y aparezca "Actualización completada".
5. Cuando termine, deja los auriculares en el estuche cerrado durante 60 segundos antes de volver a emparejarlos.

::: warning Nota sobre Pro 3 V7 TB
En los **AirPods Pro 3 V7 TB**, después de actualizar el firmware con FlyCC, desaparecen la ventana emergente de iOS y el número de serie, que deben volver a añadirse desde la aplicación FlyCC. Esto no afecta a los V7 Huilian (StarFun).
:::

Para consultar una guía completa sobre cómo actualizar de forma segura todas las réplicas con distintos chipsets, lee [Cómo actualizar el firmware de los AirPods falsos](/es/articles/how-to-update-fake-airpods-firmware).

## Solución de problemas de conexión con FlyCC

Si FlyCC no detecta tus auriculares:

- **Comprueba la conexión de audio activa del teléfono**: Asegúrate de que los auriculares estén emparejados en los ajustes Bluetooth nativos de Android antes de abrir FlyCC.
- **Concede el permiso de Dispositivos cercanos**: En Android 12 y versiones posteriores, FlyCC no puede detectar dispositivos Bluetooth LE si no tiene activado el permiso "Dispositivos cercanos".
- **Identifica el chip**: Si FlyCC no logra conectarse a tus auriculares, prueba a buscarlos con **[StarFun](/es/articles/starfun-app-guide)** (para chips Huilian) o **CloudCC** (solo como solución alternativa para problemas antiguos de permisos de almacenamiento de TB). Si ninguna aplicación se conecta, consulta [Cómo identificar AirPods falsos](/es/articles/how-to-spot-fake-airpods) para comprobar si son una réplica económica con chip Jieli.
- **Borra la caché de emparejamiento**: Si se interrumpen las conexiones, restablece el controlador siguiendo nuestra [Guía de restablecimiento](/es/articles/how-to-reset-fake-airpods).

<CommunityCta variant="stuck" />

## Guías relacionadas

- ¿Tienes una réplica Huilian? Lee nuestra [Guía de la aplicación StarFun](/es/articles/starfun-app-guide).
- ¿Usas réplicas a diario con Android? Consulta [Réplicas de AirPods en Android](/es/articles/airpods-replicas-on-android).
- ¿Necesitas utilidades para otros chips? Consulta el catálogo completo de [Aplicaciones útiles](/es/useful-apps).
- ¿Buscas un modelo Airoha verificado? Responde el [cuestionario de 1 minuto](/es/quiz) o consulta el [directorio de vendedores de confianza](/es/links/info).

## Preguntas frecuentes

::: details ¿Es seguro instalar FlyCC en mi teléfono?
Sí. Los APK alojados en el directorio comunitario de Aplicaciones útiles se extraen de cadenas de suministro oficiales de fabricantes y se verifica que no contengan malware. FlyCC solo necesita acceso Bluetooth para comunicarse con el procesador de audio Airoha.
:::

::: details ¿Puedo usar FlyCC en un iPhone?
Sí. FlyCC está disponible en la App Store de iOS y como APK para Android; ambos enlaces están en [Aplicaciones útiles](/es/useful-apps#tigerbuilder). Los cambios de EQ y controles se guardan de forma permanente en la memoria interna de los auriculares, por lo que se mantienen al cambiar de dispositivo.
:::

::: details ¿Por qué FlyCC indica "Dispositivo no encontrado"?
La causa más común es una incompatibilidad del chip: FlyCC solo funciona con chips Airoha. Si tienes un modelo Huilian, usa StarFun. Los modelos TigerBuilder usan FlyCC; CloudCC solo sirve como solución alternativa si FlyCC presenta el problema de permisos de almacenamiento. Si ninguna se conecta, probablemente tengas un modelo Jieli económico.
:::
