---
title: python基础
category: 技术
tags:
  - python
date: 2019-04-17
vssue-id: 1
---

环境和基本语法

<!-- more -->


# python基础

1. [安装地址](https://www.python.org/ftp/python/3.7.0/python-3.7.0-macosx10.9.pkg)
2. [pychars](https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=windows&code=PCC)

::: warning 注意
安装时 一定要勾选 `add Python 3.5 to PATH`
:::

2. 执行以下操作:
```sh
python
>>> print('hello,world')
hello,world
```

3. 新建 `hello.py`
```python
# 输入
name = input()
# 输出
print('hello',name)

'''
逻辑分支
'''

if True:
    print('true')
else:
    print('false')

exit() 
# 退出
```

## 基础语法

### 书写规则
```python
# simple demo
import time # 导入时间模块

print(time.time())

if 10-9 > 0:
    print('10>9')
```


### 基础数据类型
- 整数 int 8
- 浮点数 float 8.8
- 字符串 str "8"
- 布尔值 bool True False

通过 `type('8')` print `<class 'str'>` 知道数据类型

```python
int('8') # 8     字符串转数字
str(8)   # '8'   数字转字符串
bool(0)  # false 非零为True
```

### 变量的定义与常用操作
