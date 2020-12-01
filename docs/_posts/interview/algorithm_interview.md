---
title: 面试问题汇总
category: 面试
date: 2019-05-07
vssue: false
---

## EASY

### 0. 给定一个数组，类似[1,2,3,4,5]，数组长度不定，找出最接近平均数的数字。

```js
var arr = [1,2,3,4,5,6,7]

Array.prototype.average = function() {
    return this.reduce((prev,curr)=>{
        return prev + curr
    })/this.length
}

// 获取数组里与平均值相似的数
function getClosedNumber (arr) {
    let proxy = {}, abs;
    const l = arr.length, average = arr.average;
    for(let i=0;i<l;i++>){
        let innerAbs = Math.abs(average-arr[i]);
        if(typeof abs === 'undefined' || abs >= innerAbs) {
            abs = innerAbs
            if ( proxy[abs] ) {
                proxy[abs].push(arr[i])
            }else {
                proxy[abs] = [arr[i]]
            }
        }
    }

    return proxy[abs]
}
```