module.exports = {
  title: "Epigoni",
  description: "Epigoni Documentation Site",
  head: [["link", { rel: "icon", href: "/images/Epigoni.png" }]],
  plugins: ["@vuepress/back-to-top", "@vuepress/medium-zoom"],
  themeConfig: {
    repo: "rizki-agyadata/epigoni-docs",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: "Last Updated",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Reference", link: "/reference/" },
    ],
    sidebar: {
      "/guide/": [
        "",
        "arsitektur",
        "modelData",
        "presentasi",
        "membuatAplikasi",
        "membuatAplikasi-Versi-1.2",
      ],
      "/reference/": ["", "appPortal", "menuPengaturanAplikasi"],
      // fallback
      "/": [""],
    },
  },
};
