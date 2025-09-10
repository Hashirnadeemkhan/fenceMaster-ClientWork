// next.config.js or next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
  };
  
  export default nextConfig; // Use this for next.config.mjs (ES Module)
  // module.exports = nextConfig; // Use this for next.config.js (CommonJS)
  