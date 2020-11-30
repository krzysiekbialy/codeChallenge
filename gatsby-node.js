/* eslint-disable */
const path = require("path");
const _ = require("lodash");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.
  switch (node.internal.type) {
    case "MarkdownRemark": {
      const { permalink, layout, primaryTag } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        slug = `/${relativePath.replace(".md", "")}/`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: "slug",
        value: slug || "",
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: "layout",
        value: layout || "",
      });

      createNodeField({
        node,
        name: "primaryTag",
        value: primaryTag || "",
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            excerpt
            timeToRead
            frontmatter {
              title
              tags
              date
              draft
              image {
                childImageSharp {
                  fluid(maxWidth: 3720) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
              author {
                id
                bio
                avatar {
                  children {
                    ... on ImageSharp {
                      fixed(quality: 90) {
                        src
                      }
                    }
                  }
                }
              }
            }
            fields {
              layout
              slug
            }
          }
        }
      }
      allAuthorYaml {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error(result.errors);
  }

  // Create Index Page
  createPage({
    path: `/`,
    component: path.resolve("./src/templates/index.tsx"),
    context: {},
  });

  // Create post pages
  const posts = result.data.allMarkdownRemark.edges.filter(
    (post) => !post.node.frontmatter.custom
  );
  // Create paginated blog index
  const postsPerPage = 6;
  const limitPage = posts.length;
  const numPages = Math.ceil(limitPage / postsPerPage);

  Array.from({
    length: numPages,
  }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/blog" : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog.tsx"),
      context: {
        limit: limitPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  posts.forEach(({ node }, index) => {
    const { slug, layout } = node.fields;
    const prev = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || "post"}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug,
        prev,
        next,
        primaryTag: node.frontmatter.tags ? node.frontmatter.tags[0] : "",
      },
    });
  });

  // Create tag pages
  const tagTemplate = path.resolve("./src/templates/tags.tsx");
  const tags = _.uniq(
    _.flatten(
      result.data.allMarkdownRemark.edges.map((edge) => {
        return _.castArray(_.get(edge, "node.frontmatter.tags", []));
      })
    )
  ).filter((t) => !!t);
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    });
  });

  // Create author pages
  const authorTemplate = path.resolve("./src/templates/author.tsx");
  result.data.allAuthorYaml.edges.forEach((edge) => {
    createPage({
      path: `/author/${_.kebabCase(edge.node.id)}/`,
      component: authorTemplate,
      context: {
        author: edge.node.id,
      },
    });
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

// const jokeText = path.resolve("src/component/SimpleData.ts");

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;
// const jokesTemplate = path.resolve("src/templates/jokesTemplate.js");
// const result = jokeText;
// console.log(jokeText);

// result.data.promoction.promocjs.forEach((promocje) => {
//   createPage({
//     path: promocje.podstrona,
//     component: promoctionTemplates,
//     context: {
//       data: promocje,
//     },
//   });
// });
// };
