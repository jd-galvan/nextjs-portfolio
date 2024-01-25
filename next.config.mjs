/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'lrkhaghcqdkei563.public.blob.vercel-storage.com',
      protocol: "https"
    },
    {
      hostname: 'www.dropbox.com',
      protocol: "https"
    }]
  }
};

export default nextConfig;
