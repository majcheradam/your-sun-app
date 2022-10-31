const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'pl', 'de', 'fr'],
    defaultLocale: 'pl',
  },
})
