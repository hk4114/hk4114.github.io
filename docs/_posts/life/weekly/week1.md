---
title: ARTS 打卡第一周
tags:
  - 周报
vssue-id: 4
---

算法两数之和，`async/await`在`filter`中失效，拓展运算符进行数组和对象的合并等操作，网络协议tcp。

<!-- more -->

[[toc]]

## Algorithm: No.1 两数之和

```js
/** 
 * Given   nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return  [0, 1].
 * @author kanelogger
 * @result runtime 108ms ; memory 34.7 MB
*/
var twoSum = function(nums, target) {
    for(let i = 0,l = nums.length;i<l;i++){
        for(let j = i+1;j<l;j++){
            if(nums[i]+nums[j] == target)return[i,j]
        }
    }
};
```

> One of the best answers in discussions

```js
/** 
 * @result runtime 52ms ; memory 34.6MB 
*/
var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let map = {};
    for(let i = 0; i < len; i++) {
        let n = target - nums[i];
        let find = map[n];
        if(find !== undefined) return [find, i];
        else map[nums[i]] = i;
    }
};
```
只遍历一次数组，每一步都会将`target`与当前`nums[i]`进行对比，如果`map`中有对应的`值`,则返回`值与当前项索引`，没有则将`值`作为key，索引为value存入map.

> 胡思乱想 `[9,8,7,6,5]` key与value对调。

```js
function c(arr){
    let obj = {}
    for(let i =0;i<arr.length;i++){
        obj[arr[i]] = i
    }
    return obj
}

console.log(c(arr))
```

## Review: 阅读并点评一篇英文技术文章

> 原文地址: [When a Filter Goes Wrong: Adventures in Async/Await](https://www.jimhribar.com/adventures-in-async-await/)

作者通过六段代码向我们展示了`filter`在处理异步时是如何失效的，以及对应的解决办法。

> 常规用法 例子: 取数组偶数

```js
// normal
const arr = [1,2,1,2];
const results = arr.filter(v=> v%2 == 0);
// expected output [2, 2]
```

> 嵌套函数

```js
// normal
const double = v => v%2;
const arr = [1,2,1,2];
const results = arr.filter( v=> double(v) == 0);
// expected output [2,2]
```

> 嵌套异步函数

```js
const double = v =>{
    return new  Promise(resolve=>{
        setTimeout(()=>{
            resolve(v%2)
        },1000)
    })
}
const arr = [1,2,1,2];
const results = arr.filter( v=> double(v) == 0);
// inexpected output []
```
作者告诉我们，使用类似的异步方法，结果是一样的，调用函数不能返回给我们想要的结果。原因是输出在运行完成之前。即使`filter` 已经返回，异步操作仍在触发。

> 使用 async/await

```js
const double = v =>{
    return new  Promise(resolve=>{
        setTimeout(()=>{
            resolve(v%2)
        },1000)
    })
}
const arr = [1,2,1,2];
const results = arr.filter( async v => await double(v) == 0);
// inexpected output [1, 2, 1, 2]
```

输出的是我们完整的原始数组。延时依然存在，平常我们都假定 `async/await`会在`promise`执行有结果的时候再处理结果。
经过大量的搜索，确认`filter`天然不支持`async/await`。在`filter`函数体外增加`await`这个方案也是不行的。
最后作者得出了一个不怎么优雅的解决方案。

```js
const double = v =>{
    return new  Promise(resolve=>{
        setTimeout(()=>{
            resolve(v%2)
        },1000)
    })
}
const arr = [1,2,1,2];
const results = [];
const job = async () => {
    for (let value of arr) {
    if ((await double(value)) == 0) {
      results.push(value);
    }
  }
}
job().then(() => {
  console.log(results);
});
// expected output [2,2]
```

最后作者对await失效的原因还是很费解。me too!

## Tips: 学习一个技术技巧

> 使用拓展运算符合并对象和对象数组

```js
// 合并对象
const p1 = { name: 'zhangsan', age: 18 }
const p2 = { name: 'lisi', address: 'the west lake' }

const p = { ...p1, ...p2 };
console.log(p); // {name: "lisi", age: 18, address: "the west lake"}

// merging an array of objects into one
const cities = [
    { name: 'Paris', visited: 'no' },
    { name: 'Lyon', visited: 'no' }
];

const result = cities.reduce((pre, item) => {
  return {
    ...pre,
    [item.name]: item.visited
  }
}, {});

console.log(result);
/* outputs
Berlin: "no"
Genoa: "yes"
*/

```

> 解构原始数据

```js
const originData = {
    name: "zhangsan",
    nickName: "dege",
    email: "nozuorenJoJo@dio.com",
    avatar:"image-path.webp",
    followers: 100,
    following: 1024
}

let dataMain = {}, dataDetail = {};
({ name: dataMain.name,nickName: dataMain.nickName,...dataDetail } = originData);
console.log(dataMain) // {name: "zhangsan", nickName: "dege"}
console.log(dataDetail) // {email: "nozuorenJoJo@dio.com", avatar: "image-path.webp", followers: 100, following: 1024}
```

> 带条件的对象属性

```js
const getUser = sign => {
    return {
        name:"zhangsan",
        age: 18,
        ...(sign? { isSB:sign } :null)
    }
}
const u = getUser(true)
console.log(u) // {name: "zhangsan", age: 18, isSB: true}
```

## Share: 分享一篇有观点和思考的技术文章

[详解三次握手和四次挥手：遇到心动的女孩时，如何去把握？](https://segmentfault.com/a/1190000019052710)