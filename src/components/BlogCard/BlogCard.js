import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlogCardDes from "./BlogCardDes"

//prettier-ignore
import { postContainer, hideContainer, contentContainer, postImage,postText, alignCenter, alignRight } from "./BlogCard.module.css"
import { Notebook } from "phosphor-react"

const BlogCard = ({ node }) => {
  const [elementIsViviable, setElemenIsVisible] = useState(false)
  const postRef = useRef()
  const image = getImage(node.frontmatter.hero_image?.childImageSharp)

  useEffect(() => {
    const obeserver = new IntersectionObserver(entries => {
      const entry = entries[0]
      console.log("entry", entry.isIntersecting)

      if (entry.isIntersecting === true) {
        obeserver.unobserve(postRef.current)
        setElemenIsVisible(true)
      }
    })
    obeserver.observe(postRef.current)
  }, [])

  return (
    <article
      className={`${postContainer} ${!elementIsViviable && hideContainer}`}
      ref={postRef}
    >
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
          <h2>{node.frontmatter.title}</h2>
          <BlogCardDes
            node={node}
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
