import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import { AdMobBanner, AdMobInterstitial } from 'react-native-admob';

AdMobInterstitial.setAdUnitID('ca-app-pub-8610011634603119/8418189380');
// AdMobInterstitial.setAdUnitID('ca-app-pub-8610011634603119/6463052180');

export default class AdMobSample extends Component {
  onPressButton() {
    AdMobInterstitial.requestAd(() => AdMobInterstitial.showAd(error => error && console.log(error)));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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

        <View style={{ height: 60 }}>
          <AdMobBanner bannerSize="fullBanner" adUnitID="ca-app-pub-8610011634603119/4028075783" />
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
