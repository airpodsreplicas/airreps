---
title: Cómo actualizar el firmware de AirPods falsos de forma segura
description: 'Actualiza de forma segura el firmware de réplicas de AirPods con FlyCC (Airoha/TB) y StarFun (Huilian): regla del 80 % de batería, prevención de daños irreparables y cuándo no actualizar.'
category: Solución de problemas
order: 16
---
# Cómo actualizar el firmware de unos AirPods falsos: guía paso a paso

A diferencia de los AirPods originales de Apple, que se actualizan silenciosamente en segundo plano mediante iOS, las réplicas de AirPods se actualizan con aplicaciones complementarias de la comunidad. Tanto **FlyCC** como **StarFun** están disponibles en Android y en el App Store de iOS, aunque los APK de Android siguen siendo la opción más fiable para realizar una actualización OTA completa en todos los chipsets. Actualizar el firmware puede resolver errores de sincronización con iOS, mejorar la estabilidad de la cancelación activa de ruido (ANC) o corregir desconexiones.

Sin embargo, instalar firmware escribe directamente en la memoria flash interna de los auriculares. Una actualización interrumpida puede dejar un controlador inutilizable de forma permanente. Esta guía cubre los procedimientos de actualización seguros y probados por la comunidad para los principales chipsets de réplicas.

> **Respuesta rápida:** Para actualizar el firmware de unos AirPods réplica, identifica primero el chipset y elige la utilidad adecuada: **FlyCC** (Airoha, incluido TigerBuilder) o **StarFun** (Huilian). Asegúrate de que ambos auriculares y el estuche de carga tengan más del 80 % de batería. Mantén la tapa del estuche abierta, deja ambos auriculares dentro y empieza la actualización OTA en la aplicación. No cierres la tapa, desactives el Bluetooth ni salgas de la aplicación hasta que el progreso llegue al 100 %.

::: warning Regla de oro: si funciona, no lo toques
Las actualizaciones de firmware de las réplicas no funcionan como los parches de videojuegos. Se publican principalmente para corregir cambios incompatibles causados por actualizaciones importantes de iOS o para resolver errores graves de hardware. Si tus auriculares se conectan sin problemas, suenan muy bien y la ANC funciona perfectamente, **no actualices el firmware**. Instalar actualizaciones innecesarias solo conlleva el riesgo de dejar los auriculares inutilizables.
:::

<CommunityCta variant="apps" />

## Lista de comprobación de seguridad antes de actualizar

Antes de pulsar el botón de actualización, verifica estas cuatro condiciones sin excepción:

1. **Nivel de batería superior al 80 %**: Asegúrate de que ambos auriculares y el estuche de carga tengan al menos un 80 % de batería. Si un auricular se queda sin energía a mitad de la actualización, el bootloader se dañará.
2. **Mantén el estuche conectado a la corriente**: Conecta el estuche de carga a un adaptador de pared de 5 V/1 A o a una batería externa durante la actualización.
3. **Deja la tapa abierta**: Los auriculares deben permanecer colocados sobre los contactos de carga con la tapa del estuche abierta durante toda la transferencia.
4. **Desactiva el bloqueo automático y la suspensión de pantalla**: Mantén encendida la pantalla del teléfono. Si el teléfono entra en suspensión profunda o cierra procesos en segundo plano, la transferencia Bluetooth puede detenerse.

## Paso 1: identifica el chipset y la aplicación

Instalar un archivo de firmware destinado a un chip Airoha en una placa Huilian dejará la unidad inutilizable al instante. Elige la utilidad adecuada para tu chip en nuestro [catálogo de aplicaciones útiles](/es/useful-apps):

- **Chipsets Airoha (1562AE, 1562E, 1571AM)** → Usa **FlyCC** (Lee nuestra [guía de la aplicación FlyCC](/es/articles/flycc-app-guide)).
- **Chipsets TigerBuilder (1562AE/TB, 1571AM/TB)** → Usa **FlyCC**. CloudCC está obsoleta desde que TigerBuilder integró la función OTA en FlyCC; úsala solo como alternativa si tienes problemas con los permisos de almacenamiento.
- **Chipsets Huilian (247, 277, 377, 377H3)** → Usa **StarFun** (Lee nuestra [guía de la aplicación StarFun](/es/articles/starfun-app-guide)).
- **Chipsets Jieli (Jerry)** → Los clones Jieli de gama baja no admiten actualizaciones OTA del firmware.

## Paso 2: procedimientos de actualización paso a paso

### Método A: actualizar con FlyCC (Airoha)

1. Conecta tus AirPods al teléfono mediante los ajustes estándar de Bluetooth.
2. Abre **FlyCC** y comprueba que tu modelo aparezca en la pantalla de inicio.
3. Pulsa **Firmware Update** (o **OTA Update**).
4. Pulsa **Check for Updates**. Si se detecta una versión nueva, la aplicación mostrará el número de compilación y el registro de cambios.
5. Pulsa **Start Update**. Verás dos etapas: la transferencia del archivo binario al auricular izquierdo y, después, al derecho.
6. Cuando el progreso llegue al 100 %, espera a que aparezca el mensaje: *"Update Successful"*.
7. Cierra la tapa del estuche de carga y no lo toques durante 60 segundos para permitir que se reinicien los microcontroladores.

::: warning Nota sobre el firmware Pro 3 V7 TB
Después de actualizar el firmware con FlyCC en los **AirPods Pro 3 V7 TB**, la ventana emergente de iOS y el número de serie desaparecen y deben añadirse de nuevo desde la aplicación FlyCC. El V7 Huilian (StarFun) no se ve afectado.
:::

### Método B: alternativa con CloudCC (TigerBuilder)

Las unidades TigerBuilder se actualizan con FlyCC (método A). Usa CloudCC solo si FlyCC tiene problemas con los permisos de almacenamiento:

1. Coloca ambos auriculares en el estuche con la tapa abierta.
2. Abre **CloudCC** y pulsa **Search Device**.
3. Selecciona tu dispositivo TigerBuilder cuando aparezca.
4. Ve a la pestaña **Firmware** y pulsa **Query Latest Version**.
5. Selecciona el paquete de la nube y pulsa **Download and Update**.
6. Deja el teléfono junto al estuche de carga hasta que el mensaje confirme que la actualización ha terminado.

### Método C: actualizar con StarFun (Huilian)

1. Asegúrate de que los auriculares estén conectados al teléfono y de que la tapa esté abierta.
2. Abre **StarFun** y pulsa el icono **Settings / Firmware**.
3. Compara la versión actual del firmware con la última versión disponible en la nube.
4. Pulsa **Upgrade**. La aplicación escribirá los bloques de configuración de forma secuencial.
5. Después del reinicio, olvida el dispositivo en el menú Bluetooth del teléfono y realiza un restablecimiento parcial.

## Qué hacer si una actualización se bloquea o falla

Si la actualización se detiene en un porcentaje concreto (por ejemplo, se queda en el 45 % durante más de 5 minutos):

1. **No cierres la tapa ni saques los auriculares.**
2. Comprueba si se ha desconectado el Bluetooth. Si la aplicación lo permite, pulsa **Retry** o reiníciala sin mover los auriculares.
3. Si los auriculares dejan de responder por completo, sigue nuestra [guía para restablecer unos AirPods falsos](/es/articles/how-to-reset-fake-airpods) y realiza un restablecimiento completo del controlador durante 15 segundos.
4. Vuelve a abrir la aplicación de actualización: en la mayoría de los casos, el bootloader de recuperación permitirá volver a instalar el paquete desde el 0 %.

<CommunityCta variant="stuck" />

## Guías de solución de problemas relacionadas

- ¿Usas una réplica Huilian? Sigue la [guía de la aplicación StarFun](/es/articles/starfun-app-guide).
- ¿No aparecen los auriculares en la aplicación de firmware? Consulta [Los AirPods falsos no se conectan](/es/articles/fake-airpods-wont-connect) o [Cómo restablecer unos AirPods falsos](/es/articles/how-to-reset-fake-airpods).
- ¿Necesitas enlaces para descargar aplicaciones? Visita [Aplicaciones útiles](/es/useful-apps).
- ¿Quieres pasar de un clon antiguo que no se puede actualizar? Responde el [cuestionario de 1 minuto](/es/quiz) o consulta los [vendedores de confianza](/es/links/info).

## Preguntas frecuentes

::: details ¿Puedo actualizar el firmware de unos AirPods réplica en un iPhone?
Tanto **FlyCC** como **StarFun** están disponibles en el App Store de iOS para ajustar el ecualizador, cambiar los ajustes y consultar el estado del firmware (y FlyCC en iOS permite consultar y actualizar modelos TigerBuilder recientes, como V5.3 TB). Sin embargo, para modelos antiguos o si una aplicación de iOS no inicia una actualización OTA, la alternativa más fiable es pedir prestado un teléfono Android y descargar el APK desde [Aplicaciones útiles](/es/useful-apps). Una vez actualizado, el firmware permanece instalado en los auriculares.
:::

::: details ¿Una actualización hará que mis AirPods réplica se conecten a la red Buscar de Apple?
No. La red Buscar depende de certificados criptográficos propietarios de Apple que no se pueden añadir mediante actualizaciones de firmware.
:::

::: details ¿Una actualización de firmware puede dejar inservibles mis AirPods falsos?
Sí, si la actualización se interrumpe porque se agota la batería, se cierra la tapa antes de tiempo o se instala un archivo de firmware destinado a otro chipset. Sigue siempre la lista de comprobación de seguridad anterior antes de actualizar.
:::
