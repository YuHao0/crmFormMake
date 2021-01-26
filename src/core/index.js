import apiUrlList from "./api.js";
import copy from "./copy";
import axios from "axios";
import dateFilter from "./dateFilter";

let getBaseUrl = (origin = "gateway") => {
    let protocol = location.protocol;
    let host = window.location.host;
    let apiEvn = "";
    if (/qa.zu-ji/.test(host)) {
        protocol = "https:";
        apiEvn = "-qa";
    }
    if (/pre.zu-ji/.test(host)) {
        apiEvn = "-pre";
    }
    let baseUrl = `${protocol}//${origin}${apiEvn}.zu-ji.com`;
    return baseUrl;
};

let apiRequest = (url, { data, option }) => {
    if (option.nextUrl) {
        // 可配置url的url拼接
        url = `${url}/${option.nextUrl}`;
    }
    if (option.fullUrl) {
        url = option.fullUrl;
    }
    if (url.indexOf("http") == 0) {
        url = url.replace("http:", location.protocol);
    } else {
        url = `${getBaseUrl(option.origin)}${url}`;
    }
    let requestData = {
        method: option.method.toLocaleLowerCase(),
        url: url,
        withCredentials: true,
        headers: {}
    };
    if (option.headers) {
        requestData.headers = Object.assign(requestData.headers, option.headers);
    } else {
        data = copy(data);
        Object.keys(data).forEach(key => {
            if (data[key] === "") {
                delete data[key];
            }
        });
    }
    if (requestData.method === "get") {
        requestData.params = data;
    } else {
        requestData.data = data;
    }
    return new Promise((resolve, reject) => {
        axios(requestData)
            .then(res => {
                let data = res.data || {};
                if (typeof data == "string" || data.returnCode == "0000" || data.returnCode == 0 || data.ok) {
                    resolve(data);
                    return;
                }
            })
            .catch(res => {
                reject(res.data || {});
            });
    });
};

// 请求封装
let api = {
    static: apiUrlList.static
};

Object.keys(apiUrlList.apiUrlList).forEach(itemFirst => {
    api[itemFirst] = {};
    Object.keys(apiUrlList.apiUrlList[itemFirst]).forEach(item => {
        let configApi = apiUrlList.apiUrlList[itemFirst][item];
        api[itemFirst][item] = (function(configApi) {
            /*
                把api中的每一个值转换为方法，例如下
                 apiUrlList: {
                     user: {
                        get: "/api/sys/current_user"
                     }
                 }
                 api[itemFirst][item] 即 apiUrlList.user.get 转换为下面返回的函数，并接受两个参数data、option
            */
            return function(data = {}, option = {}) {
                let action = configApi;
                option = Object.assign({ method: "get", fullUrl: "" }, option);
                if (typeof action == "object") {
                    action = configApi.url;
                    Object.assign(option, configApi.option || {});
                }
                if (data.type == "option") {
                    Object.assign(option, data);
                    data = {};
                }
                // action为接口地址 url 如上面的 "/api/sys/current_user" (apiUrlList.use.get)
                return apiRequest(action, {
                    data: data,
                    option: option
                });
            };
        })(configApi);
    });
});

export default {
    api: api,
    dateFilter: dateFilter
};
