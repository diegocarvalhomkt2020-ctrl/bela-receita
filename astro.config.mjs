import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://belareceita.dicasinteligentes.com',
  // guia-5-receitas é isca entregue por mensagem automática: fora do sitemap e com noindex
  integrations: [sitemap({ filter: (page) => !page.includes('/guia-5-receitas') })],
});
