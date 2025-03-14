# Album Landing Page

Landing page para promocionar un álbum musical, con enlaces directos a todas las plataformas de streaming principales.

## Características

- Diseño responsivo y moderno
- Integración con plataformas de streaming:
  - Spotify
  - Apple Music
  - Amazon Music
  - YouTube Music
  - Deezer
  - Pandora
  - Tidal
- Cambio automático de favicon según el tema del sistema (claro/oscuro)
- Política de privacidad integrada
- Analytics con Meta Pixel
- Optimizado para SEO

## Tecnologías Utilizadas

- React + TypeScript
- Vite para build y desarrollo
- SWC para compilación rápida
- CSS puro para estilos
- Vercel para deployment

## Desarrollo Local

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Build para producción:
```bash
npm run build
```

## Deployment

El proyecto está configurado para deployment automático en Vercel. Cada push a la rama principal activará un nuevo deployment.

### Configuración de Vercel

El proyecto incluye un `vercel.json` para manejar el routing de la SPA y asegurar que todos los paths redirijan correctamente a index.html.
