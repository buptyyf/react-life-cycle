# react-life-cycle
一个栗子看懂react的生命周期  
## how to run
```javascript
npm install
```
安装完毕后分别执行
```javascript
webpack
```
和
```javascript
webpack-dev-server
```
再访问localhost:8080即可

## React组件生命周期

> 对组件从第一次实例化到最后销毁组件的整个生命周期的控制。  
分为三阶段：
> 1. 是组件第一次渲染阶段，在这里完成了组件的初始化和加载；(实例化)
> 2. 是组件在运行和交互阶段，这个阶段组件可以处理用户交互，或者接收事件更新界面，以及因父组件的重新渲染而造成的变化；(存在期)
> 3. 是组件卸载消亡的阶段，这里做一些组件的清理工作。(销毁期)

###### 1. 相关回调函数
> - getDefaultProps()  
在组件创建之前，会先调用 getDefaultProps() ，这是全局调用一次，严格地来说，这不是组件的生命周期的一部分。

> ##### 实例化
> - getInitialState()  
在组件被创建并加载候，首先调用 getInitialState() ，来初始化组件的状态。这个函数在整个生命周期中只被调用一次。
> - componentWillMount()  
准备第一次加载组件，会调用 componentWillMount()，这是render前最后一次修改state的机会。
> - render()  
渲染页面
> - componentDidMount()  
在组件第一次绘制之后，会调用 componentDidMount() ，通知组件已经加载完成。可以使用refs来获取dom节点。

> ##### 存在期
> - componentWillReceviceProps(nextProps)  
如果组件收到新的属性（props），就会调用该方法，在这个回调函数里面，你可以根据属性的变化，通过调用 this.setState() 来更新你的组件状态，这里调用更新状态是安全的，并不会触发额外的 render() 调用。
> - shouldComponentUpdate(nextProps, nextState)  
当组件接收到新的属性和状态改变的话，都会触发调用 shouldComponentUpdate(...)，输入参数 nextProps 和上面的 componentWillReceiveProps 函数一样， nextState 表示组件即将更新的状态值。这个函数的返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。否者，则不更新，直接进入等待状态。默认情况下，这个函数永远返回 true 用来保证数据变化的时候 UI 能够同步更新。在大型项目中，你可以自己重载这个函数，通过检查变化前后属性和状态，来决定 UI 是否需要更新，能有效提高应用性能。
> - componentWillUpdate(nextProps, nextState)  
如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true ，就会开始准更新组件，并调用 componentWillUpdate()。在这个回调中，可以做一些在更新界面之前要做的事情。需要特别注意的是，在这个函数里面，你就不能使用 this.setState 来修改状态。这个函数调用之后，就会把 nextProps 和 nextState 分别设置到 this.props 和 this.state 中。紧接着这个函数，就会调用 render() 来更新界面了。
> - render()
> - componentDidUpdate(prevProps, prevState)  
调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知

> ##### 销毁期
> - componentWillUnmount()  
当组件要被从界面上移除的时候，就会调用。在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。


生命周期 | 调用次数	| 能否使用 setSate()
---      | ---      | ---
getDefaultProps	| 1(全局调用一次) | 否
getInitialState	| 1	| 否
componentWillMount | 1 | 是
render | >=1 | 否
componentDidMount | 1 | 是
componentWillReceiveProps | >=0 | 是
shouldComponentUpdate | >=0	| 否
componentWillUpdate | >=0	| 否
componentDidUpdate | >=0 | 是
componentWillUnmount | 1 | 否
