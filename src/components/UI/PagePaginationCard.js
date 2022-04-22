import React from "react"
import { Link } from "gatsby"
import { ArrowLeft, ArrowRight } from "phosphor-react"

const PagePaginationCard = ({ content, link, left = false, right = false }) => {
  return (
    <Link to={link}>
      {left && <ArrowLeft size={32} />}
      {content}
      {right && <ArrowRight size={32} />}
    </Link>
  )
}

export default PagePaginationCard
