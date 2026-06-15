// scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { Services_data } from '../src/data/data_servises.js';

// Конфигурация доменов
const domains = {
  // Основной домен
  'xn----8sboiek0ahdgfjqv0l.xn--p1ai': {
    url: 'https://xn----8sboiek0ahdgfjqv0l.xn--p1ai',
    baseUrl: 'https://xn----8sboiek0ahdgfjqv0l.xn--p1ai',
    outputDir: './public',
    sitemapName: 'sitemap.xml',
    imageSitemapName: 'image-sitemap.xml'
  },
  // Поддомен
  'xn--80adxhks.xn----8sboiek0ahdgfjqv0l.xn--p1ai': {
    url: 'https://xn--80adxhks.xn----8sboiek0ahdgfjqv0l.xn--p1ai',
    baseUrl: 'https://xn--80adxhks.xn----8sboiek0ahdgfjqv0l.xn--p1ai',
    outputDir: './public',
    sitemapName: 'sitemap-subdomain.xml',
    imageSitemapName: 'image-sitemap-subdomain.xml'
  }
};

// Статические маршруты с приоритетами
const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'uslugi', priority: '0.9', changefreq: 'weekly' },
  { path: 'kontacts', priority: '0.8', changefreq: 'monthly' },
  { path: 'compani', priority: '0.8', changefreq: 'monthly' },
  { path: 'privacy', priority: '0.3', changefreq: 'yearly' },
];

// Функция генерации sitemap для конкретного домена
const generateSitemapForDomain = (domainConfig) => {
  const { url, outputDir, sitemapName, imageSitemapName } = domainConfig;
  
  // Динамические маршруты из Services_data
  const dynamicRoutes = Object.keys(Services_data).map(key => ({
    path: `uslugi/${key}`,
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  }));

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  // Генерация основного sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allRoutes.map(route => `
  <url>
    <loc>${url}/${route.path}</loc>
    <lastmod>${route.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    ${route.path === '' ? `
    <image:image>
      <image:loc>${url}/img/og.jpg</image:loc>
      <image:title>Проф-Экспертиза - независимая оценка</image:title>
      <image:caption>Логотип компании Проф-Экспертиза</image:caption>
    </image:image>` : ''}
  </url>`).join('')}
</urlset>`;

  // Убеждаемся, что директория существует
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Сохраняем sitemap
  const outputPath = path.join(outputDir, sitemapName);
  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap generated for ${url}: ${outputPath}`);
  
  // Генерируем image sitemap
  generateImageSitemapForDomain(domainConfig);
};

// Генерация image sitemap для конкретного домена
const generateImageSitemapForDomain = (domainConfig) => {
  const { url, outputDir, imageSitemapName } = domainConfig;
  
  const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${url}/</loc>
    <image:image>
      <image:loc>${url}/img/og.jpg</image:loc>
      <image:caption>Проф-Экспертиза - независимая оценка</image:caption>
      <image:title>Логотип компании</image:title>
    </image:image>
  </url>
  ${Object.keys(Services_data).map(key => `
  <url>
    <loc>${url}/uslugi/${key}</loc>
    <image:image>
      <image:loc>${url}/img/servies/${key}.webp</image:loc>
      <image:caption>${Services_data[key].name}</image:caption>
      <image:title>${Services_data[key].name}</image:title>
    </image:image>
  </url>`).join('')}
</urlset>`;

  const outputPath = path.join(outputDir, imageSitemapName);
  fs.writeFileSync(outputPath, imageSitemap);
  console.log(`✅ Image Sitemap generated for ${url}: ${outputPath}`);
};

// Генерация robots.txt для конкретного домена
const generateRobotsTxtForDomain = (domainConfig, domainKey) => {
  const { url, sitemapName } = domainConfig;
  
  // Для основного домена
  if (domainKey === 'xn----8sboiek0ahdgfjqv0l.xn--p1ai') {
    const robotsTxt = `# robots.txt для ${url}
User-agent: *
Allow: /
Disallow: /privacy
Disallow: /private

# Sitemaps
Sitemap: ${url}/${sitemapName}
Sitemap: ${url}/image-sitemap.xml

# Хост (для поисковых систем, поддерживающих эту директиву)
Host: ${url}

# Crawl delay (опционально, для больших сайтов)
Crawl-delay: 1

# User-agent для Яндекс
User-agent: Yandex
Allow: /
Disallow: /privacy
Host: ${url}

# User-agent для Google
User-agent: Googlebot
Allow: /
Disallow: /privacy
Sitemap: ${url}/${sitemapName}
`;
    return robotsTxt;
  }
  
  // Для поддомена
  const robotsTxt = `# robots.txt для поддомена ${url}
User-agent: *
Allow: /
Disallow: /privacy
Disallow: /private

# Sitemaps для поддомена
Sitemap: ${url}/${sitemapName}
Sitemap: ${url}/image-sitemap-subdomain.xml

# Хост
Host: ${url}

# Crawl delay
Crawl-delay: 1

# User-agent для Яндекс
User-agent: Yandex
Allow: /
Disallow: /privacy
Host: ${url}

# User-agent для Google
User-agent: Googlebot
Allow: /
Disallow: /privacy
Sitemap: ${url}/${sitemapName}
`;
  return robotsTxt;
};

// Основная функция генерации для всех доменов
const generateAllSitemaps = () => {
  console.log('🚀 Starting sitemap generation for all domains...\n');
  
  // Генерируем sitemap для каждого домена
  Object.entries(domains).forEach(([domainKey, domainConfig]) => {
    console.log(`📝 Processing domain: ${domainKey}`);
    generateSitemapForDomain(domainConfig);
    generateRobotsTxtForDomain(domainConfig, domainKey);
  });
  
  // Создаем общий индекс sitemap (опционально)
  generateSitemapIndex();
  
  console.log('\n🎉 All sitemaps and robots.txt files generated successfully!');
};

// Генерация индексного sitemap (sitemap index)
const generateSitemapIndex = () => {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.entries(domains).map(([domainKey, domainConfig]) => `
  <sitemap>
    <loc>${domainConfig.url}/${domainConfig.sitemapName}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${domainConfig.url}/${domainConfig.imageSitemapName}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('')}
</sitemapindex>`;

  fs.writeFileSync('./public/sitemap-index.xml', sitemapIndex);
  console.log('✅ Sitemap index generated: ./public/sitemap-index.xml');
};

// Запуск генерации
generateAllSitemaps();