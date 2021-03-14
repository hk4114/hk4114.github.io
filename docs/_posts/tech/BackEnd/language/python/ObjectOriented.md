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
```