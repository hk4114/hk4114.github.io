---
title: day-pre1
category: 技术项目应用
tags:
  - 开课吧
date: 2019-9-25
vssue: false
---

### Code 1
> 列举页面标签的种类

```js
const nodes = document.querySelectorAll("*");
const types = new Set([...a].map(v=>v.nodeName));
```

### Code 2
> 出现次数最多的五种标签

```js
const nodes = document.querySelectorAll("*");

const d = c.reduce((pre,next)=>{
    pre[next]=++pre[next]||1;
    return pre}
,{});

const e = Object.keys(d).sort((a,b)=>d[b] - d[a]).slice(0,5);
```
