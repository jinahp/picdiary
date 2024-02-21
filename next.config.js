/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "app"), path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
