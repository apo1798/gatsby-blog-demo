import * as React from "react"

//prettier-ignore
import {footer,footerContainer, footerItems, footerNavbar} from "./Footer.module.css"
import { InstagramLogo, LinkedinLogo } from "phosphor-react"

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        <section>&copy; {new Date().getFullYear()} DC</section>
        <nav className={footerNavbar}>
          <a
            href="https://www.linkedin.com/in/danny-hong-liang-chen/
"
            title="linkedin"
            rel="noopener noreferrer"
            target="_blank"
            className={footerItems}
          >
            <LinkedinLogo size={32} />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={footerItems}
          >
            <InstagramLogo size={32} />
            {/* <span>Instagram</span> */}
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
