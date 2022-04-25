import * as React from "react"

//prettier-ignore
import {footer,footerContainer, footerItems, footerNavbar} from "./Footer.module.css"
import { GithubLogo } from "phosphor-react"

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        <section>&copy; {new Date().getFullYear()} apo1798</section>
        <nav className={footerNavbar}>
          <a
            href="https://github.com/apo1798/gatsby-blog-demo"
            target="_blank"
            rel="noopener noreferrer"
            className={footerItems}
            title="instagram"
          >
            <GithubLogo size={32} />
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
