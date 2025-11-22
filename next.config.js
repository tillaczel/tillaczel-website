/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment the line below if deploying to GitHub Pages with a repository name
  // basePath: '/tillaczel-website',
  // trailingSlash: true,
}

module.exports = nextConfig

