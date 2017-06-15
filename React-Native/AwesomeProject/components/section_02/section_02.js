import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from './header.js';

export default class NetEaseApp extends Component {
  render() {
    var bigNews = ['大摩：苹果研发自动驾驶存在致命缺陷 最好联手特斯拉',
                  'CEO 证实合并雅虎后裁员 15%',
                  '苹果召开 WWDC',
                  '蚂蚁金服上线 「财富号」，同时开放 AI 能力',
                  '共享单车、共享充电宝，两种不同的共享豪赌',
                  '乐视： 已补缴员工社保公积金'];
    return (
      <View style={styles.container}>
        <Header> </Header>
        <ListItem title='特朗普今日访华'> </ListItem>
        <ListItem title='OPPO 发布 R11，售价2999'> </ListItem>
        <ListItem title='林丹首轮2-0出局'> </ListItem>
        <View style={styles.separator}></View>
        <BigNews news={bigNews}></BigNews>
      </View>
    );
  }
}

// 头条
class ListItem extends Component {
  render() {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemFont}>
        {this.props.title}
        </Text>
      </View>
    );
  }
}

// 今日要闻
class BigNews extends Component {
  show(title) {
    alert('是否打开\n'+'『'+title+'』'+'？');
  }

  render() {
    var newsTagList = [];
    for (var i in this.props.news) {
        var aNewsTag = (
          <View key={i} style={styles.newsItem}>
            <Text
            onPress={this.show.bind(this, this.props.news[i])}
            numberOfLines={1}
             style={styles.newsItemText}>
              {this.props.news[i]}
             </Text>
           </View>
        );
        newsTagList.push(aNewsTag);
    }

      return(
        <View>
          <View style={styles.newsHeader}>
            <Text style={styles.newsHeaderText}>今日要闻</Text>
          </View>
          {newsTagList}
        </View>
      );
  }
}

// 样式，JSON 数据的格式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
  proportionalFlex: {
    flex: 1,
  },

  listItem: {
    height: 44,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },

  listItemFont: {
    fontSize: 16,
  },

  newsHeader: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },

  newsHeaderText: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CD1D1C',
    marginLeft: 10,
  },

  newsItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },

  newsItemText: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 44,
  },

  separator: {
    backgroundColor: '#f4f4f4',
    height: 10,
  },
});


// 导出成独立的模块
module.export = NetEaseApp;
