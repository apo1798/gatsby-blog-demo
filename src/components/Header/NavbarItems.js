import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { navLinks } from "./NavbarItems.module.css"

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
        <Link to="/about" onClick={mobileMenuClosed}>
          關於
        </Link>
      </li>{" "}
      <li>
        <Link to="/contact" onClick={mobileMenuClosed}>
          聯絡
        </Link>
      </li>
    </ul>
  )
}

export default NavbarItems
