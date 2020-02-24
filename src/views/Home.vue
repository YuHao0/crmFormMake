<template>
    <div class="form-make">
        <el-row class="main-content">
            <el-col :span="3">
                <div class="content-item components-wrap">
                    <div class="components-title">选择组件</div>
                    <draggable
                        class="components-content"
                        tag="ul"
                        v-bind="{
                            group: { name: 'people', pull: 'clone', put: false },
                            sort: false,
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
                </div>
            </el-col>
            <el-col :span="16">
                <div class="content-item edit-content">
                    <el-tabs v-model="activeType" @tab-click="editTabChange">
                        <el-tab-pane label="窗口主体区域" name="mainForm">
                            <widget-form
                                ref="widgetFormMain"
                                :list="itemsMain"
                                :select="selectWidget"
                                @onSelect="drugSelect"
                            ></widget-form>
                        </el-tab-pane>
                        <el-tab-pane label="Tabs区域" name="tabsForm">
                            <widget-form
                                ref="widgetFormTabs"
                                :list="itemsTabs"
                                :select="selectWidget"
                                @onSelect="drugSelect"
                            ></widget-form>
                        </el-tab-pane>
                        <el-tab-pane label="基本属性" name="meta">
                            <div class="form-title">窗口基本属性</div>
                            <el-form ref="form" :model="metaForm" label-position="right" label-width="120px">
                                <el-form-item label="窗口名称" prop="name">
                                    <el-input v-model="metaForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="渲染模板" prop="uitype">
                                    <el-select v-model="metaForm.uitype" placeholder="请选择">
                                        <el-option label="query_list" value="query_list"> </el-option>
                                        <el-option label="bill" value="bill"> </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="服务url" prop="url">
                                    <el-input v-model="metaForm.url"></el-input>
                                </el-form-item>
                                <div v-if="metaForm.uitype == 'bill'">
                                    <el-form-item label="busitype">
                                        <el-select v-model="billForm.meta.busitype" placeholder="请选择">
                                            <el-option label="0" value="0"> </el-option>
                                            <el-option label="1" value="1"> </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="colpk">
                                        <el-input
                                            v-model="billForm.meta.colpk"
                                            placeholder="多个请用英文逗号隔开"
                                        ></el-input>
                                    </el-form-item>
                                </div>
                            </el-form>
                            <div class="form-title">主体区域属性</div>
                            <el-form ref="form" :model="metaMain" label-position="right" label-width="120px">
                                <el-form-item label="对象名" prop="id">
                                    <el-input v-model="metaMain.id"></el-input>
                                </el-form-item>
                                <el-form-item label="标题" prop="title">
                                    <el-input v-model="metaMain.title"></el-input>
                                </el-form-item>
                                <el-form-item label="类型" prop="type">
                                    <el-input v-model="metaMain.type"></el-input>
                                </el-form-item>
                                <div v-if="metaForm.uitype == 'bill'">
                                    <el-form-item label="禁用状态">
                                        <el-select v-model="billForm.metaMain.disable" placeholder="请选择">
                                            <el-option label="0" value="0"> </el-option>
                                            <el-option label="1" value="1"> </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="禁用表达式">
                                        <el-input
                                            v-model="billForm.metaMain.disable2"
                                            placeholder="例：{status} == 50 ? '1':'0'"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="初始化SQL">
                                        <el-input type="textarea" v-model="billForm.metaMain.sqlinit"></el-input>
                                    </el-form-item>
                                    <el-form-item label="查询SQL">
                                        <el-input type="textarea" v-model="billForm.metaMain.sqlselect"></el-input>
                                    </el-form-item>
                                    <el-form-item label="触发器SQL">
                                        <el-input type="textarea" v-model="billForm.metaMain.billtrigger"></el-input>
                                    </el-form-item>
                                </div>
                            </el-form>
                            <div class="form-title">TAB页基础属性</div>
                            <el-form ref="form" :model="metaTab" label-position="right" label-width="120px">
                                <el-form-item label="id" prop="id">
                                    <el-input v-model="metaTab.id"></el-input>
                                </el-form-item>
                                <el-form-item label="标签" prop="title">
                                    <el-input v-model="metaTab.title"></el-input>
                                </el-form-item>
                                <el-form-item label="类型" prop="type">
                                    <el-select v-model="metaTab.type" placeholder="请选择">
                                        <el-option label="form" value="form"> </el-option>
                                        <el-option label="table" value="table"> </el-option>
                                        <el-option label="grid" value="grid"> </el-option>
                                    </el-select>
                                </el-form-item>
                                <div v-if="metaForm.uitype == 'bill'">
                                    <el-form-item label="查询SQL">
                                        <el-input type="textarea" v-model="billForm.metaTab.sqlselect"></el-input>
                                    </el-form-item>
                                    <el-form-item label="colfk">
                                        <el-input
                                            v-model="billForm.metaTab.colfk"
                                            placeholder="多个请用英文逗号隔开"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="显示条件">
                                        <el-input
                                            v-model="billForm.metaTab.visible"
                                            placeholder="例：{$.fs_hosp_deploy_order.status} == 50 ? '1':'0'"
                                        ></el-input>
                                    </el-form-item>
                                </div>
                            </el-form>
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
                    <div class="attribute-title">属性配置</div>
                    <el-form ref="form" label-position="right" v-if="selectWidget.comType" label-width="80px">
                        <el-form-item label="属性名">
                            <el-input v-model="selectWidget.form.id"></el-input>
                        </el-form-item>
                        <el-form-item label="属性标签">
                            <el-input v-model="selectWidget.form.label"></el-input>
                        </el-form-item>
                        <el-form-item label="属性类型">
                            <el-select v-model="selectWidget.form.type" placeholder="请选择">
                                <el-option label="number" value="number"> </el-option>
                                <el-option label="string" value="string"> </el-option>
                                <el-option label="date" value="date"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="默认值">
                            <el-input v-model="selectWidget.form.default"></el-input>
                        </el-form-item>
                        <el-form-item label="placeholder">
                            <el-input v-model="selectWidget.form.placeholder"></el-input>
                        </el-form-item>
                        <el-form-item label="字典url">
                            <el-input v-model="selectWidget.form.lookup"></el-input>
                        </el-form-item>
                        <el-form-item label="是否可见">
                            <el-select v-model="selectWidget.form.visible" placeholder="请选择">
                                <el-option label="0" value="0"> </el-option>
                                <el-option label="1" value="1"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="disable">
                            <el-input v-model="selectWidget.form.disable"></el-input>
                        </el-form-item>
                        <el-form-item label="updatable">
                            <el-select v-model="selectWidget.form.updatable" placeholder="请选择">
                                <el-option label="0" value="0"> </el-option>
                                <el-option label="1" value="1"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="disable">
                            <el-input v-model="selectWidget.form.disable"></el-input>
                        </el-form-item>
                        <el-form-item label="required">
                            <el-input v-model="selectWidget.form.required"></el-input>
                        </el-form-item>
                        <el-form-item label="查找窗口">
                            <el-input v-model="selectWidget.form.lookupwindow"></el-input>
                        </el-form-item>
                        <el-form-item label="带回属性">
                            <el-input v-model="selectWidget.form.lookupcolumn"></el-input>
                        </el-form-item>
                        <el-form-item label="returnback">
                            <el-input v-model="selectWidget.form.returnback"></el-input>
                        </el-form-item>
                        <el-form-item label="writeback">
                            <el-input v-model="selectWidget.form.writeback"></el-input>
                        </el-form-item>
                        <el-form-item label="分隔符">
                            <el-input v-model="selectWidget.form.separator"></el-input>
                        </el-form-item>
                        <el-form-item label="尺寸">
                            <el-select v-model="selectWidget.form.size" placeholder="请选择">
                                <el-option label="small" value="small"> </el-option>
                                <el-option label="medium" value="medium"> </el-option>
                                <el-option label="large" value="large"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="limit">
                            <el-input v-model="selectWidget.form.limit"></el-input>
                        </el-form-item>
                        <el-form-item label="chineseid">
                            <el-input v-model="selectWidget.form.chineseid"></el-input>
                        </el-form-item>
                        <el-form-item label="maxlength">
                            <el-input v-model="selectWidget.form.maxlength"></el-input>
                        </el-form-item>
                        <el-form-item label="colname">
                            <el-input v-model="selectWidget.form.colname"></el-input>
                        </el-form-item>
                        <el-form-item label="regex">
                            <el-input v-model="selectWidget.form.regex"></el-input>
                        </el-form-item>
                        <el-form-item label="param">
                            <el-input v-model="selectWidget.form.param"></el-input>
                        </el-form-item>
                        <el-form-item label="multiple">
                            <el-input v-model="selectWidget.form.multiple"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import "@/element";
import "@/assets/reset.css";
import JsonEditor from "components/jsonEditor";
import Draggable from "vuedraggable";
import WidgetForm from "components/WidgetForm";
import { basicComponents, basicform } from "components/componentsConfig.js";
export default {
    props: {
        options: {
            type: Object,
            default() {
                return {
                    filterEmpty: false
                };
            }
        }
    },
    name: "crm-form-make",
    components: {
        JsonEditor,
        Draggable,
        WidgetForm
    },
    data() {
        return {
            basicComponents,
            activeType: "mainForm",
            // querylist模版
            metaForm: {
                name: "",
                uitype: "",
                url: ""
            },
            metaMain: {
                id: "",
                type: "",
                title: ""
            },
            metaTab: {
                id: "",
                title: "",
                type: ""
            },
            selectWidget: {},
            itemsMain: [],
            itemsTabs: [],
            // bill模版补充
            billForm: {
                meta: {
                    busitype: "",
                    colpk: ""
                },
                metaMain: {
                    disable: "",
                    disable2: "",
                    sqlinit: "",
                    sqlselect: "",
                    billtrigger: ""
                },
                metaTab: {
                    sqlselect: "",
                    colfk: "",
                    visible: ""
                }
            },
            formData: {
                main: {
                    meta: [],
                    items: [[]]
                },
                tabs: {
                    meta: [],
                    items: [[]]
                }
            },
            formJSON: ""
        };
    },
    methods: {
        // 切换主区域tab
        editTabChange(tab) {
            if (tab.name == "jsonContent") {
                this.makeJson();
                this.$nextTick(() => {
                    this.$refs.jsonEditor.api("refresh");
                    this.$refs.jsonEditor.api("focus");
                });
                return;
            }
            // 如果不是切换到jsoncontnet
            let value = this.$refs.jsonEditor.getValue();
            this.parseJson(value);
        },
        /*
            json数据处理
        */
        makeJson() {
            let meta = {
                ...this.metaForm,
                ...(this.metaForm.uitype == "bill" ? this.billForm.meta : {})
            };
            let metaMain = {
                ...this.metaMain,
                ...(this.metaForm.uitype == "bill" ? this.billForm.metaMain : {})
            };

            let metaTab = {
                ...this.metaTab,
                ...(this.metaForm.uitype == "bill" ? this.billForm.metaTab : {})
            };
            if (this.metaForm.uitype == "bill") {
                meta.colpk = meta.colpk.split(",");
                metaTab.colfk = metaTab.colfk.split(",");
            }
            // meta 处理
            this.$set(this.formData, "meta", meta);
            if (!this.formData.main.meta.length) {
                this.formData.main.meta.push(metaMain);
            } else {
                this.formData.main.meta[0] = metaMain;
            }
            if (!this.formData.tabs.meta.length) {
                this.formData.tabs.meta.push(metaTab);
            } else {
                this.formData.tabs.meta[0] = metaTab;
            }
            // items 处理
            let itemsMain = this.$refs.widgetFormMain.getList();
            let itemsTabs = this.$refs.widgetFormTabs.getList();
            this.formData.main.items[0] = this.getList(itemsMain);
            this.formData.tabs.items[0] = this.getList(itemsTabs);
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
        setList(formList) {
            let list = [];
            basicComponents.forEach(com => {
                formList.forEach(form => {
                    if (!form.uitype) {
                        form.uitype = "input";
                    }
                    if (!form.label) {
                        form.label = form.id;
                    }
                    if (form.uitype == com.comType) {
                        let obj = this.copy(com);
                        obj.form = { ...basicform, ...form };
                        if (!obj.key) {
                            obj.key = Date.parse(new Date()) + "_" + Math.ceil(Math.random() * 99999);
                        }
                        list.push(obj);
                        if (form.key == this.selectWidget.key) {
                            this.drugSelect(obj);
                        }
                    }
                });
            });
            return list;
        },
        parseJson(value) {
            if (typeof value.meta == "object") {
                if (value.meta.uitype == "bill") {
                    value.meta.colpk = value.meta.colpk.toString();
                }
                this.metaForm = this.drawInfo(this.metaForm, value.meta);
                this.billForm.meta = this.drawInfo(this.billForm.meta, value.meta);
            }
            if (value.main.meta.length) {
                this.metaMain = this.drawInfo(this.metaMain, value.main.meta[0]);
                this.billForm.metaMain = this.drawInfo(this.billForm.metaMain, value.main.meta[0]);
            }
            if (value.tabs.meta.length) {
                if (value.meta.uitype == "bill") {
                    value.tabs.meta[0].colfk = value.tabs.meta[0].colfk.toString();
                }
                this.metaTab = this.drawInfo(this.metaTab, value.tabs.meta[0]);
                this.billForm.metaTab = this.drawInfo(this.billForm.metaTab, value.tabs.meta[0]);
            }
            if (value.tabs.items[0].length) {
                this.itemsTabs = this.setList(value.tabs.items[0]);
            }
            if (value.main.items[0].length) {
                this.itemsMain = this.setList(value.main.items[0]);
            }
        },
        getJson(emit) {
            this.makeJson();
            let json = JSON.parse(JSON.stringify(this.formData));
            emit && this.$emit("getJson", json);
            return json;
        },
        drawInfo(target, source) {
            let res = {};
            Object.keys(target).forEach(item => {
                res[item] = source[item] || target[item];
            });
            return res;
        },
        /*
            拖拽处理
        */
        handleMoveEnd(evt, from) {
            console.log("end", evt);
            console.log("from", from);
        },
        handleMoveStart({ oldIndex }) {
            console.log("start", oldIndex);
        },
        handleMove() {
            return true;
        },
        drugSelect(item) {
            this.selectWidget = item;
        }
    },
    created() {}
};
</script>
<style lang="scss">
.form-make {
    min-width: 1200px;
    .main-content {
        .el-col {
            .content-item {
                padding: 10px;
                min-height: calc(100vh - 61px);
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
                        width: 48%;
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
            }
            .attribute-content {
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
