module.exports = {
  title: "kane's blog",
  description: 'Stack',
  locales: {
    '/': {lang: 'zh-CN',}
  },  
  theme: 'meteorlxy',
  themeConfig: {
    lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),
    personalInfo: {
      nickname: 'kane hua',
      description: 'Consume deliberately.<br/>Take in information over affirmation',
      email: 'huakanelogger@gmail.com',
      location: 'HangZhou,China',
      avatar: '/hero.jpg',  
      sns: {
        linkedin:{
          account: '华亢',
          link: 'https://www.linkedin.com/in/%E4%BA%A2-%E5%8D%8E-564976181/',
        },
        github: {
          account: 'hk4114',
          link: 'https://github.com/hk4114',
        }
      },
    },
    header: {
      background: {
        useGeo: true,
      },
      showTitle: true,
    },
    lastUpdated: true,
    nav: [
      { text: '首页', link: '/', exact: true },
      { text: '文章', link: '/posts/', exact: false },
    ],
    comments: {
      platform: 'github',
      owner: 'hk4114',
      repo: 'hk4114.github.io',
      clientId: 'bb52f035d35f7c408ab4',
      clientSecret: 'b16685e6d2f76f7512fc0611322e31798504826f',
      prefix: '[Comments] ',
      labels: ['comments'],
      autoCreateIssue: process.env.NODE_ENV === 'production',
    }
  },
  markdown: {
    toc: {
      includeLevel: [2, 3],
    },
  },
  plugins: [
    ['@vuepress/google-analytics', {
      'ga': 'UA-138662199-1',
    }],
    "vuepress-plugin-cat"
  ]
}