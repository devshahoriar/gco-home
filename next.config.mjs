/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
}

export default withPlaiceholder(nextConfig);
