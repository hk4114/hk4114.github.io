---
title: Vue全家桶和ElementUI开发遇到的问题
category: 技术项目应用
tags:
  - vue
date: 2019-05-07
vssue: false
---

1. table填充数据出现多余线条
2. table 解决垂直居中的问题
3. elementUI 按需引入内置效果
4. 清空表单
5. 关于elementUI upload插件的上传问题
6. axios 下载文件
7. `pre` 换行
8. `slot` 插槽

<!-- more -->
### 1. table 填充数据出现多余线条
`.el-table::before {z-index: inherit;}`

### 2. table 解决垂直居中的问题
只能在el-table-column 设置className 

### 3. elementUI 按需引入内置效果
```js
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
```

###　4. 清空表单
`this.$refs[formName].resetFields();`

### 5. 关于elementUI upload插件的上传问题

>想要的效果: 拖拽不上传，点击按钮上传，并且带token, 尝试过beforeUpload、success、error等方法全部没用


1. 文件验证在onchange中 并且赋值，文件是file.rows，不能直接用file赋值
```js
el-upload(ref="upload" drag action="javascript:;" auto-upload="false" on-change="onChange")
el-button(@click="postData")

onChange(file,fileList){
	if(!this.saveFormExcel){
		// 将需要上传的文件保存
		this.saveFormExcel = file.raw;
	}
	const isXls = !!file.name.match(/(xls|xlsx)$/g);
	if(!isXls){
		this.$refs.upload.clearFiles();
		this.$message.error('上传文件只能是 xls/xlsx 格式!');
	} 
	return false
}
postData(){
	const postDataA = new FormData();
    postDataA.append('file',this.saveFormExcel)
	this.axios(postDataA).then(res=>console.log('success')).catch(err=>console.log('fail'))
}
```

### 6. axios 下载文件
> 背景: vue+vue-axios+elementUI+vuex 请求接口需要带token，有拦截器
> 浏览器的GET和POST请求:请求回的数据交给浏览器处理，内容是二进制字符串

#### 1. 方案一
```pug
a(:href="href" download="xxx.xls")
```
```js
Component = {
	computed:{
		href(){
			return rootpath+'teacher/template?authtoken='+authtoken
		}
	}
}
```
由于是放在url里的，所以后端需要做判断。

#### 2. 方案二 responseType:'blob'
```js
this.axios({
	method:'get',
	url:'xxxx',
	responseType:'blob',
	data:{},//POST使用
	headers: {
		"content-disposition":"attachment;filename=total.xls",
		"content-type":"application/x-download;charset=utf-8"
		},
})
.then(res=>{
	let url = window.URL.createObjectURL(data.data)
	let link = document.createElement('a')
	link.style.display = 'none'
	link.href = url
	link.setAttribute('download', 'excel.xls')
	document.body.appendChild(link)
	link.click()
})

```

#### 3. 方案三
> axios拦截请求并实现下载

- 发送请求
- 获得数据
- 判断数据是否为文件
- 如果是文件则插入iframe
```js
const download = url =>{
	let frame = document.createElement('iframe');
	frame.style.display = 'none';
	framre.src = url
	frame.onload = function () {
		document.body.removeChild(frame)
	}
	document.body.appendChild(frame)
	// 也可以替换成 `<a>` 的 `click`事件
}

this.axios({
	// 处理excel文件
	if (res.headers && (res.headers['content-type'] === 'application/x-msdownload' || res.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
	downloadUrl(res.request.responseURL)
		
	res.data='';
	res.headers['content-type'] = 'text/json'
	return res;

})
```
### 7. pre 换行
```
pre
	font-family initial
	white-space pre-wrap /* css3.0 */ 
	white-space -moz-pre-wrap /* Firefox */ 
	white-space -pre-wrap /* Opera 4-6 */ 
	white-space -o-pre-wrap /* Opera 7 */ 
	word-wrap break-word/* Internet Explorer 5.5+ */  
```

### 8. slot
父组件
```html
<kane>
	<span slot="url">{{kaneData.url}}</span>
	<span slot="name">{{kaneData.name}}</span>
	<span slot="skill">{{kaneData.skill}}</span>
</kane>
```

组件kane
```html
<p>博客:<slot name="url"></slot></p>
<p>网名:<slot name="name"></slot></p>
<p>tech:<slot name="skill"></slot></p>
```