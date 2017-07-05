
'use strict';

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

var { requireNativeComponent } = require('react-native');

var RNTMapConsts = require('react-native').UIManager.RNTMap.Constants;

// requireNativeComponent 自动把这个组件提供给 "RNTMapManager"
var RNTMap = requireNativeComponent('RNTMap', MapView);


export default class MapView extends Component {
  // 通过 PropTypes 来说明这个组件的接口
  static propTypes = {
      /**
      * 是否支持手势缩放操作
      */
      zoomEnabled: PropTypes.bool,

      /**
      * 地图要显示的区域。
      *
      * 区域由中心点坐标和区域范围坐标来定义。
      *
      */
      region: React.PropTypes.shape({
          /**
          * 地图中心点的坐标。
          */
          latitude: React.PropTypes.number.isRequired,
          longitude: React.PropTypes.number.isRequired,

          /**
          * 最小/最大经、纬度间的距离。
          */
          latitudeDelta: React.PropTypes.number.isRequired,
          longitudeDelta: React.PropTypes.number.isRequired,
      }),

      /**
      * Callback that is called continuously when the user is dragging the map.
      */
      onRegionChange: React.PropTypes.func,
  };

  // 监听事件回调
  _onChange = (event: Event) => {
    if (!this.props.onRegionChange) {
      return;
    }
    this.props.onRegionChange(event.nativeEvent);
  }

  render() {
    return <RNTMap style={styles.container} region={RNTMapConsts.defaultRegion} onChange={this._onChange}/>;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },

  proportionalFlex: {
    flex: 1,
  },
});
