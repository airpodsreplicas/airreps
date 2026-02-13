---
description: "Guía para contribuir al proyecto AirReps: Fork, cambios y Pull Request."
---

# Guía de Contribución

Estamos encantados con tu interés en contribuir a nuestro proyecto. Para agilizar tu proceso de contribución, hemos proporcionado una guía detallada paso a paso a continuación.

::: tip
Para facilitar la gestión de tus contribuciones, recomendamos usar [GitHub Desktop](https://desktop.github.com/), un cliente de GitHub basado en GUI.
:::

## Hacer Fork y Clonar el Repositorio

Sigue estos pasos para hacer fork del repositorio, clonarlo, crear una nueva rama y configurar tu entorno de desarrollo local:

1. Ve a la página de GitHub del proyecto [haciendo clic aquí](https://github.com/AirPodsReplicas/AirReps)
2. Haz clic en `Fork` en la esquina superior derecha. Esto creará una copia del repositorio en tu cuenta de GitHub
3. Abre [GitHub Desktop](https://desktop.github.com/).
4. En el menú superior de GitHub Desktop, navega a `File` > `Clone Repository...`.
5. En la categoría GitHub.com, deberías ver el repositorio que bifurcaste.
6. Para clonar el repositorio, haz clic en `Clone`.
7. Una vez completado el proceso de clonación, navega a `Current Branch`, luego selecciona `New Branch`. Aquí, ingresa un nombre descriptivo para tu nueva rama.

::: warning
La rama principal es una rama protegida. Como tal, no se permite la edición directa. Siempre crea una nueva rama para tus cambios.
:::

8. Navega al directorio `airreps` en tu entorno local.
9. Abre el proyecto en un Entorno de Desarrollo Integrado (IDE) de tu elección. Recomendamos [Visual Studio Code](https://code.visualstudio.com/), un IDE gratuito y rico en funciones. También puedes usar IDEs potenciados por IA como [Cursor](https://cursor.com/) o [Antigravity de Google](https://antigravity.google), que pueden hacer que contribuir sea mucho más fácil al ayudar con sugerencias de código y documentación.

## Configurar el Entorno de Desarrollo

Elige entre las dos opciones a continuación para configurar tu entorno de desarrollo:

### Opción 1 (Recomendada)

Para configurar un entorno de desarrollo óptimo:

1. [Instala Bun](https://bun.sh/). Este proyecto usa Bun como gestor de paquetes y runtime.
2. [Instala Node.js](https://nodejs.org/). Recomendamos la versión de Soporte a Largo Plazo (LTS).
3. Después de la instalación, abre la terminal dentro de tu IDE y ejecuta el siguiente comando:

```shell
bun install
```

4. Inicia el servidor de desarrollo de documentación:

```shell
bun run docs:dev
```

5. La terminal mostrará una URL local, como `http://localhost:5173`. Visita esta URL en tu navegador web para ver la documentación. La página se actualizará automáticamente a medida que modifiques los archivos fuente.

### Opción 2

Este método te permite trabajar directamente con archivos markdown, aunque puede no renderizar con precisión características específicas de VitePress.

1. Abre [Visual Studio Code](https://code.visualstudio.com/) o tu IDE preferido.
2. Instala la extensión [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) para Visual Studio Code. Se puede encontrar en la pestaña `Extensions` en la barra lateral.
3. Abre cualquier archivo markdown del directorio `docs`.
4. Para habilitar la Vista Previa de Markdown, abre la paleta de comandos con `Ctrl + Shift + P` (Windows) o `Cmd + Shift + P` (Mac).
5. Busca `Markdown Preview` y selecciona `Markdown: Open Preview`.

::: warning
Ten en cuenta que VitePress ofrece características adicionales no disponibles en markdown estándar. Por lo tanto, este método puede no reflejar con precisión el formato final cuando se vea en el sitio web de documentación real.
:::

## Enviar Cambios

Una vez que hayas realizado cambios, sigue los pasos a continuación para enviarlos para revisión:

1. Si elegiste la Opción 1 en [Configurar el Entorno de Desarrollo](#opcion-1-recomendada), asegúrate de que las páginas se construirán correctamente ejecutando el siguiente comando:

```shell
bun run docs:build
```

::: danger
Si la salida muestra `Command failed` o cualquier otro mensaje de error, hay un problema. El mensaje de error debería proporcionar información sobre el problema. Si no estás seguro del problema, puedes contactar a nuestros miembros del staff en nuestro [Servidor de Discord](https://airreps.link/discord).
:::

2. Abre GitHub Desktop. El panel izquierdo mostrará el número de archivos modificados.
3. Puedes ver los cambios realizados en cada archivo. Selecciona un archivo a la vez y completa el campo `Summary (required)`. Si es necesario, proporciona detalles adicionales en el campo `Description`. Haz clic en `Commit to the branch you created` para confirmar tus cambios.
4. Ahora, haz clic en `Push changes to x` *(x siendo el nombre de la rama que creaste)* para subir tus cambios a GitHub.

::: tip
Si has confirmado todos los archivos, ¡bien hecho! Tu siguiente paso será hacer push de tus cambios a GitHub y crear una Solicitud de Pull.
:::

## Crear una Solicitud de Pull

Sigue estos pasos para crear una solicitud de pull para proponer fusionar tus cambios en la rama principal:

1. Con todos tus cambios confirmados y subidos a tu rama remota, es hora de crear una solicitud de pull.
2. Ve a tu repositorio bifurcado en el sitio web de GitHub.
3. Haz clic en `New pull request`. Serás redirigido a la página del repositorio original.
4. Asegúrate de que el repositorio base sea `base: main` y el repositorio head sea `<tu_usuario>/<nombre_de_tu_rama>`.
5. Revisa tus cambios y completa el formulario con una descripción clara de qué cambiaste y por qué. *como referencia; puedes revisar esta [solicitud de pull ejemplar](https://github.com/AirPodsReplicas/AirReps/pull/20).*
6. Haz clic en `Create pull request`.
7. Después de enviar tu solicitud de pull, GitHub Actions intentará construir tus cambios para detectar cualquier problema. Si no hay problemas, un contribuidor del repositorio revisará tus cambios y los fusionará o solicitará cambios adicionales.

## ¿Qué Puedes Contribuir?

Después de una fusión exitosa, tu perfil de GitHub se incluirá automáticamente en la sección de `Contributors` ubicada en la parte inferior de nuestra página de inicio. Si prefieres que tu perfil sea omitido de esta sección por cualquier razón, por favor contacta a un miembro de nuestro staff para asistencia con la eliminación del perfil.

- **Corregir erratas o errores** - ¿Detectaste un error? ¡Envía una corrección rápida!
- **Actualizar información desactualizada** - Ayuda a mantener la guía actualizada
- **Agregar nuevo contenido** - Documenta nuevos addons, características o configuraciones
- **Mejorar la claridad** - Haz las explicaciones más fáciles de entender
- **Agregar capturas de pantalla** - Las guías visuales siempre son útiles
- **Sugerir mejoras** - ¿Tienes ideas? Abre un issue para discutir

¡Gracias por tu compromiso de mejorar nuestro proyecto!
