import * as React from "react"
import Seo from "./seo"

import {
  pageContainer,
  flexGrow,
  contentContainer,
  heading,
} from "./Layout.module.css"
import "./global.css"
import Footer from "./UI/Footer"
import Header from "./Header/Header"

const Layout = ({ pageTitle, children, headerHero = false }) => {
  return (
    <div className={pageContainer}>
      <Seo title={pageTitle} />
      <Header headerHero={headerHero} />

      <main className={flexGrow}>
        <div className={contentContainer}>
          <h1 className={heading}>{pageTitle || "未設定Title"}</h1> {children}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
