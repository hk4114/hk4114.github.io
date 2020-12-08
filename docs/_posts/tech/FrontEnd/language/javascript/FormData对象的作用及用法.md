---
title: FormData对象的作用及用法
category: 技术
tags:
  - js
date: 2019-6-17
vssue-id: false
---

<!-- more -->


### 一、作用
>1. 用一些键值对来模拟一系列表单控件：即把form中所有表单元素的name与value组装成
一个queryString。
>2. 异步上传二进制文件。

### 二、使用
![FormDataPrototype.png](https://upload-images.jianshu.io/upload_images/48928-4de21490df23620d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```js
let form = new FormData();
form.append('name','value')//添加 name:value
form.get('name')//获取value
form.append('name','zhangsan')添加
form.getAll('name')//array获取所有
form.set('name','logger')//设置
form.getAll('name')//logger
form.has('name')//true
form.delete('name')
form.has('name')//false
```

### jq实践
```js
var selectedFile = $('#input').get(0).files[0];
$('#choose option:selected').val()
var params = new FormData();
params.append('id',$('#pop').attr('data-id'));
params.append('status',$('input[name="status"]:checked').val());
params.append('remark',$('textarea[name="remark"]').val());
params.append('invoiceImage',$('#upfile').get(0).files[0]) //文件
$.ajax({
    url:'/staff/fee/invoice/update',
    data:obj,
    type:'post',
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    processData: false,
    contentType: false,
    success:function(res){
        if(res.errCode == 0){
            tipshow('提交成功')
            layer.closeAll();
            location.reload()
        }else{
            tipshow(res.errMsg,'warn')
        }
    }
})
```