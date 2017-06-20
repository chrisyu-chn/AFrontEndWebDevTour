import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


var imageUrls = [
  'http://img.tupianzj.com/uploads/allimg/160309/9-16030Z92132.jpg',
  'http://img.tupianzj.com/uploads/allimg/160309/9-16030Z92133.jpg',
  'http://img.tupianzj.com/uploads/allimg/160309/9-16030Z92134.jpg',
  'http://img.tupianzj.com/uploads/allimg/160309/9-16030Z92136.jpg',
  'http://img.tupianzj.com/uploads/allimg/160309/9-16030Z92139.jpg',
  'http://img.tupianzj.com/uploads/allimg/160309/9-16030Z92140.jpg'
];

export default class ImageApp extends Component {
  render() {
    return(
      <View style={styles.proportionalFlex}>
        <ImageBrowser imageUrls={imageUrls}></ImageBrowser>
      </View>
    );
  }
}

// 图片浏览器
class ImageBrowser extends Component {

  constructor(props) {
    super(props);
    var imageUrls = this.props.imageUrls;
    this.state = {
      currentIndex: 0,
      imageUrls: imageUrls,
     };
  }

  viewLastOne() {
    var index = this.state.currentIndex;
    if (index > 0) {
      index--;
      this.setState({
        currentIndex: index,
      });
    } else {
      alert('已经是第一张了，骚年');
    }
  }

  viewNextOne() {
    var index = this.state.currentIndex;
    if (index < this.state.imageUrls.length - 1) {
      index++;
      this.setState({
        currentIndex: index,
      });
    } else {
      alert('已经是最后一张了，还想继续看？\n赶紧买会员吧，小伙砸！');
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        {/*
          load local image resources
          source={require('../img/otter1.jpg')}
          */}
          <Image
          style={styles.image}
          source={{uri: imageUrls[this.state.currentIndex]}}
          defaultSource={require('../img/otter1.jpg')}
          resizeMode='cover'/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.viewLastOne.bind(this)}>
            <Text style={styles.text}>⬅️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.viewNextOne.bind(this)}>
            <Text style={styles.text}>➡️</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    alignItems: 'center',
  },

  proportionalFlex: {
    flex: 1,
  },

  imageContainer: {
    width: 200,
    height: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 200,
    height: 300,
  },

  buttonContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },

  button: {
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 35,
  },

});
