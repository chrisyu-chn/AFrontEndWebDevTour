
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  PixelRatio
} from 'react-native';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textCommon}>
          <Text style={styles.text_1}>网易</Text>
          <Text style={styles.text_2}>新闻</Text>
          <Text>有态度</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 50,
    borderBottomWidth: 3 / PixelRatio.get(),
    borderBottomColor: '#EF2D36',
    alignItems: 'center', // 使得 Text 组件水平居中，可以试试 flex-start
  },

  textCommon: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',  // 使文字在 Text 组件中居中
    // backgroundColor: 'green',
  },

  text_1: {
    color: '#CD1D1C',
  },

  text_2: {
    color: '#FFF',
    backgroundColor: '#CD1D1C',
  },
});

module.export = Header;
