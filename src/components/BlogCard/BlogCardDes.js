import React from "react"
import { Link } from "gatsby"

import { alignCenter } from "./BlogCardDes.module.css"
import { Calendar, Tag } from "phosphor-react"

const BlogCardDes = ({ date, tagArray }) => {
  return (
    <p className={alignCenter}>
      <span className={alignCenter}>
        <Calendar size={30} /> {date === "Invalid date" ? "「日期錯誤」" : date}
      </span>
      <span className={alignCenter}>
        <Tag size={25} />
        {tagArray.length === 1 && tagArray[0] === "" && <span>「無分類」</span>}
        {tagArray.map(tag => (
          <Link to={`/tag/${tag}`} key={tag}>
            {tag}
          </Link>
        ))}
      </span>
    </p>
  )
}

export default BlogCardDes
