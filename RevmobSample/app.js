/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeAppEventEmitter,
} from 'react-native';

import { RevMobManager } from 'react-native-revmob';

export default class RevmobSample extends Component {
  componentDidMount() {
    RevMobManager.startSession('58907fc35790c64c0bebe68c', (err) => {
      if(!err) {
        RevMobManager.loadBanner();
      }
    });
    NativeAppEventEmitter.addListener('onRevmobBannerDidReceive', () => {
      RevMobManager.showBanner();
    });
  }

  onPressButton() {
    RevMobManager.loadFullscreen();
    RevMobManager.showFullscreen();
  }

  render() {
    return (
      <View style={{ flex:1 }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <TouchableHighlight onPress={this.onPressButton}>
            <Text style={styles.instructions}>
              Open pop up Ad
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RevmobSample', () => RevmobSample);
