/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      { protocol: "https",
        hostname: "lh3.googleusercontent.com" 
      },
    ],
  },
};

export default nextConfig;