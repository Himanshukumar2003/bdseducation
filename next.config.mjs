/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "n84j51mp-3001.inc1.devtunnels.ms",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.bdseducation.in",
          },
        ],
        destination: "https://bdseducation.in/:path*",
        permanent: true,
      },
    ];
  },

  webpack: (config) => {
    config.resolve.alias["canvas"] = false;
    return config;
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "bdsapi.bwdemo.in",
//       },
//       {
//         protocol: "https",
//         hostname: "n84j51mp-3001.inc1.devtunnels.ms",
//       },
//       {
//         protocol: "https",
//         hostname: "www.facebook.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
