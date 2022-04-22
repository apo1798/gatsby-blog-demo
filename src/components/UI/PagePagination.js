import React from "react"

import PagePaginationCard from "./PagePaginationCard"
import { pagePagination } from "./PagePagination.module.css"

const PagePagination = ({ prev, next }) => {
  return (
    <section className={pagePagination}>
      {prev.content && prev.link ? (
        <PagePaginationCard
          left={true}
          content={prev.content}
          link={prev.link}
        />
      ) : (
        <div></div>
      )}
      {next.content && next.link ? (
        <PagePaginationCard
          right={true}
          content={next.content}
          link={next.link}
        />
      ) : (
        <div></div>
      )}
    </section>
  )
}

export default PagePagination
