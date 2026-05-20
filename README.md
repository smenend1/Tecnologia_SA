# Tecnologia ESO · Projectes i reptes v10

Projecte PWA educatiu en català per treballar situacions d’aprenentatge de Tecnologia i Tecnologia i Digitalització a l’ESO.

## Novetats v10

- Incorpora cursos 1r, 2n i 3r d’ESO de Tecnologia i Digitalització.
- Manté 4t d’ESO de Tecnologia.
- Cada curs té situacions d’aprenentatge pròpies.
- Cada situació inclou competències, criteris, sabers i rúbrica NA/AS/AN/AE.
- Manté creador de situacions d’aprenentatge amb exportació/importació JSON.
- Exportació visual a PDF més fidel a la pantalla.

## Fitxers

```text
index.html
styles.css
app.js
manifest.json
sw.js
icons/
```

## Publicació

Es pot publicar directament a GitHub Pages. Si ja hi havia una versió anterior instal·lada, convé desinstal·lar-la o fer una recàrrega forta per renovar el Service Worker.


## Canvis v10

- L’exportació visual a PDF imprimeix només l’informe formal de la situació d’aprenentatge.
- No s’imprimeixen capçalera, selectors, pestanyes ni botons.
- S’ha eliminat el text informatiu inicial de la pantalla d’informe.
- La rúbrica específica de la SA continua adjuntada al final de l’informe.
