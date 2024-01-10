// https://vitepress.dev/reference/site-config
module.exports = {
  title: "ProjectArcade Wiki",
  description: "ProjectArcade Wiki & Documentation Page",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home / Главная', link: '/' },
      { text: 'ProjectArcade WebSite / Сайт ProjectArcade', link: 'https://projectarcade.ru' },
      { 
        text: 'Download ProjectArcade / Загрузить ProjectArcade',
        items: [
          { text: 'Download from ProjectArcade WebSite / Загрузить с сайта ProjectArcade', link: 'https://projectarcade.ru/#page-download' },
          { text: 'Download from GitHub / Загрузить с GitHub', link: 'https://github.com/PRO100BYTE/ProjectArcade/releases' },
          { text: 'Download from SourceForge / Загрузить с SourceForge', link: 'https://sourceforge.net/projects/projectarcade/files/latest/download' },
          { text: 'Download from Itch.io / Загрузить с Itch.io', link: 'https://thedayg0ne.itch.io/projectarcade' }
        ] 
      }
    ],

    sidebar: [
      { text: 'Welcome! Добро пожаловать!', link: '/index.md'},
      {
        text: 'English / Английский',
        items: [
          { text: 'Welcome!', link: '/en/index.md'},
          {
            text: 'Get Started',
            items: [
              { text: 'Prerequisites', link: '/en/get-started/prerequisites.md'},
              { text: 'Installation & First Startup', link: '/en/get-started/installation-and-first-startup.md' },
              { text: 'ProjectArcade Folder Structure', link: '/en/get-started/projectarcade-folder-structure.md' },
              { text: 'Adding a game', link: '/en/get-started/adding-a-game.md' },
              { text: 'Running a game', link: '/en/get-started/running-a-game.md' },
              { text: 'Adding BIOS files', link: '/en/get-started/adding-bios-files.md' }
            ]
          },
          {
            text: 'Navigation',
            items: [
              { text: 'Prerequisites', link: '/en/navigation/'},
              { text: 'Installation & First Startup', link: '/en/navigation/' },
              { text: 'ProjectArcade Folder Structure', link: '/en/navigation/' },
              { text: 'Adding a game', link: '/en/navigation/' },
              { text: 'Running a game', link: '/en/navigation/' },
              { text: 'Adding BIOS files', link: '/en/navigation/' }
            ]
          }
        ]
      },
      {
        text: 'Russian / Русский',
        items: [
          { text: 'В разработке'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PRO100BYTE/ProjectArcade' }
    ]
  }
}
