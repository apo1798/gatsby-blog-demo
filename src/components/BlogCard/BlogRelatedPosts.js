import React from "react"

import BlogCardTagPosts from "./BlogCardTagPosts"

const BlogRelatedPosts = ({ tagPostArray, tag }) => {
  return <BlogCardTagPosts tagPostArray={tagPostArray} tag={tag} />
}

export default BlogRelatedPosts
