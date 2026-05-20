# Tecnologia ESO · Projectes i reptes v4

PWA educativa en català per a la línia B del projecte: **Tecnologia ESO · Projectes i reptes**.

Aquesta app és independent de **Matemàtiques ESO · Situacions i eines**.

## Canvis principals de la v4

- Rúbriques formals pròpies per a cada situació d'aprenentatge.
- Cada rúbrica té com a mínim 4 ítems d'avaluació.
- Cada ítem es desplega amb els nivells **NA, AS, AN i AE**.
- La rúbrica es mostra en format de quadre.
- La rúbrica formal s'adjunta al final de l'informe quan l'opció està activada.
- El botó **Imprimeix rúbrica** imprimeix només la rúbrica de la situació seleccionada.
- `index.html`, `styles.css` i `app.js` continuen separats.
- Contingut inicial per a **4t ESO · Tecnologia**.
- Contenidors preparats per a 1r, 2n i 3r ESO quan s'incorpori el PDF de Tecnologia i Digitalització.

## Estructura

```text
tecnologia-eso-projectes-reptes-v4/
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

La v4 no inventa contingut per a 1r, 2n i 3r. Aquests cursos són contenidors pendents. Quan es disposi del PDF de Tecnologia i Digitalització, caldrà afegir les seves competències, criteris, sabers i situacions pròpies dins `app.js`.

## Cache

La cache de la v4 és:

```js
tecnologia-eso-projectes-reptes-v4
```


## Canvis v4

- Correcció dels salts de línia literals `\n` que apareixien a la interfície.
- Informe redissenyat amb format visual clar, fons blanc, targetes i seccions.
- El botó de còpia genera una versió textual neta de l’informe.
- La rúbrica formal continua adjuntant-se al final de l’informe.
