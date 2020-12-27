---
title: JavaScript异常
category: 技术
tags:
  - js
date: 2020-11-22
vssue-id: false
---

- [前端常见的报错以及异常捕获](https://mp.weixin.qq.com/s/FafosfgdvUo4yu5zQ4R-xg)
- [JavaScript错误处理完全指南](https://mp.weixin.qq.com/s/I9ZrCsoNo7jrOHj8a9UW1A)

JS异常是什么？有哪些类别？

SyntaxError - 语法错误
语法错误也称为解析错误。语法错误在任何编程语言中都是最常见的错误类型，表示不符合编程语言的语法规范。
JavaScript 是一门解释性语言，执行一段代码时需要经历 词法分析 -> 语法分析 -> 语法树 就可以开始解释执行了：
词法分析是将字符流(char stream)转换为记号流(token stream)、语法分析阶段会将记号流(token stream)生成抽象语法树（AST）。

在这两个阶段，如果 Javascript引擎发现了预期之外/无法抓换的 token，或者 token 顺序和预期不一致时，就会抛出 SyntaxError。

因此 SyntaxError 应该和其他类型的异常区分开，此类异常发生在 JavaScript 解析/编译时，此类异常一旦发生，导致整个js文件都无法执行，而其他异常发生在代码运行时，这一类的错误会导致在错误出现的那一行之后的代码无法执行，但在那一行之前的代码不会受到影响。

TypeError - 类型错误
运行时最常见的异常，表示变量或参数不是预期类型，比如 new 关键字后面必须为构造函数、()前必须为函数。
`getName is not a function`

RangeError - 边界错误
```js
const array = []
array.length = -1
```

ReferenceError - 引用错误
引用一个不存在的变量时发生的错误，每当我们创建或定义一个变量时，变量名称都会写入一个变量存储中心中。这个变量存储中心就像键值存储一样，每当我们引用变量时，它都去存储中找到 Key 并提取并返回 Value，如果我们要找的变量不在存储中，就会抛出 ReferenceError。


在调用 URI 相关的方法中 URL 无效时抛出的异常，主要包括 encodeURI、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape(）几个函数：

如何处理JS异常？

JS异常有六种错误：

- SyntaxError - 语法错误
- TypeError - 类型错误
- ReferenceError - 引用错误
- RangeError - 边界错误
- URIError - URL 错误
- Error
- 自定义异常




处理异常

可以通过 Pause on exceptions 
开启该功能后，在运行时遇到会抛出错误的代码，代码的执行会自动停在该行，就像在该行打了断点一样。
这个功能可以很方便的帮我们发现未捕获的错误发生的位置。

但是，当React将用户代码包裹在try catch后，即使代码抛出错误，也会被catch。

Pause on exceptions无法在抛出错误的用户代码处暂停，因为error已经被React catch了。

除非我们进一步开启Pause on caught exceptions。

开启该功能，使代码在捕获的错误发生的位置暂停。

常规函数的错误处理
try/cache/finally



引用
- JavaScript 异常类型到底有几种？-code秘密花园 ConardLi
- JavaScript错误处理完全指南
- 不用try catch，如何机智的捕获错误