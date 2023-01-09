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
  },
  env: {
    apolloURL: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbc0ix0305qj01ujdqth4ltp/master'
  }
}

module.exports = nextConfig
