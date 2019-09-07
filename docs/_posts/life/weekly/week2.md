---
title: ARTS 打卡第二周
category: other
tags:
  - weekly
vssue-id: 4
---

- 整数翻转、回文数、罗马数转整数
- JS的异步
- `flat`
- js异步的分享

<!-- more -->

## Algorithm: 

### No.7 整数翻转

```js
/** 
 * Given   num = 123, -123, 120
 * return        321, -321, 21
 * @author kanelogger
 * @result runtime 84 ms ; memory 36.2 MB
*/
var reverse = function(num=0) {
  let a = Math.pow(2,31);
	let b = num.toString().replace( /\d+/g , e => +(e.split('').reverse().join('')));
  if(+b>=a-1 || +b<=-a)return 0
	return +b
};
```


```js
// 64 ms 36 MB,
var reverse = function(x) {
    const reversed =  parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
}
```

这一道题很简单，但是在处理负数的问题上，没有用到 `Math.sign()` ，造成了方法比较复杂。

### No.10 回文数

```js
/**
 * @param {number} x 
 * Input: 121      -121     10
 * Output: true    false    false
 * @return {boolean}
 * 212 ms	45.8 MB 
 */
var isPalindrome = function(x) {
    let a = x.toString(),b = a.length-1;
    if(x<0)return false
    let c = b/2;
    for(let i=0;i<c;i++){
        if(a[i]!=a[b-i])return false
    }
    return true
};

//  最佳实践
// 	212 ms	44.8 MB
var isPalindrome = function(x) {
    let w = x,
        y = 0;
    
    while(w > 0) {
        let z = w % 10;
        
        y *= 10;
        y += z;
        
        w -= z;
        w /= 10;
    }
    
    return x === y;
};

```

### No.13 罗马数转整数
```js
// 136 ms	40.1 MB
var romanToInt = function(s) {
    const m = {
        I:1,V:5,X:10,L:50,C:100,D:500,M:1000
    }
    let ans = 0
    for(let i=0,l=s.length;i<l;i++){
        if( i<l-1 && m[s[i]]<m[s[i+1]] ){
           ans-=m[s[i]]
        }
        else{
            ans+=m[s[i]]
        }
    }
    return ans
};

// 最佳实践: 132ms/40MB
let map = {
  'M' : 1000,
  'D' : 500,
  'C' : 100,
  'L' : 50,
  'X' : 10,
  'V' : 5,
  'I' : 1,
}

var romanToInt = function(s) {
  let result = 0

  for (i=0;i<s.length-1;i++){
    if(map[s[i]] < map[s[i+1]]){
      result -= map[s[i]]
    } else{
      result += map[s[i]]
    }
  }
  result += map[s[s.length-1]]
  
  return result
};
```

## Review: 阅读并点评一篇英文技术文章

JavaScript的核心是一种同步的、阻塞的单线程语言。为什么我们需要异步呢？
![粗线=程序正常运行的时间。细线=等待网络的时间。](https://i.bmp.ovh/imgs/2019/06/ff23c9d17be9a763.png)

有了异步，就可以对可能发生在后台的事情使用异步方法。
异步的演变：回调, promises, async/await
回调函数
```js
a( resultA=>{
  b( resultA,resultB => {
    c( resultB,resultC => {
      console.log(resultC)
    } ) )
  } )
} )
```
promise
```js
const doSteps = new Promise((res,rej)=>{
  // pending
  if(){
    res()
  }else{
    rej()
  }
})
doSteps()
.then( res => console.log(res))
.catch( err => console.log(err))
```
async/await 封装在 promise 顶部的语法糖

**对比promise和async/await**

```js
function getJSON(ms){
  const a = true;// control
  return new Promise((res,rej)=>{
    console.log("pending")
    if(a){
      return setTimeout(res, ms, 'resolve');
    }else{
      return setTimeout(rej, ms, 'reject');
    }
  })
}

// promise
getJSON(100)
.then(res=>console.log(res)); 
// pending
// Promise {<pending>}
// resolve

// async/await
const res = await getJSON(100);
console.log(res)
// pending
// resolve
```
一个`then`，一个`await`,区别显而易见。

注意: `await` 只能在异步函数内部调用。

```js
Promise.resolve("hi");//Promise {<resolved>: "hi"}

(async ()=> 'hi')() //Promise {<resolved>: "hi"}
```
使用async，即使您没有明确返回`promise`，它也将确保您的代码通过`promise`传递。

错误处理
```js
const A = () => {
  B()
  .then(res=>C(res))
  .catch(err=>console.log(err))
}

const A = async ()=> {
  try {
    const res = await B()
    C(result)
  }catch(err)
  console.log(err)
}
```

## Tips: 学习一个技术技巧

- `[].flat(depth)` 数组扁平化 

```js
let arr = [1,2,3,4,5,[6,7]]

arr.flat(1) || arr.flat() // [1,2,3,4,5,6,7]

let arr1= [1,2,3,[4,[5,6]]]

arr1.flat()//[1,2,3,4,[5,6]]

arr1.flat(Infinity) //[1,2,3,4,5,6] 传入 Infinity无论多深都可以展开

let arr2 = [1, 2, , 4, 5];

arr2.flat();// [1,2,4,5] 移除数组中的空项:
```

- `[].flatMap()` 串联两个函数map().flat(1)

```js
const arr = [1, 2, 3, 4];
console.log(arr.flatMap(x => [x, x + 10]))    // [1,11,2,12,3,13,4,14]
console.log(arr.map(x => [x, x + 10]).flat()) // [1,11,2,12,3,13,4,14]
```


## Share: 分享一篇有观点和思考的技术文章

1. [12张图带你理解异步JS](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247491390&idx=2&sn=c5625aa2221edd2f6a2a46e32b7b1f61&chksm=f951aa7dce26236b100f666816e63e209e087565025edb653cd587c1176fb49ee87398cd89b9&mpshare=1&scene=1&srcid=&key=899820547a7b892f1f4f5196aebcfb5080959b670d0752c08354207f11f9e99eaf4999eda5bb7c5b97a01b730d7057421c2dc3d4dfd314fd5d681326c35917fe2686a59f241d104e61efe6d77cc80abc&ascene=1&uin=NTY1NTg0Nzc1&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=F+KgirLG1wrB/UqrT8vi3fOeorBNd8tKNQ/QJchbutTFF9SCzQxPg4QRkFIe5Iaj)

2. [拆解 JavaScript 中的异步模式](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651232427&idx=1&sn=84691cca63745d36ac97b959a6fd696c&chksm=bd49412f8a3ec8398eaf2cf7eb43d5ab7ac8a98528d93a4e4a9a81f4763449c656533b0df46b&mpshare=1&scene=1&srcid=&key=c3ff9b054c1d1dbc364935c1040585f6502b2b6b6f6f8a8fcc9c4661314b491c0f587434348fd80edf39b2f7022b20d564f0f5fc2363a4b9267eb07ac03cc52e5c06734648f96bdbe95c4d1f83617034&ascene=1&uin=NTY1NTg0Nzc1&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=chJjBdGv+ajuezVMkMQfiSpjBkutrBSJ2/JVEbsrC7hho1CT6LewLJK4tqr71aP6)
