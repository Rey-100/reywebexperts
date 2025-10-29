// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// next.config.js

//C:\Users\usuario\Documents\GitHub\reywebexperts\next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Asegúrate de que esta estructura esté presente
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // ¡El hostname debe coincidir con la URL de la imagen!
        hostname: 'forestgreen-mink-585034.hostingersite.com', 
      },
    ],
  },
};

module.exports = nextConfig;

