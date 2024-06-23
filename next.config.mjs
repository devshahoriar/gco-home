/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next'
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    reactCompiler: true,
    turbo: {
      resolveExtensions: [
        '.mdx',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
    },
  },
}

export default nextConfig
