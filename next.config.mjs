/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [{protocol:"https", hostname:"bdsapi.bwdemo.in",port:""}],
  },
};

export default nextConfig;
