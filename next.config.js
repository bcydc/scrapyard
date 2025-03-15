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
    },
    {
      source: '/handbook',
      destination: 'https://kevinjosethomas.notion.site/Hacker-Handbook-Scrapyard-Vancouver-1b6b469a410d80b5abb9faa012d7f269',
      permanent: true
    },
  ]
})
