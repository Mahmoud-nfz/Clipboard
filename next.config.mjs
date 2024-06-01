import { env } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${env.BLOB_NAME}.public.blob.vercel-storage.com`,
        port: '',
      },
    ],
  },
};
 
export default nextConfig;