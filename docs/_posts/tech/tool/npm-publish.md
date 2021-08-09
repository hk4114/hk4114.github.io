---
title: 发布一个NPM包
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

```json
{
  "name": "package-name",
  "version": "0.0.1",
  "description": "这是xxxx",
  "main": "path", //"index.js"
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "kane",
  "license": "ISC"
}
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