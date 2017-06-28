
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ActionSheetIOS,
} from 'react-native';

import Util from '../components-example/utils.js';


export default class ActionSheetIOSApp extends Component {
  sharedUrl: string;

  constructor() {
    super();
    this.sharedUrl = 'http://m.baidu.com';
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item} onPress={this._showNormalActionSheet}>提示对话框</Text>
        <Text style={styles.item} onPress={this._showShareActionSheet.bind(this)}>输入对话框</Text>
      </View>
    );
  }

  _showNormalActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
       options: ['打电话', '发邮件', '发短信', '取消'],
       cancelButtonIndex: 3,
       title: '请选择选项',
    },
    (buttonIndex) => {
      alert(buttonIndex);
    }
    );
  }

  _showShareActionSheet() {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: this.sharedUrl,
      message: 'message to go with the shared url',
      subject: 'a subject to go in the email heading',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    },
    (error) => alert(error),
    (success, method) => {
      var text;
      if (success) {
        alert('Shared via'+method);
      } else {
        alert('You didn\'t share');
      }

    });
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
