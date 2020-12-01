const path = require("path"); // eslint-disable-line

module.exports = {
  pathPrefix: "krzysiekbialy.github.io/codeChallenge",
  siteMetadata: {
    title: "Aexol - Innovative Software Development studio",
    description:
      "We are the team responsible for GraphQL Editor Stucco and Foodeli platforms. We can work as your software consultants.",
    siteUrl: "https://codeChallenge.com", // full path to blog - no ending slash
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://codeChallenge.com",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    "gatsby-plugin-feed",
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
