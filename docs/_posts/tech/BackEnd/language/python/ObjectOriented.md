---
title: python 面向对象编程
category: 技术
tags:
  - python
date: 2021-03-14
---


```python
class Player():
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

    def print_role(self):
        print('%s : %s'%(self.name, self.hp))


use1 = Player('kane', 100)
use1.print_role()


class Player():
    def __init__(self, name, hp, job):
        self.__name = name # 前面加__就是私有属性，不会被实例直接修改
        self.hp = hp
        self.job = job

    def print_role(self):
        print('%s : %s %s' % (self.__name, self.hp, self.job))

    def updateName(self, newname):
        self.__name = newname


use1 = Player('kane', 100, 'war')
use1.print_role()
use1.updateName('joker')
use1.print_role()
use1.__name = ('aaa')
use1.print_role()
```

## 继承

```python
class Monster():
    def __init__(self, hp=20):
        self.hp = hp

    # 定义怪物类
    def show(self):
        print('do')


class Animals(Monster):
  def __init__(self, hp):
    super().__init__(hp)
    # normal
    pass


a2 = Animals(100)
a2.show()

type(a2) # Animals
isinstance(a2, Monster) # True
```


## 类的使用-自定义with语句

```python
class Testwith():
    def __enter__(self):
        print('run')

    def __exit__(self, exc_type, exc_val, exc_tb):
        print('exit')


with Testwith():
    print('test is running')
# run
# test is running
# exit

class Testwith():
    def __enter__(self):
        print('run')

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_tb is None:
            print('正常结束')
        else:
            print('other info %s' % exc_tb)


with Testwith():
    print('test is running')
    raise NameError('test NameRrror')
# run
# test is running
# other info <traceback object at 0x02BD4580>
# NameError: test NameRrror
```