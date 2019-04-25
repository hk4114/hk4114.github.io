---
category: React
tags:
  - React
  - FE-frame
date: 2018-04-06
title: 三分钟react项目初始化
vssue: false
---

如何开始一个react项目

<!-- more -->

# react项目初始化配置

>1. create-react-app

   1. cnpm i -g create-react-app
   2. create-react-app 文件名(不允许大写字母)
   3. cd reactdemo 
   4. npm start
   优点:高集成 react/jsx/es6/flow的支持
   自带服务

>2. generator-react-webpack

   1. 需要yoman支持 cnpm i -g yo
   2. cnpm i -g generator-react-webpack
   3. yo react-webpack
   4. npm start

优点: 
基于webpack构建，容易配置自己需要的webpack
支持es6
支持不同风格的css(sass,less,stylus)
支持PostCss转换样式
集成了eslint功能
轻松配置单元测试，比如karma和mocha 

>webpack 一步步构建react项目
  1. 项目初始化 npm init(npm init -y同意所有操作)
  2. cnpm i --save-dev webpack
  3. 新建文件夹 webpack.config.js
  4. 新建文件夹app -> index.js //入口文件
  5. 新建文件夹dist -> index.js //出口文件
  6. package.json 打包 scripts --> "build": "webpack" 
  7. cnpm i --save-dev webpack-dev-server 启动本地服务
  8. 在webpack.config.js中 配置devServer
  9. package.json中 --> "server": "webpack-dev-server --open" --open直接在浏览器中打开
  npm run server
  10. 设置热更新 在出口output中 publicPath: "temp/" index.html中改为temp/

  11. 添加babel、react支持
  cnpm i --save-dev 
  babel-core 
  babel-loader 
  babel-preset-es2015 
  babel-preset-react
  12. webpack.config.js添加module的loaders(webpack v2 之后都用rules)
  13. react包
  cnpm i --save react react-dom
  14. 修改app/index.js

