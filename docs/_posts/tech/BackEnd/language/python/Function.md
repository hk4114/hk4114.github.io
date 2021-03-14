---
title: 函数
category: 技术
tags:
  - python
date: 2021-02-23
---

## 函数的定义与调用

> 案例

1. 读取人名文件
2. 读取武器文件
3. 读取三国文件
4. 匹配计数
5. 输出结果

```python
def readFile(filename, encoding=None):
    f = open(filename + '.txt', encoding=encoding)
    if filename == 'sanguo_name':
        data = f.read().split('|')
    elif filename == 'weapon':
        i = 1
        data = []
        for line in f.readlines():
            if i % 2 == 1:
                data.append(line.strip('\n'))
            i += 1
    return data

dic1 = {
    'names': readFile('sanguo_name'),
    'weapons': readFile('weapon', 'UTF-8')
}
print(dic1)
```

```python
import re

def find_item( hero ):
    with open('sanguo.txt', encoding='GB18030') as f:
        data = f.read().replace('\n', '')
        name_num = len(re.findall(hero, data))
    return name_num

# 读取人物信息
name_dict = {}
with open('sanguo_name.txt') as f:
    for line in f:
        names = line.split('|')
        for n in names:
            name_num = find_item(n)
            name_dict[n] = name_num
name_sorted = sorted(name_dict.items(), key=lambda item: item[1], reverse=True)
print(name_sorted[0:10])
```

## 函数的可变长参数

```python
def func(a, b, c):
    print('a= %s' % a)
    print('b= %s' % b)
    print('c= %s' % c)


func(1, 2, 3)
# 关键字传参
func(1, c=2, b=3)

# 取得参数的个数 参数前加*就是可变长参数
def howLong(f, *o):
    return len(o) + 1


print(howLong(2, 4, 6))

# 函数作用域内修改全局变量
var1 = 123

def func_test():
    global var1
    var1 = 456

func_test()
print(var1)
# 456
```

## 函数的迭代器与生成器

```python
list1 = [1, 2, 3]
# 迭代器
it = iter(list1)
print(next(it)) # 1
print(next(it)) # 2
print(next(it)) # 3

# 生成器 yield
def frange(start, end, step):
    x = start
    while x < end:
        yield x
        x += step


for i in frange(10, 20, 0.5):
    print(i)
```


## lambda 表达式

一般用在

```python
def true():
    return True

lambda : True

def add(x,y): return x+y
lambda x,y: x+y
```


## 内置函数

> 通过 `help()` 和官方文档了解函数

```python
a = [1, 2, 3, 4, 5]
# [3, 4, 5]
print(list(filter(lambda x: x > 2, a)))

# [5, 6, 7, 8, 9]
print(list(map(lambda x: x+4, a)))

b = [100, 99, 98]
# [101, 101, 101]
print(list(map(lambda x,y: x+y, a, b)))

import functools
print(functools.reduce(lambda x, y: x + y, [2, 3, 4], 1))

# [(1, 4), (2, 5), (3, 6)] 矩阵转换
print(list(zip((1, 2, 3), (4, 5, 6))))

# value key 转换
dicta = {"a": "aa", "b": "bb"}
dictb = zip(dicta.values(), dicta.keys())
print(dict(dictb))
```


## 闭包

```python
# closure
def sum(a):
    def add(b):
        return a + b
    return add

print(sum(2)(4))

def counter():
    cnt = [0]

    def add():
        cnt[0] += 1
        return cnt[0]
    return add


num1 = counter()

print(num1())
print(num1())


#  a * x + b  其中 a, b 固定， x 会不同
def a_line(a, b):
    # return lambda x: a * x + b
    def arg_y(x):
        return a * x + b

    return arg_y


line1 = a_line(2, 5)
print(line1(10))
```


## 装饰器

```python
import time


def timer(func):
    def wrapper():
        start_time = time.time()
        func()
        stop_time = time.time()
        print('函数运行了 %s' % (stop_time - start_time))

    return wrapper


@timer
def i_can_sleep():
    time.sleep(3)


i_can_sleep()
```

### 装饰器传参
```python
def tips(func):
    def inner(a, b):
        print('start')
        func(a, b)
        print('stop')
        
    return inner


@tips
def add(a, b):
    print(a, b)


def new_tips(argv):
    def tips(func):
        def inner(a, b):
            print('start %s %s' %(argv, func.__name__))
            func(a, b)
            print('stop')
        return inner
    return tips


@new_tips('sub')
def sub(a, b):
    print(a, b)


sub(10, 7)
```

