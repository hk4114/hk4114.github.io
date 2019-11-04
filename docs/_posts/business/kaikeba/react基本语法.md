---
title: react 基础速通
category: 技术项目应用
tags:
  - react
  - 开课吧
date: 2019-10-29
vssue: false
---

### react

cra 项目
```bash
yarn global add create-react-app
# 创建项目
create-react-app demo01
# 进入文件夹启动项目
cd demo01 && yarn start
# 暴露配置项
yarn eject
# 选 y
```

### 项目结构
- config webpack 配置 
- public 静态资源
- src 源码
  + serviceWorker.js pwa支持


```js
// webpack.config.js
// :527
template: paths.appHtml, // 定义挂载模板

// :22
const paths = require('./paths');

// paths.js
// :74
appHtml: resolveApp('public/index.html'),//入口

// index.html #root根节点
// :75 js进入文件
appIndexJs: resolveModule(resolveApp, 'src/index'),
```

### 基础语法
- react 负责逻辑控制 数据->vdom
- reactDOM 渲染实际dom vdom->dom
- react 使用jsx来描述UI

```jsx
// 基础语法
import React from 'react';
import ReactDOM from 'react-dom';
import styles from 'index.module.scss';// .app{.logo{padding:12px}}

const name = "zhangsan";
const user = {
    firstName: "tony",
    lastName: "stark"
};

function formatName(user) {
    return `${user.firstName}.${user.lastName}`
}

const dom = <span>vdom</span>
const jsx = (
    <div className={styles.app}>
        <h3>jsx</h3>
        <p> 变量: { name }</p>
        <p> 函数: { formatName(user) }</p>
        <p> jsx: { dom } </p>
        <h3>逻辑分支</h3>
        <p> 三元:{ name ? name : '登录' } </p>
        <p> 短路取值&&: { name && 'lisi' } </p>
        <p> 短路取值||: { name || 'lisi' } </p>
        <h3>循环遍历</h3>
        <ul>
            {
                [1,2,3,4,5].map(v=>{
                    return <li key={v}>item-{v}</li>
                })
            }
        </ul>
        <h3>属性使用</h3>
        <img src={logo} alt="img" className={styles.logo} style={{width:'40px'}}/>
    </div>
)

ReactDOM.render(jsx,document.getElementById('root'));
```



