import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "vitepress-theme-demoblock";

const guideSidebar = [
  {
    text: "基础",
    items: [
      {
        text: "快速开始",
        link: "/guide/",
      },
    ],
  },
];

const sidebar = [
  {
    text: "基础",
    items: [{ text: "快速开始", link: "/guide/" }],
  },
  {
    text: "组件",
    items: [{ text: "Button组件", link: "/components/button/" }],
  },
];

export default defineConfig({
  title: "Sparke-UI", //标题
  themeConfig: {
    logo: "/fire.png",
    siteTitle: "Sparke-UI",

    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/XwenHaHa/sparke-ui" },
    ],

    // 导航栏
    nav: [
      { text: "指南", items: guideSidebar },
      {
        text: "组件",
        link: "/components/button/index",
        activeMatch: "/components/button/",
      },
    ],

    sidebar,
  },

  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: "sass",
      });
    },
  },
});
