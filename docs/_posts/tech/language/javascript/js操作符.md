---
title: js操作符
category: 技术
tags:
  - js
date: 2020-11-22
vssue-id: false
---
- ??
- ??=
- **
- | 非大数取整
- 截取数组
- 获取数组中的最后一项

<!-- more -->
### ?? 操作符

如果第一个参数不是null/undefined，返回第一个参数，否则，它将返回第二个参数。我们来看一个例子。

```js
null ?? 5 // => 5
3 ?? 5 // => 3
```

### ??= 操作符

这个赋值操作符只有在当前值为空或未定义的情况下才会赋一个新的值。

```js
var x = null;
var y = 5;
console.log(x ??= y) // 5
console.log(x = (x ?? y) // 5
```

### ** 幂等函数操作符

```js
console.log(2 ** 3);
Math.pow(2, n);
2 << (n - 1); // << 只有底数为2时才有用
```

### 快速浮点数转整数

```js
console.log(23.9 | 0);  // Result: 23
console.log(-23.9 | 0); // Result: -23
// 可以使用~~来获得相同的舍入效果
```

### 截取数组

```js
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 4;
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array = array.slice(0, 4);
```

### 获取数组中的最后一项

```js
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.slice(-1)); // Result: [9]
console.log(array.slice(-2)); // Result: [8, 9]
console.log(array.slice(-3)); // Result: [7, 8, 9]
```

之前我获取的方式就显得有点麻烦了。

```js
const arr = [1,2,3,4,5];

console.log(arr[arr.length - 1])
```

### 拓展运算符动态设置对象属性
```js
let obj = {A:0,B:1,C:2};
let b = {...(obj.B ? obj : null)} // {A:0,B:1,C:2}
b = {...(obj.A ? obj : null)} // {}
```

### 函数带默认参数时将生成声明作用域
```js
var x = 10;

function fn(x = 2, y = function () { return x + 1 }) {
  
  var x = 5;
  return y();
}

fn();   // 3
```

### 重复解构对象
```js
const obj = {
  a: {
    b: 1
  },
  c: 2
};

const { a: { b }, a } = obj;
// b => 1
```