/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/veenav',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig 