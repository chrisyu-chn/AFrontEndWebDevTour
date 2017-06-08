# AFrontEndWebDevTour
A journey of learning front-end development.


## 相关资源

- General
  - [front-end-handbook-2017](https://github.com/xitu/front-end-handbook-2017)
  - [Front-End Web Development(The Big Nerd Ranch Guide)](https://www.amazon.com/Front-End-Web-Development-Ranch-Guides/dp/0134433947)
  - [MDN](https://developer.mozilla.org/zh-CN/)

- React Native
  - [React Native 官网](https://facebook.github.io/react-native/)（教程）
  - [React Native 中文网](http://reactnative.cn)（教程）
  - [facebook/react-native](https://github.com/facebook/react-native/)
  - [reactnativecn/react-native-guide](https://github.com/reactnativecn/react-native-guide)
  - [写给移动开发者的 React Native 指南](http://www.jianshu.com/p/b88944250b25)
  - [An iOS Developer on React Native – iOS App Development – Medium](https://medium.com/ios-os-x-development/an-ios-developer-on-react-native-1f24786c29f0)
  - [Using React Native: One Year Later](https://medium.com/m/global-identity?redirectUrl=https://blog.discordapp.com/using-react-native-one-year-later-91fd5e949933)
  - [构建 F8 2016 App](https://f8-app.liaohuqiu.net/#content)（教程）

## 知识点
- [什么是 HTML5？](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML)

## Reat Native 学习笔记
一、入门基础

1. 环境搭建

- 安装工具
  - Homebrew
  - Node
  - Yarn
  - Xcode
  - atom
  - Nuclide
  - Watchman
- 创建项目

2. 储备知识

- ES6 和 JavaScript
- React
  - React.JS
  - React 的 模块化组件的概念
  - JSX
- 开发准备
  - 配置文件
  - 运行
  - 调试
  - 内部发布（打 ipa 包在真机上运行）

3. 基础概念

3.1 属性
3.2 状态
3.3 样式
3.4 高度与宽度
3.5 FlexBox 布局

二、API 和组件

4. 常见组件

4.1 View
4.2 Text 
4.3 Image
4.4 TextInput
4.5 ScrollView
4.6 ListView
4.7 WebView
4.8 Touchable
4.9 NavigatorIOS
4.10 TabBarIOS
4.11 AlertIOS
4.12 ActionSheetIOS

5. 常见 API

5.1 应用入口 AppRegistry
5.2 数据存储 AsyncStorage
5.3 屏幕参数 PixelRatio
5.4 应用状态 AppStateIOS
5.5 状态栏 StatusBarIOS
5.6 网络状态 NetInfo
5.7 相机访问 CameraRoll
5.8 震动 VibrationIOS
5.9 地理位置信息 Geolocation
5.10 网络请求
  - Fetch
  - XMLHttpRequest（Ajax）
  - WebSocket
5.11 定时器

三、进阶指南

6. 实战指南

6.1 嵌入到现有原生应用
6.2 封装原生模块
6.3 封装原生UI组件
6.4 链接原生库 
6.5 在原生和 React Native 间通信

7.工程实践

7.1 热更新
7.2 自动化测试

8.实现原理
8.1 React Native 的实现
8.2 React Native 与 weex 的对比
8.3 相比原生的优点和缺点


## Front-End Web Development 学习笔记
一、浏览器编程基础
1. 搭建我的开发环境
2. 创建我的第一个项目
2.1 介绍
- 我的浏览器是如何跟服务器打交道的
  > When you visit a website, your browser has a conversation with a server, another computer on the internet. The browser sends a request, the server responds

  > It is the browser’s job to send requests to the server; interpret the HTML, CSS, and JavaScript
it receives in the response from the server; and present the result to the user. 

  > If your app were a living creature, the HTML would be its skeleton and organs (the mechanics), the CSS would be its skin (the visible layer), and the JavaScript would be its personality (how it behaves).

2.2 创建 Ottergram


2.2.1 初始化 HTML
2.2.2 在 HTML 中链接一个 css 样式表
2.2.3 添加内容
2.2.4 添加图片（img标签）

2.2.5 问题
- HTML 是什么？浏览器是如何解析 HTML 文本，并展示的？
- HTML 标签有哪些？
- 一个 HTML 5 文件应该包括哪些内容？

2.3 在浏览器中查看网页

2.4 Chrome 中的开发工具

2.5 延伸：CSS 的各个版本

2.6 延伸：favicon.ico 图标

2.7 实战：在我的项目中添加 favicon.ico 图标

3. CSS 样式
3.1 介绍

3.2 创建样式基准（normalize.css）

3.3 添加样式前在 HTML 中要做的准备——class 属性

3.4 样式规则解析
- 选择器（selector）
- 声明（declarations）

3.5 你的第一个样式规则
- 盒子模型

3.6 样式继承

3.7 让图片适应 window

3.8 颜色
3.9 item 之间的间距调整
3.10 添加字体
3.11 实战：改颜色
3.12 延伸：

3.9 问题
- normalize.css 是用来干嘛的？

4. 响应式布局 FlexBox 

5. 可适应布局 Media Queries 

6. 通过 JavaScript 来处理事件

7. 使用 CSS 来实现视觉效果


二、模块、对象和表单

三、实时数据

四、应用架构

五、终结篇
