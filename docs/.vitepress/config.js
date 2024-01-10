// https://vitepress.dev/reference/site-config
module.exports = {
  title: "ProjectArcade Wiki",
  description: "ProjectArcade Wiki & Documentation Page",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ProjectArcade WebSite', link: 'https://projectarcade.ru' },
      { 
        text: 'Download ProjectArcade',
        items: [
          { text: 'Download from ProjectArcade WebSite', link: 'https://projectarcade.ru/#page-download' },
          { text: 'Download from GitHub', link: 'https://github.com/PRO100BYTE/ProjectArcade/releases' },
          { text: 'Download from SourceForge', link: 'https://sourceforge.net/projects/projectarcade/files/latest/download' },
          { text: 'Download from itch.io', link: 'https://thedayg0ne.itch.io/projectarcade' }
        ] 
      }
    ],

    sidebar: [
      { text: 'Welcome!', link: '/index.md'},
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PRO100BYTE/ProjectArcade' }
    ]
  }
}
