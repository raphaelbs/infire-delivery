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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158091113-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `items`,
        path: `${__dirname}/_cardapio/item`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 256,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `InFire Delivery`,
        short_name: `InFire`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#7A3D00`,
        display: `minimal-ui`,
        icon: `static/images/uploads/infire-delivery-icon.png`,
      },
    },
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
    `gatsby-theme-material-ui`,
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-netlify-cms",
  ],
};
