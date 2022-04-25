import React from "react"
import { graphql } from "gatsby"

import { subTitle, postListContainer } from "./blog-tag.module.css"
import BlogCard from "../components/BlogCard/BlogCard"
import Layout from "../components/Layout"
import PagePagination from "../components/UI/PagePagination"

const BlogList = props => {
  const { tag, currentPage, numPages, tagTotalPosts } = props.pageContext
  const data = props.data

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    !isFirst &&
    (currentPage - 1 === 1
      ? `/tag/${tag}`
      : `/tag/${tag}/${(currentPage - 1).toString()}`)
  const nextPage = !isLast && `/tag/${tag}/${(currentPage + 1).toString()}`

  return (
    <Layout pageTitle={`標籤 ${tag}`}>
      <h3 className={subTitle}>{`標籤 ${tag} 共有${tagTotalPosts}篇`}</h3>
      <div className={postListContainer}>
        {data.allMdx.nodes.map(node => {
          return <BlogCard node={node} key={node.id} />
        })}
      </div>

      <PagePagination
        prev={{ content: "上一頁", link: prevPage }}
        next={{ content: "下一頁", link: nextPage }}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogTagJS($skip: Int!, $limit: Int!, $tag: String!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { tag: { eq: $tag } }
        fileAbsolutePath: { regex: "//(blog)/" }
      }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          title
          tag
          date(formatString: "MMMM D, YYYY", locale: "zh-TW")
        }
        id
        slug
        excerpt(pruneLength: 170, truncate: true)
      }
    }
  }
`

export default BlogList
