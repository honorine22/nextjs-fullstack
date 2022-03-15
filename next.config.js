/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    DB_LOCAL_URI: 'mongodb://localhost:27017/roomDB',
    CLOUDINARY_CLOUD_NAME: 'bookit',
    CLOUDINARY_API_KEY: '662828478599126',
    CLOUDINARY_API_SECRET: '1vtw5NC0woLJiLuFO5CdGiUplgM'
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}
// mongodb+srv://learnnextjs:learnnextjs123@cluster0.xjzqm.mongodb.net/roomDB?retryWrites=true&w=majority
