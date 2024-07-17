/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  redirects: async () => [
    {
      source: '/',
      destination: '/about',
      permanent: false,
    },
  ],
}

export default nextConfig
