import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./element";
import core from "./core";

for (let key in core) {
    Vue.prototype[key] = core[key];
}

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
