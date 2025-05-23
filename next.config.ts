/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Génère un site statique
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js'
  },
  trailingSlash: true,
  experimental: {
    optimizeCss: true
  }
};

module.exports = nextConfig;
