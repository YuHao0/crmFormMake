import Vue from "vue";
import "./element";
import "./assets/reset.css";
import VueCodemirror from "./components/jsonEditor";
Vue.component("json-editor", VueCodemirror);
import crmFormMake from "./views/Home.vue";
const install = function(Vue) {
    Vue.component(crmFormMake.name, crmFormMake);
};
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
export { install, crmFormMake };
