
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  NavigatorIOS,
  ScrollView,
  Text,
} from 'react-native';

export default class NavigatorApp extends Component {
  render() {
    return (
      <NavigatorIOS
       style={styles.container}
       initialRoute={{
        component: List,
        title: '游轮',
        passProps: {},
      }}
      />
    );
  }
}

class List extends Component {

  constructor(props) {
    super(props);
    this.pushNewRoute = this.pushNewRoute.bind(this); // https://github.com/facebook/react-native/issues/1110
    this.state = {};
  }

  render() {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.listItem}>
            <Text style={styles.listItemText} onPress={this.pushNewRoute}>⭐️ 豪华游轮济州岛3日游</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText} onPress={this.pushNewRoute}>⭐️ 豪华游轮台湾3日游</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText} onPress={this.pushNewRoute}>⭐️ 豪华游轮济州岛3日游</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText} onPress={this.pushNewRoute}>⭐️ 豪华游轮台湾3日游</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText} onPress={this.pushNewRoute}>⭐️ 豪华游轮济州岛3日游</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText} onPress={this.pushNewRoute}>⭐️ 豪华游轮台湾3日游</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText} onPress={this.pushNewRoute}>⭐️ 豪华游轮济州岛3日游</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText} onPress={this.pushNewRoute}>⭐️ 豪华游轮台湾3日游</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText} onPress={this.pushNewRoute}>⭐️ 豪华游轮济州岛3日游</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText} onPress={this.pushNewRoute}>⭐️ 豪华游轮台湾3日游</Text>
          </View>
        </ScrollView>
    );
  };

  pushNewRoute() {
    // alert('选中');
    this.props.navigator.push({
     component: Detail,
     title: '详情',
     rightButtonTitle: '购物车',
     onRightButtonPress: function() {
       alert('查看购物车')
     },
    });
  }
}

class Detail extends Component {
  render() {
    return (
      <View style={styles.detail}>
        <Text style={styles.detailText}>详情</Text>
      </View>
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
    backgroundColor: 'blue',
  },

  listItemText: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    lineHeight: 44,
  },

  detail: {
    flex: 1,
    flexDirection: 'column',  // 主轴方向：竖直
    justifyContent: 'center', // 子元素在主轴上的排列
    alignItems: 'center',     // 子元素在次轴上的排列
  },

  detailText: {
    color: 'green',
    fontSize: 30,
  }
})

module.export = NavigatorApp;
