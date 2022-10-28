/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == 'production';
const prefix = isProd ? '/06' : '';

const nextConfig = {
  basePath: prefix,
  assetPrefix: prefix,
  publicRuntimeConfig: {
    basePath: prefix,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.HOSTNAME],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = withVanillaExtract(nextConfig);
