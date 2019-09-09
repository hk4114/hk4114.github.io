---
title: 前端预处理器sass
category: 关于技术
tags:
  - css
date: 2019-09-10
vssue: false
---

Q: 为什么要是用 css 预处理器?
A: 使css代码更容易维护，提高开发效率。

<!-- more -->

### 安装
1. 在Windows平台下安装Ruby需要先有Ruby安装包。[下载](https://rubyinstaller.org/downloads/)
2. 在安装过程中选择`add ruby executables to your path`(若不选中，就会出现编译时找不到Ruby环境的情况)
3. Ruby安装完成后，在开始菜单中找到新安装的Ruby，并启动Ruby的Command控制面板(Start Command Prompt with Ruby)
4. 安装好Ruby之后，接下来就可以安装Sass了。打开电脑的命令终端，输入`gem install sass`
5. 网络情况比较糟糕，或者下载失败的情况: 先`gem sources --remove https://rubygems.org/`然后`gem sources -a https://ruby.taobao.org/ `或者`gem sources -a http://gems.ruby-china.org`
6. 更新sass`gem update sass`
7. 卸载sass`gem uninstall sass`

### 编译

> 命令编译、GUI工具编译和自动化编译

#### 1. 命令编译(路径不能含有中文)

- 单文件编译`sass <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css` 
- 多文件编译`sass sass/:css/`

开发过程中，每次保存完都要编译一次会是一件很烦的事情，sass提供了一个`watch`方法，这样只要代码进行任何修改，都能自动监测到代码的变化，并且直接编译出来:
- `sass --watch scss.scss:style.css -style expanded/compress`
- `sass --watch sasspath/.:csspath/. -style expanded` 
后缀style，SASS提供四个编译风格的选项：
- nested：嵌套缩进的css代码，它是默认值。
- expanded：没有缩进的、扩展的css代码。
- compact：简洁格式的css代码。
- compressed：压缩后的css代码。

> 调试

使用chrome浏览器的sourcemap功能可以将本地的文件和服务器上的文件关联起来。这样，通过chrome的开发者工具调试网页(如更改一个css属性值)时，本地文件的内容也会相应地发生变化并保存。如果再使用sass的watch命令， 在调试sass文件时，就可以实时保存文件并通过浏览器看到效果。

#### 自动化编译

以 gulp编译为例:
1. npm i gulp -g(全局)
2. npm i gulp --save-dev (本地)
3. 项目根目录下创建一个名为gulpfile.js的文件
4. 新建文件package.json(效果等同于npm init)
5. `npm i gulp-sass`
```
//gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('runsass',function(){
	gulp.src('path')
	.pipe(sass())
	.pipe(gulp.dest('path'));
})

//先输出再监听
gulp.task('watchsass',function(){
	gulp.watch('path',function(){    //监听
		gulp.run('runsass')          // 所执行的任务
	})
})

//cmd --> gulp watchsass
```

### 书写

#### 1. 变量
```
//常用变量
$margin:10px
div{
	margin:$margin
}

//特殊变量
$margin:left
div{
	margin-#{$margin}:10px
}
```

#### 2. 嵌套
```
body{
	#box{
		width:100px;height:100px;background:green;
		&:hover{
			color:red
		}
	}
}

```

#### 3. mixin

```
@mixin bd($size:1px,$style:solid,$color:black){
	border:$size $style $color
}

div{
	@include bd(10px double red)
}
```

#### 4. extend 继承
```
%sad{
	border:1px dashed red
}
div{
	@extend %sad
}

```

#### 5. 公用文件
+ 新建_public.scss
+ 具体文件中引入`import "public"`