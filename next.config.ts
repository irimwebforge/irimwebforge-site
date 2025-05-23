/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Génère un site statique
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
    // Optimisation des polices Google
    optimizeServerReact: true,
    // Nouvelle optimisation pour réduire le bundle
    webpackBuildWorker: true,
  },
  // Optimisation des bundles avancée
  webpack: (config: any, { dev, isServer }: { dev: boolean; isServer: boolean }) => {
    // Optimisations uniquement en production
    if (!dev) {
      // Bundle splitting plus agressif
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 200000,
          cacheGroups: {
            // Séparer les frameworks React
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react',
              priority: 20,
              reuseExistingChunk: true,
            },
            // Séparer Lucide React
            lucide: {
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              name: 'lucide',
              priority: 15,
              reuseExistingChunk: true,
            },
            // Séparer Next.js
            next: {
              test: /[\\/]node_modules[\\/]next[\\/]/,
              name: 'next-vendor',
              priority: 15,
              reuseExistingChunk: true,
            },
            // Vendor général plus petit
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              reuseExistingChunk: true,
              maxSize: 150000,
            },
            // Code commun
            common: {
              name: 'common',
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
              maxSize: 100000,
            },
          },
        },
      };

      // Élimination du code mort plus agressive
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      config.optimization.innerGraph = true;
    }

    return config;
  },
  // Optimisation du CSS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Note: headers() ne fonctionne pas avec output: 'export'
  // Les headers de cache doivent être configurés au niveau du serveur web (Apache, Nginx, CDN)
};

// Analyse des bundles en mode développement
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
