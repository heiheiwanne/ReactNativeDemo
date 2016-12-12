/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {AppRegistry} from 'react-native';
 import CustomText from './js/demoJs/whileText';
 import MainPage from './js/demoApp/mainPage';

 export default class AwesomeProjectAPP extends Component {

  render() {
    return (
          // <CustomText/> //不停闪烁的文字
          <MainPage/> //切换app
      
     );
  }
}

  

AppRegistry.registerComponent('AwesomeProjectAPP', () => AwesomeProjectAPP);


