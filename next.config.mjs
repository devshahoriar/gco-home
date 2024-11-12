/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    remotePatterns: [
      { hostname: 'source.unsplash.com' },
      { hostname: 'globalcommunityorganization.org' },
      { hostname: 'ik.imagekit.io' },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
