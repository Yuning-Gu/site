/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/site',
  assetPrefix: '/site',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
