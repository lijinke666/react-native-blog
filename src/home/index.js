/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native'

import sayName from "./action"

const instructions = Platform.select({
  ios: 'ios 可以看到这句话',
  android: '点我试试!'
});

@connect(
  ({ HomeReducer }) => ({
    name: HomeReducer.name,
  }),
  (dispatch) => (
    bindActionCreators({
      sayName
    }, dispatch)
  )
)
export default class Home extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text onPress={this.onPress}>点我试试</Text>
        <Button>我是按钮</Button>
      </View>
    )
  }
  componentDidMount(){
    Toast.loading('哈哈')
    console.log(this.props)
    // this.props.sayName()
  }
}

//这个和 css moudule 有点像..
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
