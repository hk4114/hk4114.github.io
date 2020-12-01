---
title: 复合组件 表单
category: 技术
tags:
  - 开课吧
date: 2019-9-25
vssue: false
---

## 需求分析
1. 数据收集: 输入框、select、单选、多选
2. 数据校验: 单项校验( form-item )、全局校验( form )
3. 提交: 提交事件( form )

## 拆成组件

- 输入框->数据的收集 v-model 通知校验
- 表单项 校验 显示label 错误信息的展示
- 表单 提交数据 数据模型持有和传递，规则，provide

### Input 数据收集/通知校验
```html
// Input.vue
<template lang="pug">
    .input
        input( 
      :type="type" 
      :value="value" 
      @input="onInput"
      v-bind="$attrs" //- 在jsx中类似jsx={...props} 将placeholder等特性绑定到该组件上
      )
</template>
<script>
    export default {
        inheritAttrs: false, // 由于使用了 $attrs 特性集 所以placeholder就降级到div上，如果不需要这个效果则需要这个属性
        props: {
            type: {
                type: String,
                default: "text"
            },
            value: {
                type: String,
                default: ''
            },
        },
        methods: {
            onInput(e){
                const { value } = e.target;
                // 父组件传值
                this.$emit('input', value);
                // 通知校验 由于自己slot上不能绑定事件 只能老爹Index去派发
                this.$parent.$emit('validate');
            }
        },
    }
</script>
```
在通知校验部分强依赖了$parent，可以通过$dispatch 向上冒泡告诉所有父辈实现功能，但是在vue2.x中已经废弃，所以elementUI或者iView是自己实现的。
```html
// index.vue 测试代码
<template lang="pug">
    .form-wrap
        Input( v-model="model.username" )
        span {{ model }}
</template>

<script>
import Input from '@/components/form/Input.vue';

export default {
    components: {
        Input
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

### FormItem label/错误信息/校验

#### 1. label和错误信息的渲染
```html
<template lang="pug">
    .form-item
        label( v-if="label" ) {{ label }}
        slot
        //- 错误信息
        .jiaoyan( v-if="error" ) {{ error }}
</template>

<script>
export default {
    props: {
        label: { // 属性，有上一层传递下来
            type: String,
            default: ""
        }
    },
    data() {
        return {
            error: "" // 自己判断报错信息，所以这是状态
        }
    }
}
</script>
```

```html
// index.vue 测试代码
<template lang="pug">
    .form-wrap
        FotmItem( label="用户名" )
            Input( v-model="model.username" )
        span {{ model }}
</template>

<script>
import Input from '@/components/form/input.vue';
import FormItem from '@/components/form/form-item.vue';

export default {
    components: {
        Input,
        FormItem
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

### Form 数据格式的持有和传递、校验规则的设置、全局校验

#### 1. 数据格式的持有、校验规则的设置
```html
<template lang="pug">
    .from
        slot
</template>
<script>
export default {
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        }
    }
}
</script>
```

```html
// index.vue 测试代码
<template lang="pug">
    .form-wrap
        Form(:model="model" :rules="rules")
            FotmItem( label="用户名" )
                Input( v-model="model.username" )
            FotmItem( label="密码" )
                Input( v-model="model.password" )
        span {{ model }}
</template>

<script>
import Input from '@/components/form/input.vue';
import FormItem from '@/components/form/form-item.vue';
import Form from '@/components/form/form.vue';

export default {
    components: {
        Input,
        FormItem,
        Form
    },
    data(){
        return {
            model: {
                username: "zhangsan",
                password: ""
            },
            rules:{
                username: [{
                    required: true,
                    message: '用户名必填'
                }],
                password: [{
                    required: true,
                    message: '密码必填'
                }]
            }
        }
    }
}
</script>
```

#### 2. 校验
虽然数据通过props绑定在form中，但是实际校验是表单项完成的，需要通过form的provide传值
```js
export default {
  // code
    provide(){
        return {
            form: this
        }
    },
    methods: {
        validate(cb){ // 全局校验
            // 1. 获取校验项 
            const tasks = this.$children.filter(v=>v.prop).map(v=>v.validate());
            Promise.all( tasks )
            .then(() => cb(true))
            .catch(() => cb(false))
        }
    },
}
```

表单项的校验,表单通过inject取到值和规则.

```js
// npm i async-validator -D
import Schema from 'async-validator';

export default {
    inject: ['form'],
    mounted(){
        // 由于校验是 this.$parent派发 也就是说得我监听
        this.$on('validate', ()=>this.validate())
    },
    methods: {
        validate() {
            // 校验
            // 1. 获取数值和规则
            const value = this.form.model[this.prop];
            const rule = this.form.rules[this.prop];
            
            // 2. 创建校验规则
            const schema = new Schema({
                [this.prop]: rule
            });
            // 校验返回 promise 这样 form就能使用实例的方法并返回结果了
            return schema.validate({ [this.prop]: value }, errors => {
                if(errors){
                    this.error = errors[0].message;
                }else{
                    this.error = '';
                }
            })
        }
    },
}
```

```html
<template lang="pug">
    //- index.vue 测试代码
    .form-wrap
        Form(:model="model" :rules="rules" ref="loginForm" )
            FormItem( label="用户名" prop="username")
                Input( :value.sync="model.username" placeholder="请输入用户名")
            FormItem( label="密码" prop="password")
                Input( type="password" v-model="model.password" placeholder="请输入密码" )
            FormItem
                button(@click="submit") Submit
        span {{ model }}
</template>

<script>
import Input from '@/components/form/input.vue';
import FormItem from '@/components/form/form-item.vue';
import Form from '@/components/form/form.vue';

export default {
    components: {
        Input,
        FormItem,
        Form
    },
    data(){
        return {
            model: {
                username: "zhangsan",
                password: ""
            },
            rules:{
                username: [{
                    required: true,
                    message: '用户名必填'
                }],
                password: [{
                    required: true,
                    message: '密码必填'
                }]
            }
        }
    },
    methods: {
        submit(){
            this.$refs.loginForm.validate(isValidate => {
                if(isValidate){
                    alert('login...')
                    
                }else{
                    alert('sb')
                }
            })
        }
    },
}
</script>
```

ps:
Q: v-model与.sync的区别，和使用场景？
A: 
v-model -> 默认展开
`Input( :value="username" @input="username=$event" )`
但是可以控制 控制能力在子组件
```js
export default {
  model: {
    prop: 'checked',
    event: 'change'
  }
}
// 子组件这么设置 会导致上级使用v-model时行为变化
Children( :checked = "model.remember" @change="model.remember = $event")
```

.sync 会用在自定义组件上 控制能力在老爹。.sync什么时候用？子组件想要修改父组件传递的属性
```pug
Input( :value.sync = "model.username")
||
Input( :foo = "model.username" @update:foo=" username=$event ")
```
还需要`input( @input="$emit('update:foo',$event)" ) `



