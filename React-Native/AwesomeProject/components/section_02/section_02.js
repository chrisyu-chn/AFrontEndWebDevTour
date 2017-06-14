import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Header from './header.js';

export default class NetEaseApp extends Component {
  render() {
    return (
      <Header style={styles.proportionalFlex}></Header>
    );
  }
}

// 样式，JSON 数据的格式
const styles = StyleSheet.create({
  proportionalFlex: {
    flex: 1,
  },
});


// 导出成独立的模块
module.export = NetEaseApp;
