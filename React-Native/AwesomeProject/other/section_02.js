'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

///进行导入NativeModules中的CalendarManger模块
import { NativeModules } from 'react-native';

var CalendarManager = NativeModules.CalendarManager;

class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}


export default class NativeAPIModulesDemo extends Component {
  render() {
    return (
      <View style={{marginTop:100}}>

        <CustomButton text="点击调用原生模块 addDetailEvent 方法"
            onPress={()=> {

              // JavaScript Date 对象 http://www.w3school.com.cn/jsref/jsref_obj_date.asp
              var date = new Date();
              CalendarManager.addDetailEvent('生日聚会', {location: '上海·新天地', date: date.getTime()}, function(name, detailInfo) {
                alert(name + ' at ' + detailInfo["location"] + detailInfo["date"]);
              });
            }
          }
        />

        <CustomButton text="点击调用原生模块 addStringEvent 方法"
            onPress={()=> {
              var date = new Date();
              CalendarManager.addStringEvent('生日聚会', date.toISOString(), function(name, date) {
                alert(name + ' at ' + date);
              });
            }
          }
        />

        <CustomButton text="点击调用原生模块 addDateEvent 方法"
            onPress={()=> {
              var date = new Date();
              CalendarManager.addDateEvent('生日聚会', date.getTime(), function(name, date) {
                alert(name + ' at ' + date);
              });
            }
          }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 10,
    borderWidth:1,
    borderColor: '#cdcdcd',
  },

  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
