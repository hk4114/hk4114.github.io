---
title: TypeScript 基础
category: language
tags:
  - typescript
  - basic
date: 2019-04-13
---
<!-- more -->

## 运行环境

<h4>1. nodeJS 通过查看版本的方式确认是否安装成功</h4> 

```bash
node -v
npm -v
```

<h4>2. 安装TypeScript包</h4>

```bash
npm i typescript -g
tsc -V // 查看版本
```

<h4>3. 第一个程序</h4>
```bash
npm init -y //初始化项目
tsc --init // create file tsconfig.json TS项目配置文件
npm install @types/node --dev-save 解决声明模块的问题

//VScode ctrl+shift+B 构建 tsconfig.json任务
// node helloworld.js
```

## 数据类型

> 不介绍的数据类型: undefined/null/number/string/boolean

1. enum 枚举
```ts
enum REN{
    nan="nan",
    nv="nv",
    yao="yao"
}
// 编译出来
(function (REN) {
    REN["nan"] = "\u7537";
    REN["nv"] = "\u5973";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));

var REN;
(function (REN) {
    REN["nan"] = "nan";
    REN["nv"] = "nv";
    REN["yao"] = "yao";
})(REN || (REN = {}));
```

2. any

3. void 空

4. Array

5. Tuple 元祖 特殊的数组 已知元素数量和类型的数组

```
let tup1 : [string,number]

tup1 = ["this",2]
```

6. 断言 `let a:any = "123"`,在any类型的前提下，`(a as number).length` = `(<number>a).length`进行断言

## 函数

```ts
function test1(arg:number):string{ // params type ):returnValue type
    return `我今年${arg}岁。`
}
let r1:string = test1(20)//我今年20岁。


// 选择性传参 body?:string
// 默认传值   sex:string="male"
// 不确定参数个数 ...arg:string[]
```

## 类

```ts
class Human{
    name:string; // 声明
    age:number;
    constructor(name:string,age:number){ // 封装的属性进行赋值
        this.name = name
        this.age = age
    }
    say(){
        console.info(`我是${this.name},今年${this.age}岁`)
        return `我是${this.name},今年${this.age}岁`
    }
}
let shao:Human = new Human("susu",30) // 限制类与类型
console.info(shao) // Human { name: 'susu', age: 30 }
shao.say() // 我是susu,今年30岁
```

## 类的修饰符

- `public` 自己可以用，儿子可以用，new 出来的实例也可以用

- `protected` 自己可以用，儿子可以用，实例不能用

- `private` 只有自己可以用

- `readonly` 只读 只能读不能改(一旦赋值无法修改) 实例内部方法也无法改变 


## class继承

```ts
class A{
    constructor(){

    }
    public fn(){ // 父子类方法都是return value type string 会变成属性变得无法重写
        //code area
    }
}
class B extends A{
    constructor(...arg){
        super(...arg) //需要和父类的构造函数参数对应 如果出现error 尝试用interface限制然后对象输出
    }
    public fn(){
        // 先是继承了父类的方法，然后通过super关键字调用了父类的方法，实现了技能的增加。
        super.fn()
        console.info("重写了")
    }
}

```

## 命名空间

请把命名空间看成一个隔离的模块(对象)，借此与其他区分(解耦)

```ts
namespace male{
    export class Human{
        public name:string ="Jackie Chan"
        spoken(){
            console.log("male choice")
        }
    }
}

namespace female{
    export class Human{
        public name:string = "Vivian Qin"
        spoken(){
            console.log("female choice")
        }
    }
}
let human1:male.Human = new male.Human()
let human2:female.Human = new female.Human()
human1.spoken() //male choice
```