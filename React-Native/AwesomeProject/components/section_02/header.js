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
        <Text style={styles.font}>
          <Text style={styles.font_1}>网易</Text>
          <Text style={styles.font_2}>新闻</Text>
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
    alignItems: 'center', // 使得 Text 组件水平居中
  },

  font: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',  // 使文字在 Text 组件中居中
  },

  font_1: {
    color: '#CD1D1C',
  },

  font_2: {
    color: '#FFF',
    backgroundColor: '#CD1D1C',
  },
});

module.export = Header;
