---
title: 关于闭包
category: 关于技术
tags:
  - js
date: 2019-6-17
vssue-id: false
---

<!-- more -->

> 什么是闭包?
函数嵌套函数，函数的返回值是函数。
特点:
- 函数内部的函数所引用的变量会被保存下来
- 由于内部函数所引用的外部变量会被保存下来 所以变量会一直在内存中保存直到浏览器被关闭，垃圾回收机制失效。（造成内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题）
应用场景:
- 局部变量的累加
- 自执行的匿名函数保存循环变量
```js
//点击弹出下标
		var aBtn = document.getElementsByTagName('input');
		//闭包写法
		for(var i = 0;i<aBtn.length;i++){
			(
				function(i){ //接受闭包的(i)
					aBtn[i].onclick = function(){
						alert(i)
					}
				}
			)(i)//传参 for循环的i
		}
		
		//使用块级作用域后
		for(let i = 0;i< aBtn.length;i++){
			aBtn[i].onclick = function(){
				alert(i)
			}
		}
```
> 闭包里面thisd的作用域
内部函数的this指向外部包裹它的作用域
