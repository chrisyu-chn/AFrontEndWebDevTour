import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import MapView from './MapView.js';


export default class NativeUIComponentsDemo extends Component {

  // 监听事件回调
  onRegionChange(event: Event) {
     // Do stuff with event.region.latitude, etc.
    alert(event.region.latitude);
   }

  render() {
    var region = {
      latitude: 37.48,
      longitude: -122.16,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    return <MapView style={styles.container} region={region} zoomEnabled={true} onRegionChange={this.onRegionChange}/>;
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
