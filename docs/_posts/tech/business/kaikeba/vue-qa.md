---
title: vue Q & A
category: 技术
tags:
  - 开课吧
date: 2019-9-25
vssue: false
---
- `v-model` 与 `.sync` 什么区别？

<!-- more -->
### Q: `v-model` 与 `.sync` 什么区别？

- `v-model` -> 默认展开 `Input( :value="username" @input="username=$event" )`
```js
// 但是可以控制 控制能力在子组件
export default {
  model: {
    prop: 'checked',
    event: 'change'
  }
}
// 子组件这么设置 会导致上级使用v-model时行为变化
Children( :checked = "model.remember" @change="model.remember = $event")
```

- `.sync` 会用在自定义组件上 控制能力在老爹,`.sync`什么时候用？子组件想要修改父组件传递的属性
```pug
Input( :value.sync = "model.username")
||
Input( :foo = "model.username" @update:foo=" username=$event ")

//- 子组件
input( @input="$emit('update:foo',$event)" ) 
```








