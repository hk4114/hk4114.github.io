---
title: 网页支付（支付宝、微信）
category: 技术
tags:
  - pc
  - 支付
  - js
date: 2019-09-07
vssue: false
---

摘要: 
1. 微信支付
2. 微信扫码支付
3. 支付宝支付


<!-- more -->
## h5微信支付

使用的是[微信支付](https://pay.weixin.qq.com/wiki/doc/api/index.html) 中的 `JSapi支付`

1. 公司需要首先要配置公众号微信支付地址和测试白名单(支付的时候显示这个支付页面没权限有可能是这个原因）

2. 参考api
![api.png](https://upload-images.jianshu.io/upload_images/48928-417bc67f0d6e8303.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. 页面中引入微信的内置js可以用WeixinJSBridge对象

```html
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
```

4. js 内容
```js
$.ajax({
　　url:'向后台的请求url地址...',
　　type:'post',
　　dataType:'json',
　　data:{data},
　　success:function(data){
　　　  if(获取数据成功){
　　　　　　var appIdVal=data.data.appId;　　　　　　
　　　　　　var timeStampVal=data.data.timeStamp;
　　　　　　var nonceStrVal=data.data.nonceStr;
　　　　　　var packageVal=data.data.package;
　　　　　　var signTypeVal=data.data.signType;
　　　　　　var paySignVal=data.data.sign;
　　　　　　onBridgeReady();
　　　　　　function onBridgeReady(){
　　　　　　　　WeixinJSBridge.invoke(
　　　　　　　　　　'getBrandWCPayRequest', {
　　　　　　　　　　"appId":appIdVal, //公众号名称，由商户传入 
　　　　　　　　　　"timeStamp":timeStampVal, //时间戳，自1970年以来的秒数 
　　　　　　　　　　"nonceStr":nonceStrVal, //随机串 
　　　　　　　　　　"package":packageVal,   //订单详情扩展字符串
　　　　　　　　　　"signType":signTypeVal, //微信签名方式： 
　　　　　　　　　　"paySign":paySignVal //微信签名 
　　　　　　　　},
　　　　　function(res){ 
　　　　　　　　if(res.err_msg == "get_brand_wcpay_request:ok" ) {
　　　　　　　　// 表示已经支付,res.err_msg将在用户支付成功后返回 ok。 
　　　　　　　　　　window.location.href="回调成功的url,支付成功页面";
　　　　　　　　}
　　　　　}
　　　　); 
　　　　}
　　　　if (typeof WeixinJSBridge == "undefined"){
　　　　　　　　if( document.addEventListener ){
　　　　　　　　　　document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
　　　　　　　　}else if (document.attachEvent){
　　　　　　　　　　document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
　　　　　　　　　　document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
　　　　　　　　}
　　　　}else{
　　　　　　onBridgeReady();
　　　　}

　　　　}
　　},
　　error:function(){

　　}
})
```
## 微信扫码支付

1. 用的是使用的是[微信支付](https://pay.weixin.qq.com/wiki/doc/api/index.html) 中的`native支付`

2. 商户后台系统先调用微信支付的统一下单接口，微信后台系统返回链接参数code_url，商户后台系统将code_url值生成二维码图片，用户使用微信客户端扫码后发起支付。

注意：code_url有效期为2小时，过期后扫码不能再发起支付。

前端只需向后台发ajax请求拿到code_url。对应链接格式：weixin：//wxpay/bizpayurl?sr=XXXXX。

利用基于jquery类库的jquery.qrcode.js的 插件绘制二维码展示到页面中。

生成二维码之后设置定时器去查询下订单。订单支付成功之后。跳转window.location.href="回调成功的url,支付成功页面";

```js
generateQRCode("table",300, 300, erweima);
// 查询接口
timer=setInterval(checkorderinfo, 3000); 
```

## 支付宝支付
对于前端都是后台返回的一个发起支付宝的url（pc端和手机端url不同）
1. pc端新开窗口打开支付宝扫码支付。window.open(注意ajax内部的拦截现象)`https://excashier.alipay.com/standard/auth.htm?payOrderId=....`
2. h5浏览器。直接 window.location.href =locationurl;直接可以发起支付宝app去支付。
3. 支付成功后台设置成功回跳的url.支付成功页面。

```js
//在url中携带一些参数
http://www.xxx.com/shop/pay/xxx.html?
total_amount=xxx // 支付总金额
&timestamp=2017-08-03+16%3A18%3A57
&sign=Wc7Q3DQ1d7tdRKO0ZqDW8MkkiRH6HhRazZOplZc0AhdNu8K7%2BsbN11WYMITrZ9MMNWJHW2QKXHM6WyUKWurmtLj44bPv%2F91uOqtop9QCNAr1Vs5B%2BoflTdoPHw8JLsied5z8eYIsI07smiETI5fvOgqc1fRsNrU2WyfH7nSm4FLkkAVtkKJkYlSakNd0ALz9qTEOd1Cxrbi3GjyNEEoqZm0L2cz3glsMf%2Fk9RnW8dOEXbvrdfGDMAgrCRkzeUOCkdXnweW60YojZHISDrtyisFcBrnuybKvPU9XWVSFdf0NwuwI0v%2BWnSd6ep9MNZWMtBNZNImop8pZWXnb4TVp9aQ%3D%3D
&trade_no=xxxxxx
&sign_type=xxx
&auth_app_id=xxxxxx
&charset=utf-8
&seller_id=xxx
&method=alipay.trade.page.pay.return
&app_id=xxx
&out_trade_no=xxx //订单号
&version=1.0

```