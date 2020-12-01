---
title: day02 vue-router、vuex
category: 技术
tags:
  - 开课吧
date: 2019-9-25
vssue: false
---
vue 权限控制
https://www.processon.com/view/link/5d270319e4b0d16653fd60b8#map


学习目标
1. 理顺Vue源码整体流程
2. 调试环境
3. 数据响应式


### 测试环境的搭建
1. git clone vue
2. yarn
3. yarn add rollup global // 纯js打包
4. 修改脚本 
```json
{
  "script": {
    "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev"
  }
}
// npm run dev
```
5. dist/examples mkdir test/test01.html

```html
<div id="app"> {{ name }} </div>
    <script src="../../dist/vue.js"></script>
    <script>
    new Vue({
        el:"#app",
        data(){
            return {
                name: "zhangsan"
            }
        }
    })
    </script>
```


### 理顺Vue源码整体流程
入口文件

package.json -> dev -> config.js -> builds

web-full-dev 当前打包版本( 带编译器的完整版本 )

resolve 函数 别名

- entry-runtime-with-compiler.js 入口文件
扩展覆盖了$mount方法，为了移动端与pc端平台行为不一样: 处理 el 和 template选项,尝试编译他们为render函数

- vue\src\platforms\web\runtime\index.js
定义了$mount方法，执行mountComponent(this, el, hydrating)
实现了 __patch__ 打补丁方法

src/core/index.js
定义全局api

src\core\instance\index.js 构造函数定义点

src\core\instance\init.js 初始化函数的实现

## React 组件
- function 组件
```js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      function component
    </div>
  );
}
export default App;
```

- Class 组件
```js
import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <div>
                class component
            </div>
        );
    }
}

export default ClassComponent;
```


vue 工作流程

                                                                                          |---------------------------------------------------------> 初始化流程
new Vue() - init(prop/data/computed准备) -> $mount -> compile() -> render function -> vDOM tree
                                                                            |------ 访问data等 -> getter - 依赖收集 -> watcher - update(render) -> patch() --> DOM
                                                                                                

$mount 根组件 有挂载目标
       子组件 挂载不需要目标 处理在parent实例里


compile 编译
- parse
- optimize
- generate

template转换成render函数

patch 打补丁
- patchVdode
- updateDOM


### react
1. context 跨层级通信
2. 组件复合 composition
3. 高阶组件HOC
4. hooks


### 使用context
创建context->获取Provider和Consumer->provider提供值->Consumer消费值
```js
//AppContext.js
import React, { Component } from 'react'
export const Context = React.createContext()
export const Provider = Context.Provider
export const Consumer = Context.Consumer
```

```js
//App.js
import React from 'react';
import Home from './pages/Home'
import User from './pages/User'

import { Provider } from './AppContext' //引⼊入Context的 Provider

function App() {
  return (
    <div className="app">
      <Provider value={store}>
        <Home />
      </Provider>
    </div>
  );
}
export default App;
```

```js
// /pages/Home.js
import React, { Component } from 'react'
import { Consumer } from '../AppContext';

export default class Home extends Component {
  render() {
    return (
      <Consumer>
        { ctx => <HomeCmp {...ctx} />}
      </Consumer>
    )
  }
}

function HomeCmp(props) {
  const { home, user } = props
  const { isLogin, userName } = user
  return (
    <div>
    { isLogin ? userName : '登录' }
    </div>
  )
}
```