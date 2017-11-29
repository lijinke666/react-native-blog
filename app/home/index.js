/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import getMyName from "./action"
import Button from "../components/button"

const instructions = Platform.select({
  ios: 'ios 可以看到这句话',
  android: 'android 可以看到这句话'
});

@connect(
  ({ HomeAction }) => ({
    name: HomeAction.name,
  }),
  (dispatch) => (
    bindActionCreators({
      getMyName
    }, dispatch)
  )
)
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <Button>测试Button 组件</Button>
      <Text style={styles.instructions}>
        {instructions}
      </Text>
      </View>
    );
  }
  componentDidMount(){
    this.props.getMyName()
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
