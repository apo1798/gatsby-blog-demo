import React from "react"
import { Link } from "gatsby"

import {
  tagContainer,
  alignCenter,
  flexSpaceSmall,
  tagLinks,
  tagLink,
} from "./BlogCardTagPosts.module.css"
import { Tag } from "phosphor-react"

const BlogCardTagPosts = ({ tagPostArray, tag }) => {
  return (
    <section className={tagContainer}>
      <h4 className={`${alignCenter} ${flexSpaceSmall}`}>
        其他
        <span className={alignCenter}>
          <Tag size={25} />
          <Link to={`/tag/${tag}`}>{tag}</Link>
        </span>
        文章
      </h4>
      <ul className={tagLinks}>
        {tagPostArray.length === 0 && (
          <li key={"noPost"} className={tagLink}>
            <h4>還待新文章發布喔！</h4>
          </li>
        )}
        {tagPostArray.slice(0, 4).map(post => (
          <li key={post.frontmatter.title} className={tagLink}>
            <h4>
              <Link to={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
            </h4>
            <div>{post.frontmatter.date}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogCardTagPosts
