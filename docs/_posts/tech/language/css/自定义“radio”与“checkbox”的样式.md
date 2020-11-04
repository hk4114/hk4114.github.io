---
title: 自定义“radio”与“checkbox”的样式
category: css
date: 2019-05-07
vssue: false
---

思路：
1. checkbox 目标元素以及其checked状态设置伪元素,所有样式设置伪元素上。
2. 将本元素隐藏。
<!-- more -->

1. html
```html
<input type="checkbox" name="agreement" id="agreement" />
<label for="agreement">《服务条款》</label>
```
2. css
```css
input[type="checkbox"] + label::before {
  content: "\a0"; /*不换行空格*/
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  width: .9em;
  height: .85em;
  margin-right: .4em;
  border-radius: 50%;
  border: 1px solid #fc7c4d;
  text-indent: .15em
}
input[type="checkbox"]:checked + label::before {
  background-image: url("checked.png");
  background-size: 100% 100%;
  border:none;
  font-size:14px;
  width: 1.05em;
  height: 1em;
}
input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}
```


```html
<style>
.radio-name {
	vertical-align: middle;
	font-size: 16px;
}
.radio-beauty {
	width: 18px;
	height: 18px;
	box-sizing: border-box;
	display: inline-block;
	border: 1px solid green;
	vertical-align: middle;
	margin: 0 15px 0 3px;
	border-radius: 50%;
	
}
.radio-beauty:hover {
	box-shadow: 0 0 7px green;
	padding: 2px;
	background-color: green;
	background-clip: content-box;
}
input[type="radio"]:checked+.radio-beauty {
	padding: 2px;
	background-color: green;
	background-clip: content-box;
}
</style>
<label>
	<span class="radio-name">前端工程师</span>
	<input type="radio" name="radioName" id="radioName1" hidden/>
	<label for="radioName1" class="radio-beauty"></label>
</label>
<label>
	<span class="radio-name">后端工程师</span>
	<input type="radio" name="radioName" id="radioName2" hidden/>
	<label for="radioName2" class="radio-beauty"></label>
</label>
<label>
	<span class="radio-name">全栈工程师</span>
	<input type="radio" name="radioName" id="radioName3" hidden/>
	<label for="radioName3" class="radio-beauty"></label>
</label>

```