---
title: python 模块
category: 技术
tags:
  - python
date: 2021-03-14
---

## 引入

```python
import time as t

from time import sleep

t.sleep(3)

sleep(3)
```

## 使用

```python
# mymod.py
def print_me():
    print('me')


# mod_import
import mymod

mymod.print_me()
```