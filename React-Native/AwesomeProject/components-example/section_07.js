import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TabBarIOS,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import Util from './utils.js';

export default class TabBarIOSApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'message',
      notifCount: 2,
    };
  }

  didSelectTab(tabName) {
    this.setState({
      selectedTab: tabName,
      notifCount: 0,
    });
  }

  render() {
    return (
      <TabBarIOS style={styles.proportionalFlex}>
      {/*https://stackoverflow.com/questions/34130539/uncaught-error-invariant-violation-element-type-is-invalid-expected-a-string*/}
        <TabBarIOS.Item
        title='消息'
        icon={require('../resources/img/tabBarIOS/message.png')}
        selected={this.state.selectedTab === 'message'}
        badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
        onPress={
          ()=>{
            this.setState({
             selectedTab: 'message',
           });
          }
        }>
          <Message></Message>
        </TabBarIOS.Item>

        <TabBarIOS.Item
        title='联系人'
        icon={require('../resources/img/tabBarIOS/phone.png')}
        selected={this.state.selectedTab === 'contacts'}
        onPress={this.didSelectTab.bind(this, 'contacts')}>
          <ContactList></ContactList>
        </TabBarIOS.Item>

        <TabBarIOS.Item
        title='动态'
        icon={require('../resources/img/tabBarIOS/star.png')}
        selected={this.state.selectedTab === 'star'}
        onPress={this.didSelectTab.bind(this, 'star')}>
          <ScrollView>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image
              style={{width: 200, height: 200, marginTop: 100}}
              resizeMode='center'
              source={{uri: 'https://imgsa.baidu.com/baike/w%3D268/sign=a8324ff660d0f703e6b292da30fb5148/500fd9f9d72a6059070cf8fb2a34349b033bba36.jpg'}}/>
            </View>
          </ScrollView>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

// 消息界面
class Message extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.proportionalFlex}>
          <Text style={styles.messageTitle}>梁漱溟先生说</Text>
          <Text style={styles.messageTextContent}>人一生要处理三种关系，</Text>
          <Text style={styles.messageTextContent}>人与物的关系（最低的），</Text>
          <Text style={styles.messageTextContent}>人与人的关系（中级的），</Text>
          <Text style={styles.messageTextContent}>人与自己的关系（最高级的）。</Text>
          <Text style={styles.specialText}>确实，人与自己的关系，才决定了我们一生的走向。</Text>
          <Text style={styles.messageTextContent}>所以，当我们因某个事情受到伤害，</Text>
          <Text style={styles.messageTextContent}>在不甘心的同时，</Text>
          <Text style={styles.messageTextContent}>一定要想想“及时止损”四个字。</Text>
          <Text style={styles.messageTextContent}>然后想办法“和自己和解”，</Text>
          <Text style={styles.messageTextContent}>不要让不甘心操纵了自己，</Text>
          <Text style={styles.messageTextContent}>因为一个一直为不甘心买单的人，</Text>
          <Text style={styles.messageTextContent}>是全天下最蠢的傻蛋。</Text>
        </View>
      </ScrollView>
    );
  }
}

// 联系人界面
class ContactList extends Component {
  render() {
    var contactNames = ['奥巴马', '李开复', '郭德纲', 'Kobe Bryant', 'Stephen Curry'];
    var contactElements = [];
    // JavaScript 中有多少种遍历方式？
    for (var i in contactNames) {
      var aContactElement = (
        <ContactItem
          key={i}
          name={contactNames[i]}>
         </ContactItem>
      );
      contactElements.push(aContactElement);
    }

    return (
       <ScrollView>
         {contactElements}
       </ScrollView>
    );
  }
}

// 联系人 cell
class ContactItem extends Component {
  render() {
    return (
      <View style={styles.contactItem}>
        <Image source={require('../resources/img/otter1.jpg')}
        resizeMode='cover'
        style={styles.contactAvatar}/>
        <Text style={styles.contactName}>{this.props.name}</Text>
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

  messageTitle: {
    fontSize: 30,
    marginTop: 50,
    marginBottom: 40,
    marginLeft: 15,
    marginRight: 15,
  },

  messageTextContent: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    lineHeight: 30,
    color: '#18B5FF',
  },

  specialText: {
    fontSize: 22,
    marginLeft: 15,
    marginRight: 15,
    lineHeight: 30,
    color: '#18B11F',
    fontWeight: 'bold',
  },


  contactItem: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: Util.point,
    borderBottomColor: '#f456',
  },

  contactAvatar: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },

  contactName: {
    fontSize: 18,
    color: 'darkslategray',
    paddingLeft: 15,
  },

});
