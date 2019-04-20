```js
module.exports = {
    theme:"meteorlxy",

    title: "Kane's Blog",
    
    description: 'Just playing around',
    
    head: ['link',{rel: 'icon',href: '/favicon.ico'}],
    
    ga:'',
    
    sidebarDepth:3,
    
    serviceWorker:true,
    
    evergreen:true,
    
    themeConfig:{
      
      repo: 'https://github.com/hk4114/blog',

      lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),
      
      nav:[
        {text:'Home',link:'/'},
        {
          text:'guide',
          items:[
            {text:'前端框架',link:'/fe_frame/vue/vuepress'},
            {text:'后端相关',link:'/be_stuff/'},
            {text:'程序语言',link:'/language/'},
            {text:'工具',link:''}
          ]
        },
      ],
      sidebar:{
        '/fe_frame/':[{
          title:'Vue',
          collapsable: true,
          children: [
            'vue/vuepress',
          ]
        },{
          title:'React',
          collapsable: true,
          children: [
            'react/project_init',
          ]
        }],
        '/language/':[{
          title:'javascript',
          collapsable: true,
          children:[
            'js/深拷贝与浅拷贝与赋值'
          ]
        }],
        '/':['']
      }
    },
    configureWebpack: {
        resolve: {
          alias: {
            '@public': './public'
          }
        }
    },
    postcss:{ plugins: [require('autoprefixer')] },
    markdown:{
      lineNumbers:true,
      anchor:{
        permalink: true
      },
      toc:{ includeLevel: [2, 3] },
      // algolia: {
      //   apiKey: 'ffce0083d0830de5f562c045a481410b',
      //   indexName: 'vue_element_admin'
      // },
      // config: md=> {
      //   md.use(require('markdown-it-task-lists'))
      // }
    }
}

```