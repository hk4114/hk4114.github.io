---
title: box-shadow和clip-path同时使用的问题
category: 关于技术
tags:
  - 翻译
  - css
date: 2019-04-21
vssue-id: 2
---

`box-shadow` 和 `clip-path` 同时使用时，会出现`box-shadow`失效的问题。

解决方法: 包一层`wrap`，使用滤镜`filter:drop-shadow`来实现效果。

<!-- more -->

# [CSS] "box-shadows" 和 "clip-path" 同时使用出现的问题

> Author: [Chris Coyier](https://css-tricks.com/author/chriscoyier/)

> 原文: [Using “box shadows” and clip-path together](https://css-tricks.com/using-box-shadows-and-clip-path-together/)

[[toc]]

`box-shadow` 和 `clip-path` 同时使用时，会出现`box-shadow`失效的问题。

解决方法: 包一层`wrap`，使用滤镜`filter:drop-shadow`来实现效果。

接下来，让我们一步步来试验看看：

## 搞个盒子

```vue
<template>
    <div>
        <span class="tag">Tag</span>
    </div>
</template>

<style>
html,body{
    height: 100%;
    background: #fff0dc;
    display: grid;
    place-items: center;
    margin:0
}
.tag{
    background: #FB8C00;
    color: #222;
    padding: 2rem 3rem 2rem 4rem;
    font: bold 32px system-ui;
}
</style>
```

<div align="center">
    <img src="https://i.bmp.ovh/imgs/2019/04/dedd783d04f41bc3.png" alt="盒子"/>
</div> 


## 给个形状

使用 `clip-path` 对盒子进行裁剪。

```vue
<style>
.tag{
    /*...*/
    clip-path: polygon(30px 0%,100% 0%,100% 100%,30px 100%,0 50%)
}
</style>
```
<div align="center">
    <img src="https://i.bmp.ovh/imgs/2019/04/4f7de4924dc90b8e.png" alt="标签"/>
</div> 

## 搞个阴影 ?

这时候尝试给盒子设置 `box-shadow`。会发现没有任何效果，当以为是因为语法问题闹心的时候，其实这个问题是因为 `clip-path` 在裁剪形状的同时，把阴影也裁剪了。

```vue
<style>
.tag{
    /*...*/
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
</style>
```

<div align="center">
    <img src="https://i.bmp.ovh/imgs/2019/04/4f7de4924dc90b8e.png" alt="标签"/>
</div> 


## 套个`drop-shadow`

试着在元素外套上一层 `wrap` ，在 `wrap` 上使用；滤镜 `box-shadow` 用来代替 `box-shadow`。不使用 `box-shadow`的原因是因为 `wrap` 没有进行裁剪，会出现一个块状的阴影。

```vue{3,7,19,26}
<template>
    <div>
        <span class="tag-wrap">
            <span class="tag">
                Tag
            </span>
        </span>
    </div>
</template>
<style>
html,body{
    height: 100%;
    background: #fff0dc;
    display: grid;
    place-items: center;
    margin:0
}
.tag-wrap{
    filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
}
.tag{
    background: #FB8C00;
    color: #222;
    padding: 2rem 3rem 2rem 4rem;
    font: bold 32px system-ui;
    clip-path: polygon(30px 0%,100% 0%,100% 100%,30px 100%,0 50%)
}
</style>
```

<div align="center">
    <img src="https://i.bmp.ovh/imgs/2019/04/7157b504d7db64e5.png" alt="标签"/>
</div> 

以上。