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
        github: {
          account: 'hk4114',
          link: 'https://github.com/hk4114',
        }
      },
    },
    header: {
      // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      background: {
        // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
        // url: '/assets/img/bg.jpg',
        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
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
  ]
}