# 03-gifs-app

Pequeña aplicación de búsqueda de GIFs usando la API de Giphy, creada con React + TypeScript + Vite.

Resumen
- **Qué hace:** permite buscar GIFs por palabra clave y mostrar resultados, con historial de búsquedas previas.
- **Tecnologías:** React, TypeScript, Vite, Axios.
- **Build & deploy:** preparado para desplegar en GitHub Pages (carpeta `dist`).

Demo
 - Sitio (GitHub Pages): https://movius.github.io/03-gifs-app/

Instalación y ejecución local
```bash
npm ci
npm run dev
```

Build para producción
```bash
npm run build
```

Notas sobre variables de entorno
- La aplicación usa `import.meta.env.VITE_GIPHY_KEY` para la clave de Giphy. Vite sustituye esa variable en tiempo de build, por lo que en GitHub Actions debes crear un Secret llamado `VITE_GIPHY_KEY` y pasarlo en el workflow (ya incluido en `.github/workflows/deploy.yml`).

Eslint / configuración base

El resto del README original contiene notas sobre configuraciones de ESLint y plugins para proyectos más grandes. Conserva esas recomendaciones si piensas endurecer las reglas en producción.
