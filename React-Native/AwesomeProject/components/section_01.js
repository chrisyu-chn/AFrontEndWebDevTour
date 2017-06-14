/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';

export default class CtripApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item, styles.center]}>
          <Text style={styles.font}>酒店</Text>
        </View>

        <View style={[styles.item, styles.leftRightBorder]}>
            <View style={[styles.center, styles.proportionalFlex, styles.itemBgColor, styles.bottomBorder]}>
              <Text style={[styles.font, styles.textBgColor]}>海外酒店</Text>
            </View>

            <View style={[styles.center, styles.proportionalFlex]}>
              <Text style={styles.font}>特惠酒店</Text>
            </View>
        </View>

        <View style={styles.item}>
          <View style={[styles.center, styles.proportionalFlex, styles.bottomBorder]}>
            <Text style={styles.font}>团购</Text>
          </View>
          <View style={[styles.center, styles.proportionalFlex]}>
            <Text style={styles.font}>客栈、公寓</Text>
          </View>
        </View>
      </View>
    );
  }
}

// 样式，JSON 数据的格式
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 内部元素布局：水平
    marginTop: 25,    // 顶部
    marginLeft: 5,    // 左侧边距
    marginRight: 5,   // 右侧边距
    height: 84,       // 高度
    borderRadius: 5,   // 圆角
    backgroundColor: '#FF0067',
  },
  item: {
    flex: 1,  // 3 个子元素均分宽度，高度撑满
    height: 80,
  },
  itemBgColor: {
    backgroundColor: 'green',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textBgColor: {
    backgroundColor: 'blue',
  },
  proportionalFlex: {
    flex: 1,
  },

  leftRightBorder: {
    borderLeftWidth: 1 / PixelRatio.get(), // 通过屏幕最小像素比获取最小线宽
    borderRightWidth: 1 / PixelRatio.get(),
    borderColor: '#fff',
  },

  bottomBorder: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#fff',
  },

});

module.export = CtripApp; // 将 CtripApp export成独立的模块
