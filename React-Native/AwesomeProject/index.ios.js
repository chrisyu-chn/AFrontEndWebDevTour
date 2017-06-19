/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  NavigatorIOS,
  ScrollView,
  Text,
} from 'react-native';

import CtripApp from './components/section_01.js';
import NetEaseApp from './components/section_02/section_02.js';
import NavigatorApp from './components/section_03.js';
import TextInputApp from './components/section_04.js';
import TouchableApp from './components/section_05.js';
import ImageApp from './components/section_06.js';
import TabBarIOSApp from './components/section_07.js';
import WebViewApp from './components/section_08.js';

// 主程序
export default class AwesomeProject extends Component {
  render() {
    return (
      <NavigatorIOS
       style={styles.container}
       initialRoute={{
        component: List,
        title: 'React Native Tutoial',
        passProps: {},
      }}
      />
    );
  }
}

// 列表
class List extends Component {

  constructor(props) {
    super(props);
    this.pushNewSection = this.pushNewSection.bind(this); // https://github.com/facebook/react-native/issues/1110
    this.state = {};

  }

  pushNewSection(i, route) {
    console.log(i, route.title);
    this.props.navigator.push(route);
  }


  render() {
    // 列表数据源
    var routes = [
      {
       component: CtripApp,
       title: '01 View 组件',
       rightButtonTitle: 'Next',
       onRightButtonPress: function() {
         alert(this);
        //  this.pushNewSection(1, routes[1]);
       }
     },
       {
        component: NetEaseApp,
        title: '02 Text 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: NavigatorApp,
        title: '03 NavigatorIOS 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: TextInputApp,
        title: '04 TextInput 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: TouchableApp,
        title: '05 Touchable 类组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: ImageApp,
        title: '06 Image 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: TabBarIOSApp,
        title: '07 TabBarIOS 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: WebViewApp,
        title: '08 WebView 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },

    ];

   // 根据数据创建列表各 item 的元素
    var itemTagList = [];
    for (var i in routes) {
      var anItemTag = (
        <View
        key={i}
        style={styles.listItem}>
            <Text
            style={styles.listItemText}
            onPress={this.pushNewSection.bind(this, i, routes[i])}>
            {'⭐️ ' + routes[i].title}
            </Text>
        </View>
      );

      itemTagList.push(anItemTag);
    }

    return (
      <ScrollView style={styles.container}>
        {itemTagList}
      </ScrollView>
    );
  }
}

// 样式，JSON 数据的格式
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  proportionalFlex: {
    flex: 1,
  },

  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },

  listItemText: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    lineHeight: 44,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
