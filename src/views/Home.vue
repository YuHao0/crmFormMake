<template>
    <div class="form-make" id="formMake" :style="{ height: `${makeHeight}px`, overflow: 'hidden' }">
        <el-row class="main-content" :style="{ height: '100%', overflow: 'auto' }">
            <el-col :span="3">
                <div class="content-item components-wrap">
                    <div class="components-title">选择组件</div>
                    <draggable
                        class="components-content"
                        tag="ul"
                        v-show="$store.state.typeComponts === 'buttons'"
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
                    <draggable
                        class="components-content"
                        tag="ul"
                        v-show="$store.state.typeComponts === 'forms' || $store.state.typeComponts === 'tabs'"
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
                    </draggable>
                    <!-- <select-componts></select-componts> -->
                </div>
            </el-col>
            <el-col :span="16">
                <div class="content-item edit-content">
                    <el-tabs v-model="activeType" @tab-click="editTabChange">
                        <el-tab-pane label="基本属性" name="meta" class="tabHeight">
                            <div class="form-title">窗口基本属性</div>
                            <el-form
                                ref="form"
                                :model="sys_window"
                                v-if="sys_window"
                                label-position="right"
                                label-width="140px"
                            >
                                <el-form-item label="BPM模型ID" prop="model_id">
                                    <el-input v-model="sys_window.model_id"></el-input>
                                </el-form-item>
                                <el-form-item label="窗口名称" prop="name">
                                    <el-input
                                        v-model="sys_window.name"
                                        placeholder="显示到窗口标题以及标签上"
                                    ></el-input>
                                </el-form-item>
                                <el-form-item label="渲染模板" prop="template">
                                    <el-select v-model="sys_window.template" placeholder="请选择">
                                        <el-option label="query_list" value="query_list"> </el-option>
                                        <el-option label="bill" value="bill"> </el-option>
                                        <el-option label="tree_query_list" value="tree_query_list"> </el-option>
                                        <el-option label="query_detail" value="query_detail"> </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="关联窗口" prop="ref_winid">
                                    <el-input v-model="sys_window.ref_winid"></el-input>
                                </el-form-item>
                                <el-form-item label="数据源" prop="data_source">
                                    <el-input v-model="sys_window.data_source"></el-input>
                                </el-form-item>
                                <el-form-item label="是否物理删除" prop="hard_delete">
                                    <el-select v-model="sys_window.hard_delete" placeholder="请选择">
                                        <el-option label="是" value="1"> </el-option>
                                        <el-option label="否" value="0"> </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="窗口绑定表名" prop="table_bind">
                                    <el-input v-model="sys_window.audit_flag"></el-input>
                                </el-form-item>
                                <el-form-item label="写数据权限" prop="write_permission">
                                    <el-checkbox-group v-model="sys_window.write_permission">
                                        <el-checkbox label="表单创建人"></el-checkbox>
                                        <el-checkbox label="上级"></el-checkbox>
                                        <el-checkbox label="BPM权限"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <div class="form-title">窗口配置详情信息</div>
                                <el-form-item label="窗口名" prop="name">
                                    <el-input v-model="sys_window.data.meta.name"></el-input>
                                </el-form-item>
                                <el-form-item label="窗口类型" prop="template">
                                    <el-select
                                        v-model="sys_window.data.meta.uitype"
                                        placeholder="请选择(与渲染模板一致)"
                                    >
                                        <el-option label="query_list" value="query_list"> </el-option>
                                        <el-option label="bill" value="bill"> </el-option>
                                        <el-option label="tree_query_list" value="tree_query_list"> </el-option>
                                        <el-option label="query_detail" value="query_detail"> </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="页面参数请求接口" prop="url">
                                    <el-input v-model="sys_window.data.meta.url"></el-input>
                                </el-form-item>
                                <el-form-item label="MQ TAG" prop="msgtag">
                                    <el-input type="textarea" v-model="sys_window.data.meta.msgtag"></el-input>
                                </el-form-item>
                                <el-form-item label="MQ 条件" prop="msgcondition">
                                    <el-input type="textarea" v-model="sys_window.data.meta.msgcondition"></el-input>
                                </el-form-item>
                                <el-form-item label="MQ 追加属性" prop="msgextprops">
                                    <el-input type="textarea" v-model="sys_window.data.meta.msgextprops"></el-input>
                                </el-form-item>
                            </el-form>
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
                            <div class="control-content">
                                <el-button @click="getJson(true)">获取JSON</el-button>
                            </div>
                            <json-editor ref="jsonEditor" :jsonData="formData"></json-editor>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="content-item attribute-content">
                    <!-- <div class="attribute-title">属性配置</div> -->
                    <attribute-components></attribute-components>
                    <div class="flex-con" v-show="showSave">
                        <!-- <el-button>还原</el-button>  -->
                        <!-- <el-button @click="delComPerties">删除</el-button>  -->
                        <el-button @click="saveComPerties">保存</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// import "@/element";
import "@/assets/reset.css";
import JsonEditor from "components/jsonEditor";
import Draggable from "vuedraggable";
import WidgetForm from "components/draggable/WidgetForm";
import WidgetButton from "components/draggable/WidgetButton";
// import SelectComponts from "components/draggable/selectComponents/index";
import AttributeComponents from "components/attributeComponents/index";
import { basicComponents, buttons } from "components/componentsConfig.js";
import Tabs from "components/areaComponents/Tabs.vue";
// import xJson from "./a";
export default {
    props: {
        options: {
            type: Object,
            default() {
                return {
                    buttons: [],
                    data_permission: {},
                    window: {
                        data: {
                            meta: {},
                            main: {
                                meta: [],
                                items: []
                            },
                            tabs: {
                                meta: [],
                                items: []
                            }
                        }
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
        AttributeComponents,
        Draggable
        // SelectComponts
    },
    watch: {
        options(val) {
            this.disOptions(val);
        }
    },
    data() {
        return {
            basicComponents,
            buttons,
            activeType: "meta",
            formData: {
                buttons: [],
                data_permission: {},
                window: {
                    id: "",
                    model_id: "",
                    name: "",
                    template: "",
                    ref_winid: "",
                    data_source: "",
                    hard_delete: "",
                    table_bind: "",
                    write_permission: "",
                    data: {
                        meta: {
                            name: "",
                            uitype: "",
                            url: "",
                            msgtag: "",
                            msgcondition: "",
                            msgextprops: ""
                        },
                        main: {
                            meta: [],
                            items: []
                        },
                        tabs: {
                            meta: [],
                            items: []
                        }
                    }
                }
            },
            sys_button: [],
            sys_window: {
                id: "",
                model_id: "",
                name: "",
                template: "",
                ref_winid: "",
                data_source: "",
                hard_delete: "",
                table_bind: "",
                write_permission: "",
                data: {
                    meta: {
                        name: "",
                        uitype: "",
                        url: "",
                        msgtag: "",
                        msgcondition: "",
                        msgextprops: ""
                    }
                }
            },
            mainItems: [],
            tabs: {
                meta: [],
                items: []
            },
            configuration: {},
            selectWidget: {},
            isShowConfiguration: false,
            makeHeight: "100%"
        };
    },
    computed: {
        showSave() {
            let con = this.$store.state.showConfigurationProperties;
            return con == "forms" || con === "buttons" || con === "tabs";
        }
    },
    created() {
        this.disOptions(this.options);
    },
    mounted() {
        this.setHeight();
    },
    methods: {
        setHeight() {
            this.makeHeight = document.documentElement.clientHeight - document.getElementById("formMake").offsetTop;
        },
        // 切换主区域tab
        editTabChange(tab) {
            this.$store.commit("setShowConfigurationProperties", "");
            this.$store.commit("setLocation", { type: "", value: "" });
            this.$store.commit("setTypeComponts", tab.name);
            this.selectWidget = {};
            this.isShowConfiguration = false;
            if (tab.name == "jsonContent") {
                this.makeJson();
                this.$nextTick(() => {
                    this.$refs.jsonEditor.api("refresh");
                    this.$refs.jsonEditor.api("focus");
                });
            }
        },
        addTabs(param = {}) {
            console.log(this.tabs.meta);
            this.tabs.meta.push({
                title: "新增Tabs"
            });
            this.tabs.items.push([]);
            param.callBack();
        },
        delTabs(param = {}) {
            this.tabs.meta.splice(param.index, 1);
            this.tabs.items.splice(param.index, 1);
            param.callBack();
        },
        beforeTabs(param = {}) {
            let index = param.index;
            if (param.index != 0) {
                this.tabs.meta = this.swapArray(this.tabs.meta, index, -1);
                this.tabs.items = this.swapArray(this.tabs.items, index, -1);
                param.callBack();
            }
        },
        laterTabs(param = {}) {
            let len = this.tabs.meta.length,
                index = param.index;
            if (param.index + 1 != len) {
                this.tabs.meta = this.swapArray(this.tabs.meta, index, 1);
                this.tabs.items = this.swapArray(this.tabs.items, index, 1);
                param.callBack();
            }
        },
        swapArray(arr, index, num) {
            // let _arr = arr;
            // let info = _arr[index + num];
            // _arr[index + num] = _arr[index];
            // _arr[index] = info;
            arr[index] = arr.splice(index + num, 1, arr[index])[0];
            return arr;
        },
        saveComPerties() {
            let location = this.$store.state.location;
            switch (location.type) {
                case "buttons":
                    this.$set(
                        this.sys_button,
                        location.value,
                        JSON.parse(JSON.stringify(this.$store.state.conProPertiesButtons))
                    );
                    break;
                case "forms":
                    this.$set(
                        this.mainItems,
                        location.value,
                        JSON.parse(JSON.stringify(this.$store.state.conProPertiesForm))
                    );
                    break;
                case "tabs":
                    this.$set(
                        this.tabs.meta,
                        location.value,
                        JSON.parse(JSON.stringify(this.$store.state.conProPertiesTabs))
                    );
                    break;
                case "tabsForms":
                    console.log(location.value);
                    this.$set(
                        this.tabs.items[location.value[0]],
                        location.value[1],
                        JSON.parse(JSON.stringify(this.$store.state.conProPertiesForm))
                    );
                    break;
                default:
                    break;
            }
        },
        delComPerties() {
            this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                let location = this.$store.state.location;
                switch (location.type) {
                    case "buttons":
                        this.sys_button.splice(location.value, 1);
                        break;
                    case "forms":
                        this.mainItems.splice(location.value, 1);
                        break;
                    case "tabsForms":
                        this.this.tabs.items[location.value[0]].splice(location.value[1], 1);
                        break;
                    default:
                        break;
                }
                this.$message({
                    type: "success",
                    message: "删除成功!"
                });
            });
        },
        buttonChange(arr) {
            this.sys_button = arr;
        },
        formChange(param = {}) {
            this.mainItems = param.dataList;
        },
        //处理传输过来的数据
        disOptions(obj) {
            obj.buttons && (this.sys_button = obj.buttons);
            if (obj.window) {
                this.sys_window = Object.assign(this.sys_window, obj.window);
                if (!this.sys_window.write_permission) {
                    this.sys_window.write_permission = [];
                }

                if (obj.window.data) {
                    let data = obj.window.data;
                    this.mainItems = data.main.items[0];
                    this.tabs = data.tabs;
                }
            }
        },
        makeJson() {
            this.formData.buttons = this.sys_button;
            this.formData.window = this.sys_window;
            this.formData.window.data.main = {
                items: [this.mainItems]
            };
            this.formData.window.data.tabs = this.tabs;
        },
        getList(list) {
            return [
                ...list.map(item => {
                    let form = {};
                    Object.keys(item.form).forEach(key => {
                        if (item.form[key] || !this.options.filterEmpty) {
                            form[key] = item.form[key];
                            form.key = item.key;
                        }
                    });
                    return form;
                })
            ];
        },
        copy(source) {
            return JSON.parse(JSON.stringify(source));
        },
        getJson(emit) {
            this.makeJson();
            let json = JSON.parse(JSON.stringify(this.formData));
            emit && this.$emit("getJson", json);
            return json;
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
    // created() {
    //     // this.parseJson();
    // }
};
</script>
<style lang="scss">
.form-make {
    min-width: 1200px;
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
            }
            .components-wrap {
                .components-title {
                    margin-bottom: 10px;
                    color: $blue;
                }
                .components-content {
                    display: flex;
                    flex-wrap: wrap;
                    .components-item {
                        margin: 1%;
                        width: 98%;
                        cursor: move;
                        user-select: none;
                        line-height: 30px;
                        text-align: center;
                        background: #f4f6fc;
                        border: 1px solid #f4f6fc;
                        &:hover {
                            color: #409eff;
                            border: 1px dashed #409eff;
                        }
                    }
                }
            }
            .edit-content {
                .form-title {
                    margin: 20px 0;
                    color: $blue;
                }
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
                .attribute-title {
                    margin-bottom: 20px;
                    color: $blue;
                }
                .el-select {
                    width: 100%;
                }
                .flex-con {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}
</style>
