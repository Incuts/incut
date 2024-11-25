// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: process.env.ASSET_PREFIX || "/incut/",
  images:{
    unoptimized:true
  }

}
 
module.exports = nextConfig