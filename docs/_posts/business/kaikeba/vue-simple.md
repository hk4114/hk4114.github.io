---
title: vue-simple 手写简易vue
category: 技术项目应用
tags:
  - 开课吧
  - vue
date: 2019-9-25
vssue: false
---


16:39






















1. 初始化
初始化data、props、事件等
2. 挂载
执行编译，首次渲染、创建和追加过程
3. 编译
编译模块分为三个阶段：parse、optimize、generate
4. 数据响应式
渲染函数执行时会触发getter进行依赖收集，将来数据变化时会触发setter进行更新
5. 虚拟dom
Vue2开始支持Virtual DOM，通过 JS对象描述dom，数据变更时映射为dom操作
```template
<div name="开课吧" style="color:red" @click="xx">
  <a> click me</a>
</div>
// vdom
{
  tag: 'div', 
  props:{
    name:'开课吧',
    style:{color:red},
    onClick:xx
 }
  children: [ {
      tag: 'a',    
      text: 'click me' 
   }
 ]
}
```
6. 更新视图
数据修改时监听器会执行更新，通过对比新旧vdom，得到最小修改，就是 patch