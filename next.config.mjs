// import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"standalone",
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { hostname: 'source.unsplash.com' },
      { hostname: 'globalcommunityorganization.org' },
    ],
  },
}

export default nextConfig
