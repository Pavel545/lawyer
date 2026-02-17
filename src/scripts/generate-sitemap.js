import fs from 'fs';
import { Services_data } from '../src/data/data_servises.js';

const baseUrl = 'https://проф-экспертиза.рф';

const staticRoutes = [
  '',
  'uslugi',
  'kontacts',
  'compani',
  'privacy',
];

const dynamicRoutes = Object.keys(Services_data).map(
  key => `uslugi/${key}`
);

const allRoutes = [...staticRoutes, ...dynamicRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>${baseUrl}/${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log('Sitemap generated!');