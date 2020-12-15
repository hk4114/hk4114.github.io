---
title: promise详解
category: 技术
tags:
  - js
date: 2020-12-15
vssue-id: false
---
[Promise 你可能真的还没用明白（续集进阶版）](https://mp.weixin.qq.com/s/7U5DTrSjhGuU4M7uw-QIgg)

[最全面试题：你必须要懂的原生JS](https://mp.weixin.qq.com/s/kRKSRjT6Gljt5boVRuAzIw) promise 部分

[promise](https://yuchengkai.cn/docs/frontend/#promise-%E5%AE%9E%E7%8E%B0)

<!-- more -->

## 关于Promise的理解
`Promise` 有三种状态:
- `pending`: 初始状态
- `fulfilled`: 成功的操作.
- `rejected`: 失败的操作.

`rejected` 和 `fulfilled` 一起合称 `settled`。

`Promise` 对象用来进行延迟(deferred) 和异步(asynchronous ) 计算。

