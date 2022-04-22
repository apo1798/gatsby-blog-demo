import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { navLinks } from "./NavbarItems.module.css"
import { LinkedinLogo } from "phosphor-react"

const NavbarItems = props => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      sitePage {
        path
      }
    }
  `)

  console.log(data)

  const mobileMenuClosed = () => {
    if (!props.isMobile) return
    props.closeMenu()
  }

  return (
    <ul className={navLinks}>
      <li>
        <Link to="/" onClick={mobileMenuClosed}>
          首頁
        </Link>
      </li>
      <li>
        <Link to="/tag" onClick={mobileMenuClosed}>
          分類
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={mobileMenuClosed}>
          關於我
        </Link>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/danny-hong-liang-chen/
"
          title="linkedin"
          rel="noopener noreferrer"
          target="_blank"
          onClick={mobileMenuClosed}
        >
          <LinkedinLogo size={32} />
        </a>
      </li>
    </ul>
  )
}

export default NavbarItems
