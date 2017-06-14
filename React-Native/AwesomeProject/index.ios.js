/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import CtripApp from './components/section_01.js';
import NetEaseApp from './components/section_02/section_02.js';

export default class AwesomeProject extends Component {
  render() {
    return (
      // <CtripApp></CtripApp>
      <NetEaseApp></NetEaseApp>
    );
  }
}

// 样式，JSON 数据的格式
const styles = StyleSheet.create({

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
