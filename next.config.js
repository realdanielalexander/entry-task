/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  env: {
    REACT_APP_BE_API_URL: process.env.REACT_APP_BE_API_URL,
  },
};
