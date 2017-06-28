/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  NavigatorIOS,
  Text,
  ListView,
  TouchableOpacity,
} from 'react-native';

import Util from './components-example/utils.js';

import CtripApp from './components-example/section_01.js';
import NetEaseApp from './components-example/section_02/section_02.js';
import NavigatorApp from './components-example/section_03.js';
import TextInputApp from './components-example/section_04.js';
import TouchableApp from './components-example/section_05.js';
import ImageApp from './components-example/section_06.js';
import TabBarIOSApp from './components-example/section_07.js';
import WebViewApp from './components-example/section_08.js';
import SimpleListViewApp from './components-example/section_09.js';
import GridLayoutListViewApp from './components-example/section_10.js';
import ScrollViewApp from './components-example/section_11.js';

import AsyncStorageApp from './api-example/section_01.js';
import AlertIOSApp from './api-example/section_02.js';
import ActionSheetIOSApp from './api-example/section_03.js';
import NetworkingApp from './api-example/section_04.js';
import TimerApp from './api-example/section_05.js';

import Talks from './other/section_01.js';

// 主程序
export default class AwesomeProject extends Component {
  render() {
    return (
      <NavigatorIOS
       style={styles.proportionalFlex}
       initialRoute={{
        component: List,
        title: 'React Native Tutoial',
        passProps: {},
      }}
      />
    );
  }
}

// 列表
class List extends Component {

  constructor(props) {
    super(props);
    this.pushNewSection = this.pushNewSection.bind(this); // https://github.com/facebook/react-native/issues/1110

    const ds = new ListView.DataSource({
      getRowData: (dataBlob, sectionID, rowID) => {
         var rowData = dataBlob[sectionID + ':' + rowID];
         return rowData;
      },
      getSectionHeaderData: (dataBlob, sectionID) => {
        return dataBlob[sectionID];
      },
      rowHasChanged: (prevRowData, nextRowData) => (prevRowData !== nextRowData),
      sectionHeaderHasChanged: (prevSectionData, nextSectionData) => (prevSectionData !== nextSectionData),
    });

    // 列表数据源
    var routes = [
      [
        {
       component: CtripApp,
       title: '01 View 组件',
       rightButtonTitle: 'Next',
       onRightButtonPress: function() {
        //  alert(this);
        this.pushNewSection(1, routes[1]);
       }
     },
       {
        component: NetEaseApp,
        title: '02 Text 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: NavigatorApp,
        title: '03 NavigatorIOS 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: TextInputApp,
        title: '04 TextInput 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: TouchableApp,
        title: '05 Touchable 类组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: ImageApp,
        title: '06 Image 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: TabBarIOSApp,
        title: '07 TabBarIOS 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: WebViewApp,
        title: '08 WebView 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: SimpleListViewApp,
        title: '09 ListView 组件（Simple）',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: GridLayoutListViewApp,
        title: '10 ListView 组件（Grid Layout）',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: ScrollViewApp,
        title: '11 ScrollView 组件',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
    ],
    [
       {
        component: AsyncStorageApp,
        title: '01 AsyncStorage API',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: AlertIOSApp,
        title: '02 AlertIOS API',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: ActionSheetIOSApp,
        title: '03 ActionSheetIOS API',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: NetworkingApp,
        title: '04 Networking API',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
       {
        component: TimerApp,
        title: '05 Timer API',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
    ],
    [

       {
        component: Talks,
        title: '01 使用第三方库',
        rightButtonTitle: 'Next',
        onRightButtonPress: function() {
          alert('查看下一课')
        }
      },
    ],
    ];

    var sectionTitle = ['组件', 'API', '工程实践'];
    var dataBlob = {};
    var sectionIDs = [];
    var rowIDs = [];
    var routeSublist = [];

    // 遍历数组中对应的数据并存入变量内
    for (var i = 0; i<routes.length; i++) {
        // 将组号存入 sectionIDs 中
        sectionIDs.push(i);
        // 将每组头部需要显示的内容存入 dataBlob 中
        dataBlob[i] = sectionTitle[i];
        // 取出该组所有的 route
        routeSublist = routes[i];
        rowIDs[i] = [];
        // 遍历所有 route
        for (var j = 0; j<routeSublist.length; j++){
            // 设置标识
            rowIDs[i].push(j);
            // 根据标识,将数据存入 dataBlob
            dataBlob[i + ':' + j] = routeSublist[j];
        }
    }

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
    };

  }

  pushNewSection(i, route) {
    console.log(i, route.title);
    this.props.navigator.push(route);
  }


  render() {
    return (
        <ListView
          automaticallyAdjustContentInsets={true}
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderSectionHeader={this._renderSectionHeader}
          renderRow={this._renderRow.bind(this)}  // Why we need to bind this here?
          renderSeparator={this._renderSeparator}
          stickySectionHeadersEnabled={true}
        />
    );
  }

  _renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>———— {sectionData} ————</Text>
      </View>
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {

    return (
      <TouchableOpacity onPress={() => {
        this.pushNewSection(rowID, rowData);
        }}>
          <View style={styles.row}>
            <Text style={styles.rowText}>
              {'⭐️ ' + rowData['title']}
            </Text>
          </View>
      </TouchableOpacity>
    );
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
// key={`${sectionID}-${rowID}`} 这是什么意思？
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={styles.separator}
      />
    );
  }
}

// 样式，JSON 数据的格式
const styles = StyleSheet.create({
  listView: {
    flex: 1,
  },

  proportionalFlex: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },

  rowText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
  },

  sectionHeader: {
    height: 40,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
  },

  sectionHeaderText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center',
  },

  separator: {
      height: Util.point,
      backgroundColor: '#CCCCCC',
  },
});

// alert(AppRegistry.runApplication);

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
