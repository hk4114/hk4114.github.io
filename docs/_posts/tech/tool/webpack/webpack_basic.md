---
title: 构建webpack的环境
category: 技术
tags:
  - webpack
vssue: false
---

webpack的使用与常见问题

<!-- more -->

###  构建webpack的环境
1. `cnpm i webpack -g`
2. `cnpm i webpack --save-dev`
3. `cnpm i webpack-cli -g`
4. `cnpm i webpack-cli --save-dev`

5. `cnpm install webpack-dev-server -g`
6.  运行`webpack-dev-server --progress --colors`
### 初识webpack
#### 1.特点
- 代码拆分
webpack 有两种组织模块依赖的方式，同步和异步。异步依赖作为分割点，形成一个新的块。在优化了依赖树后，每一个异步区块都作为一个文件被打包。
- Loader
 loader 转换器可以将各种类型的资源转换成 JavaScript 模块。这样，任何资源都可以成为 Webpack 可以处理的模块。webpack本身是只能处理js模块。
- 智能解析
Webpack 有一个智能解析器，几乎可以处理任何第三方库，无论它们的模块形式是 CommonJS、 AMD 还是普通的 JS 文件。甚至在加载依赖的时候，允许使用动态表达式 require("./templates/" + name + ".jade")。
- 丰富的插件

#### 2. 一个简单的例子
新建webpack.config.js
由以下四部分组成: 入口、出口、加载器、插件
```js
module.exports = {
    entry: {
        bundle1:'./main1.js',
        bundle2:'./main2.js'
    }, 
    output:{  
        path:__dirname+'/',
        filename:''[name].js''
    },
    module:{
        rules:[{
            test:/\.css$/,
            loader:['style-loader','css-loader']
        },
        {
            test:/\.(png|jpg)$/,loader:'url-loader',options:{limit:'1024'}
        }]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        })
    ]
}
```
> entry:string/array/object
- 案例1 `entry:'./path/to/my/entry/file.js'`
- 案例2 `entry:['./entry1','./entry2']` 创建多个路口
- 案例3 `entry:{app:'./src/app.js',vendors: './src/vendors.js'}` webpack从app.js和vendors.js开始**创建依赖图表**。这些图表是彼此完全分离、互相独立的。

>output


> 启动本地服务
1. `cnpm i webpack-dev-server --save-dev`
2. webpack.config.js
```js
devServer:{
    contentBase:'./',
    host:"localhost", // ipconfig
    compress: true,//是否压缩
    port:2000 //暴露的端口号
}
```
3. 这样就可以使用`webpack-dev-server`开启本地服务了
4. package.json`scripts:{"server": "webpack-dev-server --open"}`就可以使用npm run server 启动本地服务
5. webpack.config.js配置`publicPath: "temp/"`,页面`<script src="./temp/main.js"></script>`,就可以使用热更新了
[demos](https://github.com/hk4114/learn-webpack)

### 什么是bundle,什么是chunk，什么是module?
>bundle是由webpack打包出来的文件，chunk是指webpack在进行模块的依赖分析的时候，代码分割出来的代码块。module是开发中的单个模块。

### 如何可以自动生成webpack配置？
> webpack-cli /vue-cli /etc ...脚手架工具

### webpack-dev-server和http服务器如nginx有什么区别?
>webpack-dev-server使用内存来存储webpack开发环境下的打包文件，并且可以使用模块热更新，他比传统的http服务对开发更加简单高效。

### 什么是模块热更新
>模块热更新是webpack的一个功能，他可以使得代码修改过后不用刷新浏览器就可以更新，是高级版的自动刷新浏览器。

### 什么是长缓存？在webpack中如何做到长缓存优化？
>浏览器在用户访问页面的时候，为了加快加载速度，会对用户访问的静态资源进行存储，但是每一次代码升级或是更新，都需要浏览器去下载新的代码，最方便和简单的更新方式就是引入新的文件名称。
在webpack中可以在output纵输出的文件指定chunkhash,并且分离经常更新的代码和框架代码。通过NameModulesPlugin或是HashedModuleIdsPlugin使再次打包文件名不变。

### 什么是Tree-shaking?CSS可以Tree-shaking吗
>Tree-shaking是指在打包中去除那些引入了，但是在代码中没有被用到的那些死代码。在webpack中Tree-shaking是通过uglifySPlugin来Tree-shaking->JS。Css需要使用Purify-CSS。