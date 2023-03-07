const path = require("path");

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve("./src/templates/post.jsx");

  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { frontmatter: { cdate: DESC } }) {
          edges {
            node {
              id
              frontmatter {
                cdate
                mdate
                isPublished
                slug
                title
                tags
              }
              parent {
                ... on File {
                  sourceInstanceName
                }
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const allPublished = result.data.allMarkdownRemark.edges.filter(
    (edge) => edge.node.frontmatter.isPublished === true
  );

  const projects = allPublished.filter(
    (post) => post.node.parent.sourceInstanceName === "projects"
  );

  const posts = allPublished.filter(
    (post) => post.node.parent.sourceInstanceName === "blog"
  );

  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.node.frontmatter.slug}`,
      component: postPage,
      context: {
        id: project.node.id,
        postType: project.node.parent.sourceInstanceName,
      },
    });
  });

  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.node.frontmatter.slug}`,
      component: postPage,
      context: {
        id: post.node.id,
        postType: post.node.parent.sourceInstanceName,
      },
    });
  });
};

exports.createPages = createPages;
