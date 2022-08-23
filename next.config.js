/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/guess-the-word' : '',
  assetPrefix: isProd ? '/guess-the-word/' : '',
}
