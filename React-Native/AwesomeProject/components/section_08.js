import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  WebView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Util from './utils.js';

var WEBVIEW_REF = 'webview';

export default class WebViewApp extends Component {

  goBack = () => {
      this.refs[WEBVIEW_REF].goBack();
    };

    goForward = () => {
      this.refs[WEBVIEW_REF].goForward();
    };

    reload = () => {
      this.refs[WEBVIEW_REF].reload();
    };

    onShouldStartLoadWithRequest = (event) => {
      // Implement any custom loading logic here, don't forget to return!
      // webviewdemo://test

      if (event.url.match("webviewdemo") != null) {
        alert('是否打开新页面？');
        return false;
      }
      return true;
    };

    onNavigationStateChange = (navState) => {

      this.setState({
        backButtonEnabled: navState.canGoBack,
        forwardButtonEnabled: navState.canGoForward,
        url: navState.url,
        status: navState.title,
        loading: navState.loading,
        scalesPageToFit: true
      });
    };

  render() {
    return (

      <View style={styles.container}>
        <WebView
        ref={WEBVIEW_REF}
        style={styles.webView}
        source={require('../resources/webViewTest.html')}
        onNavigationStateChange={this.onNavigationStateChange}
        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.goBack}>
            <Text style={styles.text}>⬅️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.reload}>
            <Text style={styles.text}>🔄</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.goForward}>
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
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  proportionalFlex: {
    flex: 1,
  },

  webView: {
    flex: 1,
    backgroundColor: 'darksalmon',
  },

  buttonContainer: {
    marginTop: 50,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },

  button: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 35,
  },

});
