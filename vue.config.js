// 引用path包(path属于node自带包，无需在package.json中引用安装即可直接引用)，用来操作路径，文档地址：https://nodejs.org/docs/latest/api/path.html
const path = require("path");
// const fs = require("fs");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    devServer: {
        port: "9090",
        compress: true,
        disableHostCheck: true,
        hotOnly: false
    },
    css: {
        loaderOptions: {
            // stylus: {
            //     "resolve url": true,
            //     import: []
            // },
            // less: {
            //     modifyVars: {
            //         hack: `true; @import "${resolve("src/vant/theme.less")}";`
            //     }
            // },
            sass: {
                additionalData: `
                  @import "src/assets/scss/var.scss";
                  @import "src/assets/scss/common.scss";
                  `
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set("@", resolve("./src"))
            .set("components", resolve("./src/components"))
            .set("assets", resolve("./src/assets"))
            .set("views", resolve("./src/views"));
    }
};
