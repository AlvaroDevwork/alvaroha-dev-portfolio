# AlvaroDevwork — Portafolio web

## Descripción

Portafolio oficial de AlvaroDevwork, presentado como **Alvaro H. A.** La versión
v0.4.1 consolida una arquitectura responsive mobile-first para teléfonos, iPhone,
tablets e iPad, con composiciones específicas por viewport.

Repositorio: https://github.com/AlvaroDevwork/alvaroha-dev-portfolio

## Tecnologías

- HTML semántico, CSS y JavaScript nativo.
- IBM Plex Sans e IBM Plex Mono mediante Google Fonts.
- Git, GitHub y GitHub Actions para versionado y publicación.
- Sin frameworks, dependencias de compilación ni servicios de backend.

## Arquitectura

`index.html` contiene la navegación y las secciones de presentación, trayectoria,
tecnologías, proyectos, flujo de trabajo y contacto. Los estilos se distribuyen
entre `style.css` y `mediaqueries.css`; `script.js` implementa la interacción de
navegación. Los recursos visuales se encuentran en `assets/`.

La navegación incluye controles accesibles, estados de foco y adaptación móvil.
Los estilos contemplan la preferencia de movimiento reducido.

## v0.4.1

- La trayectoria de Sobre mí incorpora la etapa formal de 2024 y su experiencia
  con virtualización y modelado básico de bases de datos.
- La nueva etapa se integra en las presentaciones de escritorio, móviles, tablets
  e iPad.
- Arquitectura responsive mobile-first validada en teléfonos e iPhone.
- Composiciones específicas para tablets e iPad, incluida la portada responsive.
- Menú hamburguesa compacto con navegación accesible y preservación del foco.
- Sección Sobre mí con navegación por etapas, mostrando un año a la vez en iPad.
- Proyectos, Flujo de trabajo y Contacto ajustados para una composición responsive.
- QA local completado antes de la integración GitFlow.
- Flujo de integración: `feature/*` → `develop` → `main` mediante merges normales.
- El despliegue continúa activándose exclusivamente mediante una etiqueta `v*`.

## Desarrollo local

```bash
git clone https://github.com/AlvaroDevwork/alvaroha-dev-portfolio.git
cd alvaroha-dev-portfolio
python3 -m http.server 8088 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8088/. No se requiere instalar paquetes.
Antes de integrar cambios, revisar enlaces, recursos, navegación por teclado,
comportamiento responsive y `git diff --check`.

## Estructura del proyecto

```text
index.html
style.css
mediaqueries.css
script.js
assets/
README.md
.github/workflows/deploy-ghpages-on-tag.yml
```

## Privacidad de indexación

El HTML incluye una única directiva:

```html
<meta name="robots" content="noindex, nofollow">
```

Solicita a los buscadores compatibles que no indexen la página. No restringe el
acceso por URL ni sustituye autenticación. No debe bloquearse el rastreo necesario
para leer esta directiva.

## Despliegue

GitHub Pages utiliza un único workflow de GitHub Actions, activado exclusivamente
al publicar etiquetas `v*`. Las acciones oficiales preparan y publican un artefacto
con `index.html`, las hojas de estilo, `script.js` y `assets/`.
La documentación y los archivos administrativos quedan fuera del sitio publicado.

La configuración de Pages debe utilizar `build_type=workflow`. El dominio se
administra en los ajustes de Pages, sin un archivo CNAME en el repositorio.

## Versionado

Versión de referencia: **v0.4.1**.

Los cambios se integran mediante pull requests desde `feature/*` hacia `develop`
y después hacia `main`, conservando los commits mediante merge normal.
El QA local precede a los commits; cada commit conceptual se publica de forma
independiente. Las etiquetas anotadas se crean sobre `main` después de la integración.
No se desplazan etiquetas publicadas: una corrección posterior requiere otra versión.

## Dominio

Dominio oficial: https://alvarodev.work

Su disponibilidad depende de la configuración DNS y del certificado de GitHub Pages.
Los registros de correo deben conservarse al configurar los registros web.

## Contacto

- Correo: [contacto@alvarodev.work](mailto:contacto@alvarodev.work)
- GitHub: https://github.com/AlvaroDevwork
