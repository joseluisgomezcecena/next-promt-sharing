/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:8000/api", //django api.
  }
}

module.exports = nextConfig
