---
title: html基础
category: 关于技术
tags:
  - html
date: 2019-09-16
vssue: false
---


### HTML 基本结构 
1. `<!DOCTYPE html>` 命名文档类型;`<!DOCTYPE>` 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。
2. `<html></html>` 说明我们写的是标记语言
3. `<head></head>` 文件头部
   1. `<title></title>` 文件标题（显示在状态栏上的内容）
   2. `<meta/>` 元数据标签，描述页面信息，比如`<meta charset="utf-8" />`编码格式
4. `<body></body>` 文件主体(所有要写的内容)

```html
<!DOCTYPE html>
<html>
    <head>
        <title>page name</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <img src="目标文件路径及全称" alt="图片替换文本" title="图片标题" />
        <!-- 在鼠标悬停在该图片上时显示一个小提示，鼠标离开就没有了，HTML的绝大多数标签都支持title属性，title属性就是专门做提示信息的。 -->
        <!-- alt属性是在你的图片因为某种原因不能加载时在页面显示的提示信息，它会直接输出在原本加载图片的地方。 -->

    </body>
</html>
```

### Form action

> 表单提交中get和post方式的区别有5点 

1. get是从服务器上获取数据，post是向服务器传送数据。 
2. get是把参数数据队列加到提交表单的ACTION属性所指的URL中，值和表单内各个字段一一对应，在URL中可以看到。post是通过HTTPpost机制，将表单内各个字段与其内容放置在HTML HEADER内一起传送到ACTION属性所指的URL地址。 
3. 对于get方式，服务器端用Request.QueryString获取变量的值，对于post方式，服务器端用Request.Form获取提交的数据。 
4. get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限制。但理论上，IIS4中最大量为80KB，IIS5中为100KB。 
5. get安全性非常低，post安全性较高。

### H4/5标签

#### `<abbr>` 注释标签
`<abbr>` 标签中使用全局的 title 属性，这样就能够在鼠标指针移动到 `<abbr>` 元素上时显示出简称/缩写的完整版本。
The <abbr title="People's Republic of China">PRC</abbr> was founded in 1949.
```html
The <abbr title="People's Republic of China">PRC</abbr> was founded in 1949.
```

#### 命名锚点
1. 命名锚点的作用：在同一页面内的不同位置进行跳转。
2. 给元素定义命名锚记名
语法：`<element id="命名锚记名"></element>`
3. 命名锚记连接
语法：`<a href="#命名锚记名称"></a>`

#### 结构化标签
- header 
- nav 
- section 
- article 
- aside 
- footer 
- main 
- figure `<figure><figcaption>目标</figcaption>内容</figure>`


#### form element
- autocomplete属性：规定form或input域应该拥有自动完成功能，是一个节省输入时间，同时也十分方便的功能。只有三种：on/off/""。on显示指定候补输入的数据列表，使用datalist元素与list属性提供候补输入的数据列表，自动完成时，可以理解datalist元素中的数据作为候补输入的数据在文本框中显示.
- multiple:可以输入一个或多个值，每个值之间用逗号分开,如果要获取其中的值在用split获取.
```html
<fieldset>
   <!-- 一个框 -->
   <legend>标题</legend>
   <label for="one">haochanghaogfasf</label>
   <input type="text" name="" id="one"/>
   
   <input type="file" />

   <input type="image" width="100" height="100" border="2" src="上传图片" />

   <select name="">
      <optgroup label="黑龙江"> 
         <option value="haerbin">哈尔滨</option> 
         <option value="mudanjiang">牡丹江</option> 
      </optgroup>  
   </select>

   <input type="email" />
   <input type="tel" />
   <input type="url" />
   <input type="number" min="9" max="20" step="3"/>

   <input type="text" id="text">
   <input type="range" min="10" max="100" step="5" value="2" id="range" onchange="text.value = range.value">
   
   <!-- <input type="date/month/week/time/datetime-local" name="user_date" /> -->
   <input type="date" class="datapicker" />

   <input type="color" />
   <input type="search" />


   <!-- datalist 此标记为input 标记定义一个下拉列表,配合option标签 -->
   <p>浏览器版本：<input list="words"></p>
   <datalist id="words">
      <option value="浏览器"></option>
      <option value="Firefox"></option>
      <option value="Sogou"></option>
      <option value="Maxthon"></option>
   </datalist>
</fieldset>
```

#### media
1. audio
```html
<audio src="someaudio.wav" autoplay controls loop muted preload>
您的浏览器不支持 audio 标签。
</audio>
```
2. video 比 `audio` 多一个 poster的属性，该属性是url，是播放键的图片。
3. img
4. source
```html
<video width="320" height="240" controls>
<source src="/i/movie.mp4" type="video/mp4" media="screen and (min-width:320px)">
<source src="/i/movie.ogg" type="video/ogg" media="screen and (min-width:320px)">
Your browser does not support the video tag.
</video>
```

#### `progress` 进度条标签

下载进度：<progress value="22" max="100"></progress>

```html
下载进度：
<progress value="22" max="100">
</progress>

<p><b>注释：</b>Internet Explorer 9 以及更早的版本不支持 <progress> 标签。</p>
```

#### `dialog` 与 `summary`
> `<dialog> <summary> tips </summary> content </dialog>`

#### `ruby` 与 `rt`
> 漢 <rt>han</rt> `<ruby> 漢 <rt>han</rt> </ruby>`
 
#### wbr元素             
> 表示软换行;与br元素的区别：br元素表示此处必须换行；wbr表示浏览器窗口或父级元素足够宽时（没必要换行时），不换行，而宽度不够时主动在此处换行。









