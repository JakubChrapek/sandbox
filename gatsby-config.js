module.exports = {
  siteMetadata: {
    title: "SiteTitle",
    description: "Gatsby starter for learning purposes. Basic blog etc., getting Gatsby challenges done",
    author: "Kuba Chrapek",
    company: "Kryptonum Studio",
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
  ],
}