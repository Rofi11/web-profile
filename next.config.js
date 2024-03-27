/** @type {import('next').NextConfig} */

const nextConfig = {
  // Menentukan favicon
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Link",
            value: '</favicon.ico>; rel="icon"; type="image/x-icon"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
