import React from "react"
import Layout from "../components/Layout"

import { MDXRenderer } from "gatsby-plugin-mdx"
import MarkdownWrapper from "../components/UI/MarkdownWrapper"

import { graphql } from "gatsby"

const AboutPage = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="關於我">
      <MarkdownWrapper>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MarkdownWrapper>
    </Layout>
  )
}

export const query = graphql`
  query AboutPage {
    mdx(fileAbsolutePath: { regex: "//site/" }) {
      slug
      body
    }
  }
`

export default AboutPage
