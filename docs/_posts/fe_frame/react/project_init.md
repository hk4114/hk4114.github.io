---
category: FE-frame
tags:
  - React
  - FE-frame
date: 2018-04-06
title: react hello world
vssue: false
---

如何开始一个react项目

<!-- more -->

## 从0到1 构建react项目

### 1. create-react-app

1. cnpm i -g create-react-app 
2. create-react-app 文件名(不允许大写字母) / yarn create react-app my-app --typescript
3. cd reactdemo 
4. npm start

### 2. generator-react-webpack

1. 需要yoman支持 cnpm i -g yo
2. cnpm i -g generator-react-webpack
3. yo react-webpack
4. npm start

### 3. webpack 一步步构建react项目

1. 项目初始化 npm init(npm init -y同意所有操作)
2. npm i --save-dev webpack
3. 新建文件夹 webpack.config.js
4. 新建文件夹app -> index.js //入口文件
5. 新建文件夹dist -> index.js //出口文件
6. package.json 打包 scripts --> "build": "webpack" 
7. npm i --save-dev webpack-dev-server 启动本地服务
8. 在webpack.config.js中 配置devServer
9. package.json中 --> "server": "webpack-dev-server --open" --open直接在浏览器中打开
npm run server
10. 设置热更新 在出口output中 publicPath: "temp/" index.html中改为temp/
11. 添加babel、react支持
npm i --save-dev 
babel-core 
babel-loader 
babel-preset-es2015 
babel-preset-react
12.  webpack.config.js添加module的loaders(webpack v2 之后都用rules)
13.  react包
npm i --save react react-dom
14.  修改app/index.js


::: tip react+typescript 构建步骤

```bash
# 环境
npm install -g typescript
mkdir project && cd project
# 初始化
npm init -y && tsc --init 
# 安装开发工具
npm install-D webpack webpack-cli webpack-dev-server
# 安装react相关
npm install -S react react-dom
npm install -D @types/react @types/react-dom
# 安装ts-loader(或者awesome-typescript-loader)
npm install -D awesome-typescript-loader
# 项目启动
# 在项目根目录新建一个build文件夹，然后在里面新建webpack.config.js文件
mkdir build && cd build && touch webpack.config.js
# 根目录下新建src文件夹，然后在src里新建index.tsx文件作为项目入口
mkdir src && cd src && touch index.tsx
# 新建页面
cd build && touch index.html # <div id="app"></div>
# 配置html-webpack-plugin
npm install -D html-webpack-plugin
# 设置tsconfig.json "target":"esnext","jsx":"react","moduleResolution":"node","module":"commonjs"
# package.json 添加脚本命令"dev": "webpack-dev-server --config build/webpack.config.js --mode development"
```

<details>
   <summary>webpack基本配置</summary>

```js

const path = require("path")

module.exports = {
   entry:{
      app: path.join(__dirname,'./../','src/index.tsx')
   },
   output:{
      path: path.join(__dirname,'./../','dist'),
      filename:'[name].js'
   },
   module:{
      rules: [{
         test: /\.ts(x?)$/,
         use:[{
            loader: 'awesome-typescript-loader',
            options:{

            }
         }]
      }]
   },
   resolve:{
      extensions:['.ts','.tsx','.js','.jsx']
   },
   plugins:[
      new HtmlWebpackPlugin({
         template:'build/ly/index.html'
      })
   ]
}
```

</details>

<details>
   <summary>index.tsx</summary>

```js
import * as React from 'react'
import * as ReactDOM from 'react-dom'

const render =()=>{
   ReactDOM.reader(
      <div>just start</div>,
      document.querySelector('#app')
   )
}
render()
```

</details>

:::

### 4. react + umi + Dva

1. yarn global add umi
2. yarn create umi /# check needed
3. yarn
4. yarn start


## 使用react的理由/为什么使用框架

> 大家都知道react是facebook开源的前端框架，但是为什么facebook不继续使用jq或者ng，而是选择自己研发一套框架呢？

1. 传统UI操作/DOM API关注太多细节（按钮浮标状态改变，没有及时更新）
2. 应用程序状态分散在各处，难以追踪和维护

> react 始终整体刷新页面 前状态 -> 后状态

1. 1个新概念(组件)
2. 4个必须API()
3. 单向数据流(flux)
4. 完善的错误提示

> flux架构 单项数据流

传统MVC难以扩展和维护，多个model和多个view之间关系复杂，且双向绑定，难以追踪bug

react view -> action(web api) -> dispatch(分发) -> store(根据action更新自己) -> view(与store绑定)

## 理解 react 组件

> props(外部) + state(内部) = view

1. react组件一般不提供方法，而是某种状态机
2. react组件可以理解为一个纯函数
3. 单向数据绑定

> 