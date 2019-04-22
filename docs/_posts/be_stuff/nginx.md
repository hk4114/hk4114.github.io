---
title: Nginx 基础
category: be-stuff
tags:
  - 服务器
  - Nginx
date: 2019-04-21
---

# Nginx 基础

## How to use ?

### 1. 环境与安装

::: tip
使用[阿里云ECS](https://www.aliyun.com/)

需要远程连接工具putty 或者 xshell 或者 xftp6
:::

1. 远程连接工具连接上服务器
2. 环境安装
```sh
yum -y install gcc gcc-c++ autoconf pcre-devel make automake
yum -y install wget httpd-tools vim # server and 编辑器
```
3. 如果出现报错，确认是否是网络问题 `ping www.baidu.com`

4. 新建文件夹

```sh
cd /
ls
cd root 
mkdir hk
cd hk 
mkdir app/backup/download/logs/work
```


## Why do i use Nginx?

+ 支持海量高并发

+ 内存消耗少

+ 免费试用可以商业化

+ 配置文件简单