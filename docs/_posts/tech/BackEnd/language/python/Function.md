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