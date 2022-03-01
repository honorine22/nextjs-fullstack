/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    DB_LOCAL_URI: 'mongodb://localhost:27017/roomDB'
  }
}
// mongodb+srv://learnnextjs:learnnextjs123@cluster0.xjzqm.mongodb.net/roomDB?retryWrites=true&w=majority
