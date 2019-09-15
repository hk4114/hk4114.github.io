---
title: TS环境安装，已有项目引入typescript
category: 技术项目应用
tags:
  - ts
date: 2019-09-12
vssue: false
---



<!-- more -->
### 环境安装
1. npm i typescript -g
2. tsc -V
3. mkdir test
4. cd test
5. npm init -y
6. tsc --init
7. npm i @type/node --dev-save
8. 创建一个ts文件
9. tsc
10. node xxx.js查看结果

### 项目引入TS，组件直接写TS
1. `npm install --save-dev typescript`
    `npm install --save-dev ts-loader` 如果webpack的版本号是4.0以上，则指定3.5.1，


```js
// webpack.config.js
resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
...
module: {
    rules: [ {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },...]
```

```ts
// src/vue-shims.d.ts
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
```

```JSON
{
    "compilerOptions": {
        "outDir": "./built/",
        "sourceMap": true,
        "strict": true,
        "noImplicitReturns": true,
        "module": "es2015",
        "moduleResolution": "node",
        "target": "es5"
    },
    "include": [
        "./src/**/*"
    ]
}
```

> 到这一阶段，我们可以在`.vue`文件中引入`.ts`文件

1. `npm install vue-property-decorator vue-class-component  -S`
`cnpm install @vue/cli-plugin-typescript -D`
此时可以直接在`.vue`文件中使用ts了,如果还是不行...就把ts代码拉出来到`xx.ts`里吧，作为后进生需要付出代价的。

```html
<script lang="ts">
import mytitle from "../components/moduleA.vue"//vue文件
import a from '../test/test' //ts文件
import { Component, Vue } from 'vue-property-decorator
...
</script>
```
> 在文件运行的过程中，会出现red-line，通过设置`tsconfig.json`的`compilerOptions`的`"experimentalDecorators": true,"allowJS":true`可以解决。


