---
title: promise笔记
category: 关于技术
tags:
  - js
  - ES6
date: 2019-6-17
vssue-id: false
---


<!-- more -->

> 什么是promise?

- promise三种状态:pending（进行中）、fulfilled（已成功）和rejected（已失败）。
- promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。一旦状态改变，就不会再变，任何时候都可以得到这个结果。

> 如何使用promise?

**首先**，看一段代码，希望会有较为直观的认识。
```js
const promise = new Promise(function(res,rej){
	//随机进行resolve还是reject的准备
	let itBe = Math.random()>=0.5?1:0;
	let obj = null;
	if(itBe === 1){
		obj = {name:'jojo'}
	}else{
		obj = 'jojo!'
	}
	console.log('this is promise body')
	if(typeof obj === 'object'){ //异步操作成功
		obj.type='resolve'
		res(obj)
	}else{
		obj+=' this is reject'
		rej(obj)
	}
})
promise.then(function(v){
	console.log(v) //resolve result
}).catch(function(v){
	console.log(v) //reject result
})
//可能会出现两种结果
/**
 * 1. this is promise body
 * 2. {name: "jojo", type: "resolve"}
 */

/**
 * 1. this is promise body
 * 2. jojo! this is reject
 */
```
从上面的结果我们可以看出整个promise的运行顺序。先promise内部之后在运行resolve或者reject.
PS:
```js
//以下两张写法结果是一样的
//then方法可以接受两个回调函数作为参数。第一个接受resolve，第二个接受reject
promise
.then(
  function(value){
	console.log(value)
  },
  function(error){
	console.log(error)
  })

promise
.then(function(value){
	console.log(value)
})
.catch(function(error){
	console.log(error)
})
```
2. **promise的嵌套**
```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})
p2
.then(result=>console.log(result))
.catch(error=>console.log(error))
```
1. 1s后p2的状态resolve，返回另一个promise--p1
2. p1在2s之后状态变成reject，导致p2自己的状态无效，由p1决定p2的状态.
3. 后面的then语句都变成针对p1，触发catch



4. promise.prototype.all([...])---> 全部resolve则then，返回一个数组

5. promise.prototype.race([...]) ---> 先加载的先返回

[阮一峰 ES6入门](http://es6.ruanyifeng.com/#docs/promise)
[代码](https://github.com/hk4114/promise_demo)
https://www.jianshu.com/p/8fcf35b1c0df