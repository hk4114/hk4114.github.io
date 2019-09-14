---
title: 如何使用好TypeScript
category: language
tags:
  - ts
date: 2019-04-28
vssue: false
---

本文是[TypeScript - 一种思维方式](https://zhuanlan.zhihu.com/p/63346965)的阅读笔记

<!-- more -->

# 如何使用好TypeScript

### 1. 借助create-react-app 和 yarn 搭建一个基于TS的项目

```sh
# 使用yarn
yarn create react-app <my-app> --typescript
# 使用 npx
npx create-react-app <my-app> --typescript
# 使用create-react-app
create-react-app <my-app> --scripts-version=react-scripts-ts
```

### 2. 类型
::: tip
数据类型:

boolean,number,string,[],tuple,enum,any,void,null,undefined,never,object
:::

- `enum`

```ts
enum MediaTypes {
  JSON = "application/json"
}

fetch("https://swapi.co/api/people/1/",{
  headers:{
    Accept: MediaTypes.JSON
  }
})
.then(res=>{
  console.log(res)
  res.json()
})
```
::: warning

**延伸问题:fetch以及其跨域如何解决？**

[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

[fetch 跨域请求](https://segmentfault.com/a/1190000015995283)

[Fetch进阶指南](https://segmentfault.com/p/1210000009184668/read)
:::

- `never` 永远不会执行到这里，常和 `switch`  `case`的 `default`中，防止case未处理

```ts
enum ShirtSize {
  XS,
  S,
  M,
  L,
  XL
}
console.log(ShirtSize.XS)

function assertNever(v: never){
  console.log(Error("unexpected"))
}

function prettyPrint(size: ShirtSize){
  switch (size) {
    case ShirtSize.S: console.log("small");return "small";
    case ShirtSize.M: return "medium";
    case ShirtSize.L: return "large";
    case ShirtSize.XL: return "extra large";
    // case ShirtSize.XS: return "extra small";
    default: return assertNever(size);//如果没有判断完全会报错
  }
}

console.log(prettyPrint(0)) //"extra small"

```


[消化学到的新概念-有趣网课](https://egghead.io/courses/advanced-static-types-in-typescript)

### 模仿实践

[TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) ，这是微软为 TS 初学者提供的一个非常好的资料，可以继续使用我们上面构建的 playground ，参照这个仓库的 readme 写一次，差不多就能知道 TS 结合 React 的基本用法了

[GitHub - react-typescript-cheaTSheet](https://github.com/sw-yx/react-typescript-cheatsheet)，这个教程也比较简单，不过上面那个教程更近了一步，依据其 readme 继续改造我们的 playground 后，我们能知道，React + Redux + TypeScript 该如何配合使用；

[react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide) ，这个教程则展示了基于 TypeScript 如何应用一些更复杂的模式，我们也可以模仿其提供的用法，将其应用到我们自己的项目中；

[Ultimate React Component Patterns with Typescript 2.8](https://link.juejin.im/?target=https%3A%2F%2Flevelup.gitconnected.com%2Fultimate-react-component-patterns-with-typescript-2-8-82990c516935) ，这篇文章则可以做为上述内容的补充，其在[掘金](https://juejin.im/post/5b07caf16fb9a07aa83f2977)上有汉语翻译，点赞量非常高，看完之后，差不多就能了解到如果使用 TS 应对各种 React 组件模式了。


[Use TypeScript to develop React Applications — egghead.io](https://egghead.io/courses/use-typescript-to-develop-react-applications)，随后如果想再轻松一点，则可以再看看这个网课，跟着别人的讲解，回头看看自己模仿着写的一些代码，也许会有不同的感触；

### 更深的理解
[TypeScript Compiler Internals · TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/docs/compiler/overview.html) ，TS 编译的核心还是 AST，这篇文章讲解了 TS 编译的五个阶段（ Scanner /Parser / Binder /Checker /Emitter ）分别是怎么工作的；
[Learn how to contribute to the TypeScript compiler on GitHub through a real-world example](https://dev.to/remojansen/learn-how-to-contribute-to-the-typescript-compiler-on-github-through-a-real-world-example-4df0)，则是另外一篇比较好的了解 TS 运行原理的资料。