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
      { text: "Demo", link: "/demo/" },
      { text: "Portal", link: "/portal/" },
      { text: "Metadata", link: "/metadata/" },
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
      "/demo/": [""],
      "/portal/": ["", "appPortal", "menuPengaturanAplikasi"],
      "/metadata/": [
        "",
        "builder",
        "application",
        "data",
        "models",
        "presentations",
        "actions",
      ],
      // fallback
      "/": [""],
    },
  },
};
