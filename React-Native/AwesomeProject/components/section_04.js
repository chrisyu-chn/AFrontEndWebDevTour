import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';

// 主 view
export default class TextInputApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar></SearchBar>
      </View>
    );
  }
}

// 搜索框
class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchBar}>
        <View style={{width: 250}}>
          <TextInput
          style={styles.textInput}
          placeholder='Please enter your name'
          returnKeyType='search'
          clearButtonMode='while-editing'
          autoFocus={true}/>
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

  searchBar: {
    flex: 1,
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
});

module.export = TextInputApp;
