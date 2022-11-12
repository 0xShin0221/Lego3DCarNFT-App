/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@web3modal/ethereum", "@web3modal/react"],
};

module.exports = nextConfig;
