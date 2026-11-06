---
title: 'Cómo actualizar el firmware de AirPods falsos: guía paso a paso'
description: 'Cómo actualizar de forma segura el firmware de réplicas de AirPods usando FlyCC, CloudCC y Starfun: reglas de carga segura, cómo evitar que queden inservibles y cuándo dejar el firmware como está.'
category: Solución de problemas
order: 16
---
# Cómo actualizar el firmware de unos AirPods falsos: guía paso a paso

A diferencia de los AirPods originales de Apple, que se actualizan silenciosamente en segundo plano mediante iOS, las réplicas de AirPods se actualizan a través de aplicaciones complementarias de la comunidad que funcionan en Android, iOS o macOS. Actualizar el firmware puede resolver errores de comunicación con iOS, mejorar la estabilidad de la cancelación activa de ruido (ANC) o solucionar desconexiones.

Sin embargo, instalar firmware escribe directamente en el almacenamiento flash interno de los auriculares. Si se interrumpe una actualización, el controlador puede quedar inutilizable de forma permanente. Esta guía cubre los procedimientos de instalación seguros y probados por la comunidad para los principales chipsets de réplicas.

> **Respuesta rápida:** Para actualizar el firmware de una réplica de AirPods, primero identifica el chipset para elegir la utilidad correcta: **FlyCC** (Airoha, incluido TigerBuilder) o **Starfun** (Huilian). Asegúrate de que ambos auriculares y el estuche de carga tengan más del 80 % de batería. Mantén abierta la tapa del estuche, deja ambos auriculares dentro y empieza la actualización OTA en la aplicación. No cierres la tapa, desactives Bluetooth ni salgas de la aplicación hasta que el progreso llegue al 100 %.

::: warning La regla de oro: si funciona, no lo toques
Las actualizaciones de firmware de las réplicas no funcionan como los parches de videojuegos. Se publican principalmente para solucionar cambios incompatibles causados por actualizaciones importantes de iOS o errores graves de hardware. Si tus auriculares se conectan sin problemas, suenan muy bien y la ANC funciona perfectamente, **no actualices el firmware**. Instalar actualizaciones innecesarias solo introduce el riesgo de dejar los auriculares inutilizables.
:::

## Lista de comprobación de seguridad previa a la actualización

Antes de tocar el botón de actualización, verifica estas cuatro condiciones sin excepción:

1. **Nivel de batería superior al 80 %**: Asegúrate de que tanto los auriculares como el estuche de carga tengan al menos un 80 % de batería. Si un auricular se queda sin batería durante la instalación, el cargador de arranque se corromperá.
2. **Mantén el estuche conectado a la corriente**: Conecta el estuche de carga a un adaptador de pared de 5 V/1 A o a una batería externa durante la actualización.
3. **Deja la tapa abierta**: Los auriculares deben permanecer colocados en los contactos de carga con la tapa del estuche abierta durante toda la transferencia.
4. **Desactiva el bloqueo automático y la suspensión de pantalla**: Mantén la pantalla del teléfono encendida. Si el teléfono entra en suspensión profunda o cierra procesos en segundo plano, la transferencia Bluetooth podría detenerse.

## Paso 1: Identifica el chipset y la aplicación

Instalar un archivo de firmware destinado a un chip Airoha en una placa Huilian inutilizará la unidad al instante. Elige la utilidad que corresponda a tu chip en nuestro [catálogo de aplicaciones útiles](/es/useful-apps):

- **Chipsets Airoha (1562AE, 1562E, 1571AM)** → Usa **FlyCC** (Lee nuestra [guía de la aplicación FlyCC](/es/articles/flycc-app-guide)).
- **Chipsets TigerBuilder (1562AE/TB, 1571AM/TB)** → Usa **FlyCC**. CloudCC está obsoleta desde que TigerBuilder integró la función OTA en FlyCC; úsala solo como solución alternativa si tienes el problema de permisos de almacenamiento.
- **Chipsets Huilian (247, 277, 377, 377H3)** → Usa **Starfun**.
- **Chipsets Jieli (Jerry)** → Las réplicas Jieli de gama baja no admiten actualizaciones de firmware OTA.

## Paso 2: Procedimientos de actualización paso a paso

### Método A: Actualizar con FlyCC (Airoha)

1. Conecta tus AirPods a tu dispositivo Android mediante los ajustes de Bluetooth habituales.
2. Abre **FlyCC** y comprueba que tu modelo aparezca en la pantalla de inicio.
3. Pulsa **Firmware Update** (o **OTA Update**).
4. Pulsa **Check for Updates**. Si se detecta una versión nueva, la aplicación mostrará el número de compilación y el registro de cambios.
5. Pulsa **Start Update**. Verás dos etapas: la transferencia del archivo binario al auricular izquierdo y, después, al derecho.
6. Cuando el progreso llegue al 100 %, espera a que aparezca el mensaje: *"Update Successful"*.
7. Cierra la tapa del estuche de carga y déjalo quieto durante 60 segundos para permitir que se reinicien los microcontroladores.

### Método B: Solución alternativa con CloudCC (TigerBuilder)

Las unidades TigerBuilder se actualizan mediante FlyCC (Método A). Usa CloudCC solo si FlyCC tiene el problema de permisos de almacenamiento:

1. Coloca ambos auriculares en el estuche y deja la tapa abierta.
2. Abre **CloudCC** y pulsa **Search Device**.
3. Selecciona tu dispositivo TigerBuilder cuando lo detecte.
4. Ve a la pestaña **Firmware** y pulsa **Query Latest Version**.
5. Selecciona el paquete de la nube y pulsa **Download and Update**.
6. Deja el teléfono directamente junto al estuche de carga hasta que el mensaje confirme que la actualización ha terminado.

### Método C: Actualizar con Starfun (Huilian)

1. Asegúrate de que los auriculares estén conectados al teléfono y de que la tapa esté abierta.
2. Abre **Starfun** y pulsa el icono de **Settings / Firmware**.
3. Compara la versión actual del firmware con la versión más reciente disponible en la nube.
4. Pulsa **Upgrade**. La aplicación escribirá los bloques de configuración uno tras otro.
5. Después del reinicio, olvida el dispositivo en el menú Bluetooth del teléfono y haz un restablecimiento parcial.

## Qué hacer si una actualización se bloquea o falla

Si una actualización se detiene en un porcentaje concreto (por ejemplo, se queda bloqueada en el 45 % durante más de 5 minutos):

1. **No cierres la tapa ni saques los auriculares.**
2. Comprueba si se ha desconectado Bluetooth. Si la aplicación lo permite, pulsa **Retry** o reinicia la aplicación sin mover los auriculares.
3. Si los auriculares dejan de responder por completo, sigue nuestra [guía para restablecer unos AirPods falsos](/es/articles/how-to-reset-fake-airpods) para ejecutar un restablecimiento completo del controlador de 15 segundos.
4. Vuelve a abrir la aplicación de actualización: en la mayoría de los casos, el cargador de arranque de recuperación permitirá volver a instalar el paquete desde el 0 %.

## Guías de solución de problemas relacionadas

- ¿No aparecen los auriculares en la aplicación de firmware? Consulta [Los AirPods falsos no se conectan](/es/articles/fake-airpods-wont-connect).
- ¿Tienes problemas después de una actualización? Sigue la guía [Cómo restablecer unos AirPods falsos](/es/articles/how-to-reset-fake-airpods).
- ¿Usas una configuración del ecosistema Apple? Lee [¿Funcionan los AirPods falsos con los iPhone nuevos?](/es/articles/do-fake-airpods-work-with-new-iphone).
- ¿Necesitas enlaces para descargar aplicaciones? Visita [Aplicaciones útiles](/es/useful-apps).

## Preguntas frecuentes

::: details ¿Puedo actualizar el firmware de una réplica de AirPods en un iPhone?
No. iOS no permite que las aplicaciones complementarias escriban firmware por Bluetooth en accesorios que no sean MFi. Tendrás que pedir prestado un teléfono Android (o usar un Mac compatible) para instalar las actualizaciones de firmware. Una vez actualizado, el firmware permanece instalado en los auriculares de forma permanente.
:::

::: details ¿Una actualización hará que mi réplica de AirPods aparezca en la red Buscar de Apple?
No. La red Buscar depende de certificados criptográficos patentados de Apple que no se pueden añadir mediante actualizaciones de firmware.
:::

::: details ¿Una actualización de firmware puede inutilizar mis AirPods falsos?
Sí, si la actualización se interrumpe porque se agota la batería, se cierra la tapa antes de tiempo o se instala un archivo de firmware destinado a un chipset distinto. Sigue siempre la lista de comprobación de seguridad previa a la actualización que aparece arriba.
:::
