---
title: requireJS 重返项目
category: 技术
tags:
  - js
date: 2019-05-07
vssue: false
---



#### 1. 引入 requireJS
`<script src="path/require.js" type="text/javascript" charset="utf-8" async defer></script>`

#### 2. 在引入requireJS的标签中，添加`data-main="js/入口文件"`

#### 3. 入口文件
>第一个参数是所依赖的模块;第二个参数是回调函数，所有模块加载完成之后进行的操作。

```js
require([],function(){ //[]所依赖模块 回调函数
	//code
})

//example
require(['jquery'],function($){
	$.ajax()
})

```

#### 4. 定义模块
> 在code区域中设置闭包自执行函数，直接执行函数
> 也可以在`return`区域内写自执行函数，效果一样

```js
define([],function(){ //[]所依赖模块 回调函数
	//code
	return { //暴露模块
		var:var,
		fn:fn,
		fn:fn() //自执行
	}
})
```

#### 5. 配置模块

```js
require.config({
	baseUrl:'',//配置共同路径
	paths:{
		'jquery':['CDN地址','备用路径'],
		'jquerycookie':'URL'
	}
})

require(['jquery','jquerycookie'],function($,jqcookie){
	$.cookie('username',value)
})

// 单独配置文件时
require(['config'],function(){
	require(['jquery'],function(){
		$.ajax
	})
})
```

#### 6. requireJS提供的跨域方式
> 跨域请求时将回调函数的名称设置为define

```js
require(['跨域地址'],function(address){
	console.log(address)
})

```