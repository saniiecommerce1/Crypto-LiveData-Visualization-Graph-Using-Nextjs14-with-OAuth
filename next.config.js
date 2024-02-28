/** @type {import('next').NextConfig} */

import path from 'path' 


const nextConfig = {
 sassOptions: {
  includePaths: [path.join(process.cwd(), 'styles')],
},

images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: "assets.coingecko.com",
      port: '',
      pathname: '/coins/images/**',
    },

    {
      protocol: 'https',
      hostname: "localhost.com",
      port: '3000',
      pathname: '**/**',
    },

  ],
},





};

export default nextConfig;
