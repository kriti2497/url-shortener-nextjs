/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path",
        destination: "https://link-shortly.vercel.app/:path", // Proxy to Backend
      },
    ];
  },
};
