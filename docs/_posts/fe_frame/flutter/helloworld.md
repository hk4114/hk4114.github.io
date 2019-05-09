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

1. 点击`emulator.bat` [?](./env.html#vscode-开发) 打开虚拟机
2. `flutter run` 运行项目
3. 集成终端中按 `r` 键更新
4. `p` 显示网格
5. `o` 切换安卓/iOS的效果
6. `q` 退出

:::
