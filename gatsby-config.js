module.exports = {
  siteMetadata: {
    title: `Yoli Meets Gatsby`,
    description: `Compilation of Basic features using Plugins available for Gatsby sites `,
    author: `@YoliYoli`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/YChavianoLogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
          endpoint: 'https://gmail.us2.list-manage.com/subscribe/post?u=7ba39ea1d15e2f73ee3bb16c6&amp;id=8260d77501', 
          timeout: 3500, 
          // the endpoint is copied from the EMBEDDED FORM found on MailChimp html code under Action Form
      },
    }
    
  ],
}


