---
category: FE-frame
tags:
  - Flutter
date: 2019-04-06
title: Flutter学习
vssue: false
---

## Hello World

<details>
    <summary>修改main.dart</summary>

```
// 引入 UI
import 'package:flutter/material.dart';
//  入口方法
void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title:"Hello World",
      home:Scaffold(
        appBar: AppBar( 
          title: Text('welcome to flutter')
        ),
        body:Center(
          child:Text('hello world huakang'),
        )
      )
    );
  }
}
```

</details>

<details>
    <summary>原本的`main.dart`</summary>

```
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'kane page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.display1,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
```

</details>

::: tip

1. 点击`emulator.bat` [?](./env.html#vscode-开发) 打开虚拟机，如果是使用VScode 则可以点击右下角 `no devices` 创建虚拟机
2. `flutter run` 运行项目
3. 集成终端中按 `r` 键更新
4. `p` 显示网格
5. `o` 切换安卓/iOS的效果
6. `q` 退出
7. `flutter create demoapp` 生成项目
8. `flutter upgrade` 升级
:::

## Text Widget 文本组件的使用


<details>
  <summary>基本模板</summary>

```js
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: "",
      home:Scaffold(
        body:Center(
          // code
        )
      )
    )
  }
}
```

</details>


```js
// code
child:Container(
  child: new Text(
    'hello huakang',
    style: TextStyle(fontSize: 40),// font-size
  ),
  alignment: Alignment.center, // text-align
  width: 400.0,
  height:400.0,
  color: Colors.lightBlue,// background-color
  // color: Colors.lightBlue,//background-color
  // padding: const EdgeInsets.all(15.0),// padding: 15
  padding: const EdgeInsets.fromLTRB(16.0,36.0,0,0),// padding: 36 0 0 16
  margin: const EdgeInsets.all(24.0),
  decoration: new BoxDecoration( // 与color同时使用会报错
    gradient: const LinearGradient( // background-color: linear()
      colors: [Colors.lightBlue,Colors.greenAccent,Colors.purple]
    ),
    border: Border.all(width: 2.0,color:Colors.red)//border 2px solid red
  ),
)
```

## Image 组件的使用

[官方文档](https://flutterchina.club/assets-and-images/)

```
child: new Image.network( // 四种引入形式
  'https://hk4114.github.io/hero.jpg', // path
  fit: BoxFit.scaleDown, // 
  color:Colors.greenAccent,
  colorBlendMode: BlendMode.darken,
  repeat: ImageRepeat.repeat,
)
```

## ListView 组件使用

```js
body: new ListView(
  children: <Widget>[
    // new Image.network('path') // 可以添加任意组件
    new ListTile(
      leading: new Icon(Icons.access_alarms),
      title: new Text('Bbb'),
    ),
    new ListTile(
      leading: new Icon(Icons.add_to_queue),
      title: new Text('这玩什么呢'),
    )
  ],
)
// 横向
body: Center(
  child: Container(
    height: 200.0,
    child: new ListView(
      scrollDirection: Axis.horizontal,// 横向
      children: <Widget>[
        new Container(
          width: 180.0,
          color: Colors.green
        ),
        new Container(
          width: 180.0,
          color: Colors.red,
        ),
        new Container(
          width: 180.0,
          color: Colors.yellowAccent,
        )
      ],
    ),
  ),
)
```

<details>
  <summary>组件式写法</summary>

```
...
body: Center(
  child: Container(
    height: 200.0,
    child: MyList() 
  ),
)
...
class MyList extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return ListView(
      scrollDirection: Axis.horizontal,// 横向
        children: <Widget>[
          new Container(
            width: 180.0,
            color: Colors.green
          ),
          new Container(
            width: 180.0,
            color: Colors.red,
          ),
          new Container(
            width: 180.0,
            color: Colors.yellowAccent,
          )
        ],
    );
  }
}

```

</details>

### 动态加载组件内容
```js
// 1 传参
void main() => runApp(MyApp(
  // items: List()// 里面可以传参数字 代表长度
  // items: [1,2,3]
  items: new List<String>.generate(100, (i)=>"Item $i")
));

// 2 接参
class MyApp extends StatelessWidget{
  
  final List<String> items;
  MyApp({Key key,@required this.items}):super(key:key);

// 3 用参
  body: new ListView.builder(
    itemCount: 100,
    itemBuilder: (context,index){
      return new ListTile(
        title: new Text('${items[index]}'),
      );
    },
  )
}
```

### 栅格列表

```
body: GridView.count(
  padding: const EdgeInsets.all(20.0),
  crossAxisSpacing: 10.0,//网格间距
  crossAxisCount: 3,// 一行列数
  children: <Widget>[
    const Text('this is g'),
    const Text('啥玩意儿'),
    const Text('可别说了'),
    const Text('知道啦'),
    const Text('还有啥'),
    const Text('没宝宝'),
  ],
)

// 其他写法
body: GridView(
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 3,
    mainAxisSpacing: 2.0, // 纵
    crossAxisSpacing: 2.0,// 横
    childAspectRatio: 1.0// 横竖比 
  ),
  children: <Widget>[
    new Image.network(
      'https://b-ssl.duitang.com/uploads/item/201901/05/20190105110222_dtmqo.jpg',
      fit: BoxFit.cover
    ),
  ],
)
```

## RowWidget 布局

```
body: new Row(
  children: <Widget>[
    new RaisedButton(
      onPressed:(){},
      color: Colors.redAccent,
      child: new Text("红色按钮"),
    ),
    new RaisedButton(
      onPressed:(){},
      color: Colors.yellowAccent,
      child: new Text("黄色按钮"),
    ),
    new RaisedButton(
      onPressed:(){},
      color: Colors.greenAccent,
      child: new Text("绿色按钮"),
    )
  ],
),

body: new Row(
  children: <Widget>[
    Expanded( // 外面包一层expanded就可以自动扩展
        child: new RaisedButton(
        onPressed:(){},
        color: Colors.redAccent,
        child: new Text("红色按钮"),
      )
    ),
    Expanded(
        child: new RaisedButton(
        onPressed:(){},
        color: Colors.yellowAccent,
        child: new Text("黄色按钮"),
      )
    ),
    Expanded(
        child: new RaisedButton(
        onPressed:(){},
        color: Colors.greenAccent,
        child: new Text("绿色按钮"),
      )
    )
  ],
),

```

## columnWIdget 纵向布局

```js
body: Center(
    child: Column(
    crossAxisAlignment: CrossAxisAlignment.center, // start/center/end
    mainAxisAlignment: MainAxisAlignment.center,//主轴
    children: <Widget>[// 默认居中对齐
      Text("你好"),
      Text("如果说你喜欢我"),
      Expanded( // flex-grow:1
        child: Text("那就告诉我"),
      ),
      Text("大家都在干什么"),
      Text("可别说话了")
    ],
  ),
)
```

## StackWidget 层叠布局

```


```