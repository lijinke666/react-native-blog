import React, { Component, Fragment } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { Card, WhiteSpace, Toast, Result } from "antd-mobile";
import fetch from "../../libs/fetch";

export default class ArticleLists extends Component {
  state = {
    articleLists: []
  };
  render() {
    const { pageIndex, pageSize } = this.props;
    const { articleLists } = this.state;
    console.log(articleLists);
    return (
      <Card>
        <Card.Header
          title="This is title"
          thumb={
            <Image
              source={{
                uri:
                  "https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
              }}
            />
          }
          extra={<Text>this is extra</Text>}
        />
        <Card.Body>
          <Text>This is content of `Card`</Text>
        </Card.Body>
        <Card.Footer
          content="footer content"
          extra={<Text>extra footer content</Text>}
        />
      </Card>
    );
  }
  async componentDidMount() {
    const articleLists = await fetch.get("/article/lists");
    this.setState({ articleLists });
  }
}
