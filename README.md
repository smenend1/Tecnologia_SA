# Tecnologia ESO · Projectes i reptes v2

PWA educativa en català per a la línia B del projecte: **Tecnologia ESO · Projectes i reptes**.

Aquesta app és independent de **Matemàtiques ESO · Situacions i eines**.

## Canvis principals de la v2

- `index.html` net i separat.
- `styles.css` amb tot el disseny visual.
- `app.js` amb dades curriculars, situacions, rúbrica, eines i informe.
- `manifest.json` per instal·lació PWA.
- `sw.js` per funcionament offline.
- Rúbrica amb nivells **NA, AS, AN i AE**.
- Botó per imprimir només la rúbrica.
- Opció per afegir la rúbrica completa a l'informe.
- Contingut inicial per a **4t ESO · Tecnologia**.
- Contenidors preparats per a 1r, 2n i 3r ESO quan s'incorpori el PDF de Tecnologia i Digitalització.

## Estructura

```text
tecnologia-eso-projectes-reptes-v2/
  index.html
  styles.css
  app.js
  manifest.json
  sw.js
  README.md
  icons/
    icon-192.png
    icon-512.png
```

## Publicació a GitHub Pages

1. Puja tots els fitxers a un repositori.
2. Activa GitHub Pages des de la branca principal.
3. Obre la URL publicada.
4. En Android o Chrome, instal·la-la des del navegador.

## Notes curriculars

La v2 no inventa contingut per a 1r, 2n i 3r. Aquests cursos són contenidors pendents. Quan es disposi del PDF de Tecnologia i Digitalització, caldrà afegir les seves competències, criteris, sabers i situacions pròpies dins `app.js`.

## Cache

La cache de la v2 és:

```js
tecnologia-eso-projectes-reptes-v2
```

Això evita conflictes amb altres PWAs, especialment amb la línia de Matemàtiques.
