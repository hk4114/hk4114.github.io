---
title: 周报第三期
---

## Algorithm:
### 20 有效括号
```javascript
var isValid = function(s) {
  let r = s.split("");
  let a = [];
  const diction = {
    '[':']',
    '(':')',
    '{':'}'
  };
  for (let i = 0; i < r.length; i++) {
    if(i >= 1 && r[i] === diction[a[a.length-1]]) {
      a.pop()
    }else {
      a.push(r[i]);
    }
  }
  return !a.length
};

// 用一个 map 来维护左括号和右括号的对应关系
const diction = {
  "(": ")",
  "[": "]",
  "{": "}",
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  // 结合题意，空字符串无条件判断为 true
  if (!s) {
    return true;
  }
  // 初始化 stack 数组
  const stack = [];
  // 缓存字符串长度
  const len = s.length;
  // 遍历字符串
  for (let i = 0; i < len; i++) {
    // 缓存单个字符
    const ch = s[i];
    // 判断是否是左括号，这里我为了实现加速，没有用数组的 includes 方法，直接手写判断逻辑
    if (ch === "(" || ch === "{" || ch === "[") stack.push(diction[ch]);
    // 若不是左括号，则必须是和栈顶的左括号相配对的右括号
    else {
      // 若栈不为空，且栈顶的左括号没有和当前字符匹配上，那么判为无效
      if (!stack.length || stack.pop() !== ch) {
        return false;
      }
    }
  }
  // 若所有的括号都能配对成功，那么最后栈应该是空的
  return !stack.length;
};
```

### 71 简化路径
```javascript
var simplifyPath = function(path) {
    const paths = path.split("/");
    let r = [];
    for (let i = 0; i <= paths.length; i++) {
        if (paths[i]) {
            if(paths[i] == '..') {
                r.pop();
            }else if(paths[i] !== '.'){
                r.push(paths[i])
            }
        }
    }
    return "/" + r.join("/")
};

var simplifyPath = function(path) {
    let ad = path.split("/")
    let op=[]
    for(let i=0;i<ad.length;i++){
        if(ad[i]==""||ad[i]=="."){
            continue
        }
        else if(ad[i]==".."){
            op.pop()
        }
        else{
            op.push(ad[i])
        }
    }
    return '/' + op.join('/')
};
```

有效括号和简化路径都是非常典型的栈数据结构的题目，栈的特点就是先进后出，可以理解为：吃东西然后吐出来。
### 1 两数之和
```javascript
function twoSum(nums,r) {
  let map = {};
  for(let i = 0; i < nums.length; i++) {
    const surplus = r - nums[i];
    const find = map[surplus];
    if(find !== undefined) {
      return [find, i];
    }else{
      map[nums[i]] = i;
    }
  }
}
```
### 509 斐波那契
```javascript
function fib(N) {
  if (N < 2) {
    return N
  }
  return fib(N-1) + fib(N-2)
}

// 递推 O(n)
var fib = function(N) {
    let cache = [];
    for(let i = 0; i <= N; i++){
        if(i == 0 || i == 1) {
            cache[i] = i;
        }else{
            cache[i] = cache[i-1] + cache[i-2]
        }
    }
    return cache[N]
};
```
斐波那契和两数之和的共同点都是可以通过缓存来实现。

## Review: 阅读并点评一篇英文技术文章

## Tips: 学习一个技术技巧
### window.onload与document.ready
#### 共同点:
表面上看都是页面加载时就去执行一个函数或动作。
#### 区别:

1. 执行时间<br />window.onload所有资源加载完毕后才能执行。JavaScript此时才可以访问网页中的任何元素。<br />$(document).ready()是DOM结构绘制完毕后就执行。此时，网页的所有元素对jQuery而言都是可以访问的，但是，这并不意味着这些元素关联的文件都已经下载完毕。
2. 编写个数不同<br />window.onload不能同时编写多个，会出现覆盖的问题。<br />$(document).ready()可以同时编写多个，并且都可以得到执行。
3. 简化写法<br />window.onload没有简化写法 ；<br />$(document).ready(function(){})可以简写成$(function(){});
### 求交集
a.filter(v => b.includes(v));
### 非交集
a.concat(b).filter(v => !a.includes(v) || !b.includes(v))
### JSON.stringify() 的秘密特性
stringify 函数也可以有第二个参数[]
```javascript
var product = {
    name: "zhangsan",
    age: 18
}
JSON.stringify(product,['name']) // "{"name":"zhangsan"}"

JSON.stringify(product,(key ,value)=> {
    if(typeof value === 'string') return undefined;
    return value
}) // "{"age":18}"
```

stringify 函数也可以有第二个参数func
## Share: 分享一篇有观点和思考的技术文章
[该网站为中文教程，使用通俗的语言，介绍各种设计模式，图文并茂。此外，还有代码重构方面的英语内容](https://refactoringguru.cn/design-patterns)<br />[该网站收集各种思考工具（比如决策树和冰山模型），这些工具可以帮助你解决问题、制定决策和理解系统。](https://untools.co/)
