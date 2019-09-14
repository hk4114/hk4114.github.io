---
title: LeetCode 题解
category: 关于技术
tags:
  - 算法
  - js
vssue-id: 3
---

每周一题 leetcode

<!-- more -->

# LeetCode 题解(简单)

[[toc]]

## 1. 整数反转

:::tip
input: 123;
output: 321

input: -123;
output: -321

input: 120;
output: 21
:::

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(num=0) {
    let a = Math.pow(2,31),
	b = ""
	b = num.toString().replace(/\d+/g,(e)=>{
		return baby(e)
	})
    if(+b>=a-1 || +b<=-a)return 0
	return +b
};

function baby(str){
	return +(str.split('').reverse().join(''))
}
```

## 2. 回文数

:::tip
input: 121;
output: true

input: -121;
output: false

input: 10;
output: false
:::

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a = x.toString(),b = a.length-1;
    if(x<0)return false
    let c = b/2;
    for(let i=0;i<c;i++){
        if(a[i]!=a[b-i])return false
    }
    return true
};
```

## 3. 两数之和

:::tip
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
:::

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let l = nums.length
    for(let i = 0;i<l;i++){
        for(let j = i+1;j<l;j++){
            if(nums[i]+nums[j] == target)return[i,j]
        }
    }
}

const twoSum = (arr,aim)=>{
    let map={}
    for(let i=0,l=arr.length;i<l;i++){
        if(map.hasOwnProperty(aim-arr[i])){
            return [i,map[aim-arr[i]]]
        }
        map[arr[i]] = i
    }
}
```


## 4. 两数相加

:::tip
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)

输出：7 -> 0 -> 8

原因：342 + 465 = 807
:::

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;
    while (p || q){
        let x = p ? p.val : 0;
        let y = q ? q.val : 0;
        let sum = x + y + carry;
        carry = sum < 10 ? 0 : 1;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p){
            p = p.next;
        }
        if (q){
            q = q.next;
        }
    }
    if (carry > 0){
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}
```

## 5. 罗马数字转整数

:::tip
输入："III"
输出：3

输入: "IV"
输出: 4

输入: "IX"
输出: 9
:::

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const m = {
        I:1,V:5,X:10,L:50,C:100,D:500,M:1000
    }
    let ans = 0
    for(let i=0,l=s.length;i<l;i++){
        if( i<l-1 && m[s[i]]<m[s[i+1]] ){
           ans-=m[s[i]]
        }
        else{
            ans+=m[s[i]]
        }
    }
    return ans
};
```

## 6. 数组去重和数组旋转
```js

let a = [...new Set(arr)]

let a =[]
for(let i=0,l=arr.length;i<l;i++){
    if(a.indexOf(arr[i]) == -1){
        a.push(arr[i])
    }
}

// 旋转 [1,2,3,4,5,6] 传入 3/i -> [4,5,6,1,2,3]
function rotate(arr,i){
    let l = arr.length
    let newArr = arr.concat(arr);
    let num = i % l
    return newArr.slice(l-num,newArr.length-num)
}
```