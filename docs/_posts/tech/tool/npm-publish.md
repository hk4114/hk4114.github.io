---
title: 发布一个NPM包
tags:
  - npm
vssue: false
---


如何发布一个npm包

<!-- more -->

```json
{
  "name": "package-name",
  "version": "0.0.1",
  // 主版本: 大的变动、可能影响了向后的兼容性
  // 次要版本: 增加了新的特性不改变已有特性
  // 小版本: 修改bug或其他小的改动
  "description": "这是xxxx",
  "main":"index.js", // 项目主要入口，启动项目的文件 -> react
  "homepage": "主页信息 表示项目首页的url",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "bugs": { // 接收问题反馈的url email | git issues
    "url": "https://github.com/xxx/xxx/issues",
    "email": ""
  },
  "repository": { // 仓库地址
    "type": "git",
    "url": "git+https://github.com/xxx.git"
  },
  "keywords": [],
  "author": {
    "name": "kane",
    "email": "",
    "url":""
  },
  "files": [ // 代码包下载安装完成时包括的所有文件 [*] 表示所有
    "index.js",
    "createReactApp.js"
  ],
  // "private": true, // 无法通过 npm publish 发布代码
  "engines": { // 项目依赖的环境
    "node": ">=12",
    "npm": ">= 4.0.0"
  },
  "dependencies": { // 应用依赖/业务依赖 [常用] npm i xxx --save 线上代码的一部分
    "foo": ">1.0.0 <=3.0.0", // ^1.2.3 兼容版本 ~1.2.3 最近可用
  },
  "devDependencies": { // 开发依赖 [常用] npm i xxx --save-dev 单元测试 打包工具 等

  },
  "peerDependencies": { // 同伴依赖 
    // 发布包的需求可能用到 提示宿主环境去安装插件，解决插件与所依赖包不一致的问题 例如 element-ui
    // 意思就是 如果安装本包，则需要按照要求安装A,B,C包
    // 如果组件与环境依赖的包不一致，则会告警 手动安装 组件的依赖包
  },
  "bundledDependencies": [ // 打包依赖
    // npm pack 
    // .tgc 压缩包
    // 必须在 devDependencies dependencies 声明过 npm i xxx.tgz 就同样会安装这里的两个依赖
  ], 
  "optionalDependencies": { // 可选依赖

  }, 
  "bin": { // 例子 create-react-app rimraf
    // npm 会在全局可执行 bin 文件安装目录(/usr/local/bin) 创建一个指向 对应包的 软连接
    // 如果局部安装 npm 会在本地创建一个可执行文件的 软链接 这时候可直接输入 ./node_modules/.bin/rimraf 执行 -> npx rimraf
    "create-react-app": "index.js"
    // #! /usr/bin/env node <- 软链接 <path node位置> node index.js 第一行
  },
  "scripts": { // 自定义脚本命令
    // npm run 新建一个shell, 该脚本会将当前项目的 node_modules/.bin 的绝对路径加入环境变量 PATH 中，执行结束再将环境变量恢复原样
    // npm run env 查看脚本运行的环境变量
    // shell 命令
    // mkdir xxx 创建文件夹
    // 多命令 并行执行 npm run script1 & npm run script2 串行执行 npm run script1 && npm run script2
    // 钩子 prescript -> script -> postscript 例如 npm run build => npm run prebuild -> npm run build -> npm run postbuild
    // 传参 process.argv -> webpack.config.js
    // "dev": "webpack --params=123 --name=kane", // 截取参数 const rawArgv = process.argv.slice(2)
    // "dev": "NODE_ENV=production webpack", // 如果阻塞 需要加上 cross-env -> npm i cross-env -D
  },
  "license": "ISC"
}
```

```js
// webpack.config.js
const path = require('path');
// console.log(process.argv) // -> string[]
const rawArgv = require("minimist")(process.argv.slice(2)) // object {params: 123, name: 'kane'}
const env = process.env.NODE_ENV // production
```


# 发布一个NPM包

## 1. 填写信息
```sh
npm init
```

注册完之后，执行 `npm login`, 依次填写你的用户名、密码、邮箱

执行npm publish发布，然后等待进度条完成即可。

## 2. 编写插件
```js
module.exports =(str)=>{
    return str+"111"
}
```

## 3. NPM本地开发
```sh
mkdir test && cd test
npm init -y
# 开发包的绝对路径
npm install G://...file path
```

## 4. npm link
```sh
npm link
# 获取包 并在 npm 全局文件夹创建一个符号
npm link packagename
```

## 4. npm publish
```sh
npm adduser
# 版本无法相同 查看当前版本号
npm publish
```

### 5. link
```bash
git clone
cd /xxx
npm i
npm run build
npm link
# target project
npm link @xxx/xxx # package.json 的包
```


## 5. README.md
1. 有什么用?
2. 为什么创造?
3. 如何安装
4. 有没有配置选项


## 6. 常见的发布报错

Q: `no_perms Private mode enable, only admin can publish this module`

A: 淘宝镜像了，设置回来 `npm config set registry http://registry.npmjs.org`

Q: npm publish failed put 500 unexpected status code 401

A: 没有登录，重新登录一下 `npm login`


Q: npm ERR! you do not have permission to publish “your module name”. Are you logged in as the correct user?

A: 包名被占用，改个包名

Q: you must verify your email before publishing a new package

A: 邮箱未验证，去官网验证一下邮箱