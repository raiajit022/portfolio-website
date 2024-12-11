/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.positivessl.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true
}

module.exports = nextConfig