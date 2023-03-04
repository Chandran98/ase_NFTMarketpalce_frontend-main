/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images:{
    domains:["obito.infura-ipfs.io","infura-ipfs.io"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
