---
title: vuex
category: 技术
tags:
  - 开课吧
date: 2019-10-29
vssue: false
---
+ 什么是vuex
+ how 2 use
+ 需求分析
+ 实现

<!-- more -->
## vuex

### 什么是vuex
是全局状态管理。项目中会有全局的状态: 登录态、购物车等，在应用中贯穿整个生命周期的。我们可以通过vuex进行管理。
单向数据流。数据存储在store中，组件只能读取使用状态，无法进行修改，如果进行修改则需要发消息(dispatch action 或者 commit mutation)，vuex接收到消息通过mutation修改状态。
vuex中能够修改状态的只有mutation。actions 是异步调用mutation。


### how 2 use
1. vue add vuex
2. 使用vuex
```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { count: 0 },
  mutations: {
    add(state){ state.count += 1 }
  },
  actions: {
    rise({ commit }) {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve(commit('add'))
        },1000)
      })
    }
  }
})

// main.js
import store from './store';
new Vue({
  store
}).$mount('#app')

// xxx.vue
.div {{ $store.state.count }}
.btn
  button(@click="increase")
export default{
  methods: {
    increase() {
      // this.$store.commit('add')
      this.$store.dispatch('rise').then(res => {
        if(res) {
          console.log("%cniubisad","font-size:24px")
        }
      })
    }
  }
}
```

3. 核心概念
   - state: 状态、数据
   - mutations(commits): 更改状态的函数
   - actions(dispatch): 异步操作, 复杂业务逻辑
   - store: 包含以上概念的容器
4. 派生状态( 计算属性 )， getters
5. 命名空间
```js
const count = {
  state: {},
  mutations: { },
  actions: { }
};
export default new Vuex.Store({
  modules: {
    count
  }
})
// xxx.vue
p {{$store.state.count.count}}
increase() {
  this.$store.commit('count/add')
}
```

### 需求分析
- 实现store类
  + state响应化处理
  + 保存状态、实现dispatch/commit/getters
  + 重点关注: 模块化实现
- 实现插件
  + 挂载store实例

### 实现

```js
// 1.插件
let Vue;

function install(_Vue) {
    Vue = _Vue;

    // 混入store
    // 这样store执行的时候，就有了Vue，不用import
    // 这也是为啥Vue.use必须在新建store之前
    Vue.mixin({
        beforeCreate() {
            // 这样才能获取到传递进来的store
            // 只有root元素才有store，所以判断一下
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store;
            }
        }
    })
}

// 2.实现Store
class Store {
    constructor(options = {}) {
        // 响应化处理
        this.state = new Vue({
            data: options.state            
        })

        this.mutations = options.mutations || {};
        this.actions = options.actions || {};

    }

    // type是mutations中的函数名
    // 注意这里用箭头函数形式，后面actions实现时会有作用
    commit = (type, arg) => {
        this.mutations[type](this.state, arg)
    }

    dispatch(type, arg) {
        this.actions[type]({
            commit: this.commit,
            state: this.state
        }, arg)
    }
}

export default {Store, install}
```

> todo： 模块化实现