import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { header, headerContainer, siteTitle } from "./Header.module.css"
import Navbar from "./Navbar"
import MobileNavbar from "./MobileNavbar"

const Header = () => {
  const data = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={header}>
      <div className={headerContainer}>
        <span className={siteTitle}>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </span>
        <Navbar />
        <MobileNavbar />
      </div>
    </header>
  )
}

export default Header
