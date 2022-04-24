import React from "react"
import { Link } from "gatsby"

import { Tag } from "phosphor-react"
import { tagContainer } from "./TagList.module.css"

const TagList = ({ tagArray, nodes }) => {
  console.log(nodes)
  return (
    <section>
      <ul className={tagContainer}>
        {tagArray.map(tag => {
          const tagPostNum = nodes.filter(node =>
            node.frontmatter.tag.includes(tag)
          ).length
          return (
            <li key={tag}>
              <Tag size={32} />
              <Link to={`/tag/${tag}`}>{tag}&nbsp;</Link> ({tagPostNum})
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default TagList
