import nav from "./navbar";
import sidebar from "./sidebar";
export default {
  themeConfig: {
    base: "/public/",
    logo: "/image/cover.png",
    siteTitle: "CYQ notes",
    nav,
    // sidebar,
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/printfCYQ" },
    ],
    outlineTitle: "On this page",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022/11-present CYQ",
    },
    docFooter: {
      prev: "prev",
      next: "next",
    },
  },
};
