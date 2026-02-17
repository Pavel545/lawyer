import express from 'express';
import { Services_data } from '../src/data/data_servises.js';

const router = express.Router();

router.get('/sitemap.xml', (req, res) => {
  const baseUrl = 'https://проф-экспертиза.рф';
  
  // Статические маршруты
  const staticRoutes = [
    '',
    'uslugi',
    'kontacts',
    'compani',
    'privacy',
  ];
  
  // Динамические маршруты из Services_data
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
        </url>
      `).join('')}
    </urlset>`;
  
  res.header('Content-Type', 'application/xml');
  res.send(sitemap);
});

export default router;