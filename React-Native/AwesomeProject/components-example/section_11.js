import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
} from 'react-native';


export default class ScrollViewApp extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Text style={{fontSize:96}}>If you like</Text>
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Text style={{fontSize:96}}> What's the best </Text>
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Text style={{fontSize:96}}> Framework around? </Text>
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Image source={require('../resources/img/otter1.jpg')} />
        <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    );
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
