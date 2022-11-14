const package = require('../../package.json');

module.exports = {
  siteName: 'Living Life',
  siteDescription:
    "Posts about science & technology and cancer. Fuck cancer.",
  siteType: 'Blog', // schema
  siteURL: 'https://excellent.paulapplegate.com',
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Paul Applegate',
  authorEmail: 'me@paulapplegate.com',
  authorWebsite: 'https://excellent.paulapplegate.com',
  meta_data: {
    twitterSite: '@applegate',
    twitterCreator: '@pappleagate',
    opengraph_default: '/assets/images/opengraph-default.jpg'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    firma: 'Paul Applegate',
    street: 'XXX',
    city: 'Cincinnati',
    state: 'Ohio',
    zip: '45239',
    mobileDisplay: '',
    mobileCall: '',
    email: 'me@paulapplegate.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  },
  env: process.env.ELEVENTY_ENV === 'production',
  pkv: package.version || 'v1'
};
