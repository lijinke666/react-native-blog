import React, { Component, Fragment } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from "react-native";
import { Card, WhiteSpace, Toast, Result, Pagination } from "antd-mobile";
import fetch from "../../libs/fetch";

export default class ArticleLists extends Component {
  state = {
    articleLists: []
  };
  render() {
    const { pageIndex, pageSize } = this.props;
    const { articleLists, height, refreshing } = this.state;

    return (
      <ScrollView>
        {articleLists.map(({ title }, i) => {
          return (
            <Fragment key={i}>
              <Card>
                <Card.Header
                  title={title}
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
                  content={"李金珂"}
                  extra={<Text>2018-09-09 13:00:00</Text>}
                />
              </Card>
              <WhiteSpace size="lg" />
            </Fragment>
          );
        })}
        <WhiteSpace size="lg" />
        <Pagination
          total={5}
          current={1}
          locale={{
            prevText: "上一页",
            nextText: "下一页"
          }}
        />
        <WhiteSpace size="lg" />
      </ScrollView>
    );
  }
  getArticleLists = async (pageIndex = 1,pageSize = 5)=>{
    const articleLists = await fetch.get("/article/lists",{pageIndex,pageSize});
    this.setState({ articleLists: articleLists.movies });
  }
  async componentDidMount() {
    this.getArticleLists()
  }
}
