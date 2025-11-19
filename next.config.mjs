/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "bdsapi.bwdemo.in", port: "" },
      {
        protocol: "https",
        hostname: "n84j51mp-3001.inc1.devtunnels.ms",
        port: "",
      },

      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "",
      },
    ],
  },
};

export default nextConfig;
