---
category: Flutter
tags:
  - Flutter
  - FE-frame
date: 2019-04-06
title: 构建Flutter开发者环境
vssue: false
---

flutter 环境/开发工具的安装，以及安装过程中遇到的问题。

<!-- more -->
```sh
https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
```

1. [安装JAVA 可以用迅雷更快](https://download.oracle.com/otn-pub/java/jdk/8u201-b09/42970487e3af4f5aa5bca3f542482c60/jdk-8u201-windows-x64.exe)
2. 输入`java`便可以查看是否安装完成
3. [Flutter SDK](https://flutter.dev/docs/development/tools/sdk/releases#windows)
4. 配置环境变量:`G:\software\flutter\bin`
5. [下载android studio](https://developer.android.google.cn/studio/)
6. configure -> plugins -> search flutter install
7. cmd -> `flutter doctor` -> `flutter doctor --android-licenses` -> always y
8. AS 新建个虚拟机 大概率跑不通
   1. [进入bios](https://jingyan.baidu.com/article/8275fc864d423e46a03cf638.html)
   2. 修改 虚拟化 的值
   3. 重启之后 user-> <用户> -> AppData -> android -> extras -> interl -> hax 重装
   4. 重启AS