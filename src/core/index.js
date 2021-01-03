import apiJSON from "./api.js";
import is from "is";
import copy from "./copy";
import extend from "./extend";
import axios from "axios";
import cookie from "./cookie";
import dateFilter from "./dateFilter";

let goLogin = () => {
    let host = window.location.host;
    let protocol = location.protocol;
    let proOrigin = "moblie-drug-sales/";
    let loginEnv = "";
    if (/qa.91jkys/.test(host)) {
        loginEnv = ".qa";
    }
    if (/pre.91jkys/.test(host)) {
        loginEnv = ".pre";
    }
    window.location.href = `${protocol}//employee${loginEnv}.91jkys.com/sso/login?redirect=${protocol}//${host}/${proOrigin}`;
};

let getBaseUrl = (hostname = "crm-new") => {
    let apiEvn = "";
    let protocol = location.protocol;
    let host = window.location.host;
    if (/qa.91jkys/.test(host)) {
        apiEvn = ".qa";
        protocol = "https:";
    } else if (/static.pre.91jkys/.test(host)) {
        apiEvn = ".pre";
    }
    let baseUrl = `${protocol}//${hostname}${apiEvn}.91jkys.com`;
    return baseUrl;
};

let loading = {
    continue: 0,
    show() {
        if (!this.continue) {
            // this.toast = Toast.loading({
            //     message: "加载中",
            //     duration: 0
            // });
            this.continue++;
        } else {
            this.continue++;
        }
        this.timeOut = setTimeout(() => {
            this.hide();
        }, 60000);
    },
    hide() {
        clearTimeout(this.timeOut);
        this.continue--;
        if (this.continue <= 0) {
            this.continue = 0;
            this.toast && this.toast.clear();
        }
    }
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
        url = `${getBaseUrl(option.host)}${url}`;
    }
    !option.noLoading && loading.show();
    let requestData = {
        method: option.method.toLocaleLowerCase(),
        url: url,
        withCredentials: true
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
    if (option.headers) {
        requestData.headers = option.headers;
    }
    return new Promise((resolve, reject) => {
        axios(requestData)
            .then(res => {
                let data = res.data || {};
                let error = data.error || {};
                if (
                    typeof data == "string" ||
                    data.returnCode == "0000" ||
                    data.returnCode == 0 ||
                    data.code == 200 ||
                    data.ok
                ) {
                    resolve(data.ok ? data.result : data);
                } else if (data.returnCode == "0100" || error.code == 401) {
                    goLogin();
                    reject(data);
                } else if (error.code == "402") {
                    // error.message && Notify(error.message);
                    reject(error);
                } else {
                    // data.returnMsg && Notify(data.returnMsg);
                    reject(data);
                }
                loading.hide();
            })
            .catch(res => {
                loading.hide();
                reject(res.response.data || {});
            });
    });
};

// 请求封装
let api = {
    static: apiJSON.static
};
Object.keys(apiJSON.apiUrlList).forEach(itemFirst => {
    api[itemFirst] = {};
    Object.keys(apiJSON.apiUrlList[itemFirst]).forEach(item => {
        let configApi = apiJSON.apiUrlList[itemFirst][item];
        api[itemFirst][item] = (function (configApi) {
            /*
                把api中的每一个值转换为方法，例如下
                 apiUrlList: {
                     user: {
                        get: "/api/sys/current_user"
                     }
                 }
                 api[itemFirst][item] 相当于上面对像中 apiUrlList.user.get 转换为下面返回的函数，并接受两个参数data、option
            */
            let option = apiJSON.apiUrlList[itemFirst].option;
            if (option && item != "opiont") {
                if (typeof configApi == "string") {
                    configApi = {
                        url: configApi,
                        option: option
                    };
                } else {
                    configApi.option = Object.assign({}, option, configApi.option || {});
                }
            }
            return function (data = {}, option = {}) {
                let action = configApi;
                option = Object.assign({ method: "get", fullUrl: "" }, option);
                if (typeof configApi == "object") {
                    action = configApi.url;
                    option = Object.assign({}, option, configApi.option || {});
                }
                if (data.type == "option") {
                    option = Object.assign({}, option, data);
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

function log() {
    for (let key in arguments) {
        arguments[key] ? console.log(JSON.parse(JSON.stringify(arguments[key]))) : console.log(arguments[key]);
    }
}

function routeGoBack(option) {
    let from = option.routeFrom || {};
    if (!from.name || from.path == "/") {
        // 详情页面直接刷新 然后点击后退
        option.PARENT_ENTER &&
            option.$router.replace({
                path: option.PARENT_ENTER,
                query: from.query
            });
    } else {
        option.$router.back();
    }
}

export default {
    axios: axios,
    goLogin: goLogin,
    api: api,
    is: is,
    console: log,
    copy: copy,
    extend: extend,
    getBaseUrl: getBaseUrl,
    routeGoBack: routeGoBack,
    dateFilter: dateFilter,
    cookie
};
