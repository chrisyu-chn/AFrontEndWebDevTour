import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Util from './utils.js'

export default class TouchableApp extends Component {

  showAlert(text) {
    alert(text);
  }

  onHideUnderlay() {
    console.log('onHideUnderlay');
  }

  onShowUnderlay() {
    console.log('onShowUnderlay');
  }

  onLongPress() {
    alert('触发了长按');
  }

  onPressIn() {
    console.log('onPressIn');
  }

  onPressOut() {
    console.log('onPressOut');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
        style={styles.touchable}
        underlayColor='#E1F6FF'
        activeOpacity={0.5}
        onPress={this.showAlert.bind(this, '测试一下 TouchableHighlight')}
        onHideUnderlay={this.onHideUnderlay.bind(this)}
        onShowUnderlay={this.onShowUnderlay.bind(this)}>
          <Text style={styles.text}>测试一下 TouchableHighlight</Text>
        </TouchableHighlight>

        <TouchableOpacity
        style={styles.touchable}
        onPress={this.showAlert.bind(this, '测试一下 TouchableOpacity')}>
          <Text style={styles.text}>测试一下 TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback
        onPress={this.showAlert.bind(this, '测试一下 TouchableWithoutFeedback')}
        onLongPress={this.onLongPress.bind(this)}
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}>
          <View style={styles.touchable}>
            <Text style={styles.text}>测试一下 TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
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

  touchable: {
    height: 44,
    borderBottomWidth: Util.point,
    borderColor: '#f456',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    marginLeft: 10,
  }
});
