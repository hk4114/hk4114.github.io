---
title: java入门
category: 技术
tags:
  - java
date: 2020-12-20
vssue-id: 1
---

## 环境搭建与运行

> [安装地址](https://res001.geekbang.org/tools/jdk-11.0.2_windows-x64_bin.exe)

> [IntelliJ IDEA](https://www.jetbrains.com/zh-cn/idea/download)

### 开发环境搭建(windows)

1. 下载JDK，直接安装，安装目录默认
2. 设置环境变量 
   1. 复制目录 `C:\Program Files\Java\jdk-11.0.2` 
   2. 我的电脑 -> 右键属性 -> 高级系统设置 -> 新建系统变量 -> 变量名`JAVA_HOME` 变量值为复制目录
   3. 编辑环境变量 `path`; 新建 `C:\Program Files\Java\jdk-11.0.2\bin`
   4. 查看安装成功（win+r -> cmd）`java -version` `javac -version`
3. IDE（） 一路默认安装

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

## 数据类型
### 基本数据类型
- 整数类型
| name  | 占用byte |                   值域                   |   类    |
| :---: | :------: | :--------------------------------------: | :-----: |
| byte  |    1     |                 -128~127                 |         |
| short |    2     |            -32768~32768~32767            |         |
|  int  |    4     |          -2147483648~2147483647          | Integer |
| long  |    8     | -9223372036854774808~9223372036854774807 |  Long   |
- 浮点类型

|  name  | 占用byte |   值域   |   类   |
| :----: | :------: | :------: | :----: |
| float  |    4     | 值域复杂 | Float  |
| double |    8     |    -     | Double |

- 符号位

- 布尔类型 boolean 1byte Boolean

- 字符类型 char 2byte String 

### 数组
```java
int a[] = new int[10]; //定义了一个长度是10的int类型数组
// 访问数组中的元素
a[1] = 3; //将下标是1的数组元素赋值为3
System.out.println(a[2]); //打印下标是2的数组元素值
```

### 逻辑分支
```java
int a;
if (a > 1) {
  //执行代码块
} else if (a == 1) {
  //执行代码块
} else {
  //执行代码块
}


int a;
switch (a) {
  case 1:
    //执行代码块
    break;
  case 2:
    //执行代码块
    break;
  default:
    //默认执行代码
}
```

### 循环遍历
```java
for (int i = 0; i < 10; ++i) {
  if (i == 4) {
    continue; //跳过本次循环，不会打印出4这个值
  }
  System.out.println(i);
}

for (int i = 0; i < 10; ++i) {
  if (i == 4) {
    break; //提前终止循环，只会打印0、1、2、3
  }
  System.out.println(i);
}

public void func(int a) {
  if (a == 1) {
    return; //结束一个函数，从此处返回
  }
  System.out.println(a);
}
```

### 类、对象
class 定义类，类中包含成员变量（也叫作属性）和方法（也叫作函数），其中有一种特殊的函数叫作构造函数，其命名比较固定，跟类名相同。除此之外，Java 语言通过 new 关键词来创建一个类的对象，并且可以通过构造函数，初始化一些成员变量的值。

```java
public class Dog { // 定义了一个Dog类
  private int age; // 属性或者成员变量
  private int weight;

  public Dog(int age, int weight) { // 构造函数
    this.age = age;
    this.weight = weight;
  }

  public int getAge() { // 函数或者方法
    return age;
  }
  
  public int getWeigt() {
    return weight;
  }
  
  public void run() {
    // ...
  }
}

Dog dog1 = new Dog(2, 10);//通过new关键词创建了一个Dog对象dog1
int age = dog1.getAge();//调用dog1的getAge()方法
dog1.run();//调用dog1的run()方法
```

#### 权限修饰符
- private 修饰的函数或者成员变量，只能在类内部使用。
- protected 修饰的函数或者成员变量，可以在类及其子类内使用。
- public 修饰的函数或者成员变量，可以被任意访问。

```java
public class Dog {// public修饰类
  private int age; // private修饰属性，只能在类内部使用
  private int weight;
  
  public Dog(int age, int weight) {
    this.age = age;
    this.weight = weight;
  }

  public int getAge() { //public修饰的方法，任意代码都是可以调用
    return age;
  }
  
  public void run() {
    // ...
  }
}
```

#### 继承
extends 关键字来实现继承。被继承的类叫作父类，继承类叫作子类。子类继承父类的所有非 private 属性和方法。
```java

public class Animal { // 父类
  protected int age;
  protected int weight;
  
  public Animal(int age, int weight) {
    this.age = age;
    this.weight = weight;
  }
  
  public int getAge() { // 函数或者方法
    return age;
  }
  
  public int getWeigt() {
    return weight;
  }
  
  public void run() {
    // ...
  }
}

public class Dog extends Animal { // 子类
  public Dog(int age, int weight) { // 构造函数
    super(age, weight); //调用父类的构造函数
  }

  public void wangwang() {
    //...
  }
}

public class Cat extends Animal { //子类
  public Cat(int age, int weight) { // 构造函数
    super(age, weight); //调用父类的构造函数
  }
  
  public void miaomiao() {
    //...
  }
}

//使用举例
Dog dog = new Dog(2, 8);
dog.run();
dog.wangwang();
Cat cat = new Cat(1, 3);
cat.run();
cat.miaomiao();
```

### 接口
通过 interface 关键字来定义接口。
只能声明方法，不能包含实现，也不能定义属性。
类通过 implements 关键字来实现接口中定义的方法。
```java

public interface Runnable {
  void run();
}

public class Dog implements Runnable {
  private int age; // 属性或者成员变量
  private int weight;

  public Dog(int age, int weight) { // 构造函数
    this.age = age;
    this.weight = weight;
  }

  public int getAge() { // 函数或者方法
    return age;
  }

  public int getWeigt() {
    return weight;
  }

  @Override 
  public void run() { //实现接口中定义的run()方法
    // ...
  }
}
```

### 容器
Java 提供了一些现成的容器。容器可以理解为一些工具类，底层封装了各种数据结构。
比如 ArrayList 底层就是数组，LinkedList 底层就是链表，HashMap 底层就是散列表等。这些容器我们可以拿来直接使用，不用从零开始开发，大大提高了编码的效率。
```java
public class DemoA {
  private ArrayList<User> users;
  
  public void addUser(User user) {
    users.add(user);
  }
}
```

### 异常处理
可以指直接使用 JDK 提供的现成的异常类，也可以自定义异常。
通过关键字 throw 来抛出一个异常，通过 throws 声明函数抛出异常，通过 try-catch-finally 语句来捕获异常。
```java

public class UserNotFoundException extends Exception { // 自定义一个异常
  public UserNotFoundException() {
    super();
  }

  public UserNotFoundException(String message) {
    super(message);
  }

  public UserNotFoundException(String message, Throwable e) {
    super(message, e);
  }
}

public class UserService {
  private UserRepository userRepo;
  public UserService(UseRepository userRepo) {
    this.userRepo = userRepo;
  }

  public User getUserById(long userId) throws UserNotFoundException {
    User user = userRepo.findUserById(userId);
    if (user == null) { // throw用来抛出异常
      throw new UserNotFoundException();//代码从此处返回
    }
    return user;
  }
}

public class UserController {
  private UserService userService;
  public UserController(UserService userService) {
    this.userService = userService;
  }
  
  public User getUserById(long userId) {
    User user = null;
    try { //捕获异常
      user = userService.getUserById(userId);
    } catch (UserNotFoundException e) {
      System.out.println("User not found: " + userId);
    } finally { //不管异常会不会发生，finally包裹的语句块总会被执行
      System.out.println("I am always printed.");
    }
    return user;
  }
}
```


### package 包
Java 通过 pacakge 关键字来分门别类地组织类，通过 import 关键字来引入类或者 package。
```java

/*class DemoA*/
package com.xzg.cd; // 包名com.xzg.cd

public class DemoA {
  //...
}

/*class DemoB*/
package com.xzg.alg;

import java.util.HashMap; // Java工具包JDK中的类
import java.util.Map;
import com.xzg.cd.DemoA;

public class DemoB {
  //...
}
```