---
title: 发布一个NPM包
category: tool
tags:
  - npm
vssue: false
---


如何发布一个npm包

<!-- more -->

# 发布一个NPM包

## 1. 填写信息
```sh
npm init
```

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

## 5. README.md
1. 有什么用?
2. 为什么创造?
3. 如何安装
4. 有没有配置选项