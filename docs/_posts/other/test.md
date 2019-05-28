---
title: 渗透测试
category: other
date: 2019-05-07
vssue: false
---

渗透测试

<!-- more -->

## 黑盒渗透测试
1. 信息收集
2. 漏洞发现
3. 漏洞利用
4. 后渗透利用

常见漏洞

1. 敏感信息泄露
2. 弱密码/缺省密码
3. 三方组件漏洞
   
1. 信息收集
   1. 谷歌搜索语法(intext:'rabbit_password'|'service_password' filetype:conf)
   2. 子域名枚举 利用证书透明度，字典爆破，DNS解析记录等方式对目标主域进行枚举
   3. 密码字典收集
   4. 通过产品文档等
2. 漏洞发现
   1. 密码爆破 SSH/MYsql 成熟爆破工具
   2. 三方组件库
   3. 常规漏洞扫描 appsky
3. 漏洞利用
   1. sql-> sqlmap
   2. xss-> metaspolit
   3. 通过不断试错 了解WAF内在逻辑 select * from xxxx
   4. information_schema -> 都是成功的
   5. WAF是正则
   6. 利用/**/ 注释到sql中执行
4. 后渗透利用
   1. 提权