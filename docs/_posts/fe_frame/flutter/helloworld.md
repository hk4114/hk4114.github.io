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

```dart
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

```dart
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


```dart
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

```dart
child: new Image.network( // 四种引入形式
  'https://hk4114.github.io/hero.jpg', // path
  fit: BoxFit.scaleDown, // 
  color:Colors.greenAccent,
  colorBlendMode: BlendMode.darken,
  repeat: ImageRepeat.repeat,
)
```

## ListView 组件使用

```dart
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

```dart
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

<details>
  <summary>code</summary>

```dart
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

</details>



### 栅格列表

<details>
  <summary>code</summary>

```dart
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

</details>

## RowWidget 布局

```dart
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

```dart
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

![image](https://i.bmp.ovh/imgs/2019/06/63979160a5862ca9.png)

<details>
  <summary>双组件层叠</summary>

```dart
import "package:flutter/material.dart";

void main()=> runApp(MyApp());

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {

    var stack = new Stack(
      alignment: const FractionalOffset(0.5,1), //水平垂直
      children: <Widget>[
        new CircleAvatar(
          backgroundImage: new NetworkImage('https://hk4114.github.io/hero.jpg'),
          radius: 100.0,
        ),
        new Container(
          decoration: new BoxDecoration(
            color: Colors.lightBlue
          ),
          padding: EdgeInsets.all(5.0), // padding
          child: Text('huakang try try'),
        )
      ],
      
    );

    return MaterialApp(
      title: 'stack widget demo',
      home: Scaffold(
        appBar: new AppBar(
          title: new Text("stack布局"),
        ),
        body: Center(
          child: stack,
        )
      )
    );
  }
}
```
</details>

## Stack 层叠定位

<details>
  <summary>code</summary>

```dart
var stack = new Stack(
      alignment: const FractionalOffset(0.5,1), //水平垂直
      children: <Widget>[
        new CircleAvatar(
          backgroundImage: new NetworkImage('https://hk4114.github.io/hero.jpg'),
          radius: 100.0,
        ),
        new Positioned(
          top: 10.0,
          left: 10.0,
          child: new Text("huakang"),
        ),
        new Positioned(
          bottom: 10.0,
          right: 10.0,
          child: new Text("hello world"),
        )
      ],
    );

```

</details>

## 卡片布局 card widget

![image](https://i.bmp.ovh/imgs/2019/06/6365d9227f0af9d7.png)

<details>
  <summary> code </summary>

```dart
var card = new Card(
      child: Column(
        children: <Widget>[
          ListTile(
            title: Text("浙江省杭州市江干区",style: TextStyle(fontWeight:FontWeight.w500)),
            subtitle: Text("华亢 1373221****"),
            leading: new Icon(Icons.account_box,color: Colors.lightGreen),
          ),
          new Divider(),
          ListTile(
            title: Text("浙江省杭州市江干区",style: TextStyle(fontWeight:FontWeight.w500)),
            subtitle: Text("绝了 1373221****"),
            leading: new Icon(Icons.account_box,color: Colors.lightGreen),
          ),
          new Divider(),
          ListTile(
            title: Text("浙江省杭州市江干区",style: TextStyle(fontWeight:FontWeight.w500)),
            subtitle: Text("咋样 1373221****"),
            leading: new Icon(Icons.account_box,color: Colors.lightGreen),
          )
        ],
      ),
    );
```

</details>


## 导航父子页面的跳转

<details>
  <summary>code</summary>

```dart
import "package:flutter/material.dart";

void main() {
  runApp(MaterialApp(
    title: "导航演示001",
    home: new FirstScreen(),
  ));
}

class FirstScreen extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('nav'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text("view good detail"),
          onPressed: (){
            Navigator.push(context, MaterialPageRoute(
              builder: (context)=> new SecondScreen()
            ));
          }
        ),
      ),
    );
  }
  
}

class SecondScreen extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('huakang tech learning')),
      body: Center(
        child:RaisedButton(
          child: Text('back'),
          onPressed: (){
            Navigator.pop(context);
          },
        ),
      ),
    );
  }
}
```

</details>

## 导航参数传递

::: tip

vscode 插件: awesome flutter snippets

stlss: 生成模板文件

:::

<details>
  <summary>code</summary>

```dart
import "package:flutter/material.dart";

// 商品抽象
class Product{
  final String title;
  final String description;
  Product(this.title,this.description);
}

void main(){
  runApp(MaterialApp(
    title: "导航数据传递阐述和接收",
    // 传参
    home: ProductList(
      // --- 传入 ProductList ---
      products: List.generate
      (20,
      (i)=>Product('样品 $i','这是一个商品编号，编号$i')) // 传入product
      // --- 传入 ProductList ---
    )
  ));
}

class ProductList extends StatelessWidget {
  final List<Product> products;
  // 接参
  ProductList({Key key,@required this.products}):super(key:key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('商品列表')),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context,index){
          return ListTile(
            title: Text(products[index].title),
            onTap:(){
              Navigator.push(context, 
              MaterialPageRoute(
                builder: (context) => ProductDetail(product:products[index])
              ));
            }
          );
        },
      )
    );
  }
}

class ProductDetail extends StatelessWidget {

  final Product product;

  ProductDetail({Key key,@required this.product}):super(key:key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('${product.title}'),
      ),
      body: Center(
        child: Text('${product.description}'),
      )
    );
  }
}

```

</details>

## 页面跳转并返回参数

<details>
  <summary>code</summary>

```dart
// 1. 异步请求和等待
// 2. snackbar toast
// 3. 子页面返回数据
import 'package:flutter/material.dart';

void main(){
  runApp(MaterialApp(
    title: '页面跳转返回参数',
    home: FirstPage(),
  ));
}


class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("商品详情回单"),
      ),
      body: Center(
          child: RouteButton(),
      )
    );
  }
}

class RouteButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      onPressed: (){
        _navigateToDetail(context);
      },
      child: Text('进入详情')
    );
  }

  _navigateToDetail(BuildContext context) async{

    final result = await Navigator.push(
      context, 
      MaterialPageRoute(
        builder: (context)=>Detail()
      )
    );
    Scaffold.of(context).showSnackBar(SnackBar(content: Text('$result')));
  }
}


class Detail extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('商品详情'),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            RaisedButton(
              child: Text('商品详情1'),
              onPressed: (){
                Navigator.pop(context,'商品详情1');
              },
            ),
            RaisedButton(
              child: Text('商品详情2'),
              onPressed: (){
                Navigator.pop(context,'商品详情2');
              },
            )
          ],
        ),
      )
    );
  }
}
```

</details>

## 静态资源和项目图片处理

```bash
# pubspec.yaml  assets
# root(根目录) mkdir images
assets:
  - images/check.jpg

# dart文件中
Image.asset('images/check.jpg')
```


## flutter打包

|                      文件地址                       |                            作用                            |
| :-------------------------------------------------: | :--------------------------------------------------------: |
|        项目根目录/android/app/src/main/res/         |                        更换app图标                         |
| 项目根目录/android/app/src/main/AndroidManifest.xml | 配置APP的名称(android:label)、图标(android:icon)和系统权限 |

::: tip key生成

Java binary at: G:\AS\jre\bin\java

```bash
flutter doctor -v # Java binary at: G:\'package name'\jre\bin\java 空格使用单引号包裹 找到文件夹
keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key # 盘符
# right
G:\AS\jre\bin\keytool -genkey -v -keystore e:/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key

# key.properties
storePassword=<password from previous step>    //输入上一步创建KEY时输入的 密钥库 密码
keyPassword=<password from previous step>    //输入上一步创建KEY时输入的 密钥 密码
keyAlias=key
storeFile=<E:/key.jks>    //key.jks的存放路径

# \android\app\build.gradle 在android{这一行前面,加入如下代码
def keystorePropertiesFile = rootProject.file("key.properties")
def keystoreProperties = new Properties()
keystoreProperties.load(new FileInputStream(keystorePropertiesFile))

# 把如下代码进行替换
buildTypes {
    release {
        signingConfig signingConfigs.debug
    }
}
# change
signingConfigs {
    release {
        keyAlias keystoreProperties['keyAlias']
        keyPassword keystoreProperties['keyPassword']
        storeFile file(keystoreProperties['storeFile'])
        storePassword keystoreProperties['storePassword']
    }
}
buildTypes {
    release {
        signingConfig signingConfigs.release
    }
}

# flutter build apk 运行命令
# flutter install 虚拟机安装应用
```

:::