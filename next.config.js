/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos']
  },
  env: {
    API_URL:"https://localhost:7037"
  },
  trailingSlash: true
}

module.exports = nextConfig
