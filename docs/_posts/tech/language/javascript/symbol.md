---
title: symbol 笔记
category: 技术
tags:
  - js
date: 2019-04-17
vssue-id: 1
---

> Symbol 数据类型是表示独一无二的值。

[[toc]]


##### 1. Symbol函数前不能使用new命令，是一个原始类型的值，不是对象。
```JS
var sy1 = Symbol();
var sy2 = Symbol();
console.log(sy1 === sy2)      //false

var sy1 = Symbol('foo');
var sy2 = Symbol('foo');
console.log(sy1 === sy2)      //false
```
##### 2. Symbol值作为对象属性名时，不能用点运算符。
不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()返回。
但有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有Symbol属性名。
```JS
var mySymbol = Symbol();
// 第一种写法
var a1 = {};
a1[mySymbol] = 'Hello!';
console.log(a1[mySymbol])
		
// 第二种写法
var a2 = {
  [mySymbol]: 'Hello!'
};
console.log(a2[mySymbol])
		
// 第三种写法
var a3 = {};
Object.defineProperty(a3, mySymbol, { value: 'Hello!' });
console.log(a3[mySymbol])
```
##### 3. Symbol.for()，Symbol.keyFor()
首先在全局中搜索有没有以该参数作为名称的Symbol值，如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。和直接的Symbol就点不同了。
```JS
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

s1 === s2 // true
```

Symbol.keyFor方法返回一个已登记的Symbol类型值的key。实质就是检测该Symbol是否已创建。

```JS
var s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

var s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```

[内置的Symbol值](http://es6.ruanyifeng.com/#docs/symbol)

### 总结
1. 不能使用new命令，是一个原始类型的值，不是对象。
2. 作为对象属性名时，不能用点运算符。只能被Object.getOwnPropertySymbol()获取。
3. Symbol.for()，Symbol.keyFor()
4. 内置的Symbol属性方法。
