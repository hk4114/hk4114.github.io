---
title: react 组件与状态管理
category: 技术项目应用
tags:
  - react
  - 开课吧
date: 2019-10-29
vssue: false
---

### react component
react 有两种组件写法:
1. function
```jsx
import React from 'react';
function App() {
  return (
    <div className="App">
      function component
      <div>
        <ClassComponent></ClassComponent>
      </div>
    </div>
  );
}
export default App
```

2. class
```jsx
import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <div>
                class component
            </div>
        );
    }
}

export default ClassComponent;
```

### react class 组件状态管理
```jsx
import React, { Component } from 'react';

// 时钟
class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }
    componentDidMount() {
         document.getElementById("test").addEventListener("click",this.increace,false)
    }
    increace = (num) => {
        // const { counter } = this.state;
        // this.setState({
        //     counter: counter+num
        // },()=>{
        //     console.log(this.state.counter,'async')
        // })
        // console.log(this.state.counter,'sync')
        // 同步写法
        this.setState(nextState => {
            return {
                counter: nextState.counter + 1
            }
        })
        this.setState(nextState => {
            return {
                counter: nextState.counter + 2
            }
        })

        // 方法二
        setTimeout(()=>{
            this.setState({
                counter: counter + num
            });
            console.log(this.state.counter)
        },0)
    }
    render() {
        const { counter } = this.state
        return (
            <div>
                class component
                <div>{ counter }</div>
                <p>
                    <button id="test" onClick={this.increace.bind(this,2)}> add </button>
                </p>
            </div>
        );
    }
}

export default ClassComponent;
```
setState通常是异步的, 同时存在两个setState时候，只会执行第二个，如何解决呢？
1. 写在回调函数中
2. `this.setState(nextState=>{ return { key: value } })` 传函数
3. 设置定时器 `setTimeout(()=>{this.setState(counter: counter+num)},0)`
4. 原生注册事件

setState只有在合成事件和生命周期函数中是异步的，在原生事件如addEventListener和setTimeout、setInterval中都是同步的。
拓展：为什么 setState只有在React合成事件和生命周期数中是异步的，在原生事件和setTimeout、setInterval、addEventListener中都是同步的？
原生事件绑定不会通过合成事件的方式处理，自然也不会进入更新事务的处理流程。setTimeout也样，在setTimeout回调执行时已经完成了原更新组件流程，也不会再进入异步更新流程，其结果自然就是是同步的了。
合成事件: onClick/onChange等


### react 函数组件状态管理
```js
import React, { useState, useEffect } from 'react';

export default function FuncCompomnent() {
    const [date, setDate] = useState(new Date());
    const [counter, setcounter] = useState(0);
    useEffect(()=>{
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(timer);
    },[])// 第二参数是依赖，空数组就没有依赖
    return (
        <div>
            FuncCompomnent
            <p>{ date.toLocaleString() }</p>
        </div>
    )
}
```

### 组件通信
通过props 传递给子组件，如果父组件传递的是函数，则可以把子组件的信息传入父组件，这种情况叫状态提升。

### 生命周期
由于现有react是同步操作，在加载更新大型数据结构和组件时，同步操作，如果在此时对DOM进行交互，比如输入框输入数字，会有界面卡顿的问题，这就引入了react fiber.对耗时长的任务进行分片，执行一段分片完的时候就询问调度模块是否有紧急任务，如果没有就继续执行下面的分片，如果有就执行紧急任务，只不过当前任务会废弃，等待从头再来。

fiber分为两个阶段
1. 寻找有哪些dom需要更新 [shouldComponentUpdate,getDerivedStateFromProps]
2. 执行更新 ['componentDidMount','componentDidUpdate','componentWillUnmount']

如果开了异步渲染，并且在[componentWillMount,componentWillRecieveProps,componentWillUpdate]中 AJAX请求的话，那AJAX将被没有意义的调用多次，而且在 willMount 中调用，不管多快也赶不上首次渲染。

引⼊入两个新的⽣生命周期函数：
- static getDerivedStateFromProps

```js
class xxx extend Component {
    // 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用
    static getDerivedStateFromProps(props, state) {
        return state // null 则不做更新
    }
}
```
- getSnapshotBeforeUpdate

```js
class xxx extend Component {
    // 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return prevState // 返回值将作为参数传递给 componentDidUpdate()。
    }
}
```

