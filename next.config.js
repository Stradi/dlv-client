/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com', 's1.dmcdn.net', 's2.dmcdn.net', 'i.vimeocdn.com'],
  },
};

module.exports = nextConfig;
