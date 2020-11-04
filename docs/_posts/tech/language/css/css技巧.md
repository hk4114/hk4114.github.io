---
title: css技巧整理
category: css
date: 2020-11-4
---

### 使用:not() 解决lists边框的问题
非常常见的场景，通常使用：last-child nth-child 选择器来覆盖原先声明应在父选择器上的样式。

比如说一个导航菜单，通过使用borders 来给每个链接Link创建分割符，然后再在加上一条规则 解除最后一个link的border
```css
.nav li {    
    border-right: 1px solid #666;  
}
.nav li:last-child {    
    border-right: none;  
}
```
它不仅强制浏览器以一种方式渲染，然后又通过特定的选择器来撤销它。这样覆盖样式是不可避免的。

我们可以通过使用：not伪类(pseudo-class) 在你想声明的元素上仅仅只使用一种样式：
```css
.nav li:not(:last-child) {    
    border-right: 1px solid #666;  
}
```
除了最后一个li以外，所有的 .nav li 都加上了border样式。

### CSS变量
```css

:root {
  --main-color: #06c;
  --accent-color: #999;
}

h1, h2, h3 {
  color: var(--main-color);
}
a[href]:not([class]),
p,
footer span{
 color: var(--accent-color);
}
```

### 超级小中
```html
<div class="parent blue" >
  <div class="box coral" contenteditable>
    :)
  </div>
</div>
```

```css
.ex1 .parent {
  display: grid;
  place-items: center;
}
```

### 可解构的自适应布局（The Deconstructed Pancake）
> `flex: 0 1 <baseWidth>`

这种布局经常出现在电商网站：在视口足够的时候，三个框固定宽度横放；在视口不够的时候（宽度在移动上面），宽度仍然固定，但是自动解构（原谅我的中文水平），不在同一水平面上。

```html
<div class="parent white">
  <div class="box green">1</div>
  <div class="box green">2</div>
  <div class="box green">3</div>
</div>
```

```css
.ex2 .parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.ex2 .box {
  flex: 1 1 150px; /*  flex-grow: 1 ，表示自动延展到最大宽度 */
  flex: 0 1 150px; /*  No stretching: */
  margin: 5px;
}
```

### 经典的侧边栏
> `grid-template-columns: minmax(<min>, <max>) ...`

同样使用grid布局，结合可以minmax()实现弹性的sidebar(这在你要适应大屏幕的时候很有用）。`minmax(<min>, <max>)`是字面意思。
```html
<div class="parent">
  <div class="section yellow" contenteditable>
  Min: 150px / Max: 25%
  </div>
  <div class="section purple" contenteditable>
    This element takes the second grid position (1fr), meaning
    it takes up the rest of the remaining space.
  </div>
</div>
```
```css
.ex3 .parent {
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
}
```

### 经典圣杯布局（古典圣杯布局）

> `grid-template: auto 1fr auto / auto 1fr auto`


```html
<div class="parent">
  <header class="pink section">Header</header>
  <div class="left-side blue section" contenteditable>Left Sidebar</div>
  <main class="section coral" contenteditable> Main Content</main>
  <div class="right-side yellow section" contenteditable>Right Sidebar</div>
  <footer class="green section">Footer</footer>
</div>
```

```css
 .ex5 .parent {
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto;
  }
  
  .ex5 header {
    padding: 2rem;
    grid-column: 1 / 4;
  }

  .ex5 .left-side {
    grid-column: 1 / 2;
  }

  .ex5 main {
    grid-column: 2 / 3;
  }

  .ex5 .right-side {
    grid-column: 3 / 4;
  }

  .ex5 footer {
    grid-column: 1 / 4;
  }
```

### RAM技巧
> `grid-template-columns: repeat(auto-fit, minmax(<base>, 1fr))`

```html
<div class="parent white">
  <div class="box pink">1</div>
  <div class="box purple">2</div>
  <div class="box blue">3</div>
  <div class="box green">4</div>
</div>
```

```css
  .ex7 .parent {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
```
作用是如果能够满足多个 box 的最小宽度（如上面提到的150px），自动弹性适应放在多行。举个例子:

当前宽度是160px（不考虑gap），那么上面四个box的宽度会适应为160px，并且分为4行；

当前宽度是310px（不考虑间隙），上面四个box分为两行，两个box平分宽度；

当满足满足一行放下3个box时，第三个box自动到第一行；

当满足满足一行放下4个box时，第四个box自动到第一行。

尝试将 将 `auto-fit` 替换为 `auto-fill`

### 卡片弹性适应性
justify-content: space-between，结合grid和flex实现完美布局。

```html
<div class="parent white">
  <div class="card yellow">
    <h3>Title - Card 1</h3>
    <p contenteditable>Medium length description with a few more words here.</p>
    <div class="visual pink"></div>
  </div>
  <div class="card yellow">
    <h3>Title - Card 2</h3>
    <p contenteditable>Long Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <div class="visual blue"></div>
  </div>
  <div class="card yellow">
    <h3>Title - Card 3</h3>
    <p contenteditable>Short Description.</p>
    <div class="visual green"></div>
  </div>
</div>
```

```css
.ex8 .parent {
  height: auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}

.ex8 .visual {
  height: 100px;
  width: 100%;
}

.ex8 .card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
}

.ex8 h3 {
  margin: 0
}
```

### 使用clamp实现fluid typography
> `clamp(<min>, <actual>, <max>)`

使用最新的 clamp() 方法可以一行实现 fluid typography。提高 UX，十分适合包含阅读内容的 card，因为我们不希望一行字太短或太长。

```html
<div class="parent white">
  <div class="card purple">
    <h1>Title Here</h1>
    <div class="visual yellow"></div>
    <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
  </div>
</div>
```

```css
.ex9 .parent {
  display: grid;
  place-items: center;
}

.ex9 .card {
  width: clamp(23ch, 50%, 46ch);
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.ex9 .visual {
    height: 125px;
    width: 100%;
  }
  
```

### 完美实现比例
> `aspect-ratio: <width> / <height>`

我们会期望图片、video、卡片能够按照固定的比例进行布局。而最新的 aspect-ratio 就能优雅的实现该功能(使用 chrome 84+)
```html
<div class="parent white">
  <div class="card blue">
    <h1>Video Title</h1>
    <div class="visual green"></div>
    <p>Descriptive Text. This demo works in Chromium 84+.</p>
  </div>
</div>
```

```css
.ex10 .parent {
  display: grid;
  place-items: center;
}

.ex10 .visual {
  aspect-ratio: 16 / 9;
}

.ex10 .card {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
```

### 一段代码实现黑暗模式

```css
html[theme='dark-mode'] {
    filter: invert(1) hue-rotate(180deg);
}

html[theme='dark-mode'] img,
picture,
video{
    filter: invert(1) hue-rotate(180deg);
}
.invert {
    filter: invert(1) hue-rotate(180deg);
}
```