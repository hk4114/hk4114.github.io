---
title: 模拟固定定位
category: 技术项目应用
tags:
  - css
date: 2019-05-07
vssue: false
---
主要是移动端-苹果手机固定定位有问题。为了解决这个问题，勉强能用的方法。

<!-- more -->
该方法其实是模拟了position:fixed,因为fixed,总是相对于html<-可以看做是根级的盒子。
在所需模块设置overflow:hidden，并且在外增加一个宽高相同的盒子，设置相对定位。
需要固定的模块设置绝对定位。就实现了局部的固定定位。

```html
<style>
.parent {
  width: 500px;
  height: 300px;
  background-color: green;
  overflow: auto; /*关键点 就一定要宽高*/ 
  position:static; /*一定是默认值*/
}
.child {
  position: absolute; /*关键点*/
  width: 120px;
  height: 120px;
  margin: 100px 50px;
  background-color: yellow;
}
.placeholder {
  width: 1000px;
  height: 1000px;
  background:orange
}
</style>
<div class="assistor">
  <div class="parent">
  	this is father or mathor. haha , it`s so funny,isn't it?
    <div class="child">
       there is a fixed module. fake ;-)
    </div>
    <div class="placeholder">
        there is a content
    </div>
  </div>
</div>

```

