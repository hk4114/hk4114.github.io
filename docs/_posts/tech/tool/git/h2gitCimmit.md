---
category: tool
title: 如何写git commit log，提高项目可读性
category: 技术
tags:
  - git
date: 2019-05-07
vssue: false
---


<!-- more -->

> Target: 提供更多的有效历史信息，方便快速浏览。

### git commit 的组成
1. `<type>`:`<subject>`
	 `<body>`

> type 种类

- **feat**:新功能
- **fix**: 修复问题
- docs: 修改文档
- style:修改代码格式，不影响代码逻辑
- refactor: 重构代码，理论上不影响现有功能
- **pref**: 提升性能
- test: 增加修改测试用例
- **revert**: 回退，建议直接使用Github Desktop回退，而不是使用命令

> subject 用一句话清楚描述这次提交做了什么？书写要遵循一下四种规则：

- 格式尽量使用谓宾，不通畅的话，可以使用主谓 `修复xxx`或者`中间件支持xxx`
- 除了名称之外，描述尽可能使用中文
- 控制在20个汉字以内

> body 对本地提交的详细描述，建议多次少量提交

> example

```md
[fix]修复苹果手机规格弹窗确认按钮样式的定位问题
测试点：自测
描述： 苹果手机 微商城的购物规格弹窗，内容滚动时遮盖购买商品数量，且样式错乱
原因： DOM节点结构不整齐
修复： 将按钮所属div独立出来进行定位。
是否影响业务代码逻辑： 无。(影响范围)
```