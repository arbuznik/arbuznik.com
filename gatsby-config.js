module.exports = {
  siteMetadata: {
    title: "arbuznik.com",
    author: "Nikita Arbuzov",
    description: "Blog by Nikita Arbuzov",
    siteUrl: "https://www.arbuznik.com",
    siteLogo: "/logo.png",
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-DZFKXRCFW1"],
        gtagConfig: {
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "arbuznik.com",
        short_name: "arbuznik.com",
        description: "Blog by Nikita Arbuzov",
        start_url: `/`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-obsidian-relative-links",
          "gatsby-remark-smartypants",
          "gatsby-remark-external-links",
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/articles/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/articles/projects`,
      },
    },
  ],
};
