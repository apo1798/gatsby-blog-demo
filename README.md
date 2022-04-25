# GatsbyJS 部落格

## 歡迎來到我用 [GatsbyJS](https://www.gatsbyjs.com/) 為框架所寫的部落格。

### [網站連結](https://apo1798blog.netlify.app/)

### 目錄

- [網站緣起](#網站緣起)
- [參考資料](#參考資料)
- [技術介紹](#技術介紹)
- [使用介紹](#使用介紹)

### 網站緣起

在 JavaScript 網課上到一個段落後，便問朋友有沒有需要幫忙架站，藉此增加自己的練習機會。有位同學說想架設自己的部落格。在學習 React 和接觸了一些 NextJS 之後，發現 GatsbyJS 的插件可以幫助我節省許多時間，於是就決定以這個框架為開發主要主力。

另外考量到不處理登入，資料庫等技術，部落格的更新方式為本機推送新資料至 GitHub，再由 Netlify 自動架站。接著再以本架構去畫我同學想要的版面。

### 參考資料

主要是 Gatsby 的官方教學與文件。  
[Tutorial | Gatsby](https://www.gatsbyjs.com/docs/tutorial/)

### 技術介紹

本站為 SPA 單頁式網頁。利用 Gatsby 插件，實現圖片 lazy loading、Markdown 轉換 html 。透過 gatsby-config.js 進行設定，gatsby-source-filesystem 搜尋在 blog 裡面的資料夾、資料夾中的檔案，裡面的 siteMetadata 是網站的基本資訊（如網站標題、描述、og 圖片）。  
![檔案架構](https://raw.githubusercontent.com/apo1798/simple-gatsby-blog-initial/main/site/structure.png "檔案架構")  
檔案架構

另外在 gatsby-node.js 處理文章標籤與頁數的網址生成。透過 graphql 抓取資料，createPage API 依照資料夾的名稱生成文章網址。同時將時間排序的上下篇資料傳入至文章中，在底部便能導覽至其他文章，亦可自己設定一頁將有幾篇文章。

![依照tag標籤與數量生成對應網址](https://raw.githubusercontent.com/apo1798/simple-gatsby-blog-initial/main/site/gatsby_node_logic.png "依照tag標籤與數量生成對應網址")

另外 components 檔案中的 Seo.js 負責 html head 中的 title, og 等相關資料處理。

### 使用介紹

1. 在 blog 資料夾中新建資料夾，資料夾名稱也是文章的網址（目前只能用英文）。
2. 資料夾中建立 index.md 或 index.mdx，並在檔案中加上 frontmatter。

frontmatter 書寫範例

```Markdown
---
  title: "香港記事"
  date: "2022-04-16"
  tag: ["日常"]
  hero_image:  "./egg.jpg"
  hero_image_alt: "醃製鹹蛋黃活動體驗"
  hero_image_credit_text: "Apo1798"
  hero_image_credit_link: "https://github.com/apo1798/simple-gatsby-blog-initial"
---
```

若特定的 frontmatter 未附上，都已做了簡單的錯誤處理，生成文章將如下。日期錯誤文章將排序在最後。

![欠缺資料所生成的文章](https://raw.githubusercontent.com/apo1798/simple-gatsby-blog-initial/main/site/wrong_md_output.png "欠缺資料所生成的文章")

3. 撰寫內容，並將相關檔案（如圖片）加至資料夾內。
4. npm start，開啟 Gatsby 開發環境、預覽文章。
5. git push 推送至 GitHub、Netlify 架站。

以上就是本站的簡單介紹。
