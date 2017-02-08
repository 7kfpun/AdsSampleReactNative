# Ads - How to make money on your React Native app

## React and React Native version

* [react](https://github.com/facebook/react): 15.4.2
* [react-native](https://github.com/facebook/react-native): 0.41.2

## Ads Network

- [AdMob](https://firebase.google.com/docs/admob/)

  - [react-native-admob](https://github.com/sbugert/react-native-admob)

  - A react-native component for Google AdMob banners.

    - Install and link react-native-admob

      ```
      npm install -S git://github.com/lucianomlima/react-native-admob.git#react-native_v0.40.0-fix
      react-native link react-native-admob
      ```

  - Installation instructions for iOS

    - Add [Google AdMob Framework](https://firebase.google.com/docs/admob/ios/download) to Xcode

  - Installation instructions for Android

    - Install and link react-native-admob

      ```
      npm install -S git://github.com/lucianomlima/react-native-admob.git#react-native_v0.40.0-fix
      react-native link react-native-admob
      ```

    - Checking the following files

      - [android/settings.gradle](https://github.com/7kfpun/AdsSampleReactNative/blob/master/AdMobSample/android/settings.gradle#L4-L5)

        ```
        include ':react-native-admob'
        project(':react-native-admob').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-admob/android')
        ```

      - [android/app/build.gradle](https://github.com/7kfpun/AdsSampleReactNative/blob/master/AdMobSample/android/app/build.gradle#L129)

        ```
        dependencies {
          ...
          compile project(':react-native-admob')
          ...
        }
        ```

      - android/app/src/main/java/com/adssample/MainApplication.java [1](https://github.com/7kfpun/AdsSampleReactNative/blob/master/AdMobSample/android/app/src/main/java/com/admobsample/MainApplication.java#L7), [2](https://github.com/7kfpun/AdsSampleReactNative/blob/master/AdMobSample/android/app/src/main/java/com/admobsample/MainApplication.java#L29)

        ```
        import com.sbugert.rnadmob.RNAdMobPackage;

        new RNAdMobPackage()
        ```

- [Facebook Audience Network](https://developers.facebook.com/products/app-monetization/audience-network/)

  - [react-native-fbads](https://github.com/callstack-io/react-native-fbads) - Facebook Audience SDK integration for React Native.

  - Installation instructions for iOS

    - Install and link react-native-fbads

      ```
      npm install -S react-native-fbads
      react-native link react-native-fbads
      ```

    - Add Bolts.framework, FBSDKCoreKit.framework and FBAudienceNetwork.framework from [Facebook SDK for iOS](https://developers.facebook.com/docs/ios/getting-started)

    - Setup Facebook SDK in AppDelegate.m file [1](https://github.com/7kfpun/AdsSampleReactNative/blob/master/FbAdsSample/ios/FbAdsSample/AppDelegate.m#L15), [2](https://github.com/7kfpun/AdsSampleReactNative/blob/master/FbAdsSample/ios/FbAdsSample/AppDelegate.m#L38)

      ```
      #import <FBSDKCoreKit/FBSDKCoreKit.h>

      [[FBSDKApplicationDelegate sharedInstance] application:application didFinishLaunchingWithOptions:launchOptions];
      ```

  - Installation instructions for Android

    - Install and link react-native-fbads

      ```
      npm install -S react-native-fbads
      react-native link react-native-fbads
      ```

    - Checking the following files

      - [android/settings.gradle](https://github.com/7kfpun/AdsSampleReactNative/blob/master/FbAdsSample/android/settings.gradle#L4-L5)

        ```
        include ':react-native-fbads'
        project(':react-native-fbads').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-fbads/src/android')

        ```

      - [android/app/build.gradle](https://github.com/7kfpun/AdsSampleReactNative/blob/master/FbAdsSample/android/app/build.gradle#L129-L130)

      ```
      dependencies {
        ...
        compile project(':react-native-fbads')
        compile 'com.facebook.android:facebook-android-sdk:4.+'
        ...
      }
      ```

      - android/app/src/main/java/com/fbadssample/MainApplication.java [1](https://github.com/7kfpun/AdsSampleReactNative/blob/master/FbAdsSample/android/app/src/main/java/com/fbadssample/MainApplication.java#L12), [2](https://github.com/7kfpun/AdsSampleReactNative/blob/master/FbAdsSample/android/app/src/main/java/com/fbadssample/MainApplication.java#L29)

      ```
      import io.callstack.react.fbads.FBAdsPackage;

      new FBAdsPackage()
      ```

      - [android/app/src/main/AndroidManifest.xml](https://github.com/7kfpun/AdsSampleReactNative/blob/master/FbAdsSample/android/app/src/main/AndroidManifest.xml#L28-L30)

      ```
      <activity
        android:name="com.facebook.ads.InterstitialAdActivity"
        android:configChanges="keyboardHidden|orientation" />
      ```

- [Revmob](https://www.revmobmobileadnetwork.com)

  - [react-native-revmob](https://github.com/RevMob/react-native-revmob)

  - Installation instructions for iOS

    - Install and link react-native-revmob

      ```
      npm install -S RevMob/react-native-revmob
      react-native link react-native-revmob
      ```

    - Add the following frameworks to your XCode Project:
      - RevMobAds.framework from [RevMob SDK for iOS](https://www.revmobmobileadnetwork.com/sdk/react)
      - AdSupport.framework
      - AVFoundation.framework
      - CoreFoundation.framework (as optional)
      - CoreLocation.framework
      - Foundation.framework
      - MediaPlayer.framework
      - StoreKit.framework
      - SystemConfiguration.framework

## Running

#### Clone & install

* Clone this repo `git clone git@github.com:7kfpun/AdsReactNative.git`
* `cd AdsReactNative/...Sample`
* run `npm install || yarn install`

#### iOS

* Run `react-native run-ios`

#### Android

* Run `android avd` and start an emulator
* Run `react-native run-android`

## License

Released under the [MIT License](http://opensource.org/licenses/MIT).
