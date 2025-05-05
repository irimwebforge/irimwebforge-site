/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Génère un site statique
  images: {
    unoptimized: true, // Nécessaire avec export statique
  },
};

module.exports = nextConfig;