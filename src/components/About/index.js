import React, { Component, Fragment } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from "react-native";
import {
  Card,
  WhiteSpace,
  Toast,
  Result,
  Carousel,
  List,
  Button,
  Tag,
  ActionSheet,
  Modal
} from "antd-mobile";
import { version, name } from "../../../package.json";

const Item = List.Item;
const Brief = Item.Brief;

const GITHUB = "https://github.com/lijinke666";
const WEBURL = "http://www.lijinke.cn";

const carouselStyles = {
  width: "100%",
  height: 200
};

export default class About extends Component {
  state = {
    visible: false
  };
  openUrl = (url = GITHUB) => {
    Linking.openURL(url).catch(err => {
      Toast.fail(`访问${url}失败!`);
    });
  };
  dataList = [
    { url: "OpHiXAcYzmPQHcdlLFrc", title: "发送给朋友" },
    { url: "wvEzCMiDZjthhAOcwTOu", title: "新浪微博" },
    { url: "cTTayShKtEIdQVEMuiWt", title: "生活圈" },
    { url: "umnHwvEgSyQtXlZjNJTt", title: "微信好友" },
    { url: "SxpunpETIwdxNjcJamwB", title: "QQ" }
  ].map(({ url, title }) => ({
    icon: (
      <Image
        source={{
          uri: `https://gw.alipayobjects.com/zos/rmsportal/${url}.png`
        }}
        alt={title}
        style={{ width: 36 }}
      />
    ),
    title: title
  }));
  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: this.dataList,
        title: "分享",
        message: "分享给朋友"
      },
      buttonIndex => {
        this.setState({
          clicked1:
            buttonIndex > -1 ? this.dataList[buttonIndex].title : "cancel"
        });
        // also support Promise
        return new Promise(resolve => {
          Toast.info("closed after 1000ms");
          setTimeout(resolve, 1000);
        });
      }
    );
  };
  onClosePayModal = e => {
    this.setState({ visible: false });
  };
  onOpenPayModal = e => {
    e.preventDefault();
    this.setState({ visible: true });
  };
  render() {
    return (
      <ScrollView>
        <Carousel autoplay={true} infinite>
          <Image
            style={carouselStyles}
            source={require("../../images/banner1.jpg")}
          />
          <Image
            style={carouselStyles}
            source={require("../../images/banner2.jpg")}
          />
          <Image
            style={carouselStyles}
            source={require("../../images/banner3.jpg")}
          />
        </Carousel>
        <WhiteSpace />
        <Item
          arrow="horizontal"
          thumb={
            <Image
              source={require("../../images/app.png")}
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
          }
          multipleLine
          platform="android"
          onClick={() => {}}
        >
          <Text>我是李金珂</Text>
          <Brief>我爱这艰难而又拼尽全力的每一天!</Brief>
        </Item>
        <Item
          extra={
            <Button
              type="primary"
              size="small"
              inline
              onClick={() => this.openUrl()}
            >
              访问
            </Button>
          }
        >
          Github
        </Item>
        <Item
          extra={
            <Button
              type="primary"
              size="small"
              inline
              onClick={() => this.openUrl(WEBURL)}
            >
              打开
            </Button>
          }
        >
          web版本
        </Item>
        <Item extra={<Tag>react-native版本</Tag>}>{name}</Item>
        <Item extra={<Tag>{version}</Tag>}>当前版本</Item>
        <WhiteSpace />
        <Button onClick={this.showShareActionSheet}>分享</Button>
        <WhiteSpace />
        <Button type="primary" onClick={this.onOpenPayModal}>
          打赏
        </Button>

        <Modal
          visible={this.state.visible}
          transparent
          maskClosable={false}
          onClose={() => this.onClosePayModal()}
          title="谢谢老板"
          footer={[
            {
              text: "关闭",
              onPress: () => {
                this.onClosePayModal();
              }
            }
          ]}
        >
          <Carousel autoplay={false} infinite>
            <Image
              source={require("../../images/weChatPay.png")}
              style={{ width: "100%", height: 350 }}
            />
            <Image
              source={require("../../images/alipay.jpg")}
              style={{ width: "100%", height: 350 }}
            />
          </Carousel>
        </Modal>
      </ScrollView>
    );
  }
}
