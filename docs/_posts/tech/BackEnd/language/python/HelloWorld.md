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

```python
bandwidth = 100
ratio = 8

print(bandwidth/ratio)
```

## 序列
- 字符串 "abcd"
- 列表 [0, 'abc']
- 元祖('abc', 'efg')

### 字符串

```python
chinese_zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪"

# 序列切片 ([:])
print(chinese_zodiac[0:4]) # 鼠牛虎兔

# 序列的连接 (+) 序列 + 序列
newList = "That's " + chinese_zodiac # That's 鼠牛虎兔龙蛇马羊猴鸡狗猪

# 序列的重复 (*) 序列 * 整数
new2 = 'ha' * 2 # haha

# 序列的成员关系 (in/not in)  对象 [not] in 序列
print('狗' in chinese_zodiac) # True
```


### 元祖

```python
nums = (1, 2, 3, 4, 5, 6, 7)
num = 4
# <filter object at 0x031F0D10>
print(filter(lambda x: x < num, nums))

# [1, 2, 3]
print(list(filter(lambda x: x < num, nums)))

# 3
print(len(list(filter(lambda x: x < num, nums))))

zodiac_names = (u'摩羯座', u'水瓶座', u'双鱼座', u'白羊座', u'金牛座', u'双子座',
               u'巨蟹座', u'狮子座', u'处女座', u'天秤座', u'天蝎座', u'射手座')
zodiac_days = ((1, 20), (2, 19), (3, 21), (4, 21), (5, 21), (6, 22),
               (7, 23), (8, 23), (9, 23), (10, 23), (11, 23), (12, 23))
# (1, 20) > (2, 19) -> 120 > 219 -> false

(mouth, day) = (2, 9)
zodiac_day = filter(lambda x: x <= (mouth, day), zodiac_days)

zodiac_day_len = len(list(zodiac_day)) % 12
# 水瓶座
print(zodiac_names[zodiac_day_len])
```

### 列表

> 与字符串一样存在 `in`、`not in`、`+`、`*`、`[:]` 操作符

```python
a_list = ['abc', 'xyz']

a_list.append('x')

print(a_list)

a_list.remove('xyz')

print(a_list)

# True chinese_zodiac 是 数组
print('狗' in chinese_zodiac)
```


## 逻辑

### 条件

```python
words = input('please input')

if words == 'abc':
    print('same')
elif words == 'ddd':
    print('ddd')
else:
    print('not same')
```

### 循环

```python
chinese_zodiac = "鼠牛虎兔龙蛇马羊猴鸡狗猪"

prefix = input('please input prefix')
for i in range(2000, 2022):
    print('%s, %s 年的生肖是 %s' % (prefix, i, chinese_zodiac[(i-4) % 12]))

num = 5
while num < 15:
    if num < 7:
        print('a %d' % num)
    elif num == 10:
        num += 1
        continue
    elif num > 13:
        break
    else:
        print('b %d' % num)
    num += 1

# 判断星座的filter
int_mouth = int(input('mouth'))
int_day = int(input('day'))

for zodiac_index in range(len(zodiac_days)):
    if zodiac_days[zodiac_index] >= (int_mouth, int_day):
        print(zodiac_names[zodiac_index])
        break
    elif int_mouth == 12 and int_day > 23:
        print(zodiac_names[0])
        break
```