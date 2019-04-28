---
title: Nginx 基础
category: be-stuff
tags:
  - 服务器
  - Nginx
date: 2019-04-21
vssue-id: 4
---

Why do i use Nginx? 支持海量高并发;内存消耗少;免费试用可以商业化;配置文件简单。

<!-- more -->


# Nginx 基础

[[toc]]

## 1. 环境与安装

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

## 2. Nginx安装

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

## 3. 配置Nginx

1. 找到nginx所在目录

```sh

# rpm-> linux 包管理 -q 查询 l 返回列表

rpm -ql nginx

vim etc/nginx/nginx.conf

```

2. 修改配置文件

<details>

<summary>点击展开配置示例</summary>

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
</details>

3. 修改子配置项

<details>

<summary>点击展开配置示例</summary>

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
</details>

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

## 4. Nginx服务启动、停止、重启

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


## 5. 错误页面设置和访问权限

- 配置错误页面
```sh
cd /
cd etc/nginx/conf.d
vim default.conf
# 可以了解到 404 -> 404.html 500 502 -> 50x.html

# 单独错误 404
error_page 500 502 503 504  /50x.html;
error_page 404  /404_error.html;

cd /
cd usr/share/nginx/html
vim 404_error.html
# 进行 html 编辑 -> esc
:wq
# 重启服务
nginx -s quit
nginx
# 将错误页面指定到外部链接
cd /
vim etc/nginx/conf.d/default.conf
error_page 404  https:www.baidu.com;
```

- 访问权限
```sh
vim etc/nginx/conf.d/default.conf
# location 中增加
deny 192.168.11.50 #ip地址 #仅不允许 allow为可以访问 deny all 都不能反问
# 192.168.11.50/200 ip50-200都不能访问

# 根据目录确定访问 例子：img 文件夹可以访问 
location =/img{
    allow all;
}
# 正则表达式 ~<rxg> 下面的意思是 以php结尾的都不能访问
location ~\.php${
    deny all
}
```

## 6. 设置虚拟主机

1. 基于端口号配置虚拟主机

```sh
cd /
cd etc/nginx/conf.d
# 新建 8001的conf 文件
server{
    listien 8001;# 监听的端口号
    server_name localhost; # 服务名称
    root /usr/share/nginx/html/html8001;# 文件放置的路径
    index index.html # 索引目录
}
:wq
pwd # 查看当前文件路径
cd usr/share/nginx/html/
mkdir html8001
vim index.html
nginx -s quit
nginx
```

## 7. 域名虚拟机

```nginx
cd etc/nginx/conf.d
# default.conf 
server {
    listen       80;
    server_name  www.huakang.live;
}
# 8001.conf
server{
        listen 80;
        server_name www.huakang.live;
        location / {
                root /usr/share/nginx/html/html8001;
                index index.html index.htm;
        }
}
```

## 8. 正向代理与反向代理

1. **正向代理的故事**

> 我(Client)想要买日本万代(Server)发售的塑料小人(data)，但是我没有条件(cors)亲自去买，这时候我就拜托经常去日本出差的小刚(proxy),让他帮我带回来.

2. **反向代理的故事**

> 我(Client)想要买日本万代(server)发售的塑料小人(data)，通过日本亚马逊的万代旗舰店(Nginx)下单购买。

3. **usage**

   - 前端 server 的域名为：fe.server.com
   
   - 后端服务的域名为：dev.server.com

```nginx
cd etc/nginx/conf.d
vim 8001.conf

server {
    listen       80;
    server_name  fe.server.com;
    location / {
        proxy_pass dev.server.com;
    }
}
```
fe.server.com访问nginx的fe.server.com属于同源访问，而nginx对服务端转发的请求不会触发浏览器的同源策略。


## 9. Nginx 适配 PC 和 手机
1. `/usr/share/nginx/` 新建文件夹 `mkdir pc & mobile`
2. `pc/moblie` 新建index.html
3. `etc/nginx/conf.d` 

```nginx
server{
        listen 80;
        server_name www.huakang.live;
        location / {
         root /usr/share/nginx/pc;
         if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') { # 通过内置变量 $http_user_agent，可以获取到请求客户端的userAgent
            root /usr/share/nginx/mobile;
         }
         index index.html;
        }
}

```

## 10. 请求过滤

1. 状态码过滤

```nginx
error_page 500 501 502 503 504 506 /50x.html;
    location = /50x.html {
        # 将跟路径改编为存放 html 的路径。
        root /root/static/html;
    }
```

2. 根据 URL 名称过滤，精准匹配 URL，不匹配的 URL 全部重定向到主页。

```nginx
location / {
    rewrite  ^.*$ /index.html  redirect;
}
```

3. 根据请求类型过滤

```nginx
    if ( $request_method !~ ^(GET|POST|HEAD)$ ) {
        return 403;
    }
```

## 11. Gzip

对于文本文件，GZip 的效果非常明显，开启后传输所需流量大约会降至 1/4 ~ 1/3。

并不是每个浏览器都支持gzip的，如何知道客户端是否支持gzip呢，请求头中的Accept-Encoding来标识对压缩的支持。

```nginx
vim etc/nginx/nginx.conf
# http 内部
    gzip                    on;
    gzip_http_version       1.1; # HTTP/1.1默认支持TCP持久连接       
    gzip_comp_level         5;
    gzip_min_length         1000;
    gzip_types text/csv text/xml text/css text/plain text/javascript application/javascript application/x-javascript application/json application/xml;
```

- gzip_http_version

HTTP/1.0 可以通过显式指定 Connection: keep-alive来启用持久连接。对于TCP持久连接上的HTTP 报文，客户端需要一种机制来准确判断结束位置，而在 HTTP/1.0中，这种机制只有Content-Length。而在HTTP/1.1中新增的 Transfer-Encoding: chunked 所对应的分块传输机制可以完美解决这类问题。

Nginx在启用了GZip的情况下，不会等文件 GZip 完成再返回响应，而是边压缩边响应，这样可以显著提高 TTFB(Time To First Byte，首字节时间，WEB 性能优化重要指标)。这样唯一的问题是，Nginx 开始返回响应时，它无法知道将要传输的文件最终有多大，也就是无法给出Content-Length这个响应头部。

所以，在HTTP1.0中如果利用Nginx启用了GZip，是无法获得Content-Length的，这导致 HTTP1.0 中开启持久链接和使用GZip只能二选一，所以在这里gzip_http_version默认设置为1.1。

## 12. 负载均衡

1. Upstream 指定后端服务器地址列表

```nginx
upstream balanceServer {
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

2. 在 server 中拦截响应请求，并将请求转发到 Upstream 中配置的服务器列表。

```nginx
server {
    server_name  fe.server.com;
    listen 80;
    location /api {
        proxy_pass http://balanceServer;
    }
}
```
上面的配置只是指定了 nginx 需要转发的服务端列表，并没有指定分配策略。

3. nginx 实现负载均衡的策略
   + 轮询
   + 最小连接数
   + 最快相应时间
   + 客户端 ip 绑定

**轮询**

默认情况下采用的策略，将所有客户端请求轮询分配给服务端。这种策略是可以正常工作的，但是如果其中某一台服务器压力太大，出现延迟，会影响所有分配在这台服务器下的用户。

```nginx
upstream balanceServer {
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

**最小连接数**

将请求优先分配给压力较小的服务器，它可以平衡每个队列的长度，并避免向压力大的服务器添加更多的请求。

```nginx
upstream balanceServer {
    least_conn;
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

**最快响应时间**

依赖于 NGINX Plus，优先分配给响应时间最短的服务器。

```nginx
upstream balanceServer {
    fair;
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

**客户端 ip 绑定**

来自同一个 ip 的请求永远只分配一台服务器，有效解决了动态网页存在的 session 共享问题。

```nginx
upstream balanceServer {
    ip_hash;
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

## 13. 静态资源服务器

```nginx
location ~* \.(png|gif|jpg|jpeg)$ {
    root    /root/static/;  
    autoindex on;
    access_log  off;
    expires     10h;# 设置过期时间为 10 小时          
}
```

匹配以png|gif|jpg|jpeg为结尾的请求，并将请求转发到本地路径，root中指定的路径即 nginx 本地路径。同时也可以进行一些缓存的设置。

::: tip 引用
[一个前端必会的 Nginx免费教程](https://jspang.com/posts/2018/10/05/nginx.html)

[前端必备！最全nginx技术分析](https://mp.weixin.qq.com/s/wecUdGnuHdZOs3t7zc16jw)
:::

