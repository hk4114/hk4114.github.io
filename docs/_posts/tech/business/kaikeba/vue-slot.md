---
title: slot
category: 技术
tags:
  - 开课吧
date: 2019-9-25
vssue: false
---

- 匿名插槽
- 具名插槽
- 作用域插槽

<!-- more -->

## 插槽
```js
// parent
<Component>
    <template v-slot:default> 匿名插槽 </template>
    <template v-slot:cont> 具名插槽 </template>
</Component>

// child
<slot></slot>
<slot name="cont"></slot>
```
数据来自子组件但是要在父组件加工，输出最终的结果。
```js
// 作用域插槽
// parent
template( v-slot:muilt = "{ muiltData }" ) 作用域插槽，来自自租金的数据: {{ muiltData.name }}

// child
slot( name="muilt" :muiltData="muiltData" )

data(){
    return {
        muiltData: {
          name: 'zhangsan',
          age: 28,
          sex: 'male'
      }
    }
}
```