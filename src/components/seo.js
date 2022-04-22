import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, meta, title, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            author
            siteUrl
            defaultImage: image
            titleTemplate
            lang
            keywords
          }
        }
      }
    `
  )

  const {
    titleTemplate,
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    lang,
    keywords,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  // const metaDescription = description || site.siteMetadata.description
  // const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />

      <meta name="image" content={seo.image} />

      <meta name="keywords" content={keywords} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && (
        <meta
          property="og:title"
          content={seo.title + titleTemplate.slice(2)}
        />
      )}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {seo.title && (
        <meta
          name="twitter:title"
          content={seo.title + titleTemplate.slice(2)}
        />
      )}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
    // <Helmet
    //   htmlAttributes={{
    //     lang,
    //   }}
    //   title={seo.title}
    //   titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
    //   meta={[
    //     {
    //       name: `description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:title`,
    //       content: title,
    //     },
    //     {
    //       property: `og:description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:type`,
    //       content: `website`,
    //     },
    //     {
    //       name: `twitter:card`,
    //       content: `summary`,
    //     },
    //     {
    //       name: `twitter:creator`,
    //       content: site.siteMetadata?.author || ``,
    //     },
    //     {
    //       name: `twitter:title`,
    //       content: title,
    //     },
    //     {
    //       name: `twitter:description`,
    //       content: metaDescription,
    //     },
    //   ].concat(meta)}
    // />
  )
}

Seo.defaultProps = {
  title: null,
  description: null,
  lang: `zh-TW`,
  image: null,
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
}

export default Seo
