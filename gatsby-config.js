module.exports = {
  siteMetadata: {
    title: `DC的生活日誌`,
    titleTemplate: "%s | DC的生活日誌",
    description: `這裡分享個人成長、投資開戶、讀書心得、生活優惠的介紹。`,
    author: `chenliam0`,
    siteUrl: `https://chenliamblog.netlify.app/`,
    keywords: `投資理財、個人成長、讀書心得`,
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
        fonts: [`Roboto\: 300,400,500,700`, `Noto Sans HK\:400,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DC 的生活日誌`,
        short_name: `Danny's Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
