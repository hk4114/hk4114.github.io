---
title: Nginx 基础
category: be-stuff
tags:
  - 服务器
  - Nginx
date: 2019-04-21
vssue-id: false
---

> Why do i use Nginx?

+ 支持海量高并发

+ 内存消耗少

+ 免费试用可以商业化

+ 配置文件简单

<!--more-->


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

### 2. Nginx安装

:::warnning

Mainline version: 开发版,主要是给广大Nginx爱好者，测试、研究和学习的，但是不建议使用于生产环境。

Stable version : 稳定版,也就是我们说的长期更新版本。这种版本一般比较成熟，经过长时间的更新测试，所以这种版本也是主流版本。

legacy version : 历史版本，如果你需要以前的版本，Nginx也是有提供的。

:::

1. 基于Yum的方式安装Nginx，查看一下yum是否已经存在 `yum list | grep nginx`

2. 自行配置yum源
```sh
vim /etc/yum.repos.d/nginx.repo
# keyboad i
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
# keyboad esc
:wq
yum install nginx
# y
nginx -v # 版本号  安装成功
```

### 3. 配置Nginx
1. 找到nginx所在目录
```sh
# rpm-> linux 包管理 -q 查询 l 返回列表
rpm -ql nginx
vim etc/nginx/nginx.conf
```

2. 修改配置文件

```bash
#运行用户，默认即是nginx，可以不进行设置
user  nginx;
#Nginx进程，一般设置为和CPU核数一样
worker_processes  1;   
#错误日志存放目录
error_log  /var/log/nginx/error.log warn;
#进程pid存放位置
pid        /var/run/nginx.pid;

events {
    worker_connections  1024; # 单个后台进程的最大并发数
}

http {
    include       /etc/nginx/mime.types;   #文件扩展名与类型映射表
    default_type  application/octet-stream;  #默认文件类型
    #设置日志模式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;   #nginx访问日志存放位置

    sendfile        on;   #开启高效传输模式
    #tcp_nopush     on;    #减少网络报文段的数量

    keepalive_timeout  65;  #保持连接的时间，也叫超时时间

    #gzip  on;  #开启gzip压缩

    include /etc/nginx/conf.d/*.conf; #包含的子配置项位置和文件
}
```
3. 修改子配置项
```bash
vim conf.d/default.conf
server {
    listen       80;   #配置监听端口
    server_name  localhost;  //配置域名

    #charset koi8-r;     
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;     #服务默认启动目录
        index  index.html index.htm;    #默认访问文件
    }

    #error_page  404              /404.html;   # 配置404页面

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;   #错误状态码的显示页面，配置后需要重启
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}

```

明白了这些配置项，我们知道我们的服务目录放在了`/usr/share/nginx/html`下，可以使用命令进入看一下目录下的文件。
```sh
cd /
cd usr/share/nginx/html
ls
# vim index.html
# :wq
nginx # 启动
```
4. 配置端口
   1. ECS 控制台
   2. 更多 -> 网络与安全组 -> 安全组配置
   3. 右上角 快速创建规则
```sh
http(80)
TCP - 80
# 授权对象 所有都可以访问
0.0.0.0/0
```

### 4. Nginx服务启动、停止、重启

1. 启动`nginx`, 
   1. `nginx`,查看是否启动`ps aux | grep nginx`
   2. `systemctl start nginx.service`
2. 停止
   1. `nginx -s quit` 从容
   2. `nignx -s stop` 立即
   3. `killall nginx` 强制
   4. `systemctl stop nginx.service`
3. 重启 `systemctl restart nginx.service`
4. `nginx -s reload` 重载配置文件
5. 查看端口号 `netstat -tlnp`