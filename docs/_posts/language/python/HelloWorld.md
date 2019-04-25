---
title: python学习(基础)
category: language
tags:
  - python
  - basic
date: 2019-04-17
vssue-id: 1
---

python 初学

<!-- more -->


# python hello world

1. [安装地址](https://www.python.org/ftp/python/3.7.0/python-3.7.0-macosx10.9.pkg)

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
```