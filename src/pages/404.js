import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout pageTitle={"404未找到網頁"}>
    <h1>Not Found</h1>
    <p style={{ fontSize: "2rem" }}>這個網址不存在喔！</p>
  </Layout>
)

export default NotFoundPage
