const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "pEIIII's websITE",
  tagline: "伟大的征程必定充满荆棘与坎坷",
  url: "https://p.eiooie.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "peiiii", // Usually your GitHub org/user name.
  projectName: "peiiii.github.io", // Usually your repo name.

  themeConfig: {
    navbar: {
      title: "pEIIII's websITE",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "文档"
        },
        { to: "/blog", label: "博客", position: "left" },
        { to: "/readings", label: "阅读", position: "left" },
        { to: "/about", label: "关于", position: "left" },
        { to: "/links", label: "链接", position: "left" },

        {
          to: "https://github.com/peiiii/peiiii.github.io",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "简介",
              to: "/docs/intro"
            }
          ]
        },
        {
          title: "社区",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          title: "更多",
          items: [
            {
              label: "博客",
              to: "/blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/peiiii"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/peiiii/peiiii.github.io/edit/master/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/peiiii/peiiii.github.io/edit/master/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"]
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      }
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString"
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/docusaurus.png"
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json" // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)"
          }
        ]
      }
    ]
  ]
};
