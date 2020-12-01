---
title: vue 弹窗组件 与渲染函数
category: 技术
tags:
  - 开课吧
date: 2019-9-25
vssue: false
---
- render 渲染函数，参数 h -> createElement 字符串转换成vdom
- 先$mount()，后通过 $el 获取 dom
- vue.extend 返回的是组件构造函数，需要用 propsData 来进行props
- 
<!-- more -->

## 需求分析
- 单独创建
- 挂载目标: body
    + 弹窗组件基本是绝对定位或者固定定位，这就要求父组件是相对定位或者是绝对定位
    + 对组件实例的控制，增删也更加方便
- 实现效果
```js
// 全局API $create
this.$create(Notice, { // notice 组件实例
    title: "title",
    message: "提示信息",
    duration: 1000
}).show()
```

## 拆分组件
- Notice 组件
- create 函数
  + 创建组件实例
  + 挂载到body
  + 销毁 

### Notice 
```pug
<template>
    .box( v-if="isShow" )
        h3 {{ title }}
        .box-content {{ message }}
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
    message: { type: String, default: "" },
    duration: { type: Number, default: 1000 }
  },
  data() {
    return { isShow: false };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(this.hide, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    }
  }
};
</script>
```

### create.js 创建实例文件
```js
let Vue;

// 创建组件实例的方法
export default function create(Component, props) {
    // 1. 创建组件实例 extends || new Vue
    const  vm = new Vue({
        render(h) { // 渲染函数的使用 h -> createElement 字符串转换成vdom
            return h(Component. {props}) // <- 返回vdom
        }
    }).$mount() // vdom -> 真实dom

    // 方式 extend
    // const Ctor = Vue.extend(Component); // 返回组件构造函数
    // const comp = new Ctor({ propsData: props }); // 获得组件实例
    // document.body.appendChild(comp.$el);

    // 获取dom vm.$el
    document.body.appendChild(vm.$el);

    // 2. 挂载
    const comp = vm.$children[0]; // 获取组件实例 为的是将来能销毁掉

    // 3. 销毁
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }

    return comp
}
```

### 使用
```js
import Create from "@/utils/create";
import Notice from "@/components/toast";

Vue.prototype.$create = new Create();
const notice = create(Notice, {
    title: "title",
    message: "show massage",
    duration: 1000
});
notice.show();
```

## 总结

关键词:
- render 渲染函数，参数 h -> createElement 字符串转换成vdom
- 先$mount()，后通过 $el 获取 dom
- vue.extend 返回的是组件构造函数，需要用 propsData 来进行props