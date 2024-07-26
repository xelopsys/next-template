/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "authjs.dev",
      protocol: "https",
    }]
  }
};

export default nextConfig;
