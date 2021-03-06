import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { navLinks, navLink, active } from "./NavbarItems.module.css"
import { GithubLogo } from "phosphor-react"

const NavbarItems = props => {
  const { pathname } = useLocation()
  const mobileMenuClosed = () => {
    if (!props.isMobile) return
    props.closeMenu()
  }

  const linkPathActive = linkPath => {
    return pathname === linkPath ? `${navLink} ${active}` : `${navLink}`
  }

  return (
    <ul className={navLinks}>
      <li>
        <Link to="/" onClick={mobileMenuClosed} className={linkPathActive("/")}>
          首頁
        </Link>
      </li>
      <li>
        <Link
          to="/tag"
          onClick={mobileMenuClosed}
          className={linkPathActive("/tag")}
        >
          分類
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          onClick={mobileMenuClosed}
          className={linkPathActive("/about")}
        >
          關於本站
        </Link>
      </li>
      <li>
        <a
          href="https://github.com/apo1798/gatsby-blog-demo"
          title="linkedin"
          rel="noopener noreferrer"
          target="_blank"
          onClick={mobileMenuClosed}
        >
          <GithubLogo size={32} />
        </a>
      </li>
    </ul>
  )
}

export default NavbarItems
