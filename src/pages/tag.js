import React from "react"
import Layout from "../components/Layout"

import { graphql } from "gatsby"
import TagList from "../components/Tag/TagList"

const TagPage = ({ data }) => {
  return (
    <Layout pageTitle="文章分類">
      <TagList tagArray={data.allMdx.distinct} nodes={data.allMdx.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query TagPage {
    allMdx(
      sort: { order: DESC, fields: frontmatter___tag }
      filter: { fileAbsolutePath: { regex: "//blog/" } }
    ) {
      nodes {
        frontmatter {
          tag
        }
      }
      distinct(field: frontmatter___tag)
    }
  }
`

export default TagPage
