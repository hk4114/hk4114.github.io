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
### 生命周期
引⼊入两个新的⽣生命周期函数：
- static getDerivedStateFromProps
getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调⽤用。它应返回⼀一个对象来更新 state，如果返回 null 则不更新任何内容。
请注意，不管原因是什么，都会在每次 渲染前触发此方法。这与UNSAFE_componentWillReceiveProps 形成对比，后者仅在父
组件重新渲染时触发，⽽而不是在内部调用 setState 时。

getSnapshotBeforeUpdate