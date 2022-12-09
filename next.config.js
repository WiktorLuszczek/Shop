/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'media.graphassets.com'
      }
    ]
  }
}

module.exports = nextConfig
