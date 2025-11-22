/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['bcryptjs']
  },
  images: {
    domains: [
      'localhost',
      'portfoliohub.com',
      // Add your image hosting domains here
      'your-s3-bucket.s3.amazonaws.com'
    ]
  }
}

module.exports = nextConfig