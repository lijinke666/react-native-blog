import React, { Component, Fragment } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { Card, WhiteSpace, Toast, Result } from "antd-mobile";
import fetch from "../../libs/fetch";

export default class ArticleLists extends Component {
  state = {
    articleLists: [],
  };
  render() {
    const { pageIndex, pageSize } = this.props;
    const { articleLists, height, refreshing } = this.state;
    console.log(articleLists);
    return (
      <View>
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title="文章标题"
            thumb={
              <Image
                source={{
                  uri:
                    "https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                }}
              />
            }
          />
          <Card.Body>
            <View style={{ padding: 15 }}>
              <Text>预览内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>
            </View>
          </Card.Body>
          <Card.Footer
            content="李金珂"
            extra={<Text>2018-09-09 13:00:00</Text>}
          />
        </Card>
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title="文章标题xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            thumb={
              <Image
                source={{
                  uri:
                    "https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                }}
              />
            }
          />
          <Card.Body>
            <View style={{ padding: 15 }}>
              <Text>预览内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>
            </View>
          </Card.Body>
          <Card.Footer
            content="李金珂"
            extra={<Text>2018-09-09 13:00:00</Text>}
          />
        </Card>
      </View>
    );
  }
  async componentDidMount() {
    const articleLists = await fetch.get("/article/lists");
    this.setState({ articleLists });
  }
}
