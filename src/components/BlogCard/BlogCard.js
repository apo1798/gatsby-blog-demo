import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlogCardDes from "./BlogCardDes"

//prettier-ignore
import { postContainer, contentContainer, postImage,postText, alignCenter, alignRight } from "./BlogCard.module.css"
import { Notebook } from "phosphor-react"

const BlogCard = ({ node, extraTitle = "", isfirst }) => {
  if (!node) return null
  const image = getImage(node.frontmatter.hero_image?.childImageSharp)

  return (
    <article key={node.id} className={postContainer}>
      <div className={contentContainer}>
        {image && (
          <GatsbyImage
            image={image}
            alt={node.frontmatter.hero_image_alt}
            title={node.frontmatter.hero_image_alt}
            className={postImage}
          />
        )}
        <div className={postText}>
          <h2>
            {extraTitle} {node.frontmatter.title}
          </h2>
          <BlogCardDes
            date={node.frontmatter.date}
            tagArray={node.frontmatter.tag}
          />
          <p>{`${node.excerpt}…`}</p>
          <p className={` ${alignRight} ${alignCenter} `}>
            <Link className={alignCenter} to={`/blog/${node.slug}`}>
              <Notebook size={30} />
              閱讀全文
            </Link>
          </p>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
