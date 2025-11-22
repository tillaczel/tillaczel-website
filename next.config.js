/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/tillaczel-website',
  trailingSlash: true,
}

module.exports = nextConfig

