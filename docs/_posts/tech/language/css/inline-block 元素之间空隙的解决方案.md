---
title: inline-block 元素之间空隙的解决方案
category: 技术
tags:
  - css
date: 2019-05-07
vssue: false
---

![这种样式不是我们希望得到的样式](http://upload-images.jianshu.io/upload_images/48928-0ceb66b76015b18c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<!-- more -->

>作者:[Chris Coyier](https://css-tricks.com/author/chriscoyier/)

### 问题描述

```html
<nav>
	<a href="#">One</a>
	<a href="#">Two</a>
	<a href="#">Three</a>
</nav>
```


```css
nav a{
	display: inline-block;
	padding:5px;
	background: red;
}
```

**最后的结果**

通常我们希望设置`inline-block`的元素之间紧密贴合，特别是它是头部导航的情况下，而不是像这样有尴尬的小间隙。

### 问题的解决

1. 移除间隔

```html
<!-- 除首元素之外 后续元素左边增加了一个空格的问题 -->
<a href="#">
One</a><a href="#">
Two</a><a href="#">
Three</a>
```

> 或者

```html
<nav>
<a href="#">One</a
><a href="#">Two</a
><a href="#">Three</a>
</nav>
```

> 或者

```html
<nav>
	<a href="#">One</a><!--
	--><a href="#">Two</a><!--
	--><a href="#">Three</a>
</nav>
```

[三种效果显示](http://codepen.io/chriscoyier/pen/hmlqF)

2. CSS控制

```css
/* 存在问题: 不同显示屏 margin值不同 */
nav a{
    margin-right:-5px
}
```

3. 跳过尾标签

```html
<nav>
	<a href="#">One
	<a href="#">Two
	<a href="#">Three
</nav>
```

4. 设置字体大小为0

```css
nav{
    font-size:0
}
nav a{
    font-size: 16px
}
```

Matt Stow发现了这种hacker方法，但是在Android手机上还是会出现这种问题。“Jellybean并不会把空格删除，而且Jellybean会在最后一个元素留一点随机的小空隙。”[See research](http://codepen.io/stowball/details/LsICH)


而且需要注意的是，如果你设置了字体`em`,这些0大小的字体会产生一些问题：他的子元素也都会是0字节，`rem`在这里会有所帮助，否则任何其他非级联字体大小都会让它反弹。


还有一个怪异之处，Doug Stewart告诉我如果我使用`@font-face`并使用了这个技巧，那字体图标在Safari 5.0.x 中失去抗锯齿的能力。[test case](http://jsfiddle.net/39GZd/7/)[screenshot](https://css-tricks.com/wp-content/uploads/2012/04/Screen-Shot-2013-06-11-at-4.23.03-PM.png)

5. 使用浮动来代替

> 译者: 我只是想用行内块，用浮动太麻烦了

6. 使用弹性盒来代替

> 译者：解决行内块的问题，我不想因此带来兼容性问题哦。

[原文链接](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)