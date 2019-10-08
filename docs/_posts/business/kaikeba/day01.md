---
title: day01 组件通信、slot、复合组件、渲染函数
category: 技术项目应用
tags:
  - 开课吧
date: 2019-9-25
vssue: false
---

> 运行环境: stylus + pug + js

1. 组件通信
2. 组件复合
3. 递归组件
4. 组件构造函数和组件实例
5. 渲染函数

elementUI源码看 package和src
<!-- more -->
## vue

### 1. 组件传值
> 父组件 -> 子组件

1. props
```js
// parent
<HelloWorld msg="nice"/>
// children
<div> {{ msg }} </div>
export default {
    props: {
        msg: String
    }
}
```

2. $attrs
```js
// parent
<HelloWorld foo="nice"/>
// children
<div> {{ this.$attrs.foo }} </div>
```

3. ref
```js
// children
data(){
    return {
        refData: 'not defined'
    }
}
// parent
HelloWorld(ref="c1")

mounted() {
    this.$refs.c1.refData = 'have found'
},
```

4. $children 和 $ref 差不多，唯一的区别是$children保存是无序的，所以最好只有一个children时候使用

> 子组件 -> 父组件 ps: 事件谁派发谁监听，虽然监听的事件写在了父组件里面，但还是子组件监听, 处理之后附加在自组件

> 兄弟组件

通过共同的祖辈组件搭桥, $parent 或者 $root
```js
this.$parent.$on('foo',handle);
this.$parent.$emit('foo')
```

:::tips
如何实现只收听一次
:::

> 祖先和后代之间

```js
// 祖先
provide() {
    return { ancestor: "祖先" }
}

// 后代
inject: ['ancestor']
```

### 任意两个组件之间： 事件总线或者vuex



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

## 组件化实战
需求分析: 
1. 数据收集: 输入框、select、单选、多选
2. 数据校验: 单项校验、全局校验
3. 提交: 提交事件

### Kinput
```js
// component -> form -> index.vue & kinput.vue
// kinput.vue
<template lang="pug">
    .kinput
        input(type="text" :value="value" @input="onInput")
</template>
<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
        },
        methods: {
            onInput(e){
                this.$emit('input', e.target.value);
                this.$emit("update:value",e.target.value)
            }
        },
    }
</script>
// index.vue
<template lang="pug">
    .kform
        Kinput( v-model="model.username" )
        Kinput( :value.sync="model.username" )
        span {{ model }}
</template>

<script>
import Kinput from '@/components/form/kinput.vue';

export default {
    components: {
        Kinput
    },
    data(){
        return {
            model: {
                username: "zhangsan",
                password: ""
            }
        }
    }
}
</script>
```
