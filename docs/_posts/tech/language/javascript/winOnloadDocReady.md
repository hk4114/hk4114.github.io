---
title: window.onload与$(document).ready()
category: 关于技术
tags:
  - js
date: 2019-05-07
vssue: false
---

### 共同点:
表面上看都是页面加载时就去执行一个函数或动作。

### 区别:
1. 执行时间 
window.onload所有资源加载完毕后才能执行。JavaScript此时才可以访问网页中的任何元素。
\$(document).ready()是DOM结构绘制完毕后就执行。此时，网页的所有元素对jQuery而言都是可以访问的，但是，这并不意味着这些元素关联的文件都已经下载完毕。

2. 编写个数不同
window.onload不能同时编写多个，会出现覆盖的问题。
$(document).ready()可以同时编写多个，并且都可以得到执行。

3. 简化写法
window.onload没有简化写法 ；
\$(document).ready(function(){})可以简写成$(function(){});

<!-- more -->