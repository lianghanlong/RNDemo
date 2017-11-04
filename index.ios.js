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
  Navigator,
  ScrollView,
} from 'react-native';

import Swiper from 'react-native-swiper';

class MainView extends Component {
  render(){
    return(
      <ScrollView>
        <View/>
      </ScrollView>
    );
  }
}

export default class RNDemo extends Component {
  render() {
    return (
      <Navigator
       initialRoute={{
         title:'RNDemo',
        //  index:0,
         component:MainView,
       }}
        renderScene={(route, navigator) => {  
        let Component = route.component;  
        return <Component {...route.params} navigator={navigator}/>  
      }} 
      />
    
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);
