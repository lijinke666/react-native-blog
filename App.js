/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Fragment } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button, TabBar, NavBar } from "antd-mobile";
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryColor, defaultColor } from "./src/styles/vars";

import ArticleLists from "./src/components/ArticleLists"
import About from "./src/components/About"

export default class App extends Component {
  state = {
    selectedTab: "article"
  };
  toggleTab = (key = "article") => {
    this.setState({ selectedTab: key });
  };
  render() {
    const { selectedTab } = this.state;
    return (
        <TabBar
          unselectedTintColor={defaultColor}
          tintColor={primaryColor}
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="文章"
            key="article"
            icon={<Icon name="map" color="red" />}
            selectedIcon={<Icon type="check" />}
            selected={selectedTab === "article"}
            onPress={() => this.toggleTab("article")}
            data-seed="logId"
          >
          {/* TODO: */}
            <ArticleLists pageIndex={1} pageSize={5}/>
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon name="check" />}
            selectedIcon={<Icon type="check" />}
            title="关于"
            key="about"
            selected={selectedTab === "about"}
            onPress={() => this.toggleTab("about")}
            data-seed="logId1"
          >
            <About/>
          </TabBar.Item>
        </TabBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
