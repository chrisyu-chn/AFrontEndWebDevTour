
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  AlertIOS,
  Text,
} from 'react-native';

import Util from '../components-example/utils.js';

// 参考 https://juejin.im/entry/583fbc482f301e005cf488fb
export default class AlertIOSApp extends Component {

    alertButtons: Array<Object>;
    promptButtons: Array<Object>;

  constructor() {
    super();

    this.alertButtons = [
      {
        text: '确定',
        style: 'destructive',
        onPress: function() {
          alert('正在删除...');
        }
      },
      {
        text: '取消',
        style: 'cancel',
        onPress: function() {
          alert('正在取消...');
        }
      }
    ];

    this.promptButtons = [
     {
       text: '确定',
       style: 'default',
       onPress: function() {
         alert('正在验证...');
       }
     },
     {
       text: '取消',
       style: 'cancel',
       onPress: function() {
         alert('正在取消...');
       }
     }
   ];
  }

  _showAlert() {
    AlertIOS.alert(
      '提示',
    '确定删除？',
    this.alertButtons
    );
  }

_showPrompt() {
  AlertIOS.prompt('提示',
  '请输入密码',
  this.promptButtons,
  'login-password',
  '游客'
);
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item} onPress={this._showAlert.bind(this)}>提示对话框</Text>
        <Text style={styles.item} onPress={this._showPrompt.bind(this)}>输入对话框</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },

  item: {
    marginTop: 20,
    width: Util.windowSize.width - 40,
    lineHeight: 50,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: '#CCCCCC',
    borderWidth: Util.point,
    borderRadius: 6,
    color: 'blue',
  },
});
