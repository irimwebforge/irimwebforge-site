// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://irimwebforge.com',
    generateRobotsTxt: true,
    exclude: ['/ds-lab/*', '/api/*'],
    generateIndexSitemap: false,
    additionalPaths: async (config) => [
      await config.transform(config, '/'),
      await config.transform(config, '/services'),
      await config.transform(config, '/contact'),
      await config.transform(config, '/projets'),
      await config.transform(config, '/processus'),
      await config.transform(config, '/a-propos'),
    ],
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/ds-lab' }
      ]
    },
    transform: async (config, path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }),
  }