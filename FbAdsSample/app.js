import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import { BannerView, InterstitialAdManager } from 'react-native-fbads';

export default class FbAdsSample extends Component {
  onPressButton() {
    InterstitialAdManager.showAd('1220388591362840_1221348381266861')
      .then(didClick => console.log('Click'))
      .catch(error => console.log(error))
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

        <BannerView
          type="standard"
          placementId="1220388591362840_1220403414694691"
          onClick={() => console.log('click')}
          onError={(err) => console.log('error', err)}
        />
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
