import axios from "axios";  //跨域
import md5 from "md5";   //加密处理
import config from "../config"; 

const API_URL = config.API_URL;
class http {
  static instance;

  static getInstance() {
    if (false === this.instance instanceof this) {
      this.instance = new this();
    }
    return this.instance;
  }

  constructor() {
    this.client_key = config.APP_KEY;
    this.client_token = this.getToken(config.APP_SECRET);

    this.user_id = "";
    this.user_token = "";
  }
  setUserToken(user_id, user_token) {
    this.user_id = user_id;
    this.user_token = user_token;
  }
  getRandomNumber(length) {
    let num = "";
    for (let i = 0; i < length; i++) {
      num += Math.floor(Math.random() * 10);
    }
    return num;
  }
  getToken(secret) {
    let randomStr = this.getRandomNumber(4);
    let middleStr = md5(randomStr + secret).substr(0, 12);
    let timeStr = Math.ceil(new Date().getTime() / 1000 - randomStr).toString(
      16
    );
    return (randomStr + middleStr + timeStr)
      .split("")
      .reverse()
      .join("");
  }
  //格式化请求参数
  getParams(params) {
    if (this.client_key) {
      params.client_key = this.client_key;
      params.client_token = this.client_token;
    }

    if (localStorage.getItem("user_id")) {
      params.user_id = localStorage.getItem("user_id");
      params.user_token = localStorage.getItem("user_token");
    }

    return params;
  }

  getUUID() {
    //生成UUID
    var uuid = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    };
    let itemKey = "pk2018_uuid";
    if (!localStorage.getItem(itemKey)) {
      localStorage.setItem(itemKey, uuid());
    }
    return localStorage.getItem(itemKey);
  }
  //格式化POST数据
  getDatas(data) {
    let ret = "";
    for (let it in data) {
      ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
    }
    return ret.substr(0, ret.length - 1);
  }
  //get 请求
  getData(api_name, api_params) {
    return new Promise((resolve, reject) => {
      axios({
        url: API_URL + api_name,
        method: "get",
        dataType: "json",
        params: this.getParams(api_params)
      })
        .then(function(res) {
          resolve(res.data.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
  //get 请求
  get(api_name, api_params) {
    return new Promise((resolve, reject) => {
      axios({
        url: API_URL + api_name,
        method: "get",
        dataType: "json",
        params: this.getParams(api_params)
      })
        .then(function(res) {
          resolve(res.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
  //post请求
  post(api_name, api_params, api_data) {
    return new Promise((resolve, reject) => {
      axios({
        url: API_URL + api_name,
        method: "post",
        dataType: "text",
        params: this.getParams(api_params),
        data: this.getDatas(api_data)
      })
        .then(function(res) {
          resolve(res.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
}
export default http.getInstance();
