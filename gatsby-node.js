const path = require("path")

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site is built!`)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query GatsbyNode {
      allMdx(
        limit: 1000
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "//(blog)/" } }
      ) {
        edges {
          node {
            slug
            frontmatter {
              date
              title
              tag
              hero_image {
                childImageSharp {
                  children {
                    id
                  }
                  gatsbyImageData
                }
              }
              hero_image_alt
            }
            id
            excerpt(pruneLength: 100, truncate: true)
          }
        }
        distinct(field: frontmatter___tag)
      }
    }
  `).then(result => {
    if (result.errors) {
      console.error(result.errors)
      throw result.errors
    }

    const posts = result.data.allMdx.edges
    const tags = result.data.allMdx.distinct
    const postsPerPostPage = 7 // Posts per page in blog-post list
    const postsPerTagPage = 7 // Posts per page in blog-tag list

    // Create blog tag pages
    tags.forEach(tag => {
      const tagTotalPosts = posts.filter(post =>
        post.node.frontmatter.tag.includes(tag)
      ).length

      const tagTotalPages = Math.ceil(tagTotalPosts / postsPerTagPage)

      Array.from({ length: tagTotalPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/tag/${tag}` : `/tag/${tag}/${i + 1}`,
          component: path.resolve(`./src/templates/blog-tag.js`),
          context: {
            tag,
            limit: postsPerTagPage,
            skip: i * postsPerTagPage,
            numPages: tagTotalPages,
            currentPage: i + 1,
            tagTotalPosts,
          },
        })
      })
    })

    // Create blog post pages
    posts.forEach((post, index) => {
      createPage({
        path: `/blog/${post.node.slug}`,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          id: post.node.id,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
          tag: post.node.frontmatter?.tag[0],
        },
      })
    })

    // Create blog post list pages
    const postTotalPages = Math.ceil(posts.length / postsPerPostPage)

    Array.from({ length: postTotalPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limit: postsPerPostPage,
          skip: i * postsPerPostPage,
          numPages: postTotalPages,
          currentPage: i + 1,
        },
      })
    })
  })
}
