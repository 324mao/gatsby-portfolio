module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Strata by HTML5 UP',
    author: 'Hunter Chang',
    description: 'A Gatsby.js Starter based on Strata by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
     resolve: "gatsby-source-microcms",
     options: {
       apiKey: "39c8079d-0500-414f-9ddb-bb7a7371b6cd",
       serviceId: "Gatsby-portfolio",
       endpoint: "works",
     },
   },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
