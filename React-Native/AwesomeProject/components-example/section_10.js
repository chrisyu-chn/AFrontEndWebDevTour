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
export default class GridLayoutListViewApp extends Component {

  constructor() {
    super();

    const ds = new ListView.DataSource({
      rowHasChanged: (prevRowData, nextRowData) => (prevRowData !== nextRowData),
    });

    var rowData = ['Barack Obama', 'YaoMing', 'Bruce Lee',
                  'Barack Obama', 'YaoMing', 'Bruce Lee',
                  'Barack Obama', 'YaoMing', 'Bruce Lee',
                  'Barack Obama', 'YaoMing', 'Bruce Lee',
                  'Barack Obama', 'YaoMing', 'Bruce Lee',
                  'Barack Obama', 'YaoMing', 'Bruce Lee',
                  'Barack Obama', 'YaoMing', 'Bruce Lee',
                  'Barack Obama'];
    this.state = {
      dataSource: ds.cloneWithRows(rowData),
    };
  }

  render() {
    return (
        <ListView
          automaticallyAdjustContentInsets={true}
          contentContainerStyle={{flexDirection:'row', flexWrap:'wrap', justifyContent: 'center',}}
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          initialListSize={15}
        />
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {

    return (
      <TouchableOpacity onPress={() => {
          // alert('选中了第'+rowID+'个cell');
          // highlightRow(sectionID, rowID);
        }}>
          <View style={styles.item}>
            <Image
            source={require('../img/otter1.jpg')}
            resizeMode='cover'
            style={styles.itemImage}/>
            <Text style={styles.itemText}>
              {rowData}
            </Text>
          </View>
      </TouchableOpacity>
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

  item: {
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#CCCCCC',
    borderWidth: Util.point,
    width: 100,
    height: 110,
  },

  itemImage: {
    width: 55,
    height: 55,
    backgroundColor: '#f6f6f6',
    marginTop: 15,
  },

  itemText: {
    flex: 1,
    marginTop: 10,
  },


});
