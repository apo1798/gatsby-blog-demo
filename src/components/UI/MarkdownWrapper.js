import React from "react"
import { markdownWrapper } from "./MarkdownWrapper.module.css"

const MarkdownWrapper = ({ children }) => {
  return <article className={markdownWrapper}>{children}</article>
}

export default MarkdownWrapper
