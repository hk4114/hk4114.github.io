---
title: java
category: 技术
tags:
  - java
date: 2020-12-20
vssue-id: 1
---


## 环境搭建与运行

> [安装地址](https://res001.geekbang.org/tools/jdk-11.0.2_windows-x64_bin.exe)

### 开发环境搭建(windows)

1. 下载JDK，直接安装，安装目录默认
2. 设置环境变量 
   1. 复制目录 `C:\Program Files\Java\jdk-11.0.2` 
   2. 我的电脑 -> 右键属性 -> 高级系统设置 -> 新建系统变量 -> 变量名`JAVA_HOME` 变量值为复制目录
   3. 编辑环境变量 `path`; 新建 `C:\Program Files\Java\jdk-11.0.2\bin`
   4. 查看安装成功（win+r -> cmd）`java -version` `javac -version`
3. IDE（(IntelliJ IDEA)[https://www.jetbrains.com/zh-cn/idea/download]） 一路默认安装

### hello world

> java 编写/编译/运行 的过程

```java
// HelloWorld.java
public class HelloWorld {
    public static viod main(String[] args){
        System.out.printIn("Hello World!");
    }
}
```

```bash
javac HelloWorld.java
# create file HelloWorld.class
java HelloWorld
# output
Hello World!
```

1. class 后面的名字是类名
2. 类名必须与源文件的文件名相同，文件名后缀必须是小写的java
3. main 方法是 java 程序执行的入口

### 基本数据类型
- 整数类型
| name  | 占用byte |                   值域                   |
| :---: | :------: | :--------------------------------------: |
| byte  |    1     |                 -128~127                 |
| short |    2     |            -32768~32768~32767            |
|  int  |    4     |          -2147483648~2147483647          |
| long  |    8     | -9223372036854774808~9223372036854774807 |

- 浮点类型
|  name  | 占用byte |   值域   |
| :----: | :------: | :------: |
| float  |    4     | 值域复杂 |
| double |    8     |    -     |

- 符号位

- 布尔类型 boolean 1byte

- 字符类型 char 2byte 'A'->字符 "ABC"->字符串 