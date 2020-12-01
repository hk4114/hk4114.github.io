---
title: router
category: 技术
tags:
  - 开课吧
date: 2019-9-25
vssue: false
---

## vue-router
> 为什么使用路由？

SPA 应用，切换页面不刷新，就只能使用路由。

> 浏览器不刷新是如何实现的呢？

- hash 模式: 利用hash,`#`发生变化时浏览器不刷新
- H5 history api，地址发生变化，在发送服务器请求之前，浏览器通过API修改历史记录的栈，不去发送真正请求，页面也就不刷新

## vue-router 使用

1. `vue add router` 插件形式引入( hash√ )
2. 配置路由
```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    }
  ]
})
```
::: info
`Vue.use(Router)` 应用插件: 
install
1. 挂载 $router $route
2. 注册 router-link 和 router-view 组件
:::

3. 设置路由出口 `<router-view/>`
4. 导航链接 `<router-link to="/">Home</router-link>`
5. `main.js` vue 实例中挂载 router

> 为什么要在main.js中挂载router？

是否挂载在实例上,只有根组件执行一次.

## 动态路由
1. 配置路由，模式匹配
```js
{
  path: '/about/:id',
  name: 'about',
  component: About
}
```

2. router-link 设置 
```pug
router-link( :to="`/about/${'123'}`" ) About
```

3. 获取参数
```pug
h1 This is an about page {{ $route.params.id }}
```


## 路由嵌套
如果在配置router时，有出现children,则在对应路由里需要设置`<router-view/>`,路由有嵌套，router-view就有嵌套

## Router做了什么
- 创建router类
  1. 解析路由配置: 生成map {"/": Home ,"/about": About}, 这样能快速拿到组件
  2. 监听 hashchange 事件
  3. 声明注册两个组件 router-view, router-link
- 实现插件
  1. 挂载 $router
  2. 声明 $route
  3. 注册组件 

```js
let Vue; // 避免用户直接 import 引入

// 创建router类
export default class VueRouter{
    // 1. 解析配置 生成map
    constructor(options){
        this.$options = options;
        this.routeMap = {};

        // url 响应化处理: 只要url变化， 用到url的组件就会重新render
        this.app = new Vue({
            data: {
                current: "/"
            }
        })
    }

    // 声明初始化函数
    init() {
        // 1. 事件监听
        this.bindEvents();

        // 2. 路由映射
        this.createRouteMap();

        // 3. 注册组件
        this.initComponent();
    }

    // 做路由映射
    createRouteMap(){
        this.$options.routes.forEach(item => {
            this.routeMap[item.path] = item;
        })
    }

    // 监听 hashchange 事件
    bindEvents() {
        window.addEventListener("hashchange", this.onHashChage.bind(this))
        window.addEventListener("load", this.onHashChage.bind(this))
    }

    onHashChage () {
        this.app.current = window.location.hash.slice(1) || '/'
    }

    initComponent () {
        // router-link
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h) {
                // return <a href={this.to}>{ this.$slots.default }</a>
                // h(tag, data, childrem)
                return h('a', {attrs: {href: '#'+this.to}}, [this.$slots.default])
            }
        });
        // router-view
        Vue.component('router-view', {
            // 拿出要渲染的组件
            // this => router实例
            render: (h) => {
                const component = this.routeMap[this.app.current].component; // 这里不用箭头函数 this指向有问题，源码是如何实现的呢？router-view把东西传出去
                return h(component)
            }
        });
    }
}

// 实现插件
// 插件接收Vue的构造函数作为参数
VueRouter.install = function (_Vue) {
    Vue = _Vue; // 保存Vue构造函数，方便使用

    console.log(this,"this");
    
    // 混入: 执行挂载操作
    Vue.mixin({ // 实例存在以后才执行
        beforeCreate() { // 时间点早，对组件无依赖，被组件依赖
            // 只有根组件执行一次
            if (this.$options.router) { // 是否挂载在实例上 只有根组件执行一次 
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init()
            }
        },
    })
}
```

:::info
- [前端路由原理解析和实现](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651232265&idx=1&sn=a559a97b36f3a6f359cda13c035fc68e&chksm=bd49418d8a3ec89b65cb282b2c1815b1782355f3de2a461c11f6b84d4defff57f39d4ce5a0ad&scene=0&xtrack=1&key=5e53b76d517ba281070a07df69afac3e48828c7e98b4f322d05af8a40c6477f73f81d6312581faac1547c275b97659515bfd1f3304ac06b23b4f0004148ea628faddbec78e9cb7651bc319ba388baac8&ascene=1&uin=NTY1NTg0Nzc1&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=chJjBdGv+ajuezVMkMQfiSpjBkutrBSJ2/JVEbsrC7hho1CT6LewLJK4tqr71aP6)

- [令人惊叹的前端路由原理解析和实现方式](https://mp.weixin.qq.com/s/FyXGkW5CMbtPX_t0cShgCA)

- [前端路由跳转基本原理](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651556892&idx=1&sn=5b1da2f8bc5b222d494360795c1277c8&chksm=80255bddb752d2cbc4c113d1b1281d7a6fc571f690137ebc77cc4d83aaa4a10a3cbeffef0f0d&mpshare=1&scene=1&srcid=0822e2jytV46ybkEl7RfcbZ6&sharer_sharetime=1566442603927&sharer_shareid=942f3ad886641dd566149a5fec0397cc&key=2e81df8e5d9650c86f929fca701c534a3a5bf52464c53b4bc6b1d2eb6c8b22c796ddcf3b20fb9c9985594846f5227e5715876bc84a802ec1bd9af20c6020754e1559ad040a3e15fe2b3896cbcffae3b4&ascene=1&uin=NTY1NTg0Nzc1&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=s38I1ghBxOLt43MGukhVWCm1%2FZN%2Fg9NUVc4TqQ6do1vqQlRt0q6GBb5UL4p6618u)
:::