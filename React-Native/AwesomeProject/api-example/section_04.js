
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
  // XMLHttpRequest, 不能导入 XMLHttpRequest，否则在执行 var request = new XMLHttpRequest() 时 会报错
} from 'react-native';

import Util from '../components-example/utils.js';

export default class NetworkingApp extends Component {
  url: string;

  constructor() {
    super();

    this.url = 'https://news-at.zhihu.com/api/4/news/latest';
    this.state = {
      response: '（空）',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item} onPress={this._sendXMLHttpRequest.bind(this)}>使用 XMLHttpRequest</Text>
        <Text style={styles.item} onPress={this._sendFetchRequest.bind(this)}>直接使用 Fetch</Text>
        <Text style={styles.item} onPress={this._sendWrapperedFetchRequest.bind(this)}>使用封装的 Fetch</Text>
      <ScrollView
         style={styles.scrollView}
        contentContainerStyle={{justifyContent: 'flex-start'}}
        automaticallyAdjustContentInsets={false}>
        <Text style={styles.responseText}>{this.state.response}</Text>
      </ScrollView>
      </View>
    );
  }

// 使用 XMLHttpRequest 方式请求
  _sendXMLHttpRequest() {
    this.setState({
      response: '加载中...',
    });

    var request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        alert('请求成功！');
        this.setState({
          response: request.responseText,
        });
      } else {
        alert('请求失败!');
        this.setState({
          response: request.responseText,
        });
      }
    };

    request.open('GET', this.url);
    request.send();
  }

// 使用 Fetch 方式请求
// 参考 http://www.hangge.com/blog/cache/detail_1621.html
  _sendFetchRequest() {
    this.setState({
      response: '加载中...',
    });

    fetch(this.url)
       .then(function(data){
         return data.text();
       })
       .then((responseText) => {
         alert('请求成功！');
         this.setState({
           response: responseText,
         });
       })
       .catch((error) => {
         alert('请求失败！');
         this.setState({
           response: responseText,
         });
       });
   }

  // 使用封装的 fetch 进行请求
   _sendWrapperedFetchRequest() {
     this.setState({
       response: '加载中...',
     });

      this._sendPostRequest(this.url, null, function(result){
        alert('请求成功！');
        this.setState({
          response: result,
        });
      });
   }

   //带参数的POST请求
  _sendPostRequest(url, data, callback) {
    var opts = {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(url, opts)
    .then((resonse) => resonse.text())
    .then((responseText) => {
      callback(responseText);
      //将返回的JSON字符串转成JSON对象，并传递到回调方法中
      // callback(JSON.parse(responseText));
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
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

  scrollView: {
    flex: 1,
    margin: 15,
    width: Util.windowSize.width - 30,
    backgroundColor: '#f6f6f6',
    borderColor: 'darkgray',
    borderWidth: Util.point,
    borderRadius: 6,
  },

  responseText: {
    fontSize: 15,
    margin: 10,
  }
});
