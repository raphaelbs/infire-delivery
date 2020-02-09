require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `InFire`,
    description: `Levamos qualidade e diferencial em sua casa! Somos 🔥 IN FIRE 🔥`,
    author: `InFire`,
    keywords: [
      "lanche",
      "delivery",
      "divinópolis",
      "churrasco",
      "sanduiche",
      "batata",
    ],
    siteUrl: `https://infire.delivery/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: false,
          database: false,
          firestore: true,
          storage: true,
          messaging: false,
          functions: false,
          performance: true,
          analytics: true,
        },
      },
    },
    `gatsby-theme-material-ui`,
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
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
        name: `InFire Delivery`,
        short_name: `InFire`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#7A3D00`,
        display: `minimal-ui`,
        icon: `src/images/infire-delivery-icon.png`, // This path is relative to the root of the site.
      },
    },
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://infire.delivery/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quattrocento Sans`],
        display: "swap",
      },
    },
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-netlify-cms",
  ],
};
