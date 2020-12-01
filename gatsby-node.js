/* eslint-disable */
const path = require("path");
const _ = require("lodash");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Create Index Page
  createPage({
    path: `/`,
    component: path.resolve("./src/templates/index.tsx"),
    context: {},
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // adds sourcemaps for tsx in dev mode
  if (stage === "develop" || stage === "develop-html") {
    actions.setWebpackConfig({
      devtool: "eval-source-map",
    });
  }
};
