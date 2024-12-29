import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Asegura que el output sea estático para Netlify
  site: 'https://danielwebapp.netlify.app', // Reemplaza con tu URL de Netlify
  base: '/' // Asegura que las rutas sean relativas a la raíz
});