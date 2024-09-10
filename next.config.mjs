/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["is5-ssl.mzstatic.com", "firebasestorage.googleapis.com"],
    // formats: ["image/avif", "image/webp", "image/png", "image/jpg"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
