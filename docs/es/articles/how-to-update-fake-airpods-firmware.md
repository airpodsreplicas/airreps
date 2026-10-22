---
title: 'Cómo actualizar el firmware de unos AirPods falsos: guía paso a paso'
description: 'Cómo actualizar de forma segura el firmware de réplicas de AirPods usando FlyCC, CloudCC y Starfun — reglas de carga segura, cómo evitar que se bloqueen y cuándo dejar el firmware sin tocar.'
category: Solución de problemas
order: 16
---
# Cómo actualizar el firmware de unos AirPods falsos: guía paso a paso

Los AirPods originales de Apple se actualizan automáticamente a través de tus dispositivos Apple. Las réplicas no. Su firmware lo proporciona el fabricante y se instala con una aplicación complementaria, y solo para los modelos que el fabricante admite. Una actualización puede solucionar problemas de compatibilidad con iOS o cortes de conexión, y a veces añade funciones.

Actualizar escribe un firmware nuevo en los auriculares, así que una actualización interrumpida o equivocada puede dejarlos inservibles. El proceso exacto depende del modelo y de la aplicación, por eso esta guía explica qué comprobar y cómo actualizar con seguridad, en lugar de dar una única secuencia para todos los pares.

> **Respuesta rápida:** Primero identifica tu modelo exacto y tu vendedor y después usa la aplicación indicada para ese fabricante en [Aplicaciones útiles](/es/useful-apps): **FlyCC** para modelos de TigerBuilder (Airoha) o **StarFun** para Huilian, ambas disponibles en Android y iPhone. Si la aplicación ofrece una actualización para tu modelo, sigue sus instrucciones en pantalla, mantén los auriculares cargados y cerca del teléfono y no interrumpas la actualización. Si tus auriculares funcionan bien y la actualización no soluciona un problema que tengas, sáltatela.

::: warning La regla fundamental: si funciona, no lo toques
Las actualizaciones de firmware de las réplicas suelen corregir problemas causados por grandes actualizaciones de iOS o fallos conocidos. Si tus auriculares se conectan sin problemas, suenan bien y el ANC funciona, y la actualización no soluciona un problema que realmente tengas, **no actualices el firmware**. Una actualización innecesaria solo añade riesgo.
:::

## Antes de actualizar

1. **Conoce tu modelo exacto y tu vendedor**: Revisa tu pedido y el nombre del producto del vendedor y busca esa versión en las [páginas de versiones](/es/version-info/general). Los números de chip que aparecen en los anuncios de los vendedores no son fiables por sí solos.
2. **Ten un motivo**: Busca un aviso del vendedor, una nota en la página de tu versión o una solución confirmada en el [Discord de AirReps](https://airreps.link/discord) para un problema que tengas.
3. **Usa la versión actual de la aplicación correcta** desde [Aplicaciones útiles](/es/useful-apps) y concede los permisos de Bluetooth que pida.
4. **Carga primero**: Carga los auriculares y el estuche antes de empezar para que nada se quede sin batería durante la actualización.
5. **Mantén una conexión estable**: Mantén el teléfono cerca, la pantalla encendida y la aplicación abierta hasta que termine la actualización.

## Paso 1: elige la aplicación según el fabricante

Nuestro [catálogo de aplicaciones útiles](/es/useful-apps) está organizado por fabricante. Usa la aplicación indicada para tu modelo:

- **TigerBuilder** (chips Airoha como el 1562AE, el 1563E y el 1571AM) → **FlyCC**, en Android y iPhone. Lee nuestra [guía de la aplicación FlyCC](/es/articles/flycc-app-guide). **CloudCC** ha quedado obsoleto desde que TigerBuilder integró la función OTA en FlyCC; úsalo solo como solución temporal para el problema de permisos de almacenamiento.
- **Huilian** → **StarFun**, en Android y iPhone.
- Modelos **HR**, **BES** y **V2.5/KKX** → las aplicaciones que aparecen bajo esos encabezados en Aplicaciones útiles.
- **Clones Jieli (Jerry) de gama baja** → ninguna aplicación del catálogo los admite.

No todas las aplicaciones ofrecen actualizaciones de firmware para todos los modelos a los que se conectan. Instala solo las actualizaciones que la aplicación correcta ofrezca para el modelo detectado y nunca cargues un firmware pensado para otro producto.

## Paso 2: realiza la actualización en la aplicación

Las pantallas de actualización cambian según la aplicación y el modelo, así que sigue lo que muestre tu aplicación en lugar de una secuencia genérica:

1. Conecta los auriculares en los ajustes de Bluetooth del teléfono, abre la aplicación y espera a que detecte tu modelo.
2. Abre la opción de firmware o de actualización, si la tiene, y compara la versión instalada con la que se ofrece. Si la aplicación indica que ya tienes el firmware más reciente, has terminado.
3. Lee las instrucciones que la aplicación da para tu modelo, incluido dónde deben estar los auriculares durante la actualización, y síguelas al pie de la letra.
4. Inicia la actualización y no toques nada hasta que la aplicación confirme que se ha completado. No cierres la aplicación, no desactives el Bluetooth ni te alejes con el teléfono.
5. Después, comprueba la versión en la aplicación y prueba los auriculares. Si el emparejamiento da problemas, olvídalos y vuelve a emparejarlos (consulta [Cómo restablecer unos AirPods falsos](/es/articles/how-to-reset-fake-airpods)).

En **iPhone**, tanto FlyCC como StarFun ofrecen actualizaciones de firmware para productos seleccionados. Las notas de FlyCC en el App Store mencionan compatibilidad OTA con la plataforma AB157x de Airoha desde la versión 1.1.1, y StarFun incluye la OTA entre sus funciones (fichas de [FlyCC](https://apps.apple.com/us/app/flycc/id1661245709) y [StarFun](https://apps.apple.com/us/app/starfun/id1633624617) en el App Store, comprobadas el 22 de octubre de 2026). En **Android**, usa los APK de Aplicaciones útiles. Android 12 y versiones posteriores piden el permiso Dispositivos cercanos, mientras que las versiones anteriores de Android o las apps más antiguas pueden necesitar el permiso de Ubicación para buscar dispositivos Bluetooth ([documentación para desarrolladores de Android](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

## Qué hacer si una actualización se bloquea o falla

- **Dale tiempo y mantén la conexión**: Deja los auriculares donde te indicó la aplicación y mantén el teléfono cerca. Si la aplicación ofrece su propia opción para reintentar, úsala.
- **No cambies a otra aplicación ni a otro archivo de firmware** para arreglar una actualización fallida.
- **Contacta con tu vendedor** si la actualización falla o los auriculares dejan de responder. Indica tu número de pedido, el modelo, el nombre y la versión de la aplicación, y tu teléfono y su versión del sistema operativo, y adjunta capturas de pantalla de cualquier error. También puedes preguntar en el [Discord de AirReps](https://airreps.link/discord).

La recuperación depende del modelo, así que no existe un restablecimiento universal que deshaga una actualización fallida. La [guía de restablecimiento](/es/articles/how-to-reset-fake-airpods) sirve para problemas de emparejamiento, no para recuperar el firmware.

## Guías de solución de problemas relacionadas

- ¿Los auriculares no aparecen en la aplicación de firmware? Consulta [Los AirPods falsos no se conectan](/es/articles/fake-airpods-wont-connect).
- ¿Experimentas fallos después de una actualización? Sigue [Cómo restablecer unos AirPods falsos](/es/articles/how-to-reset-fake-airpods).
- ¿Usas una configuración del ecosistema de Apple? Lee [¿Funcionan los AirPods falsos con los iPhone nuevos?](/es/articles/do-fake-airpods-work-with-new-iphone).
- ¿Necesitas enlaces para descargar aplicaciones? Visita [Aplicaciones útiles](/es/useful-apps).

## Preguntas frecuentes

::: details ¿Puedo actualizar el firmware de unas réplicas de AirPods en un iPhone?
Sí, en modelos seleccionados. FlyCC y StarFun tienen versiones para iPhone en el App Store y ambas ofrecen actualizaciones de firmware para algunos productos. No todos los pares reciben actualizaciones en iPhone: depende del modelo, de su firmware y de la versión de la aplicación. Por ejemplo, nuestra [página de los AirPods Pro 2](/es/version-info/pro#airpods-pro-2) recomienda comprobar el firmware de los V5.3 TB con FlyCC en iOS. Android también es una opción con los APK de Aplicaciones útiles, siempre que uses la aplicación indicada para tu modelo.
:::

::: details ¿Una actualización proporcionará a mi réplica de AirPods la red Buscar de Apple?
No. La red Buscar depende de certificados criptográficos propietarios de Apple que no se pueden añadir mediante actualizaciones de firmware.
:::

::: details ¿Una actualización de firmware puede inutilizar mis AirPods falsos?
Sí, puede ocurrir. Una actualización interrumpida por una batería agotada o una pérdida de conexión, o un firmware pensado para otro producto, puede dejar un par inservible. Instala solo las actualizaciones que la aplicación correcta ofrezca para tu modelo, sigue sus instrucciones y omite las actualizaciones que no necesites.
:::
