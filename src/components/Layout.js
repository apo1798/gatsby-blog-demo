import * as React from "react"
import Seo from "./seo"

import { pageContainer, contentContainer, heading } from "./Layout.module.css"
import "./global.css"
import Footer from "./UI/Footer"
import Header from "./Header/Header"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={pageContainer}>
      <Seo title={pageTitle} />
      <Header />

      <div className={contentContainer}>
        <main>
          <h1 className={heading}>{pageTitle || "未設定Title"}</h1> {children}
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
