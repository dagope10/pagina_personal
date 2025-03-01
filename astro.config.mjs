import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Asegura que el output sea estático para Netlify
  output: 'static',

  // Reemplaza con tu URL de Netlify
  site: 'https://danielwebapp.netlify.app',

  // Asegura que las rutas sean relativas a la raíz
  base: '/',

  integrations: [tailwind()]
});