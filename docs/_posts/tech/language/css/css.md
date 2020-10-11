---
title: css基础
category: 关于技术
tags:
  - css
date: 2019-09-24
vssue: false
---
## 选择器
简单选择器：针对某一特征判断是否选中元素。
复合选择器：连续写在一起的简单选择器，针对元素自身特征选择单个元素。
复杂选择器：由“（空格）”“ >”“ ~”“ +”“ ||”等符号连接的复合选择器，根据父元素或者前序元素检查单个元素。
选择器列表：由逗号分隔的复杂选择器，表示“或”的关系。
## at-rule 
由一个 @ 关键字和后续的一个区块组成，如果没有区块，则以分号结束。

@charset 用于提示 CSS 文件使用的字符编码方式，它如果被使用，必须出现在最前面。这个规则只在给出语法解析阶段前使用，并不影响页面上的展示效果。

@import 用于引入一个 CSS 文件，除了 @charset 规则不会被引入，@import 可以引入另一个文件的全部内容。

@media 媒体查询

@page page 用于分页媒体访问网页时的表现设置，页面是一种特殊的盒模型结构，除了页面本身，还可以设置它周围的盒。

@ key-frames 定义动画关键帧

@ fontface 定义一种字体

@ namespace 用于跟 XML 命名空间配合的一个规则，表示内部的 CSS 选择器全都带上特定命名空间。

```css
@charset "utf-8";

@import "mystyle.css";
@import url("mystyle.css");

@media print {
    body { font-size: 10pt }
}


@page {
  size: 8.5in 11in;
  margin: 10%;

  @top-left {
    content: "Hamlet";
  }
  @top-right {
    content: "Page " counter(page);
  }
}

@font-face {
  font-family: Gentium;
  src: url(http://example.com/fonts/Gentium.woff);
}

p { font-family: Gentium, serif; }
```

## qualified rule 普通规则
- 选择器
- 声明列表
  - 属性
  - 值
    - 值的类型
    - 函数

CSS 支持一批特定的计算型函数：
calc() 函数是基本的表达式计算，它支持加减乘除四则运算。在针对维度进行计算时，calc() 函数允许不同单位混合运算，这非常的有用。
max()
min()
clamp()
toggle() 规则选中多于一个元素时生效，它会在几个值之间来回切换，比如我们要让一个列表项的样式圆点和方点间隔出现，可以使用下面代码：
attr() 允许 CSS 接受属性值的控制
```css
/* 变量 */
:root {
  --main-color: #06c;
  --accent-color: #006;
}
/* The rest of the CSS file */
#foo h1 {
  color: var(--main-color);
}

section {
  float: left;
  margin: 1em; border: solid 1px;
  width: calc(100%/3 - 2*1em - 2*1px);
}


ul { list-style-type: toggle(circle, square); }
```


### 外联样式引入
```html
<!-- link -->
<link rel="stylesheet" type="text/css" href="目标文件的路径及文件名全称" />

<!-- import -->
<style type="text/css">
@import url(目标文件的路径及文件名全称);
</style>
```
::: tips 区别
1. 老祖宗的差别：link属于XHTML标签，而@import完全是CSS提供的一种方式。 
2. link标签除了可以加载CSS外，还可以做很多其它的事情，比如定义RSS，定义rel连接属性等，@import就只能加载CSS。
3. 加载顺序的差别：当一个页面被加载的时候（就是被浏览者浏览的时候），link引用的CSS会同时被加载，而@import引用的CSS 会等到页面全部被下载完再被加载。所以有时候浏览@import加载CSS的页面时开始会没有样式。
4. 使用dom控制样式时的差别：当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的.
:::

### 选择器
#id>.class

|      name       |       example       | value |
| :-------------: | :-----------------: | :---: |
|       id        |         #id         |  100  |
|      class      |       .class        |  10   |
|     [attr]      |        p[id]        |  10   |
|  [attr=value]   |    p[id="demo"]     |  10   |
|  [attr~=value]  |  p[class~="demo"]   |  10   |
| `[attr|=value]` | `p[class|="demo"]`  |  10   |
|  [attr^=value]  |  p[class^="demo"]   |  10   |
|  [attr$=value]  |  p[class$="demo"]   |  10   |
|  [attr*=value]  |  p[class*="demo"]   |  10   |
|     element     |         div         |   1   |
|  p:nth-of-type  | p:nth-of-type(2n+1) |   1   |

### css2/3 属性
#### font
##### 设置字母大小写
```css
element{
    text-transform: capitalize; /* 文本中的每个单词以大写字母开头  */ 
    text-transform: uppercase;/* 定义文本仅有大写字母  */ 
    text-transform: lowercase;/* 定义文本无大写字母，仅有小写字母  */ 
}
```
##### 间距
```css
element{
    font-size: value;
    line-height: value;
    font-weight: value;
    font-style: value;
    font-family: xxx xxx "xxx-xxx";
    letter-spacing:value; /* 控制英文字母和汉字的字距 */
    word-spacing:value; /* 通用于英文词和词之间的间距 */
    text-shadow: value /* 设置文本样式 */
}
```

#### background
```css
element{
    background-image：url(); /* 背景图片的路径及全称 */
    background-repeat：no-repeat; /* repeat/repeat-x/repeat-y */
    /* 背景图的固定 */
    background-attachment: scroll;/* scroll(滚动)/fixed(固定) */
    background-position: left top; /* left/center/right/数值     top/center/bottom/数值 */
    background-size: value;
    background-origin: value;
    background-clip: value;
    /* 线性渐变 */
    background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
    /* 重复线性渐变 */
    background: repeating-linear-gradient(red, yellow 10%, green 20%)
}
```

#### Outline
> 设置外边框样式，外边框类似于边框，但是外边框不占用任何空间，它位于画布之上

#### 空余空间与文本溢出
```css
element{
    /* 该属性用来设置如何处理元素内的空白 */
    white-space: value; /* normal/pre/nowrap/pre-wrap /pre-line /inherit */
    /* 溢出 */
    width: value;
    white-space：nowrap;
    overflow：hidden;
    text-overflow：ellipsis; /* clip 不显示省略号,而是简单的裁切; ellipsis 当对象内文本溢出时，显示省略标记;*/
}
```
|   name   |                         description                         |
| :------: | :---------------------------------------------------------: |
|  normal  |                 默认值，空白会被浏览器忽略                  |
|   pre    |      空白会被浏览器保留，其行为方式类似HTML中的pre标签      |
|  nowrap  | 文本不会换行，文本会在同一行上继续，直到遇到`<br/>`标签为止 |
| pre-wrap |             保留空白符序列，但是正常的进行换行              |
| pre-line |               合并空白符序列，但是保留换行符                |

#### position 定位
- static
- absolute
- relative
- fixed
- sticky

#### border
```css
element{
    /* 圆角边框 */
    border-radius: value;
    /* 使用绝对或相对地址指定图像—代替border-style的显示效果 */
    border-image-source:url();
    /* 指定边框图像顶部、右侧、底部、左侧内偏移量,属性值为数字,没有单位,因为默认单位就是像素(px),可以设置为百分比,默认值为100%。分为九个区域：四个角，四边和中间。 */
    border-image-slice: value;
    /* 属性用于图像边界是否应重复（repeat）、拉伸（stretch）或铺满（round） */
    border-image-repeat: value;
}
```
#### box-shadow
```css
element{
    /* none |
    inset(阴影类型，内阴影，不写就是外阴影 
    x-offset（阴影水平偏移量）  
    y-offset（阴影垂直偏移量）  
    blur-radius（阴影模糊半径）  
    spread-radius（阴影扩展半径）  
    color（阴影颜色）) 多阴影时用逗号隔开 */
   box-shadow: value; 
}
```
#### flex
- flex-wrap：用于设置伸缩项目在主轴上的换行方式
- align-self：用在子元素上，为某一个子元素设置侧轴的对齐方式;

#### animation
```css
element{
    /* 3d z 前提 */
    transform-style:preserve-3d;
}
#box{
    width:100px;
    height:100px;
    background:#00C; 
    position:absolute;
    left:0;
    top:0;
    animation:move 2s 1s ease-in 2;
    animation-fill-mode:forward
}
/*给动画起一个名字，设置运动时间,延迟时间,运动速度曲线,运动次数(infinite无限次)*/}
@keyframes move{
	0%{left:0px}
	50%{height:300px}
	100%{left:500px;height:100px}
}
```

### 常见问题
#### 兼容元素具备最小高度自适应
```css
element{
    min-height:80px; 
    height:auto!important; 
    height:80px;
}
```

#### 浮动元素的高度塌陷
1. 给父元素添加声明 `overflow:hidden`;
2. 在浮动元素下方添加空div,并给该元素添加声明：`clear:both;height:0;overflow:hidden`;
3. 万能清除浮动法 `:after{content:"";clear:both;display:block;height:0;overflow:hidden;visibility:hidden;}`

#### 两栏布局
```html
<div>
    <div class="float"></div>
    <div class="main"></div>
</div>
<style>
.float{
    float:left
}
.main{
    overflow:hidden;
    /* 或者 */
    margin-left: value
}
</style>
```

### BFC布局规则
1.	内部的Box会在垂直方向，一个接一个地放置。
2.	Box垂直方向的距离由margin决定,属于同一个BFC的两个相邻Box的margin会发生重叠(两个盒子在不同的BFC内，就不会发生重叠)。所以如果重叠了 就在一个外面包一层warp 设置overflow: hidden;
3.	每个box的左边与包含块的左边相接触(对于从左往右的格式化，否则相反);即使存在浮动也是如此。
4.	BFC的区域不会与float box重叠(两栏布局)。
5.	BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素;反之也如此。
6.	计算BFC的高度时，浮动元素也参与计算。
1.	根元素-html
2.	float属性不为none
3.	position为absolute或fixed
4.	display为inline-block, table-cell, table-caption, flex, inline-flex
5.	overflow不为visible（hidden）
#### 常见问题
Q：给子元素margin-top，父元素跟着一起掉下来了
A：根据BFC布局规则第5条：BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。可以将父元素变成BFC，这样子元素就不会影响父元素的显示效果。
Q: 表单元素行高对齐方式不一致
A: 给表单元素添加声明：`float:left;`


### 媒体查询
```html
<!-- link元素中的CSS媒体查询 -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<!-- 样式表中的CSS媒体查询 -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
@media screen and (min-width: 320px) and (max-width: 480px) {}
</style>
```











