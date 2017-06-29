# Reat Native 学习[笔记](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues)


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

- [开发工具及插件](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/14)
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
  - [理解 JavaScript 中的 this ](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/12)
  - [理解 JavaScript 中的方法绑定和 bind 方法，以及箭头函数 `()=>` ](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/11)
  - [JavaScript 中的严格模式（Strict mode） ](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/7)
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
    - 事件绑定 ****
  - React.JS
  - React 的模块化组件概念
     - 什么是组件
     - [组件的生命周期](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/8)
     - [组件间的通信](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/13) ****
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

4.4 FlexBox 布局  ****    
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

6.1 [使用第三方库](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/1)            

6.2 [嵌入到现有原生应用](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/4) ***                 

6.3 封装原生模块               
   
6.4 封装原生UI组件          
        
6.5 链接原生库         
          
6.6 在原生和 React Native 间通信        

6.7 Flux 数据流简介，redux 框架简介

7.工程实践            

7.1 打包发布
7.2 [热更新](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/5) **              
    
7.3 自动化测试        

7.4 性能调优、内存警告的处理

8.实现原理                  

8.1 React Native 源码分析和 React Native 的实现              
    
8.2 React Native 与 weex 的对比           
       
8.3 相比原生的优点和缺点 


9.参考手册      

9.1 [React Native 常用命令 ](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/3)       

9.2 [React Native 编码规范](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/6)       

9.3 颜色       
 

## 问题
1. [运行程序后，出现警告：`Warning: Each child in an array or iterator should have a unique "key" prop.` ](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/10)     

2. [导航栏（NavigationBar）把 root view 上方盖住了 ](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/9)         

3. [运行 React Native 项目时报错“CFBundleIdentifier, Does Not Exist” ](https://github.com/ShannonChenCHN/AFrontEndWebDevTour/issues/2)        

## 思考
1. React Native 如何实现 Live Reload 和 Hot Reloading 的（也就是说不需要 Xcode 中 run 一下，就能自动重新编译和运行）？     

2. React Native 所生成的 view 是如何在 APP 中进行绘制、渲染的，与 webView 和 UIKit 的 view 有什么不同？         

3. 为什么一行 Objective-C 代码都不用写，只需要写写 JS 代码就能跑起来？React Native 代码是如何跑起来的？         

4. React Native 能处理复杂逻辑吗？能写一个完整的 APP 吗？原生能做的事，React Native 都能干嘛？         

5. React Native 中的代码都有哪些内容？是纯 JavaScript 代码吗？         

6. 为什么要学习和使用 React Native？其优缺点在哪里？         

7. React Native 中如何使用第三方库？         

8. 如何使用本地图片资源？         

9. 如何打包发布 APP？         



## 相关资源
- [React 官网](https://facebook.github.io/react/)
- [React 入门实例教程-阮一峰](http://www.ruanyifeng.com/blog/2015/03/react.html)（教程）
- [React Native 官网](https://facebook.github.io/react-native/)（教程）
- [React Native 中文网](http://reactnative.cn)（教程）
- [React 中文社区](http://react-china.org)
- [React Native中文社区](http://bbs.reactnative.cn)
- [facebook/react-native](https://github.com/facebook/react-native/)
- [jondot/awesome-react-native](https://github.com/jondot/awesome-react-native)
- [reactnativecn/react-native-guide](https://github.com/reactnativecn/react-native-guide)
- [crazycodeboy/RNStudyNotes](https://github.com/crazycodeboy/RNStudyNotes)
- [写给移动开发者的 React Native 指南](http://www.jianshu.com/p/b88944250b25)
- [构建 F8 2016 App](https://f8-app.liaohuqiu.net/#content)（教程）
- Facebook 官方开源的 [fbsamples/f8app](https://github.com/fbsamples/f8app)
- [react-native-training/react-native-elements](https://github.com/react-native-training/react-native-elements)
- [fangwei716/30-days-of-react-native](https://github.com/fangwei716/30-days-of-react-native)
- [huanxsd/MeiTuan](https://github.com/huanxsd/MeiTuan)
- [attentiveness/reading](https://github.com/attentiveness/reading)
- [有哪些 React Native 开发的作品推荐吗？](https://www.zhihu.com/question/37275973)
- [REACT NATIVE模块桥接详解](http://www.dobest.me/blog/2015/10/16/React%20Native模块桥接详解/)


## 业界讨论
- [An iOS Developer on React Native – iOS App Development – Medium](https://medium.com/ios-os-x-development/an-ios-developer-on-react-native-1f24786c29f0)
- [Using React Native: One Year Later](https://medium.com/m/global-identity?redirectUrl=https://blog.discordapp.com/using-react-native-one-year-later-91fd5e949933)
- [What is the best way to start learning React Native?](https://www.quora.com/What-is-the-best-way-to-start-learning-React-Native)
- [唐巧：谈谈 React Native](http://blog.devtang.com/2015/02/01/talk-about-react-native/)
- [喵神：跨平台开发时代的 (再次) 到来？](https://onevcat.com/2015/03/cross-platform/)
- [原生开发才是王道](http://stormzhang.com/2016/09/05/native-app-is-king/)
- [React Native概述：背景、规划和风险](http://div.io/topic/938)
- [鬼道：Native与Web的融合 - Qcon中React-Native演讲](http://www.infoq.com/cn/presentations/the-fusion-of-native-and-web)
- [bang：React Native通信机制详解](http://blog.cnbang.net/tech/2698/)
- [iOS 动态更新方案对比:JSPatch vs React Native](https://blog.cnbang.net/tech/3237/)
- [vczero: H5、React Native、Native应用对比分析](https://github.com/vczero/vczero.github.io/blob/master/react_native/H5、React%20Native、Native应用对比分析.md)
- [Weex & ReactNative & JSPatch大对比](http://awhisper.github.io/2016/07/22/Weex-ReactNative-JSPatch/)
- [hi大头鬼hi：weex&ReactNative对比](https://zhuanlan.zhihu.com/p/21677103)
- [看Facebook是如何优化React Native性能](https://github.com/gaohailang/blog/issues/4)
- [React Native 开源一年的总结](https://github.com/gaohailang/blog/issues/23)
- [如何评价 React Native？](https://www.zhihu.com/question/27852694)
- [React Native和React有啥区别？](https://www.zhihu.com/question/30466658)
- [React Native有什么优势？能跟原生比么？](https://www.zhihu.com/question/36722811)
- [React Native是否会是下一个技术浪潮？](https://www.zhihu.com/question/43693705)
- [如何看待苹果禁止 JSPatch 等 iOS APP 热更新方案？](https://www.zhihu.com/question/56794578)




