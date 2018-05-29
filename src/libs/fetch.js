/*
 * @Author: jinke.li 
 * @Date: 2017-07-17 19:42:21 
 * @Last Modified by: Jinke.Li
 * @Last Modified time: 2018-05-28 14:30:13
 */
import { Toast } from "antd-mobile";
import qs from "qs";
import { remote } from "../config";
const mode = process.env.NODE_ENV || "DEV";

const helper = {
  resCode: {
    SUCCESS: 200,
    ERROR: 500,
    TIMEOUT: 503
  },
  /**
   * @name get 请求
   * @param {url} String 请求地址 支持跨域
   * @param {params} obj 请求参数
   */

  async get(url, params) {
    Toast.loading(`加载中...`, 999);
    try {
      const data = await fetch(
        `https://facebook.github.io/react-native/movies.json`,
        {
          method: "GET",
          mode: "cors"
        }
      );
      return helper.sendResponse(data);
    } catch (err) {
      Toast.fail(`数据请求失败:${err}`);
    }
  },

  /**
   * @name post 请求
   * @param {url} String 请求地址 支持跨域
   * @param {params} obj 请求参数
   */

  async post(url, params) {
    const fetchConfig = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(params)
    };
    Toast.loading(`加载中...`, 999);
    try {
      const data = await fetch(`${remote}/api${url}`, fetchConfig);
      return helper.sendResponse(data);
    } catch (err) {
      Toast.fail("服务器出错!");
    }
  },
  //全局处理错误
  sendResponse(data) {
    const { status } = data;
    switch (status) {
      case this.resCode["SUCCESS"]:
        Toast.hide();
        return data.json();
      case this.resCode["ERROR"]:
        Toast.hide();
        return Toast.error("接口请求失败! :(");
      case this.resCode["TIMEOUT"]:
        Toast.hide();
        return Toast.offline("哦豁,请求超时!");
      default:
        Toast.hide();
        return data.json();
    }
  }
};
export default helper;
