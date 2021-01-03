let host = window.location.host;
let loginEnv = "";
if (/qa.91jkys/.test(host)) {
    loginEnv = ".qa";
}
if (/pre.91jkys/.test(host)) {
    loginEnv = ".pre";
}
let domain = `${loginEnv}.91jkys.com`;
function getCookie() {
    var cookie = {};
    var all = document.cookie;
    if (all == "") {
        return null;
    }
    var list = all.split(";");
    for (var i = 0; i < list.length; i++) {
        var cok = list[i];
        var p = cok.indexOf("=");
        var name = cok.substring(0, p).trim();
        var value = cok.substring(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    }
    return cookie;
}
function setCookie(name, value, dayToLive) {
    var cookie = name + "=" + encodeURIComponent(value);
    if (typeof dayToLive === "number") {
        cookie += "; max-age=" + dayToLive * 60 * 60 * 24;
    }
    cookie += ";path=/;domain=" + domain;
    document.cookie = cookie;
}
function deleteCookie(name) {
    var cookie = name + "=" + ";max-age=0;path=/;domain=" + domain;
    document.cookie = cookie;
}

export default {
    getCookie: getCookie,
    setCookie: setCookie,
    deleteCookie: deleteCookie
};
