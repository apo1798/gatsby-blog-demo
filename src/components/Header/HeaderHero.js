import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { heroContainer, heroText } from "./HeaderHero.module.css"

const HeaderHero = () => {
  const data = useStaticQuery(graphql`
    query HeaderHero {
      allFile(filter: { absolutePath: { regex: "//site/books4/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
          name
        }
      }
    }
  `)

  return (
    <section className={heroContainer}>
      <GatsbyImage
        image={data.allFile.nodes[0].childImageSharp.gatsbyImageData}
        alt={data.allFile.nodes[0].name}
      />
      <div className={heroText}>
        <h1>APO的部落格</h1>
        <h2>生活分享、個人成長、讀書心得</h2>
      </div>
    </section>
  )
}

export default HeaderHero
