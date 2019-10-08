---
title: Vue+TS+elementUI 项目构建
category: project
tags:
  - 项目总结
vssue-title: false
---

Vue+TS+elementUI 项目构建

<!-- more -->

# 项目构建

1. vue-cli 3.0 `vue create projectName`
2. elementUI `npm i element-ui -S`
   - `npm install babel-plugin-component -D` 按需引入
   - 按照文档修改`babel.config.js` 
   - 由于需要添加的组件太多，新建文件`element-ui-imported.ts`,筛选照抄放入`export default function UI(){Vue.use(Button)...}`
   - `main.ts`引入并执行，引入重置样式文件
   - 可能会有让你安装`npm install babel-preset-es2015`然后开始报错，`npm install --save-dev babel-preset-env@next -D`,babel设置`presets:["env"]`
3. vue-router
   - lazy-loader `SyntaxError`,babel.config.js设置`plugins:["syntax-dynamic-import"]`,`npm i babel-plugin-syntax-dynamic-import -D`
   - **路由守卫？？？**
4. 浏览器兼容
   - `.browserslistrc`,postcss和autoprefixer配合
   - `babel.config.js`设置presets:[{polyfills:['es6.promise','es6.symbol']
   - 现代模式`vue-cli-service build --modern`,生成两个包,但是需要始终开启cors进行加载这意味着你的服务器必须返回诸如` Access-Control-Allow-Origin: * `的有效的 CORS 头。如果你想要通过认证来获取脚本，可使将 *crossorigin(vue.config.js)* 选项设置为 `use-credentials`。现代浏览器使用一段内联脚本来避免 Safari 10 重复加载脚本包，所以如果你在使用一套严格的 CSP，你需要这样显性地允许内联脚本：`Content-Security-Policy: script-src 'self' 'sha256-4RS22DYeB7U14dra4KcQYxmwt5HkOInieXK1NUMBmQI='`
5. vue.config.js 配置 多页面
```
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  baseUrl: './',
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      inject: true,
    },
    login: {
      entry: 'src/views/login/index.ts',
      template: 'public/login.html',
      filename: 'login.html',
      inject: true,
    }
  },
  crossorigin:'use-credentials',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  }
}
```
6. axios
```
// config.ts
let url: string = ''
if(/localhost|(192.168.55.240)/test(window.locaton.host)){
    url = 'http://192.168.55.240:8080'
}
const API_URL = url + '/ai/'
export {
    API_URL
}

// request.ts future template
import axios from "axios";
import { API_URL } from '../config/config'
import { Message } from 'element-ui'
import store from '../store/index'

axios.defaults.baseURL = API_URL
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(store.getters.token) {
       config.headers.token = store.getters.token;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
  if(response.data && response.data.code !== 200) {
    response.data.msg && Message.error(response.data.msg)
    return Promise.reject(response);
  }
  return response.data;
  }, function (error) {
    // Do something with response error
    error.response && error.response.data.message && Message.error(error.response.data.message)
    return Promise.reject(error);
  });

export default axios

// api/userTest
import request from '../utils/request'
import {AxiosPromise} from "axios"

export function baby(data: any): AxiosPromise{
    return request({
        url: 'learning/searchLearning',
        method: 'POST',
        data
    })
}

// [detail.vue] 
import * as $user from "../api/user";
$user.baby({"userId":"123b"}).then(res=>console.log('res'))
```
以上是一个正常的流程

7. vuex
8. 国际化

> 页面编写
1. `app/view.vue`

```
// 差不太多
@Component({ //必写
  components: {
    navbar
  }
})
```

2. `component.vue`改造
```
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'; 

@Component //声明这是个组件
export default class MainTitle extends Vue{
	@Prop({ type: Object,default:{} })
	titles // == props:[]
	@Prop() private msg!: string;
	// data
	list: array = [1,2,3,54,2]
	text: string = 'nihao'
	message: string = 'Hello!'
	
	// computed
	get count(){
		return ++this.text
	}
	
	//watch
	@Watch('title')
	showAE(str:string,num:number){
		
	}
	//methods
	showshow(page:number){
		this.$emit('')
	}
}
```

> 接口
1. 全局
```
// shims-tsx
interface TableInfo<T> { // 表格配置信息
    list: T[],
    title: { name: string, desc: string },
    columnMaps: { name: string, label: string }[]
}
// usage
teacherTable: TableInfo<Teacher> = {}
```
2. 局部就局部配置



> detail

1. `this.$router`标红，使用`this['$router']`

2. 使用axios请求时，403跨域且所传参数空白 

错误出现原因:
1. axios 发送请求时的数据默认是 JSON 格式的。如果请求不是`GET`或者特定`POST`,则要求浏览器必须先已`OPTIONS`方式发送一个预请求，从而获知服务器端对跨源请求所支持的`HTTP`方法。所以有一种解决方案是`axios.defaults.headers.post['Content-Type'] = 'text/plain'`,使用该解决方案还需要将`post`的data字符串化。`JSON.stringify()`。也会出现`statuscode:415`的错误,因为后端定义了传输数据的格式JSON，传字符串就理所当然的报错了。
2. 后端修改
```
if($request_method='POST'){
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
}
```

1. elementUI`table-cell`中插入连接等`template(slot-scope="scope")`，`scope`是整张表的数据，使用scope.row就能获取到当前行的数据

2. 使用了懒加载技术
   - 动态加载组件`AsyncCmp:()=>import('./AsyncCmp')` 如果使用`export function UiAlert(data){}`,则使用`UiAlert:()=>import('keen-ui').then(({UiAlert})=>UiAlert)`
   - 动态加载路由`component: () => import('@/views/CheckAim.vue')` 或者是 `const Login = () => import('./login') ... component: Login `
   - 动态创建Vuex模块。`const store = new Vuex.Store() import('./store/login').then(loginModule=>{store.registerModule('login',loginModule)})`
3. 在组件中使用`@Prop`时，报错
```
//tsconfig.json
"noImplicitAny": false, // any 类型不检查报错
"strictFunctionTypes": false, // 启用vuex-class 需要开启此项

// 还报错的话前面加个!
@Prop()
propA!: number = 1

@Prop({ default: 'default value' })
propB!: string

@Prop([String, Boolean])
propC!: string | boolean

@Prop({ type: null })
propD!: any
```

### echarts按需引入
```
// 单独文件
import echarts from 'echarts'

import 'echarts/lib/chart/radar'

import 'echarts/lib/component/tooltip'

export default echarts

import echarts from '../echarts'

...

var myChart = echarts.init(this.$refs.myChart)

...
myChart.setOption({})
```