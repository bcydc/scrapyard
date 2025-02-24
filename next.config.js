const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  redirects: () => [
    {
      source: '/api/locations',
      destination: 'https://scrapyard.hackclub.com/api/locations',
      permanent: true
    },
    {
      source: '/',
      destination: 'https://scrapyard.hackclub.com/vancouver',
      permanent: true
    }
  ]
})
