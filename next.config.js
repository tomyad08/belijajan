/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.ASSETS,
  images: {
    domains: ["drive.google.com"],
  },
};

module.exports = nextConfig;
