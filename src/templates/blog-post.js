import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { heroDes } from "./blog-post.module.css"
import BlogDes from "../components/BlogCard/BlogCardDes"
import BlogRelatedPosts from "../components/BlogCard/BlogRelatedPosts"
import Layout from "../components/Layout"
import MarkdownWrapper from "../components/UI/MarkdownWrapper"
import PagePagination from "../components/UI/PagePagination"

const BlogPost = props => {
  const { data } = props
  const { prev, next, tag } = props.pageContext
  const image = getImage(data.mdx.frontmatter.hero_image)
  const title = data.mdx.frontmatter.title

  return (
    <Layout pageTitle={title}>
      <BlogDes
        date={data.mdx.frontmatter.date}
        tagArray={data.mdx.frontmatter.tag}
      />
      {image && (
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
          title={data.mdx.frontmatter.hero_image_alt}
        />
      )}
      <div className={heroDes}>
        <p>{data.mdx.frontmatter.hero_image_alt}</p>
        <p>
          照片來源:&nbsp;
          {data.mdx.frontmatter.hero_image_credit_link === "" ? (
            <span>
              {data.mdx.frontmatter.hero_image_credit_text || "未設定"}
            </span>
          ) : (
            <a
              href={data.mdx.frontmatter.hero_image_credit_link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {data.mdx.frontmatter.hero_image_credit_text || "連結"}
            </a>
          )}
        </p>
      </div>

      <MarkdownWrapper>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MarkdownWrapper>

      <BlogRelatedPosts tagPostArray={data.allMdx.nodes} tag={tag} />
      <PagePagination
        prev={{
          content: prev?.frontmatter?.title,
          link: `/blog/${prev?.slug}`,
        }}
        next={{
          content: next?.frontmatter?.title,
          link: `/blog/${next?.slug}`,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogPostJS($id: String!, $tag: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY", locale: "zh-TW")
        tag
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      body
    }
    allMdx(filter: { frontmatter: { tag: { eq: $tag } }, id: { ne: $id } }) {
      nodes {
        slug
        frontmatter {
          date
          title
        }
      }
    }
  }
`

export default BlogPost
