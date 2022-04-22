import * as React from "react"

//prettier-ignore
import {footer,footerContainer, footerItems, footerNavbar} from "./Footer.module.css"
import { InstagramLogo, GithubLogo } from "phosphor-react"

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        <section>&copy; {new Date().getFullYear()} apo1798</section>
        <nav className={footerNavbar}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={footerItems}
          >
            <InstagramLogo size={24} />
            <span>Instagram</span>
          </a>
          <a
            href="https://github.com/apo1798/simple-gatsby-blog-initial"
            target="_blank"
            rel="noopener noreferrer"
            className={footerItems}
          >
            <GithubLogo size={24} />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
