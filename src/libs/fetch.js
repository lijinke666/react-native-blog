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
   * get 请求
   * @param {url} String 请求地址 支持跨域
   * @param {params} obj 请求参数
   */

  async get(url, params) {
    Toast.loading("加载中...");
    try {
      const data = await fetch(`${remote}/api${url}${qs.stringify(params)}`, {
        method: "GET",
        mode: "cors"
      });
      return helper.sendResponse(data);
    } catch (err) {
      Toast.fail("服务器出错!");
    }
  },

  /**
   * post 请求
   * @param {url} String 请求地址 支持跨域
   * @param {params} obj 请求参数
   * @param {isForm} boolean 是否是表单提交 表单提交 如:formData
   */

  async post(url, params, isForm = false) {
    const fetchConfig = {
      method: "POST",
      mode: "cors",
      body: isForm ? params : JSON.stringify(params)
    };
    Toast.loading("加载中...");
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
        return data.json();
      case this.resCode["ERROR"]:
        return Toast.error("接口请求失败! :(");
      case this.resCode["TIMEOUT"]:
        return Toast.offline("哦豁,请求超时!");
      default:
        return data.json();
    }
    Toast.hide();
  }
};
export default helper;
