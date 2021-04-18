---
category: 技术
tags:
  - react
date: 2019-9-22
title: react 笔记
vssue: false
---

### 历史背景与主要特性
1. 传统的UI 操作关注太多细节
2. 应用程序状态分散在各处，难以追踪和维护

始终整体刷新页面，无需关心细节

1个新概念 组件
4个必须API
单向数据流 FLUX 架构
完善的错误提示 比如写错单词

解决了UI细节，数据模型如何解决
传统 MVC ，难以扩展与维护,错综复杂，双向绑定

controller 多个Model 多个view ；

FLUX架构: 单向数据流

web API 双向 web API utils 双向 action creators

action Creators -action-> dispatcher -callbacks-> store -changeEvents+store queries ->react views -user interactions-> action creators

reactviews 用户在UI上出现操作 产生action 通过dispatch分发出去，然后由store进行处理，store根据action更新自己，view是绑定在view上的，所以view也会更新。以状态为基础展示UI


### 以组件方式考虑UI的构建
1. react组件一般不提供方法，而是某种状态机
2. react组件可以理解为一个纯函数
3. 单向数据绑定

受控组件
1. 必须有 value 和 onChange 状态来自外部
非受控组件
1. ref={node => this.input = node}

数据状态管理 DRY原则
1. 能计算得到的状态就不要单独存储 setSate 尽量用的时候再计算
2. 组件尽量无状态，所需数据通过props 获取

### jsx是语法糖
动态创建组件的语法糖
```js
const name = 'kane hua';
const element = <h1>hello,{ name }</h1>
```

```js
const name = 'kane hua';
const element = React.createElement('h1',null,'hello,',name)// element name,props,children,children
```

在jsx中使用表达式
jsx本身也是表达式 `const element = <h1>hello</h1>`

在属性中使用表达式 `<Mycomponent foo={1+2+3+3}/>`

延展属性 
```js
const props = {firstName:'kane',lastName:'hua'};
const greeting = <Greeting {...props}>
```

表达式作为子元素 `const element = <li>{props.message}</li>`

### react组件生命周期及其使用场景

