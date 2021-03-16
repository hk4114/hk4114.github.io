---
title: python 多线程编程
category: 技术
tags:
  - python
date: 2021-03-16
---

## 进程和线程
线程是比进程粒度更小的概念。电脑里的qq、360是进程，qq里和多人聊天就是线程。


```python
import time
# 顺序执行
def myThread(p, q):
    print('%s %s' % (p, q))
    time.sleep(3)


for i in range(1, 10, 1):
    myThread(i, i+1)


# 多线程
import threading
import time
from threading import current_thread


def myThread(p, q):
    print(current_thread().getName(), 'start')
    print('%s %s' % (p, q))
    time.sleep(3)
    print(current_thread().getName(), 'stop')


for i in range(1, 10, 1):
    # myThread(i, i + 1)
    t1 = threading.Thread(target=myThread, args=(i, i+1))
    t1.start()

print(current_thread().getName(), 'end')
```

## 线程依赖

```python
import threading
from threading import current_thread


class MyThread(threading.Thread):
    def run(self):
        print(current_thread().getName(), 'start')
        print('run')
        print(current_thread().getName(), 'stop')
        

t1 = MyThread()
t1.start()
t1.join()

print(current_thread().getName(), 'end')
# Thread-1 start
# run
# Thread-1 stop
# MainThread end
```


## 应用题： 生产者与消费者的问题

```python
from threading import Thread, current_thread
import time
import random
from queue import Queue

queue = Queue(5)


class ProviderThread(Thread):
    def run(self):
        name = current_thread().getName()
        nums = range(100)
        global queue
        while True:
            num = random.choice(nums)
            queue.put(num)
            print('provider %s has product %s' % (name, num))
            t = random.randint(1, 3)
            time.sleep(t)
            print('provider %s has slept %s s' % (name, t))


class ConsumerThread(Thread):
    def run(self):
        name = current_thread().getName()
        global queue
        while True:
            num = queue.get()
            queue.task_done() # task_done 已经有了线程等待与同步的代码
            print('Consumer %s has consumed %s' % (name, num))
            t = random.randint(1, 5)
            time.sleep(t)
            print('Consumer %s has slept %s s' % (name, t))


p1 = ProviderThread(name = 'p1')
p1.start()

c1 = ConsumerThread(name = 'c1')
c1.start()

c2 = ConsumerThread(name = 'c2')
c2.start()
```