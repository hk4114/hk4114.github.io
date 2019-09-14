---
title: 快排
category: 关于技术
tags:
  - 算法
  - js
date: 2019-09-12
vssue: false
---


<!-- more -->

## 第一种方法
```js
function qSort(compare) {
    var swap = (p1, p2) => {
        var tmp = this[p1];
        this[p1] = this[p2];
        this[p2] = tmp; 
    }
    var sortRange = (start, end) => {
        var midValue = this[start];
        var p1 = start, p2 = end - 1;
        while(p1 < p2) {
            swap(p1, p1 + 1);
            while(compare(this[p1], midValue) <= 0 && p1 < p2) {
                swap(p1, p2--);
            }
            p1 ++;
        }
        if(start < p1 - 1) 
            sortRange(start, p1);
        if(p1 < end - 1) 
            sortRange(p1, end);
        
    }
    sortRange(0, this.length);
    return this;
}
console.log(qSort.call([6, 1, 2, 7, 9, 3, 4, 5, 10, 8], (a, b) => b - a))
```
## 第二种方法
```js
var y = g => 
    (f=>f(f))(
        self => 
            g( (...args)=>self(self).apply(this,args) ) 
    )

var qSort = y(qSort => 
    (array, compare) =>
        array.length <= 1 ? 
            array :
            qSort(array.slice(1).filter(e => compare(e, array[0]) > 0), compare)
                .concat([array[0]])
                .concat(qSort(array.slice(1).filter(e => compare(e, array[0]) <= 0),compare)))
console.log(qSort([6, 1, 2, 7, 9, 3, 4, 5, 10, 8], (a, b) => b - a));
```

todo: 和阮一峰版本性能对比 