---
title: Política de privacidad
description: 'Cómo el bot de Discord de AirReps recopila, utiliza y protege los datos.'
ogLabel: LEGAL
sidebar: false
---
# Política de privacidad

Esta página explica qué recopila el bot de Discord de AirReps, por qué lo conservamos y cómo puedes solicitarnos que lo eliminemos.

**Última actualización:** 23 de agosto de 2026

## Introducción

El equipo del personal de AirReps gestiona el bot de Discord de AirReps (el «Bot»), utilizado en la comunidad de [AirReps](https://airpodsreplicas.com). Esta Política de privacidad describe cómo recopilamos, usamos, almacenamos y protegemos la información cuando invitas o utilizas el Bot. Usar el Bot significa que aceptas las prácticas descritas a continuación.

Estas páginas complementan nuestras [Condiciones del servicio](/es/bot/terms). Discord también tiene su propia [Política de privacidad](https://discord.com/privacy).

## Información que recopilamos

El Bot conserva lo necesario para ejecutar las funciones enumeradas en las Condiciones. Esto incluye:

- ID de usuario de Discord, nombres de usuario, nombres visibles, ID de servidores (guilds) e ID de canales
- ID de roles cuando eliges un rol de idioma o cuando las herramientas del personal necesitan realizar comprobaciones de permisos
- Uso de comandos (qué comando de barra se ejecutó y cuándo), incluidos los registros opcionales de comandos del personal
- El texto de los comentarios que envías con `/feedback`
- Participaciones en sorteos: tu ID de usuario de Discord y, si el sorteo lo requiere, el UID de KakoBuy que introduzcas
- Análisis de miembros: recuentos de incorporaciones y salidas, marcas de tiempo de incorporación, antigüedad, hora del día de las incorporaciones y salidas, e ID utilizados para distinguir una reincorporación de una primera incorporación
- Contenido de mensajes y archivos adjuntos cuando una función activa los necesita: antiestafas (texto, firmas de imágenes y una copia de la primera imagen para el informe de moderación), el conversor de KakoBuy (URL de Weidian / Taobao / 1688 / Tmall en un mensaje) y el espejo de Reddit (texto e imágenes del canal de anuncios configurado)

Esto se almacena asociado a tu identidad de Discord y a los servidores donde se utiliza el Bot. Los datos persistentes se guardan en una base de datos SQLite local en la máquina que ejecuta el Bot. La coincidencia antiestafas utiliza una ventana breve en memoria de los mensajes recientes.

No te pedimos tu correo electrónico, número de teléfono, datos de pago ni nombre legal. Un UID de KakoBuy solo se almacena si introduces uno en un sorteo. Si tú mismo envías esos datos al personal por correo, eso queda fuera del Bot.

## Cómo usamos tu información

Usamos estos datos para:

- Mostrar catálogos de vendedores y herramientas de pedido (`/jenny`, `/hicity`, `/earhive`, `/ultimateguide`, `/wise`, `/text`, `/alipay`, `/eartip`, `/resethelp`)
- Convertir divisas con `/convert`
- Asignar los roles de idioma que elijas
- Enviar los comentarios a un canal del personal
- Organizar sorteos (`/gs`) y validar los UID de KakoBuy cuando el organizador activa esa opción
- Elaborar informes diarios, semanales y mensuales de miembros y publicaciones de hitos
- Actualizar el recuento de miembros del canal de voz
- Enviar un mensaje directo de bienvenida cuando te unes al guild de AirReps configurado
- Marcar spam de estafas entre canales, poner la cuenta en tiempo de espera, eliminar la ráfaga, enviarte un mensaje directo e informar al chat de moderación
- Responder a enlaces de marketplaces con una URL de compra de KakoBuy (código de afiliado `airreps`)
- Publicar anuncios seleccionados de Discord en [r/airreps](https://www.reddit.com/r/airreps)
- Depurar fallos y mantener un registro de auditoría del personal cuando el registro está activado

Podemos consultar recuentos agregados de miembros para mejorar el servidor. No vendemos datos personales.

## Servicios de terceros

El Bot se comunica con varios servicios para realizar lo anterior:

- **Discord** — la API que ejecuta cada comando, evento, mensaje directo y tiempo de espera. Se aplican las condiciones y la política de privacidad de Discord. No controlamos Discord.
- **Frankfurter (tasas del BCE)** — `/convert` envía el importe y los códigos de divisa para obtener una tasa. Las tasas se almacenan en caché en memoria durante unas horas.
- **Reddit** — cuando el espejo está activado, el texto y las imágenes de los anuncios se suben mediante la API de Reddit al subreddit configurado.
- **KakoBuy** — las URL de productos convertidas se envían a KakoBuy (incluido un código de afiliado de AirReps) para que la respuesta pueda incluir un enlace de compra y una miniatura.

Solo compartimos datos cuando es necesario para operar esas funciones, cuando la ley lo exige o para prevenir daños graves. No vendemos ni alquilamos datos con fines publicitarios.

## Conservación y eliminación de datos

El tiempo durante el que se conserva algo depende de la función:

- **Los sorteos** permanecen en SQLite hasta que un organizador los finaliza o elimina (participaciones, UID opcionales y ganadores).
- **Los análisis de miembros** (contadores de incorporaciones y salidas, intervalos horarios, ID de personas que se fueron y marcas de tiempo de incorporación) se conservan para que los informes diarios, semanales y mensuales, así como la detección de reincorporaciones, sigan funcionando. Las marcas de tiempo de incorporación pueden permanecer después de que alguien se vaya para que la antigüedad sea precisa si regresa.
- **Los búferes antiestafas** tienen una duración breve en memoria (decenas de segundos). El informe del canal de moderación, incluida una vista previa de imagen guardada, permanece en Discord como cualquier otro mensaje del personal.
- **Los comentarios** se publican en un canal del personal y permanecen allí como un mensaje de Discord.
- **Los registros de comandos**, cuando están activados, son mensajes de Discord en un canal de registro.
- **Las publicaciones de Reddit** permanecen en Reddit conforme a las propias reglas de conservación de Reddit.
- Los objetos de Discord almacenados en caché siguen el almacenamiento en caché normal de la API.

Si quieres una copia o la eliminación de los datos que almacenamos en SQLite (participación en un sorteo, marca de tiempo de incorporación y similares), únete al [Discord de AirReps](https://airreps.link/discord) y envía un mensaje al personal. Atenderemos las solicitudes en un plazo razonable. No podemos borrar mensajes, tiempos de espera ni publicaciones de Reddit que ahora solo se encuentren en Discord o Reddit.

## Seguridad

Limitamos quiénes del equipo del personal pueden ver los datos almacenados y utilizamos medidas técnicas de protección habituales en el host que contiene el archivo SQLite. Ninguna configuración es perfecta. Si crees que algo se ha filtrado o se ha accedido a ello sin autorización, informa al personal de inmediato.

## Cambios en esta política de privacidad

Podemos revisar esta política cuando cambie el Bot o la ley. La fecha de «Última actualización» de la parte superior indica la versión actual. Seguir utilizando el Bot después de un cambio significa que aceptas la nueva política.

## Contacto

¿Tienes preguntas sobre esta política o una solicitud de eliminación? Únete al [Discord de AirReps](https://airreps.link/discord) y envía un mensaje al personal.
