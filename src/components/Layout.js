import * as React from "react"
import Seo from "./seo"

//prettier-ignore
import {  container, heading} from "./Layout.module.css"
import "./global.css"
import Footer from "./UI/Footer"
import Header from "./Header/Header"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Seo title={pageTitle} />
      <Header />

      <div className={container}>
        <main>
          <h1 className={heading}>{pageTitle || "未設定Title"}</h1> {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
