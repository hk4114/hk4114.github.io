---
category: Taro
tags:
  - Taro
  - FE-frame
date: 2019-04-07
title: Hello Taro
---

如何开始一个Taro项目。

<!--more-->

# taro 使用

::: tip 项目目标
微信小程序-测评,如果其他端与小程序产生冲突，以微信小程序为主。
:::

### 1. init 项目初始化
```sh
npm i -g @taro/cli
taro init <project name>
cd <project name>
npm i taro-ui
```

### 2. run 初次启动项目
```sh
# npm script ./package.json
npm run dev:weapp
npm run build:weapp
# hotload
taro build --type weapp --watch

```

### 3. 安装taro ui

```sh
npm install taro-ui
npm install classnames --save
```

```scss
// 自定义主题颜色
$color-brand: #FFDD2B;
@import "~taro-ui/dist/style/index.scss";
```


### 1. init 项目初始化
```sh
npm i -g @taro/cli
taro init <project name>
cd <project name>
npm i taro-ui
```

### 2. run 初次启动项目
```sh
# npm script ./package.json
npm run dev:weapp
npm run build:weapp
# hotload
taro build --type weapp --watch
```

### Tip

1. 空格`\t`一次有效 
2. 路由传参
  
```js
// preview.js
// 传
Taro.navigateTo({ // Taro.redirectTo
  url: `/pages/item/item?testId=11`
})
// 接
componentWillMount(){
    console.log(this.$router.params)
}
```

3. 本地资源引用
``` js
//
import imgUrl from '../../assets/image/default.img'

<Image src={imgUrl}>
```

4. 引用全局样式
```js
export default ComponentName extends Component{
    static options = {
        addGlobalClass:true
    }
}
```

5. 创建ref

```js

// upfloor Component
class Father extends Component{
    roar(){
        this.cat.miao()
    }
    refCat = (node) => this.cat = node
    render(){
        return <Cat ref={this.refCat}/>
    }
}

// downfloor component
class Cat extends Component{
    miao(){
        console.log("我们一起学喵叫")
    }
    render(){
        return <View/>
    }
}
```

6. 判断环境变量 `precess.env.TARO_ENV`