# Reat Native 学习笔记


## 大纲

一、入门基础             

1.简介
1.1 移动开发技术的过去、现在和未来
1.2 什么是 React Native
1.3 React Native 的前世今生
1.4 React Native 与其他移动开发技术的对比
1.5 为什么要使用 React Native？业内有哪些实际应用案例？
1.6 如何客观看待 React Native 技术？

2.环境搭建            

- 安装工具
  - Homebrew
  - Node
  - Yarn
  - Xcode
  - Atom 及配套插件
  - Nuclide
  - Watchman

- 创建项目

3. 储备知识            

- JavaScript ***
- CSS ***
- ES2015(ES6) ***
- React
  - JSX 语法
    - 简介
    - 运行环境
    - JSX 标签
    - 注释
    - 属性
    - 样式
    - 事件绑定
  - React.JS
  - React 的模块化组件概念
     - 什么是组件
     - 组件的生命周期
     - 组件间的通信
        - 子组件调用父组件
        - 父组件调用子组件
     - 虚拟 DOM 的概念
- 开发准备 ***
  - 配置文件
  - 运行（模拟器、真机）
  - 调试
  - 内部发布（打 ipa 包在真机上运行）

4. 基础概念            

4.1 属性（props）   
> 属性是不可以修改的

4.2 状态（state）
> 状态是可以修改的

4.3 样式（style） 
- FlexBox 布局
- 高度与宽度   
  - width
  - height

4.4 FlexBox 布局  ***     
- flex  
- flexDirection
- alignItems
- justifyContent

二、API 和组件            

4. 常用组件            

4.1 View     

4.2 Text    

4.3 Image  
- 加载本地图片
- 加载网络图片

4.4 TextInput    

4.5 Touchable        
- TouchableHighlight
- TouchableOpacity
- TouchableWithoutFeedback

4.6 ScrollView       

4.7 ListView     

4.8 WebView      

4.9 NavigatorIOS     

4.10 TabBarIOS       
                   

5. 常用 API            

5.1 应用入口 AppRegistry            
5.2 数据存储 AsyncStorage            
5.3 屏幕参数 PixelRatio            
5.4 应用状态 AppStateIOS            
5.5 状态栏 StatusBarIOS 
5.6 AlertIOS         
5.7 ActionSheetIOS 
5.8 网络状态 NetInfo            
5.9 相机访问 CameraRoll            
5.10 震动 VibrationIOS            
5.11 地理位置信息 Geolocation            
5.12 网络请求            
  - Fetch
  - XMLHttpRequest（Ajax）
  - WebSocket
5.13 定时器            
5.14 动画             

三、进阶指南            

6. 实战指南            

6.1 使用第三方库
6.2 嵌入到现有原生应用 ***           
6.3 封装原生模块            
6.4 封装原生UI组件            
6.5 链接原生库             
6.6 在原生和 React Native 间通信  
6.7 Flux 数据流简介，redux 框架简介

7.工程实践            

7.1 热更新            
7.2 自动化测试  
7.3 性能调优

8.实现原理            
8.1 React Native 源码分析和 React Native 的实现            
8.2 React Native 与 weex 的对比            
8.3 相比原生的优点和缺点 

9.优秀项目源码分析
- Facebook 官方开源的 [fbsamples/f8app](https://github.com/fbsamples/f8app)

10.参考手册
10.1 颜色

## 笔记

#### 记录与思考

#### 所遇问题
1.事件和方法的传递，类和方法绑定，()=> 语法
- [Function.prototype.bind()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 的用法
- [React与ES6（三）ES6类和方法绑定](http://www.jianshu.com/p/218d664ec28f)
- [关于onClick事件和方法传递](http://react-china.org/t/onclick/4529)
- [ES6 & ES7中的6种this绑定方法](https://github.com/dwqs/blog/issues/10)

2.成功运行程序后，出现警告：`Warning: Each child in an array or iterator should have a unique "key" prop.`（见图）。
- [知乎：react报错Each child in an array or iterator should。。？](https://www.zhihu.com/question/37701739)

3.导航栏把 root view 中的 view 盖住了（见图）
> 这是因为 iOS 中，只有当 root view 是 scroll view 时，才会自动将视图内容往下移 64 pt，而其他类型的 root view，是不会有任何处理的，所以就会出现被导航栏遮住的情况。

4. bind 的用法
- [js基础知识---call,apply,bind的用法](http://www.jianshu.com/p/012223103355)
- [彻底理解js中this的指向](http://web.jobbole.com/85198/)
- [Javascript的this用法](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)
- [Why and how to bind methods in your React component classes?](http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/)

5.JavaScript 中有多少种遍历方式？



## 问题
1.React Native 如何实现 Live Reload 和 Hot Reloading 的（也就是说不需要 Xcode 中 run 一下，就能自动重新编译和运行）？
2.React Native 所生成的 view 是如何在 APP 中进行绘制、渲染的，与 webView 和 UIKit 的 view 有什么不同？
3.为什么一行 Objective-C 代码都不用写，只需要写写 JS 代码就能跑起来？React Native 代码是如何跑起来的？
4.React Native 能处理复杂逻辑吗？能写一个完整的 APP 吗？原生能做的事，React Native 都能干嘛？
5.React Native 中的代码都有哪些内容？是纯 JavaScript 代码吗？
6.为什么要学习和使用 React Native？其优缺点在哪里？
7.React Native 中如何使用第三方库？
8.如何使用本地图片资源？
9.如何打包发布 APP？

## 第三方资源
- [react-native-training/react-native-elements](https://github.com/react-native-training/react-native-elements)
- [fangwei716/30-days-of-react-native](https://github.com/fangwei716/30-days-of-react-native)

