<template>
    <div class="form-make" id="formMake" :style="{ height: `${makeHeight}px`, overflow: 'hidden' }">
        <el-row class="main-content" :style="{ height: '100%', overflow: 'auto' }">
            <el-col :span="4">
                <div class="content-item components-wrap">
                    <el-button class="save-control" type="primary" @click="getJson('emit')">保存配置</el-button>
                    <div class="components-title">
                        <span class="el-icon-arrow-left"></span>
                        组件库
                    </div>
                    <div class="components-box">
                        <div class="components-type">顶部区域</div>
                        <draggable
                            class="components-content"
                            tag="ul"
                            v-bind="{
                                group: { name: 'buttons', pull: 'clone', put: false },
                                sort: true,
                                ghostClass: 'ghost'
                            }"
                            :list="buttons"
                            @end="handleMoveEnd($event, 'source')"
                            @start="handleMoveStart"
                            :move="handleMove"
                        >
                            <li class="components-item" v-for="(item, index) in buttons" :key="index">
                                {{ item.name }}
                            </li>
                        </draggable>
                        <div class="components-type">表单组件</div>
                        <draggable
                            class="components-content"
                            tag="ul"
                            v-bind="{
                                group: { name: 'forms', pull: 'clone', put: false },
                                sort: true,
                                ghostClass: 'ghost'
                            }"
                            :list="basicComponents"
                            @end="handleMoveEnd($event, 'source')"
                            @start="handleMoveStart"
                            :move="handleMove"
                        >
                            <li class="components-item" v-for="(item, index) in basicComponents" :key="index">
                                {{ item.name }}
                            </li>
                            <li class="components-item noop"></li>
                            <li class="components-item noop"></li>
                        </draggable>
                    </div>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="content-item edit-content">
                    <el-tabs v-model="activeType" @tab-click="editTabChange">
                        <el-tab-pane label="基本属性" name="meta" class="tabHeight">
                            <meta-component />
                        </el-tab-pane>
                        <el-tab-pane label="Buttons区域" name="buttons">
                            <widget-button
                                ref="buttons"
                                :list="sys_button"
                                @buttonChange="buttonChange"
                                @delComPerties="delComPerties"
                            ></widget-button>
                        </el-tab-pane>
                        <el-tab-pane label="窗口主体区域" name="forms">
                            <widget-form
                                ref="widgetFormMain"
                                :list="mainItems"
                                @formChange="formChange"
                                @delComPerties="delComPerties"
                            ></widget-form>
                        </el-tab-pane>
                        <el-tab-pane label="Tabs区域" name="tabs">
                            <Tabs
                                :tabs="tabs"
                                @addTabs="addTabs"
                                @delTabs="delTabs"
                                @delComPerties="delComPerties"
                                @beforeTabs="beforeTabs"
                                @laterTabs="laterTabs"
                            ></Tabs>
                        </el-tab-pane>
                        <el-tab-pane label="JSON区域" name="jsonContent" class="json-content">
                            <json-editor ref="jsonEditor" :jsonData="formData"></json-editor>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="content-item attribute-content">
                    <attribute></attribute>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// import "../element";
import Vue from "vue";
import storeInfo from "./store/store";
import { MessageBox, Message } from "element-ui";
Vue.prototype.$elConfirm = MessageBox.confirm;
Vue.prototype.$elMessage = Message;

import "@/assets/reset.css";
import JsonEditor from "./components/jsonEditor";
import Draggable from "vuedraggable";
import WidgetForm from "./components/draggable/WidgetForm";
import WidgetButton from "./components/draggable/WidgetButton";
import Attribute from "./components/attribute";
import Tabs from "./components/Tabs.vue";
import MetaComponent from "./components/meta.vue";
import core from "@/core";

for (let key in core) {
    Vue.prototype[key] = core[key];
}

import { basicComponents, buttons, formDataInit } from "./components/config.js";

export default {
    props: {
        options: {
            type: Object,
            default() {
                return {
                    sys_window: {
                        data: '{"main":{"items":[[]],"meta":[{}]},"meta":{},"tabs":{"items":[],"meta":[]}}'
                    },
                    tabs: {
                        sys_button: []
                    }
                };
            }
        }
    },
    name: "crm-form-make",
    components: {
        JsonEditor,
        WidgetForm,
        WidgetButton,
        Tabs,
        MetaComponent,
        Attribute,
        Draggable
    },
    watch: {
        options(val) {
            this.disOptions(val);
        },
        conProPertiesButtons: {
            handler() {
                this.saveComPerties();
            },
            immediate: false,
            deep: true
        },
        conProPertiesForm: {
            handler() {
                // this.$emit("saveComPerties");
                this.saveComPerties();
            },
            immediate: false,
            deep: true
        },
        conProPertiesTabs: {
            handler() {
                this.saveComPerties();
            },
            immediate: false,
            deep: true
        }
    },
    provide() {
        return {
            them: this
        };
    },
    data() {
        return {
            ...storeInfo,
            basicComponents,
            buttons,
            activeType: "meta",
            formData: {
                sys_window: {
                    data: ""
                },
                tabs: {
                    sys_button: []
                }
            },
            sys_button: [],
            sys_window: {
                data: {
                    main: {
                        items: [],
                        meta: [{}]
                    },
                    meta: {},
                    tabs: {}
                }
            },
            mainItems: [],
            tabs: {
                meta: [],
                items: []
            },
            configuration: {},
            makeHeight: "722",
            bpmArr: []
        };
    },
    computed: {},
    created() {
        this.disOptions(this.options);
    },
    mounted() {
        this.setHeight();
    },
    methods: {
        setHeight() {
            let formMake = document.getElementById("formMake"),
                tTop = 0;
            while (formMake.offsetParent) {
                tTop += formMake.offsetTop;
                formMake = formMake.offsetParent;
            }
            this.makeHeight = document.documentElement.clientHeight - tTop;
        },
        // 切换主区域tab
        editTabChange({ name }) {
            this.showConfigurationProperties = "";
            this.location = { type: "", value: "" };
            if (name == "jsonContent") {
                // 进入jons编辑器
                this.makeJson();
                this.$nextTick(() => {
                    this.$refs.jsonEditor.api("refresh");
                    this.$refs.jsonEditor.api("focus");
                });
            } else if (this.typeComponts == "jsonContent") {
                // 离开jons编辑器
                let _json = this.copy(this.$refs.jsonEditor.getValue());
                this.disOptions(_json);
            }
            this.typeComponts = name;
        },
        addTabs({ callBack }) {
            this.tabs.meta.push({
                title: "新增Tabs"
            });
            this.tabs.items.push([]);
            callBack();
        },
        delTabs({ index, callBack }) {
            let that = this;
            const meta = that.tabs.meta;
            if (meta.length === 0 || this.has(meta[index], "bpm")) {
                that.$elMessage({
                    type: "error",
                    message: "tabs为空或无法删除!"
                });
                return;
            }
            that.$elConfirm("此操作将永久删除该Tabs, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                that.tabs.meta.splice(index, 1);
                that.tabs.items.splice(index, 1);
                callBack();
            });
        },
        beforeTabs({ index, callBack }) {
            if (index != 0) {
                this.tabs.meta = this.swapArray(this.tabs.meta, index, -1);
                this.tabs.items = this.swapArray(this.tabs.items, index, -1);
                callBack();
            }
        },
        laterTabs({ index, callBack }) {
            let len = this.tabs.meta.length;
            if (index + 1 != len) {
                this.tabs.meta = this.swapArray(this.tabs.meta, index, 1);
                this.tabs.items = this.swapArray(this.tabs.items, index, 1);
                callBack();
            }
        },
        swapArray(arr, index, num) {
            arr[index] = arr.splice(index + num, 1, arr[index])[0];
            return arr;
        },
        saveComPerties() {
            const { type, value } = this.location;
            switch (type) {
                case "buttons":
                    this.$set(this.sys_button, value, this.copy(this.conProPertiesButtons));
                    break;
                case "forms":
                    this.$set(this.mainItems, value, this.copy(this.conProPertiesForm));
                    break;
                case "tabs":
                    this.$set(this.tabs.meta, value, this.copy(this.conProPertiesTabs));
                    break;
                case "tabsForms":
                    this.$set(this.tabs.items[value[0]], value[1], this.copy(this.conProPertiesForm));
                    break;
            }
        },
        delComPerties() {
            this.$elConfirm("此操作将永久删除该信息, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                const { type, value } = this.location;
                switch (type) {
                    case "buttons":
                        this.sys_button.splice(value, 1);
                        break;
                    case "forms":
                        this.mainItems.splice(value, 1);
                        break;
                    case "tabsForms":
                        this.tabs.items[value[0]].splice(value[1], 1);
                        break;
                }
                this.$elMessage({
                    type: "success",
                    message: "删除成功!"
                });
            });
        },
        buttonChange(arr) {
            this.sys_button = arr;
        },
        formChange({ dataList }) {
            this.mainItems = dataList;
        },
        clearBr(key) {
            if (!this.isString(key)) return key;
            try {
                key = key.replace(/\t+/g, "");
                key = key.replace(/[\r\n]/g, "");
                key = key.replace(/,\s*\}\s*\}/g, "}}");
                key = key.replace(/,\s*\}\s*\]/g, "}]");
                key = key.replace(/,\s*\]/g, "]");
                key = key.replace(/,\s*\}\s*,\s*\{/g, "},{");
                key = key.replace(/,\s*,/g, ",");
            } catch (error) {
                console.error(error);
            }
            return key;
        },
        disOptions(obj) {
            //处理传输过来的数据
            let _data = {};
            if (obj.sys_window) {
                _data = obj;
                if (!obj.sys_window.data) {
                    // 默认ui内容json数据结构
                    _data.sys_window.data = formDataInit.sys_window.data;
                }
            } else {
                _data = formDataInit;
            }
            // 处理ui内容json数据
            let fdata = this.parseData(_data.sys_window.data);
            if (fdata.meta && fdata.meta.colpk && this.isArray(fdata.meta.colpk)) {
                fdata.meta.colpk = fdata.meta.colpk.join(",");
            }
            // 处理bpm
            let reg = /\{\{\$\w+\}\}/g;
            let bpmKey = -1;
            let bpmValue = "";
            // tabs下meta中bpm模版
            fdata.tabs.meta.forEach((item, index) => {
                if (this.is.string(item) && reg.test(item)) {
                    bpmKey = index;
                    bpmValue = item;
                }
                if (this.is.object(item)) {
                    if (item.colfk) item.colfk = item.colfk.toString();
                }
            });
            // 判断meta下的bgm模版是否与items下对应
            if (fdata.tabs.items[bpmKey] == bpmValue) {
                _data.sys_window.bmpModel = bpmValue;
                fdata.tabs.meta.splice(bpmKey, 1);
                fdata.tabs.items.splice(bpmKey, 1);
            }
            // 解析传入配置
            this.sys_window = _data.sys_window;
            this.sys_window.data = fdata;
            this.mainItems = fdata.main.items[0];
            this.tabs = fdata.tabs;
            this.sys_button = _data.tabs.sys_button;
        },
        makeJson() {
            // 整合多个区域属性
            let _formData = this.copy(this.formData);
            _formData.sys_window = this.copy(this.sys_window);
            _formData.tabs.sys_button = this.sys_button;
            _formData.sys_window.data.main.items[0] = this.mainItems;
            _formData.sys_window.data.tabs = this.tabs;
            let fdata = _formData.sys_window.data;
            fdata.tabs.meta.forEach(item => {
                if (this.is.string(item.colfk)) {
                    item.colfk = item.colfk.split(",");
                }
            });
            if (_formData.sys_window.bmpModel) {
                !fdata.tabs.meta.includes(_formData.sys_window.bmpModel) &&
                    fdata.tabs.meta.push(_formData.sys_window.bmpModel);
                !fdata.tabs.items.includes(_formData.sys_window.bmpModel) &&
                    fdata.tabs.items.push(_formData.sys_window.bmpModel);
                delete _formData.sys_window.bmpModel;
            }
            if (fdata.meta && fdata.meta.colpk && this.isString(fdata.meta.colpk)) {
                fdata.meta.colpk = fdata.meta.colpk.split(",");
            }
            _formData.sys_window.data = fdata;
            this.formData = this.copy(_formData);
        },
        copy(source) {
            return JSON.parse(JSON.stringify(source));
        },
        getJson(emit) {
            let _json = {};
            try {
                if (this.typeComponts == "jsonContent") {
                    _json = this.copy(this.$refs.jsonEditor.getValue());
                    this.formData = _json;
                } else {
                    this.makeJson();
                    _json = this.formData;
                }
                _json.sys_window.data = this.dealData(_json.sys_window.data);
            } catch (error) {
                console.error(error);
            }
            _json.win_id = 2;
            emit == "save" &&
                this.api.common.detail(_json).then(res => {
                    console.log(res);
                    this.$elMessage({
                        type: "success",
                        message: "保存成功!"
                    });
                });
            emit == "emit" && this.$emit("getJson", _json);
            return _json;
        },
        dealData(data) {
            // 处理最终json中特殊属性
            if (!this.isObject(data)) return data;
            let _data = JSON.stringify(data);
            const reg = /"(\{\{\$\w+\}\})"/g;
            try {
                _data = _data.replace(reg, "$1");
            } catch (error) {
                console.error(error);
            }
            return _data;
        },
        parseData(data) {
            // 解析传入json中特殊属性
            if (this.isObject(data)) return data;
            let _data = data;
            try {
                return JSON.parse(data);
            } catch (e) {
                let modelReg = /\{\{\$\w+\}\}/g;
                _data = this.clearBr(_data);
                try {
                    _data = _data.replace(modelReg, param => {
                        this.bpmArr.push(param);
                        return `"${param}"`;
                    });
                    _data = JSON.parse(_data);
                } catch (error) {
                    this.$elMessage({
                        type: "error",
                        message: "json化失败，请处理"
                    });
                }
            }
            return _data;
        },
        isArray(str) {
            return Object.prototype.toString.call(str) === "[object Array]";
        },
        isObject(str) {
            return Object.prototype.toString.call(str) === "[object Object]";
        },
        isString(str) {
            return Object.prototype.toString.call(str) === "[object String]";
        },
        has(obj, key) {
            return this.isObject(obj) ? Object.prototype.hasOwnProperty.call(obj, key) : false;
        },
        /*
        拖拽处理
    */
        handleMoveEnd(evt, from) {
            console.warn({
                end: evt,
                from: from
            });
        },
        handleMoveStart({ oldIndex }) {
            console.warn("start", oldIndex);
        },
        handleMove() {
            return true;
        }
    }
};
</script>
<style lang="scss">
.form-make {
    position: relative;
    min-width: 1400px;
    .main-content {
        .el-col {
            height: 100%;
            overflow: hidden;
            .content-item {
                padding: 10px;
                // min-height: calc(100vh - 61px);
                height: 100%;
                .el-tabs {
                    height: 100%;
                }
                .el-tabs__content {
                    max-height: calc(100% - 70px);
                    overflow: auto;
                }
                .components-box {
                    max-height: calc(100% - 70px);
                    overflow: auto;
                }
            }
            .components-wrap {
                .save-control {
                    width: 100%;
                    margin-top: 10px;
                }
                .components-title {
                    margin: 14px 0;
                    color: $primary-color;
                    font-size: 18px;
                    font-weight: 600;
                }
                .components-type {
                    margin: 14px 0 24px;
                    font-size: 16px;
                }
                .components-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    .components-item {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 30%;
                        min-height: 44px;
                        margin-bottom: 12px;
                        line-height: 1.4;
                        cursor: move;
                        user-select: none;
                        text-align: center;
                        background: #f4f6fc;
                        border: 1px solid #f4f6fc;
                        &:hover {
                            color: #409eff;
                            border: 1px dashed #409eff;
                        }
                    }
                    .noop {
                        height: 0;
                        min-height: 0;
                        border: 0;
                    }
                }
            }
            .edit-content {
                .ghost {
                    overflow: hidden;
                    height: 0;
                    padding: 0;
                    background: #f56c6c;
                    border: 2px solid #f56c6c;
                    outline-width: 0;
                    font-size: 0;
                }
                .json-content {
                    .control-content {
                        margin-bottom: 10px;
                    }
                }
                .tabHeight {
                    height: 800px;
                    overflow: auto;
                }
            }
            .attribute-content {
                position: sticky;
                top: 0;
                margin: 10px;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                .attribute-title {
                    margin-bottom: 20px;
                    color: $blue;
                }
                .el-select {
                    width: 100%;
                }
            }
        }
    }
}
</style>
