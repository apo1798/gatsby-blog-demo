import React, { useRef } from "react"
import { graphql } from "gatsby"

import { postListContainer } from "./blog-list.module.css"
import BlogCard from "../components/BlogCard/BlogCard"
import Layout from "../components/Layout"
import PagePagination from "../components/UI/PagePagination"

const BlogList = props => {
  const { currentPage, numPages } = props.pageContext
  const data = props.data

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    !isFirst &&
    (currentPage - 1 === 1 ? "/" : `/blog/${(currentPage - 1).toString()}`)
  const nextPage = !isLast && `/blog/${(currentPage + 1).toString()}`

  return (
    <Layout pageTitle={"文章列表"}>
      <div className={postListContainer}>
        {data.allMdx.nodes.map((node, index) => (
          <BlogCard node={node} key={node.id} isfirst={index === 0} />
        ))}
      </div>

      <PagePagination
        prev={{ content: "上一頁", link: prevPage }}
        next={{ content: "下一頁", link: nextPage }}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogListJS($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
      filter: { fileAbsolutePath: { regex: "//(blog)/" } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY", locale: "zh-TW")
          tag
          title
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
        slug
        excerpt(pruneLength: 120, truncate: true)
      }
    }
  }
`

export default BlogList
