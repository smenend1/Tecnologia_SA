# Tecnologia ESO · Projectes i reptes v12

PWA educativa en català per treballar situacions d’aprenentatge de Tecnologia i Tecnologia i Digitalització a l’ESO.

## Fitxers

- `index.html`: estructura de l’app.
- `styles.css`: disseny visual i impressió.
- `app.js`: dades curriculars, situacions, rúbriques, informe i interaccions.
- `jszip.min.js`: lector local de documents `.docx` per convertir-los en esborrany de SA.
- `manifest.json`: configuració PWA.
- `sw.js`: Service Worker i cache offline.
- `icons/`: icones de la PWA.

## Novetats v12

- Importació de documents des de la pestanya **Crea SA**.
- Formats admesos: JSON exportat, TXT/Markdown, Word `.docx` i PDF textual.
- El document importat es converteix en un esborrany editable de SA.
- Si el docent escriu només codis com `CE1`, `CE2`, `1.1` o `2.3`, l’app mostra el text curricular corresponent segons el curs seleccionat.
- Camps nous en la creació de SA: objectius, desenvolupament, activitats inicials/desenvolupament/estructuració/aplicació i vectors.
- La importació no desa automàticament: cal revisar l’esborrany i prémer **Desa la SA**.

## Nota sobre PDF

La lectura de PDF és bàsica i només funciona bé amb PDFs que contenen text real. Si el PDF és escanejat o té el text codificat, és millor enganxar el text manualment o utilitzar la plantilla Word.
