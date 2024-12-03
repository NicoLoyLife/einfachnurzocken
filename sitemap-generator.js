const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

// Dynamische Routen für Wett-Tipps
const wettTippsData = require('./src/services/wett-tipps.json');
const dynamicWettTippsRoutes = wettTippsData.map((tipp) => `/sportwetten/wett-tipps/${tipp.id}`);

// Alle Routen
const staticRoutes = [
  '/',
  '/news',
  '/online-spielotheken',
  '/sportwetten',
  '/guides',
  '/bonusangebote',
  '/promotions',
  '/impressum',
  '/datenschutz',
  '/spielerschutz',
  '/agb',
  '/about',
  '/kontakt',
];
const sportwettenRoutes = [
  '/sportwetten/bonus',
  '/sportwetten/wett-tipps',
  '/sportwetten/guides',
  '/sportwetten/betano',
  '/sportwetten/merkurbets',
  '/sportwetten/winamax',
];
const casinoRoutes = [
  '/online-spielotheken/bonus',
  '/online-spielotheken/news',
  '/online-spielotheken/guides',
  '/online-spielotheken/spiele',
  '/online-spielotheken/jackpotpiraten',
  '/online-spielotheken/bing-bong',
];
const allRoutes = [
  ...staticRoutes,
  ...sportwettenRoutes,
  ...casinoRoutes,
  ...dynamicWettTippsRoutes,
];

// Sitemap generieren
async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://einfachnurzocken.com' });

  allRoutes.forEach((url) => {
    sitemap.write({ url });
  });
  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);
  fs.writeFileSync('./public/sitemap.xml', sitemapOutput.toString());
}

generateSitemap();