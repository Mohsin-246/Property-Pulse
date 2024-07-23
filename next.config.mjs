/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.example.com',
            port: '',
            pathname: '/account123/**',
          },
        ],
        domains: ['lh3.googleusercontent.com'],
      },
};

export default nextConfig;
