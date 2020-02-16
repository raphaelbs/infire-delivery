require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `InFire`,
    description: `Levamos qualidade e diferencial em sua casa! Somos 🔥 IN FIRE 🔥. Delivery de lanches em Divinópolis.`,
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
        name: `produtos`,
        path: `${__dirname}/_docs/produto`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `configs`,
        path: `${__dirname}/_docs/configs`,
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
        theme_color: `#050505`,
        display: `minimal-ui`,
        icon: `static/images/uploads/infire-logo.jpeg`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://infire.delivery/`,
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        stylesConfig: {
          disableAutoprefixing: true,
        },
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Quattrocento Sans`,
                variants: ["300", "400", "500"],
                fontDisplay: 'swap',
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: './src/createStore',
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
        // [optional] - if true will clean up after itself on the client, default:
        cleanupOnClient: true,
        // [optional] - name of key on `window` where serialized state will be stored, default:
        windowKey: '__PRELOADED_STATE__',
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-sitemap`,
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    "gatsby-plugin-robots-txt",
  ],
};
