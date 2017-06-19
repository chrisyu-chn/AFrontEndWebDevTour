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
    this.state = {
      value: '',
      show: false,
  };
    this.textDidChange = this.textDidChange.bind(this); // ES6的变化 https://github.com/goatslacker/alt/issues/283
    this.searchResultSelected = this.searchResultSelected.bind(this);
  }

// 跨组件间通信 http://www.ghugo.com/react-native-communicate/
  textDidChange(text) {
    this.setState({
      show: text.length > 0 ? true : false,
      value: text,
  });
}

// 隐藏搜索结果
hideSearchResult(val) {
  this.setState({
    show: false,
    value: val,
  });

}

// 选中一条搜索结果
searchResultSelected(val) {
  this.hideSearchResult(val);
}

  render() {

    var searchResultListElement = (<SearchResultList keywords={this.state.value} onPress={this.searchResultSelected}></SearchResultList>);

    return (
      <View style={styles.container}>
        <SearchBar
        textDidChange={this.textDidChange}
        textEndEditing={this.hideSearchResult.bind(this, this.state.value)}
        value={this.state.value}></SearchBar>
        {this.state.show ? searchResultListElement : null}
      </View>
    );
  }
}

// 搜索结果列表
class SearchResultList extends Component {
  // - [关于onClick事件和方法传递](http://react-china.org/t/onclick/4529)
  render() {
    return (
      <View style={styles.searchResultList}>
        <View style={styles.searchResultItem}>
          <Text style={styles.searchResultText} onPress={this.props.onPress.bind(this, this.props.keywords+'酒店')} numberOfLines={1}>{this.props.keywords}酒店</Text>
        </View>
        <View style={styles.searchResultItem}>
          <Text style={styles.searchResultText} onPress={this.props.onPress.bind(this, this.props.keywords+'公园')} numberOfLines={1}>{this.props.keywords}公园</Text>
        </View>
        <View style={styles.searchResultItem}>
          <Text style={styles.searchResultText} onPress={(e) => this.props.onPress(this.props.keywords+'路')} numberOfLines={1}>{this.props.keywords}路</Text>
        </View>
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
            value={this.props.value}
            autoFocus={true}
            onChangeText={this.props.textDidChange}
            onEndEditing={this.props.textEndEditing}/>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonTitle} onPress={this.props.textEndEditing}>search</Text>
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
    marginLeft: 10,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
  },

  button: {
    width: 75,
    height: 45,
    marginLeft: -5,
    marginRight: 10,
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

  searchResultList: {
    height: 300,
  },

  searchResultItem: {
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    justifyContent: 'center',
  },

  searchResultText: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
  },

});

module.export = TextInputApp;
