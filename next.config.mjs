/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'www.dropbox.com',
      protocol: "https"
    }]
  }
};

export default nextConfig;
