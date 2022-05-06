/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
  // module.exports = nextConfig

  module.exports ={
    images:{
      loader:'imgix',
      path:'https://example.com/myaccount/'
    }
  }