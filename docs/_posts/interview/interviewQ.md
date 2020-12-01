---
title: 面试问题汇总
category: 面试
date: 2019-05-07
vssue: false
---

## JS基础
### 1. 原始类型有哪几种？
八种， undefined,null,bool,string,number,symbol,object,bigint
如何判断数据类型呢？
1. typeof 除了 null,输出的是对象。和对象(函数是对象，输出function)
2. instanceof 是通过原型链判断的，A instanceof B, 在 A 的原型链中层层查找，是否有原型等于 B.prototype，如果一直找到 A 的原型链的顶端 (null; 即Object.prototype.__proto__), 仍然不等于 B.prototype，那么返回 false，否则返回 true。
3. Object.prototype.toString.call(param)
4. toString 在业务上被复写？
```js
const type = Function.prototype.call.bind(Object.prototype.toString); 
function getType(val) {
    return type(val).replace(/\[object (\w+)\]/, "$1").toLowerCase()
}
```

### 1. [wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/wx.request.html) 请求拦截与响应拦截

::: tip 关键词分析

拆分成两个问题: 请求拦截与响应拦截

请求拦截：确定是否发送请求

响应拦截：返回值做统一处理

ps: 在 `axios` 中，我们可以进行`axios.interceptors.request` 和 `axios.interceptors.response` 进行请求和响应的拦截。
:::

show code!

```js
// request interceptors -> token 认证
export default async function fetch(options) {
    const { url,payload,method = 'GET'} = options
    // 1. 获取 token
    const token = await wx.getStorage({ token:"token" }).then(res => res.data).catch(() => ''/* token 不存在你咋办 */)
    // 2. 把 token 塞进 header 中
    const header = token ? { 'WX-PIN-SESSION': token, 'X-WX-3RD-Session': token } : {}
    return wx.request({url,method,data: payload,header})
// response interceptors -> 异常状态的统一处理
    .then(async (res) => {
        const { code, data } = res.data
        // 1. 状态码异常 reject
        if (code != 200) {
            return Promise.reject(res.data)
        }
        return data
    })
    .catch((err) => {
        // 2. 请求异常 reject
        const defaultMsg = err.code === "600" ? '登录失效' : '请求异常'
        // code
        return Promise.reject({ message: defaultMsg, ...err })
    })
}

```

### 2. taro`request`的 promise实现原理

使用 `promise`在`wx.request`外包一层。

```js
function request(options) {
    return new Promise(function (resolve,reject){
        wx.request({
            options,
            success: (payload) => {
                const { code,data } = payload
                if(code !== "200"){//状态码不对
                    reject(payload.data)
                }
                resolve(payload)
            },
            fail: (error) => {
                wx.hideLoading()
                reject(error)
            },
      })
    })
}
```

### 3. 小程序生命周期 以及 app与page生命周期的运行顺序

::: tip 小程序运行机制

小程序冷启动与热启动: 热启动是第一次进入小程序，冷启动是已经用过小程序，异步下载最新的代码包，并在下一次使用时使用。如果需要马上启用则需要`wx.getUpdateManager()`

:::

[生命周期文档](https://developers.weixin.qq.com/ebook?action=get_post_info&docid=0004eec99acc808b00861a5bd5280a)

两个线程同时创建

![小程序开发框架-生命周期](https://i.bmp.ovh/imgs/2019/05/1d142958b15c39b6.png)

### 4. 小程序组件之间传参的方法

父->子：子组件通过`properties:{text:{type:string,value:"default"}}`接受参数，父组件`<child text="{{'content'}}"></child>`

子->父: 子组件通过`bindtap="aEvent" aEvent(){this.triggerEvent('myevent', { param:123})}` 传参，父组件通过`bind:myevent="aFunc" aFunc(e){console.log(e)}`

### 5. vue和小程序props是否能传函数，使子组件直接调用

父组件`:fns='function(){alert(123)}'`,子组件`props: {func: Function},`,调用`this.func()`

### 6. vue/小程序父组件如何调用子组件方法

> vue 父组件通过`$refs`获取子组件实例，并调用方法

```html
// 子组件
<template>
    <div>
        child1
    </div>
</template>
</template>

<script>
    export default {
        name: "child1",
        methods: {
            handleParentClick(e) {
                console.info(e)
            }
        }
    }
</script>
// 父组件
<template>
    <div>
        <child1 ref="child1"></child1>
    </div>
</template>
<script>
    import Child1 from './child1';
    export default {
        name: "parent",
        components: {
            child1: Child1
        },
        methods: {
            clickParent() {
                // this.$refs.child1.$emit('click-child', "high");
                this.$refs.child1.handleParentClick("ssss");
            }
        }
    }
</script>
```


> 小程序 通过`this.selectComponent`找到子组件实例

```html
// 父组件
<template>
    <countdown id="countdown" />
</template>

<script>
onReady() {
    this.countdown = this.selectComponent('#countdown');// 找到子组件实例
    this.countdown.start();//调用子组件start方法
}
</script>

```

### 7. vue 生命周期中 created如何拿到dom

```js
this.$nextTick(function () {
      let w = this.$refs.total.clientWidth
 })
```

### 8. vue八个生命周期以外其他生命周期

- [activated](https://cn.vuejs.org/v2/api/#activated)
- [deactivated](https://cn.vuejs.org/v2/api/#deactivated)
- [errorCaptured](https://cn.vuejs.org/v2/api/#errorCaptured)

### 9. this指向修改的方法

`this`的绑定方式有四种: 默认绑定、隐式绑定、显式绑定、`new`绑定

首先`this`始终指向被调用的位置，比如事件。箭头函数没有自己的`this`，所以继承与上一层有`this`变量的代码块。

- 默认绑定: 绑定在全局。
- `new`绑定: 绑定在新创建的对象上。
- 隐式绑定: obj.foo()。
- 显式绑定: call/apply/bind

### 10. 深浅拷贝 完美解决方式

```js
// 浅拷贝
// 只是复制第一层对象，但是当对象的属性也是对象(引用类型时)，实质是复制的是其引用
Object.assign({},...params)
// 深拷贝
// 首先想到的是通过JSON对象
JSON.parse(JSON.stringify(params))
// 但是会造成对象中的方法丢失(函数失效)
// 完美解决方式
function deepClone(obj) { // 递归拷贝
    if(obj === null) return null; //null 的情况
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    if(typeof obj !== 'object') {
        // 如果不是复杂数据类型，直接返回
        return obj;
    }
    /**
     * 如果 obj 是数组，那么 obj.constructor 是 [Function: Array]
     * 如果 obj 是对象，那么 obj.constructor 是 [Function: Object]
     */
    let t = new obj.constructor();
    for(let key of Object.keys(obj)) {
        // 如果 obj[key] 是复杂数据类型，递归
        t[key] = deepClone(obj[key]);
    }
    return t;
}
```
::: tip 延伸问题

如何解决for...of...方法无法遍历对象

<details>
<summary>show</summary>

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

</details>
:::


### 11. 判断数据类型 完美解决方式

`typeof` 对于基本类型，除了 `null` 都可以显示正确的类型

```js
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof b // b 没有声明，但是还会显示 undefined
typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'
```

对于 `null`和复杂数据类型，则可以通过`instanceof`进行正确判断，`instanceof`是通过原型链判断的， A instanceof B,在A的原型链中层层查找，查看是否有原型等于 B.prototype。


完美解决方式:
```js
function typeof(v){
    return Object.prototype.toString.call(v).slice(8,-1)
}
```

### 12. 什么是bundle,什么是chunk，什么是module?
>bundle是由webpack打包出来的文件，chunk是指webpack在进行模块的依赖分析的时候，代码分割出来的代码块。module是开发中的单个模块。

### 13. 如何可以自动生成webpack配置？
> webpack-cli /vue-cli /etc ...脚手架工具

### 14. webpack-dev-server和http服务器如nginx有什么区别?
>webpack-dev-server使用内存来存储webpack开发环境下的打包文件，并且可以使用模块热更新，他比传统的http服务对开发更加简单高效。

### 15. 什么是模块热更新
>模块热更新是webpack的一个功能，他可以使得代码修改过后不用刷新浏览器就可以更新，是高级版的自动刷新浏览器。

### 16. 什么是长缓存？在webpack中如何做到长缓存优化？
>浏览器在用户访问页面的时候，为了加快加载速度，会对用户访问的静态资源进行存储，但是每一次代码升级或是更新，都需要浏览器去下载新的代码，最方便和简单的更新方式就是引入新的文件名称。
在webpack中可以在output纵输出的文件指定chunkhash,并且分离经常更新的代码和框架代码。通过NameModulesPlugin或是HashedModuleIdsPlugin使再次打包文件名不变。

### 17. 什么是Tree-shaking?CSS可以Tree-shaking吗
>Tree-shaking是指在打包中去除那些引入了，但是在代码中没有被用到的那些死代码。在webpack中Tree-shaking是通过uglifySPlugin来Tree-shaking->JS。Css需要使用Purify-CSS。

### 18. 发起跨域请求时，如果发生了重定向，是否能拿到origin信息
> 不能，当请求被转发到一个非同源的站点时，origin会设置为null

### 19. ajaxs是否能拿到302的状态码
> 不能，302对于ajax是透明的，会被浏览器automatically处理掉，ajax只能拿到转发之后的那个请求结果的响应

### 20. 为什么浏览器地址栏内发起请求可以完成登录授权，但是通过fetch发起请求却无法完成鉴权
> 地址栏内发起请求，不存在跨域，请求可以完成302跳转的全过程，所以可以完成鉴权
fetch发起请求会跨域, 导致会发起 `options` 预检请求，对于 `options` 预检请求会响应`405 method not allowed` 也就无法完成302跳转全过程


### 21. 跨域情况下cookie 是否会被请求携带
> 二级域名之间发起请求时,会寻找有没有一级域名下的cookie,如果有就会带上.

### 22. 描述一下react的虚拟DOM
1. 创建一棵对象树，用于描述用户界面的外观
2. 使用DOM APIs(如 document.createElement) 将对象转换为DOM 元素
3. 页面update 时, 会通过创建描述用户界面的更新状态的新对象树，然后将其与旧对象树进行比较来执行更新




















