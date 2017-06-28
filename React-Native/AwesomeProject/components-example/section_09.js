
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';
import Util from './utils.js';

// 参考教程：http://www.jianshu.com/p/2b5ba41f0170
export default class SimpleListViewApp extends Component {

  constructor() {
    super();

    const ds = new ListView.DataSource({
      getRowData: (dataBlob, sectionID, rowID) => {
         var rowData = dataBlob[sectionID + ':' + rowID];
         return rowData['name'];
      },
      getSectionHeaderData: (dataBlob, sectionID) => {
        return dataBlob[sectionID];
      },
      rowHasChanged: (prevRowData, nextRowData) => (prevRowData !== nextRowData),
      sectionHeaderHasChanged: (prevSectionData, nextSectionData) => (prevSectionData !== nextSectionData),
    });

   // https://stackoverflow.com/questions/29452822/how-to-fetch-data-from-local-json-file-on-react-native
    var jsonData = require('../resources/listviewdata.json');

    var dataBlob = {};
    var sectionIDs = [];
    var rowIDs = [];
    var icons = [];

    // 遍历数组中对应的数据并存入变量内
    for (var i = 0; i<jsonData.length; i++) {
        // 将组号存入 sectionIDs 中
        sectionIDs.push(i);
        // 将每组头部需要显示的内容存入 dataBlob 中
        dataBlob[i] = jsonData[i].title;
        // 取出该组所有的 contact
        contacts = jsonData[i].contacts;
        rowIDs[i] = [];
        // 遍历所有 contact
        for (var j = 0; j<contacts.length; j++){
            // 设置标识
            rowIDs[i].push(j);
            // 根据标识,将数据存入 dataBlob
            dataBlob[i + ':' + j] = contacts[j];
        }
    }

    /*
dataBlob 的数据格式，实际上是一个 Object，在 getRowData 方法和 getSectionHeaderData 方法中，
可以直接用 sectionID 和 rowID 从 dataBlob 中去取
{
   0 : "A",
   0:0 : {
   name: "Obama"
 },
   0:1 : {
   name: "Obama"
 },
   0:2 : {
   name: "Obama"
 },
   1 : "B",
   1:0 : {
   name: "Obama"
  },
   1:1 : {
   name: "Obama"
  },
   1:2 : {
   name: "Obama"
  },

}

     */

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
    };
  }

  render() {
    return (
        <ListView
          automaticallyAdjustContentInsets={true}
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderSectionHeader={this._renderSectionHeader}
          renderRow={this._renderRow}
          renderSeparator={this._renderSeparator}
          stickySectionHeadersEnabled={true}
          adjus
        />
    );
  }

  _renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{sectionData}</Text>
      </View>
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {

    return (
      <TouchableOpacity onPress={() => {
          // alert('选中了第'+rowID+'个cell');
          // highlightRow(sectionID, rowID);
        }}>
          <View style={styles.row}>
            <Image
            source={require('../resources/img/otter1.jpg')}
            resizeMode='cover'
            style={styles.rowImage}/>
            <Text style={styles.rowText}>
              {rowData + ' - ' + rowID}
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

  rowImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },

  rowText: {
    flex: 1,
    marginLeft: 10,
  },

  sectionHeader: {
    height: 20,
    backgroundColor: '#f6f6f6'
  },

  sectionHeaderText: {
    flex: 1,
    marginLeft: 10,
  },

  separator: {
      height: Util.point,
      backgroundColor: '#CCCCCC',
  },

});
