---
title: 构建Flutter开发环境
category: 技术
tags:
  - Flutter
vssue: false
date: 2019-04-06
---

flutter 环境/开发工具的安装，以及安装过程中遇到的问题。

<!-- more -->

## Flutter 环境 

1. 下载[JAVA](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

2. 勾选 `Accept License Agreement`

:::tip 
大陆使用迅雷下载java,会更快哦！
:::

3. 下载对应系统的软件

3. 在集成终端中输入 `java -version` 便可以查看是否安装完成

4. 安装[Flutter SDK](https://flutter.dev/docs/development/tools/sdk/releases#windows)，安装到你自己指定的路径，记住该路径

5. 配置环境变量:`G:\software\flutter\bin`

6. [下载android studio](https://developer.android.google.cn/studio/)

7. configure -> plugins -> search flutter install

8. cmd -> `flutter doctor` -> `flutter doctor --android-licenses` -> always y

9. AS 新建个虚拟机 大概率跑不通
   1. [进入bios](https://jingyan.baidu.com/article/8275fc864d423e46a03cf638.html)
   2. 修改 虚拟化 的值
   3. 重启之后文件夹 user-> <用户> -> AppData -> android -> extras -> interl -> hax 重装
   4. 重启AS

10. 点击右上角的`debug` (那个甲壳虫)，之后耐心等待。成功后会跳转一个应用。

::: tip

如果出现`Error running Gradle: ...FAILURE: Build failed with an exception.` 

应该修改 `<relative path>\android\build.gradle`的配置

```js
buildscript {
    repositories {
        // google()
        // jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:3.2.1'
    }
}

allprojects {
    repositories {
        // google()
        // jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
    }
}
```

修改 `flutter_sdk` 的 `flutter.gradle` 文件: 我的路径 `G:\software\flutter\packages\flutter_tools\gradle`

```js
buildscript {
  repositories {
    // google()
    // jcenter()
    maven{
      url 'https://maven.aliyun.com/repository/jcenter'
    }
    maven{
      url 'http://maven.aliyun.com/nexus/content/groups/public'
    }
  }
  dependencies {
    classpath 'com.android.tools.build:gradle:3.2.1'
  }
}
```
:::


## VScode 开发

1. 插件市场里 安装 flutter 插件
2. 编写 `emulator.bat` 文件，启动虚拟机
```sh
<path>emulator.exe -netdelay none -netspeed full -avd <AS中添加的虚拟机名称，如: Nexus_5X_API_28> # 空格以 _ 代替
```
3. 打开集成终端，输入`flutter run` 就可以将项目跑起来

