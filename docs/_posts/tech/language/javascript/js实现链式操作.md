---
title: JS实现链式操作
category: 关于技术
tags:
  - js
date: 2019-9-4
vssue-id: false
---

jquery 有一个十分强大的特点：链式操作。

原理就是每次方法执行完后返回 `this` 对象，这样后面的方法可以继续在 `this` 环境下执行。当方法里需要有返回值时，不能返回 `this`，链式操作也就中断了。

链式操作实际上就是使得异步编程的流程更加清晰,`Promise`也沿用了这一思想，每一个异步任务返回`Promise`对象，通过 `then` 方法制定回调函数。


<!-- more -->

### JS 实现链式操作

```js
function Person(){};

Person.prototype = {
    setName: function(name){
        this.name = name;
        return this
    },
    setAge: function(age){
        this.age = age;
        return this
    }
};

var person = new Person();
person.setName('tom').setAge(26);
```
原理: 在每个方法调用后返回 `this`, jQuery中不用 `new` 一个实例化对象，所以可以将实例化过程封装：

```js
function newThis(){
    return new Person();
};

newThis().setName('jarry').setAge(20)
```

### 链式操作优缺点：

#### 优点：
1. JS的执行环境是单线程，为了避免阻塞。我们时常用一些异步编程方式来完成一些可能产生阻塞的操作，链式操作实际上就是使得异步编程的流程更加清晰，不会像回调函数一样相互耦合。ES 6中的`Promise`也沿用了这一思想，每一个异步任务返回`Promise`对象，通过 `then` 方法制定回调函数。

#### 缺点：
1. 当方法里需要有返回值时，不能返回 `this`，链式操作也就中断了。

```js
function Person(){};

Person.prototype = {
    setName: function(name){
        this.name = name;
        return this
    },
    getName: function(){
        return `I'm ${ this.name }`
    }
};

var person = new Person();
person.setName('tom').getName(); // I'm tom
```
jQuery 主要是对 DOM 元素的操作，只需要改变 dom 元素的表现而不需要返回值，所以适合链式操作。
