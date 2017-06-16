import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';
import Util from './utils.js';

// 主 view
export default class TextInputApp extends Component {

  constructor(props) {
    super(props);
    this.state={value: ''};
    this.textDidChange = this.textDidChange.bind(this); // ES6的变化 https://github.com/goatslacker/alt/issues/283
  }

// 跨组件间通信 http://www.ghugo.com/react-native-communicate/
  textDidChange(text) {
    this.setState({
      value: text,
  });
}

  render() {
    return (
      <View style={styles.container}>
        <SearchBar textDidChange={this.textDidChange}></SearchBar>
        <SearchResultList text={this.state.value}></SearchResultList>
      </View>
    );
  }
}

// 搜索结果列表
class SearchResultList extends Component {
  render() {
    return (
      <View style={styles.searchResult}>
        <Text style={styles.searchResultText} numberOfLines={1}>{this.props.text}庄</Text>
        <Text style={styles.searchResultText} numberOfLines={1}>庄</Text>
      </View>
    );
  }
}

// 搜索框
class SearchBar extends Component {

  render() {
    return (
        <View style={styles.searchBar}>
          <View style={styles.proportionalFlex}>
            <TextInput
            style={styles.textInput}
            placeholder='Please enter your name'
            returnKeyType='search'
            clearButtonMode='while-editing'
            autoFocus={true}
            onChangeText={this.props.textDidChange}/>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>search</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },

  proportionalFlex: {
    flex: 1,
  },

  searchBar: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
  },
// 如何实现，按钮宽度固定，输入框宽度伸缩？
  textInput: {
    height: 45,
    marginLeft: 5,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
  },

  button: {
    width: 75,
    height: 45,
    marginLeft: -5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23BEFF',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

  buttonTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  searchResult: {
    height: 200,
  },

  searchResultText: {
    fontSize: 16,
  },

});

module.export = TextInputApp;
