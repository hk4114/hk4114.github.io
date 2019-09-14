---
title: SPA使用webpack分离代码实现懒加载
category: 技术项目应用
tags:
  - webpack
  - vue
date: 2019-05-07
vssue: false
---

目的: 将vue components/routes/vuex 的代码分离，实现按需加载，提高首屏加载速度。

::: tips 核心
灵活使用 `import` 函数，实现动态引入。
:::

<!-- more -->

### 1. vue组件

```js
// 全局
Vue.component('AsyncCmp', () => import('./AsyncCmp'))
// 局部
new Vue({
  // ...props
	components:{
		'AsyncCmp': ()=> import('./AsyncCmp')
	}
})
// 如果导入的组件是使用命名的方式进行导出，使用箭头函数指向import函数，Vue将会在需要该组件的时候才执行请求加载该组件的代码。
var obj = {
  components: {
    UiAlert: () => import('keen-ui').then(({ UiAlert }) => UiAlert)
  }
}
```

### 2. vue-router

> 在/login这个路由下懒加载Login组件

```js
// 不再使用 import Login from './login'
const Login = () => import('./login')

new VueRouter({
  routes: [
    { path: '/login', component: Login }
  ]
})
```

### 3. vuex

::: tips 
Vuex的registerModule方法允许我们动态的创建Vuex的模块。
如果我们使用`import`函数在`Promise`中返回模块作为载荷（payload），就实现了懒加载。
:::

```js
const store = new Vuex.Store()
// 假设我们想加载'login'这个模块
import('./store/login').then(loginModule => {
  store.registerModule('login', loginModule)
})
```