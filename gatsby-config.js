module.exports = {
  siteMetadata: {
    title: `宏量的部落格`,
    titleTemplate: "%s | 宏量的部落格",
    description: `這裡分享我的日常生活、財商、會計知識。`,
    author: `chenliam0`,
    siteUrl: `https://voluble-madeleine-6234fe.netlify.app/`,
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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `site`,
    //     path: `${__dirname}/site`,
    //   },
    // },
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
        name: `宏量的部落格`,
        short_name: `Liam's Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
