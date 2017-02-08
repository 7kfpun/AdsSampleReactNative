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
} from 'react-native';

export default class AdsSample extends Component {
  onPressButton() {
    console.log('Show an interstitial ad here.');
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

        <Text>{'A banner here'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
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
