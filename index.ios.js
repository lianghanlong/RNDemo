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
  TouchableHighlight,
  Dimensions,
} from 'react-native';

let windowSize = Dimensions.get("window");

import Swiper from 'react-native-swiper';

class SecondPage extends Component {
  render(){
    return(
      <View style={styles.container}
      
      >
      <TouchableHighlight
          style={styles.button}
          onPress={()=>{this._onpressPop}} //onPress={()=>this.props.navigator.pop()}
        >
          <Text style={styles.text}>跳回</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class MainView extends Component {
  render(){
    return(
      // <ScrollView style={{backgroundColor:'red'}}></ScrollView>
      <View style={styles.container}>

        <TouchableHighlight
          style={styles.button}
          onPress={()=>this._onPress('你好! (来源第一页:右出)')}
        >
          <Text style={styles.text}>跳转至第二页(右出)</Text>
        </TouchableHighlight>
      
      </View>
    );
  }
/**
 * 按钮点击
 * 下划线表示私有方法, 类似Java的private限定符.  
 */ 
  _onPress(name){
    this.props.navigator.push({
      component:SecondPage,
      passProps:{
        name:name
      }
    })
  }

  _onpressPop(){
    this.props.navigator.pop();
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
      configureScene={this.configureScene}
      />
    
    );
  }
/**
 * 配置场景动画
 * @param {*} route 路由
 * @param {*} routeStack 路由器
 * return {*} 动画
 */
  configureScene(route,routeStack){
    if(route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom;
    } 

    return Navigator.SceneConfigs.PushFromRight;
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
  },
  button:{
    backgroundColor:'gray',
    height:44,
    width:windowSize.width,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'black',
    fontSize:15,
    textAlign:'center',
  },
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);
