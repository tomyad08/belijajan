/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.google.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
