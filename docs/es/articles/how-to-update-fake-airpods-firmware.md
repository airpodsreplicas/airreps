---
title: 'Cómo actualizar el firmware de unos AirPods falsos: guía paso a paso'
description: 'Cómo actualizar de forma segura el firmware de réplicas de AirPods usando FlyCC, CloudCC y Starfun — reglas de carga segura, cómo evitar que se bloqueen y cuándo dejar el firmware sin tocar.'
category: Solución de problemas
order: 16
---
# Cómo actualizar el firmware de unos AirPods falsos: guía paso a paso

A diferencia de los AirPods originales de Apple, que se actualizan silenciosamente en segundo plano mediante iOS, las réplicas de AirPods se actualizan a través de aplicaciones complementarias de la comunidad que funcionan en Android o macOS. Actualizar el firmware puede resolver errores de sincronización con iOS, mejorar la estabilidad de la cancelación activa de ruido (ANC) o solucionar desconexiones.

Sin embargo, instalar el firmware escribe directamente en el almacenamiento flash interno de los auriculares. Una actualización interrumpida puede inutilizar permanentemente un controlador. Esta guía cubre los procedimientos seguros de instalación probados por la comunidad para los principales chipsets de réplicas.

> **Respuesta rápida:** Para actualizar el firmware de unas réplicas de AirPods, primero identifica tu chipset para elegir la utilidad correcta: **FlyCC** (Airoha), **CloudCC** (TigerBuilder) o **Starfun** (Huilian). Asegúrate de que ambos auriculares y el estuche de carga tengan más del 80 % de batería. Mantén abierta la tapa del estuche, deja ambos auriculares colocados dentro, inicia la actualización OTA en la aplicación y no cierres la tapa, desactives el Bluetooth ni salgas de la aplicación hasta que el progreso llegue al 100 %.

::: warning La regla fundamental: si funciona, no lo toques
Las actualizaciones de firmware en las réplicas no funcionan como los parches de videojuegos. Se publican principalmente para corregir cambios incompatibles causados por actualizaciones importantes de iOS o para resolver errores graves de hardware. Si tus auriculares se conectan correctamente, suenan bien y la ANC funciona sin problemas, **no actualices el firmware**. Instalar actualizaciones innecesarias solo introduce el riesgo de inutilizarlos.
:::

## Lista de comprobación de seguridad previa a la actualización

Antes de tocar el botón de actualización, verifica estas cuatro condiciones sin excepción:

1. **Nivel de batería superior al 80 %**: Asegúrate de que ambos auriculares y el estuche de carga tengan al menos un 80 % de batería. Si un auricular se queda sin energía durante la instalación, el gestor de arranque se corromperá.
2. **Mantén el estuche conectado a la corriente**: Conecta el estuche de carga a un adaptador de pared de 5 V/1 A o a una batería externa durante la actualización.
3. **Deja la tapa abierta**: Los auriculares deben permanecer colocados sobre sus contactos de carga con la tapa del estuche abierta durante toda la transferencia.
4. **Desactiva el bloqueo automático o la suspensión de pantalla**: Mantén activa la pantalla del teléfono. Si el teléfono entra en suspensión profunda o cierra procesos en segundo plano, la transferencia Bluetooth puede detenerse.

## Paso 1: identifica tu chipset y la aplicación

Instalar un binario de firmware destinado a un chip Airoha en una placa Huilian inutilizará la unidad al instante. Elige la utilidad correspondiente a tu chip en nuestro [catálogo de aplicaciones útiles](/es/useful-apps):

- **Chipsets Airoha (1562AE, 1562E, 1571AM)** $\to$ Usa **FlyCC** (lee nuestra [guía de la aplicación FlyCC](/es/articles/flycc-app-guide)).
- **Chipsets TigerBuilder (1562AE/TB, 1571AM/TB)** $\to$ Usa **CloudCC**.
- **Chipsets Huilian (247, 277, 377, 377H3)** $\to$ Usa **Starfun**.
- **Chipsets Jieli (Jerry)** $\to$ Las réplicas Jieli de gama baja no admiten actualizaciones de firmware OTA.

## Paso 2: procedimientos de actualización paso a paso

### Método A: actualizar con FlyCC (Airoha)

1. Conecta tus AirPods a tu dispositivo Android mediante los ajustes estándar de Bluetooth.
2. Abre **FlyCC** y verifica que tu modelo aparezca en la pantalla de inicio.
3. Toca **Firmware Update** (o **OTA Update**).
4. Toca **Check for Updates**. Si se detecta una versión nueva, la aplicación mostrará el número de compilación y el registro de cambios.
5. Toca **Start Update**. Verás dos etapas: la transferencia del binario al auricular izquierdo y, después, al derecho.
6. Cuando el progreso llegue al 100 %, espera a que aparezca el mensaje: *"Update Successful"*.
7. Cierra la tapa del estuche de carga y déjalo sin mover durante 60 segundos para permitir que los microcontroladores se reinicien.

### Método B: actualizar con CloudCC (TigerBuilder)

1. Coloca ambos auriculares en el estuche con la tapa abierta.
2. Abre **CloudCC** y toca **Search Device**.
3. Selecciona tu dispositivo TigerBuilder cuando se detecte.
4. Ve a la pestaña **Firmware** y toca **Query Latest Version**.
5. Selecciona el paquete de la nube y toca **Download and Update**.
6. Mantén el teléfono justo al lado del estuche de carga hasta que el aviso confirme que se ha completado.

### Método C: actualizar con Starfun (Huilian)

1. Asegúrate de que los auriculares estén conectados al teléfono y de que la tapa esté abierta.
2. Abre **Starfun** y toca el icono de **Settings / Firmware**.
3. Comprueba la versión actual del firmware con respecto a la versión más reciente disponible en la nube.
4. Toca **Upgrade**. La aplicación escribirá los bloques de configuración secuencialmente.
5. Después del reinicio, olvida el dispositivo en el menú Bluetooth del teléfono y realiza un reinicio parcial.

## Qué hacer si una actualización se bloquea o falla

Si una actualización se queda atascada en un porcentaje concreto (por ejemplo, congelada en el 45 % durante más de 5 minutos):

1. **No cierres la tapa ni retires los auriculares.**
2. Comprueba si se ha desconectado el Bluetooth. Si la aplicación lo permite, toca **Retry** o reinicia la aplicación sin mover los auriculares.
3. Si los auriculares dejan de responder por completo, sigue nuestra [guía para restablecer unos AirPods falsos](/es/articles/how-to-reset-fake-airpods) para ejecutar un reinicio completo del controlador de 15 segundos.
4. Vuelve a abrir la aplicación de actualización; en la mayoría de los casos, el gestor de arranque de recuperación permitirá reinstalar el paquete desde el 0 %.

## Guías de solución de problemas relacionadas

- ¿Los auriculares no aparecen en la aplicación de firmware? Consulta [Los AirPods falsos no se conectan](/es/articles/fake-airpods-wont-connect).
- ¿Experimentas fallos después de una actualización? Sigue [Cómo restablecer unos AirPods falsos](/es/articles/how-to-reset-fake-airpods).
- ¿Usas una configuración del ecosistema de Apple? Lee [¿Funcionan los AirPods falsos con los iPhone nuevos?](/es/articles/do-fake-airpods-work-with-new-iphone).
- ¿Necesitas enlaces para descargar aplicaciones? Visita [Aplicaciones útiles](/es/useful-apps).

## Preguntas frecuentes

::: details ¿Puedo actualizar el firmware de unas réplicas de AirPods en un iPhone?
No. iOS no permite que las aplicaciones complementarias escriban firmware mediante Bluetooth en accesorios que no sean MFi. Debes pedir prestado un teléfono Android (o utilizar un Mac compatible) para instalar las actualizaciones de firmware. Una vez actualizado, el firmware permanece permanentemente en los auriculares.
:::

::: details ¿Una actualización proporcionará a mi réplica de AirPods la red Buscar de Apple?
No. La red Buscar depende de certificados criptográficos propietarios de Apple que no se pueden añadir mediante actualizaciones de firmware.
:::

::: details ¿Una actualización de firmware puede inutilizar mis AirPods falsos?
Sí, si la actualización se interrumpe por una batería agotada, si se cierra la tapa antes de tiempo o si se instala un binario de firmware destinado a un chipset diferente. Sigue siempre la lista de comprobación de seguridad previa a la actualización indicada arriba.
:::
