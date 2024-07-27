/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/',
      destination: '/about',
      permanent: false,
    },
  ],
}

export default nextConfig
