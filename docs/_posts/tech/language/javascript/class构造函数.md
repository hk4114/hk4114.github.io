---
title: class 构造函数
category: 关于技术
tags:
  - js
  - ES6
date: 2019-6-17
vssue-id: false
---

1. 是语法糖
```js
//ES5构造函数写法
function Point(x,y){
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function(){
	return `(${this.x},${this.y})`
}

var p1 = new Point(1,2);
console.log(p1.toString())

//class构造函数写法
class PointClass{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	
	toString(){
		return `(${this.x},${this.y})`
	}
}
var p2 = new PointClass(3,4)
console.log(p2.toString())
```

2. 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。
```js
class PointClass{
   constructor(x,y){
    this.x = x;
    this.y = y;
    }
}
function toString(){
  return `(${this.x},${this.y})`//(undefined,undefined)
}
Object.assign(Momo.prototype,{usay})
console.log(Momo.prototype.usay())
```

3. Class类的内部所有定义的方法，都是不可枚举的（non-enumerable）。采用 ES5 的写法，方法就是可枚举的。

4. 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

5.  不存在变量提升

6. 私有方法和私有属性
 - 方法1 通过`_`进行命名

```js
class Widget {
	joke(baz){
		this._bar(baz);
	}
	
	_bar(baz){ //私有
		return this.snaf = baz
	}
}
```
   - 方法2 apply/call/bind
```js
class Widaget{
	foo(baz){
		bar.call(this,baz)
	}
}
function bar(baz){
	return this.snag = baz
}
```
- 方法3 **Symbol** (项目开发中最主要的方法)
```js
const bar = Symbol('bar');
const snaf = Symbol('snaf')

export default class myClass{
	//公有方法
	foo(baz){
		this[bar](baz);
	}
	[bar](baz){
		return this[snaf] = baz
	}
}
```

构造函数
```js
function Human(name){
	this._name = name || "human" // 私有属性
	this._sleep = function(str){ // 私有方法
		return this._name+"正在睡觉"+"str"
	}
}
Human.prototype.eat = function(food){
	return this._name+"正在吃"+(food?food:"shit")
}
```
1. 原型继承 原型继承最重要的一点就是 使用prototype = new Father()
```js
function Man(name){
	//this._name = name || "man" //覆盖
	this._sex = "male"
}
Man.prototype = new Human()
Man.prototype.constructor = Man // 没有这一步 函数的构造器将指向human

let aMan = new Man("haha")
console.log(aMan._name) //human
console.log(aMan._sex) //male
console.log(aMan.eat("pinaple")) // human正在吃pinaple
console.log(aMan.eat("pinaple")) // human正在睡觉pinaple
```
原型继承可以复用父类的属性方法却无法传参(除非覆盖)

2. 构造函数继承
```js
//构造函数继承 只能继承父类的实例属性和方法，不能继承原型属性/方法
function Man(name){
	Human.call(this,name)
	this._name = name || "man"
	console.log(this)
}
let aMan = new Man("joke")
console.log(aMan._name) // joke
console.log(aMan._sleep("sb"))
console.log(aMan.eat())// throw error not a function
```

3. 寄生组合继承 es6 class extends本质 原型式继承的object方法本质上是对参数对象的一个浅复制。
```js
// 要用到的函数
function object(o){
	function F(){}
	F.prototype = o;
	return new F();
}

function inheritPrototype(subType,superType){
	let prototype = object(superType.prototype)
	// let prototype = Object.create(superType.prototype) // 效果就是上面那个函数
	prototype.constructor = subType
	subType.prototype = prototype
}

function Man(name,age){
	Human.call(this,name)
	this._age = age
}

Man.prototype.sayAge = function(){
	return "我今年"+this._age
}
inheritPrototype(Man,Human)
let aMan = new Man("bigB",28)	
console.log(aMan._name)
console.log(aMan._sleep("傻逼"))
console.log(aMan.eat())
console.log(aMan.sayAge())
```

```
class Human{
	constructor(name) {
		this._name = name || "human";
			this._sleep= function(str){
				return this._name+"正在睡觉"+str
			}
	}
	eat(food){
		return this._name+"正在吃"+(food || "shit")
	}
}

class Man extends Human {
	constructor(...arg){
		super(arg[0])
		this._age = arg[1]
	}
	sayAge(){// prototype
		return "我今年"+this._age
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
