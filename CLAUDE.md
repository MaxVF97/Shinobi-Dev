# Shinobi Dev — sitio de Max Vargas (shinobi-dev.com)

## Qué es
Portafolio de la marca Shinobi Dev. Sitio estático: un solo `index.html` con CSS y JS en línea, más imágenes `.webp`.
Se publica con Cloudflare Pages desde la rama `main` (cada push a `main` publica en shinobi-dev.com; otras ramas generan una vista previa).

## Reglas
- No hay build: Cloudflare sirve los archivos tal cual. Las rutas de imágenes son relativas a la raíz.
- Imágenes en `img/`: `marca/`, `ninja/`, `misiones/<proyecto>/`, `stickers/`, `iconos/`, `decoracion/` y `temporadas/dia-de-muertos/`. Lo que no se usa está en `_sin-uso/`.
- Si mueves archivos a carpetas, actualiza TODAS sus rutas en `index.html` (incluidas las que arma el JavaScript, p. ej. `'dm-calaca'+n+'.webp'`, `'dm-picado'+n+'.webp'`, `dm-vela`/`dm-llama`, y la lista de stickers `stk1..7`).
- No borres un archivo sin confirmar con búsqueda que `index.html`, `_headers` y `sw.js` no lo usan.
- Conserva `_headers`, `sw.js` (service worker de limpieza), `firma-shinobi.js` (copia canónica de la firma) y `qr.webp`.
- Trabaja en una rama nueva y abre un pull request; no hagas push directo a `main` sin que Max lo revise.
- Textos en español de México. Colores: negro #07080B, azul #2F8CFF, azul oscuro #1858BE, plata #C3CAD0. Tipografías: Chakra Petch (títulos) y Manrope (textos).

## Edición Día de Muertos
- Se activa con la clase `dm` en `<body>` y el interruptor `.dm-switch` del menú.
- Todo lo de temporada usa la clase `dm-only` o reglas `body.dm …`; al quitar la clase debe verse exactamente la versión normal.
- Imágenes de temporada: archivos `dm-*.webp` en `img/temporadas/dia-de-muertos/`.

## Misiones (orden y estado)
1 Pollos Colorado (En uso) · 2 Cremería Don Beto (En uso) · 3 Conceptos Gráficos (En desarrollo) ·
4 MarkaForense (En desarrollo) · 5 SD Shop POS (En desarrollo) · 6 Arreola 1 (En desarrollo) · 7 Tacos Carmelita (Demo).
No publicar enlaces en vivo de apps privadas, precios, métricas ni datos reales de clientes.
