---
title: 文件的输入与输出
category: 技术
tags:
  - python
date: 2021-02-23
---

文件内建函数和方法

- open()          打开文件
- read()          读取
- readline()      读取一行
- seek()          文件内移动
- write()         写入
- close()         关闭文件

```python
# 写
file1 = open('name.txt', 'w')
file1.write('tom')
file1.close()

# 读
file2 = open('name.txt')
str_s = file2.read()
print(str_s)
file2.close()

# 增加
file3 = open('name.txt', 'a')
file3.write('sam')
file3.close()

file4 = open('name.txt')
tom
print(file4.readline())
file4.close()

file5 = open('name.txt')
for item in file5.readlines():
    print(item)
    print('-------')
file5。close()

file6 = open('name.txt')
# 指针 知道现在读到哪儿了
print(file6.tell())
file6.read(1)
print(file6.tell())
# 指针回到头
file6.seek(0)
print(file6.tell())
file6.close()
```