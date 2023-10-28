/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'a0.muscache.com',
      'avatars.dicebear.com',
      'upcdn.io',
      't4.ftcdn.net',
      'https://tomato-recent-halibut-222.mypinata.cloud/ipfs/QmV4afirJ3ETdZ4fi1z28gKdGHp4pTDj5ydwiy8GTmr9wm?pinataGatewayToken=rxbfJwqWt95BLT5tYJpRnWPBYwjhS-1IYpvfntaKXAr9dK2gDPDOj_m9bXcVnO5c&_gl=1*vma6ks*_ga*MTcwOTI2NDY3Mi4xNjk1OTQ1ODUz*_ga_5RMPXG14TE*MTY5ODQ2MzA5MC42LjAuMTY5ODQ2MzA5MC42MC4wLjA.',
      'tomato-recent-halibut-222.mypinata.cloud'
    ],
  },
}

module.exports = nextConfig
