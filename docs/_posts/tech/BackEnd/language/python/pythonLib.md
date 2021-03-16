---
title: python 标准库
category: 技术
tags:
  - python
date: 2021-03-16
---

## 正则表达式

> 文字处理

```python
import re

p = re.compile('a')
print(p.match('a'))
print(p.match('b'))

p2 = re.compile('ca+t')
print(p2.match('caaaaat'))

s = re.compile(r'(\d+)-(\d+)-(\d+)') # r 不转义 \n 等特殊字符
print(s.match('2021-03-16'))
print(s.match('2021-03-16').group(1)) # 2021

year, month, day = s.match('2021-03-16').groups()
print('%s / %s / %s' % (year, month, day))
```

### search
> match 需要知道字符串是什么样子，才能一一匹配


```python
s = re.compile(r'(\d+)-(\d+)-(\d+)')
print(s.search('aa2021-03-16bb'))
```


### sub

```python
phone = '123-456-789 # call me maybe'
p = re.sub(r'#.*$', '', phone)
print(p) # 123-456-789
```

## 日期时间

```python
import time

print(time.time())
print(time.localtime())
print(time.strftime('%Y-%m-%d %H:%M:%S'))


import datetime

print(datetime.datetime.now())
newtime = datetime.timedelta(minutes=10)
print(datetime.datetime.now() + newtime)

one_day = datetime.datetime(2008, 3, 16)
new_date = datetime.timedelta(days=10)
print(one_day + new_date)
```

## 数学

> Math random

## 文件和目录访问

```sh
# win
ls -l
pwd # 当前所在位置

mkdir 文件夹名
mkdir -p xx/xx/xx # 多层

rmdir # 删除
rm -rf 文件夹名 # 删多级
```


```python
import os
# from os import path

print(os.path.abspath('.'))
print(os.path.abspath('..'))

print(os.path.exists('java')) # 是否存在
print(os.path.exists('txt'))

os.path.isdir('') # 是否是文件夹
os.path.isfile('') # 是否是文件

os.path.join('/tmp/a/', 'b/c') # 路径拼接

from pathlib import Path
p = Path('.')
print(p.resolve()) # 当前相对路径的绝对路径

q = Path('/java/a')
Path.mkdir(q, parents=True) # 创建文件夹
```