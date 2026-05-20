# Tecnologia ESO · Projectes i reptes v5

PWA educativa en català per a **4t d'ESO · Tecnologia**, separada de la línia de Matemàtiques.

## Canvis de la v5

- Corregeix el problema de pantalla buida causat per càrrega/caché del JavaScript.
- `index.html` carrega `app.js?v=5` per forçar actualització en navegador i GitHub Pages.
- `sw.js` fa neteja de caches anteriors i utilitza estratègia network-first per als fitxers locals.
- `manifest.json` actualitzat amb `id`, `start_url` amb versió, categories i dreceres.
- Manté rúbriques formals per SA en quadre LOMLOE amb nivells **NA / AS / AN / AE**.
- L'informe visual és clar, en targetes, i pot adjuntar la rúbrica al final.
- El botó “Copia informe” genera una versió textual neta.

## Fitxers

```text
index.html
styles.css
app.js
manifest.json
sw.js
icons/icon-192.png
icons/icon-512.png
```

## Nota sobre el manifest

Un `manifest.json` de PWA acostuma a ser petit. El fet que ocupi pocs KB és normal. El que importa és que tingui `id`, `start_url`, `scope`, icones, colors i mode d'instal·lació correctes.

## Publicació a GitHub Pages

Puja tots els fitxers d'aquesta carpeta al repositori o subcarpeta corresponent. Si ja havies provat versions anteriors, fes una recàrrega completa del navegador o elimina la PWA instal·lada antiga abans de provar la v5.
