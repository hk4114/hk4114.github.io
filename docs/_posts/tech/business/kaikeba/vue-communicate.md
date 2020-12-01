---
title: 组件通信
category: 技术
tags:
  - 开课吧
date: 2019-9-25
vssue: false
---
1. 父组件 -> 子组件
   1. props
   2. $attrs
   3. ref
   4. children
2. 子组件 -> 父组件 $emit
3. 兄弟组件 $parent/$root 搭桥
4. 祖先与孙子 provide函数与inject
5. 两个组件之间： 事件总线或者vuex

<!-- more -->

# 组件通信

### 父组件 -> 子组件
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

### 子组件 -> 父组件 

ps: 事件谁派发谁监听，虽然监听的事件写在了父组件里面，但还是子组件监听, 处理之后附加在自组件

### 兄弟组件

通过共同的祖辈组件搭桥, $parent 或者 $root
```js
// brother1 发
this.$parent.$emit('foo', this)

// brother2 mounted 听(关心则听
this.$parent.$on('foo', comp => {
	if(comp !== this){
  	console.log('sign')
  }
});
```

### 祖先和后代之间

```html
// 祖先
<script>
export default {
  provide() {
      return { ancestor: "祖先" }
  }
}
</script>

// 后代
<script>
export default {
  inject: ['ancestor']
}
</script>
```

### 任意两个组件之间： 事件总线或者vuex
```js
export default class Bus {
    constructor(){
        this.callbacks = {}
    }

    $on(name, fn){
        this.callbacks[name] = this.callbacks[name] || [];
        this.callbacks[name].push(fn)
    }

    $emit(name, args){
        if(this.callbacks[name]) {
            this.callbacks[name].forEach(cb => cb(args));
        }
    }
}
// main.js
import Bus from './utils/bus';
Vue.prototype.$bus = new Bus();

// child1
this.$bus.$on('foo', handle)
// child2
this.$bus.$emit('foo')
```