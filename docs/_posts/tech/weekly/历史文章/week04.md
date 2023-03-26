---
title: 周报第四期
---

## Algorithm:
### 缺求缺失的第一个正数
```javascript
// 计数器
function firstMissingPositive(nums) {
  let count = 1;
  const filterNums = nums.sort((a, b) => a - b).filter(v => v > 0);
  for (let i = 0; i <= filterNums.length; i++) {
    if (count == filterNums[i]) {
      count++
    } else if (filterNums[i] > count) {
      break
    }
  }
  return count
};

// 通过下标
var firstMissingPositive = function (nums) {
  var len = nums.length;
  var rect = {};
  for (let i = 0; i < len; i++) {
    let num = nums[i];
    if (num > len || num <= 0) continue;
    rect[num] = true;
  }
  for (let i = 0; i <= len; i++) {
    if (rect[i + 1]) continue;
    return i + 1;
  }
  return 1;
};
```

### 合并两个有序数组
```javascript
// 直接合并排序
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
  return nums1
};

// 双指针
var merge = function (nums1, m, nums2, n) {
  let arr = new Array(m + n).fill(0);
  let cur;
  for (let i = 0, j = 0; i < m || j < n;) {
    if (j === n) {
      cur = nums1[i++]
    } else if (i === m) {
      cur = nums2[j++]
    } else if (nums1[i] > nums2[j]) {
      cur = nums2[j++]
    } else {
      cur = nums1[i++]
    }
    arr[i + j - 1] = cur
  }
  for (let i = 0; i < arr.length; i++) {
    nums1[i] = arr[i]
  }
  return nums1
};

// 尾双指针
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let tail = m + n + 1;
  while (tail >= 0) {
    nums1[tail] = num1[i] > nums2[j] ? num1[i--] : nums2[j--];
    tail--
  }
  return nums1
};
```

## Tips: 学习一个技术技巧
[js 复杂判断](https://www.yuque.com/huakang/init-web-dev/gm86mk?view=doc_embed)
## Review: 阅读并点评一篇英文技术文章
本周无
## Share: 分享一篇有观点和思考的技术文章
本周无
