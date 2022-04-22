import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout pageTitle={"404未找到網頁"}>
    <h1>404: Not Found</h1>
    <p style={{ fontSize: "2rem" }}>
      這個網址好像不存在......回
      <Link to="/">首頁</Link>
      嗎？
    </p>
  </Layout>
)

export default NotFoundPage
