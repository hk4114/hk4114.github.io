---
title: ES Next 整理
category: 关于技术
tags:
  - js
  - ES6
date: 2019-6-17
vssue-id: false
---

自 2015 以来 JavaScript 新增的所有新特性，前端开发者必须知道的 ES10 的新功能

<!-- more -->

[[toc]]


### 箭头函数

```js
export const fn = () => {
    return false
}
// this 指向无法通过 call/bind/apply 改变 
// 由于箭头中的 this 的作用域继承自执行上下文，箭头函数自身不绑定 this，因此 this 的值将在调用堆栈中查找，
```

### [类](https://www.jianshu.com/p/c7bda350c81c)

```js
class Human{
	constructor(name) {
		this._name = name || "human";
			this._sleep= function(str){
				return this._name+"正在睡觉"+str
			}
    }
    hello(){
        return 'shit!'+this._name
    }
    static eat(food){ // 静态方法
		return this._name+"正在吃"+(food || "shit")
	}
}

Human.eat("shit") //静态方法可以直接使用类名来调用

class Man extends Human {
	constructor(...arg){
		super(arg[0])
		this._age = arg[1]
	}
	sayAge(){// prototype
		return "我今年"+this._age
    }
    hello() {
        return super.hello() + ' I am a programmer.'
    }
}

function alertMe(){
	console.info(this)
}

Object.assign(Man.prototype,{
	alertMe
})

let aMan = new Man("bigB",28)	
console.log(aMan._name)
console.log(aMan._sleep("傻逼"))
console.log(aMan.eat())
console.log(aMan.sayAge())
```

```js
// getter setter
// 通过增加方法 前缀 get 或者 set 创建一个 getter 和 setter，getter 和 setter会在你去获取特定值或者修改特定值的时候执行 get 或者 set内的相关方法。
class Person {
  constructor(name) {
    this._name = name
  }
  set name(value) {
    this._name = value
  }
  get name() {
    return this._name
  }
}
// 只有 getter，该属性无法被设置，并且设置此属性的操作都会被忽略
class Person {
  constructor(name) {
    this._name = name
  }
  get name() {
    return this._name
  }
}
// 只有一个 setter，则可以更改该值，但不能从外部访问它
class Person {
  constructor(name) {
    this._name = name
  }
  set name(value) {
    this._name = value
  }
}
```

### 默认参数 `const doSomething = (param1 = 'test') => {}`

### 模板字符串 \`${PARAMS}\`

### 多行字符串 `const string = 'first line\n' + 'second line'`

```js
const string = `
First
Second`.trim()
const string =
'first line\n \
second line'
```

### 解构赋值 `[a,b] = [b,a]` 

### 增强的对象字面量 `const x = {['a'+'_'+'b']:"z"}`


### For-of
```js
// 使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组
for (var key of Object.keys(someObject)) {
    console.log(key + ': ' + someObject[key]);
}
// 使用 Generator 函数将对象重新包装一下
function* entries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}

for (let [key, value] of entries(obj)) {
    console.log(key, '->', value);
}
// 原型上添加遍历器
Object.prototype[Symbol.iterator] = function() {
    let _this = this
    let index = 0
    let length = Object.keys(_this).length
    return {
        next:() => {
            let value = _this[index]
            let done = (index >= length)
            index++
            return {value,done}
        }
    }
}
```

### Promises

### 模块

### String 新方法 repeat()
### Object 新方法
+ `Object.is(a, b)`
+ `Object.assign()`
+ `Object.setPrototypeOf()`

### 展开运算符
### Set
### Map
### Generators

## ES7

### Array.prototype.includes()
### 求幂运算符 3 ** 2

## ES8

### 字符串填充
### Object.values()
### Object.entries()
### Object.getOwnPropertyDescriptors()
### 尾逗号
### 共享内存 and 原子操作

## ES9

### Rest/Spread Properties
### Asynchronous iteration
### Promise.prototype.finally()

## ES10

### [].flat(depth) 数组扁平化 

```js
let arr = [1,2,3,4,5,[6,7]]

arr.flat(1) || arr.flat() // [1,2,3,4,5,6,7]

let arr1= [1,2,3,[4,[5,6]]]

arr1.flat()//[1,2,3,4,[5,6]]

arr1.flat(Infinity) //[1,2,3,4,5,6] 传入 Infinity无论多深都可以展开

let arr2 = [1, 2, , 4, 5];

arr2.flat();// [1,2,4,5] 移除数组中的空项:
```

### [].flatMap() 串联两个函数map().flat(1)

```js
const arr = [1, 2, 3, 4];
console.log(arr.flatMap(x => [x, x + 10]))    // [1,11,2,12,3,13,4,14]
console.log(arr.map(x => [x, x + 10]).flat()) // [1,11,2,12,3,13,4,14]
```

### Object.fromEntries 是转换成对 [key, value] 的 Array 成为一个 Object.

```js
var arr = [['a', 0], ['b', 1]];|| new Map([['a', 0],['b', 1]])
var obj = Object.fromEntries(arr) //{a: 0, b: 1}

const arrt = Object.entries(obj) // [['a', 0], ['b', 1]]
```