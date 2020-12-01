const path = require("path"); // eslint-disable-line

module.exports = {
  pathPrefix: "/codeChallenge",
  siteMetadata: {
    title: "codeChallenge",
    description: "codeChallenge",
    siteUrl: "codeChallenge",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "codeChallenge",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("postcss-color-function"),
          require("cssnano")(),
        ],
      },
    },
  ],
};
