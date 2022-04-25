module.exports = {
  siteMetadata: {
    title: `APO的部落格`,
    titleTemplate: "%s | APO的部落格",
    description: `這裡分享小弟我的生活日常、個人成長、讀書心得。`,
    author: `apo1798`,
    siteUrl: `https://apo1798blog.netlify.app/`,
    keywords: `生活日常、個人成長、讀書心得`,
    image: `/dog.jpg`,
    lang: `zh-TW`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `site`,
        path: `${__dirname}/site`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              backgroundColor: "transparent",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\: 300,400,500,700`, `Noto Sans TC\:400,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `APO 的生活日誌`,
        short_name: `APO's Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
