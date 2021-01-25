<template>
    <div id="tabs-content">
        <el-button @click="addTabs">添加tabs</el-button>
        <el-button @click="delTabs">删除当前tabs</el-button>
        <el-button @click="beforeTabs">向前移动</el-button>
        <el-button @click="laterTabs">向后移动</el-button>
        <el-tabs v-model="activeType" @tab-click="editTabChange">
            <el-tab-pane
                v-for="(item, index) in meta"
                :disabled="!!item.bpm"
                :label="item.title"
                :name="'pane' + index"
                :key="index"
                :class="[them.conProPertiesTabs.type]"
            >
                <widget-form
                    ref="widgetFormTabs"
                    name="tabsFroms"
                    v-show="!item.bpm"
                    :list="getItem(items[index])"
                    :ListIndex="index"
                    @formChange="formChange"
                    @delComPerties="$emit('delComPerties')"
                ></widget-form>
                <div class="table-warp">
                    <el-table :data="tableData" border class="tabs-table" v-if="them.conProPertiesTabs.type == 'table'">
                        <el-table-column
                            v-for="(item, index) in getItem(items[index])"
                            :key="index"
                            :prop="['date', 'name', 'address'][index % 3]"
                        >
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import WidgetForm from "./draggable/WidgetForm";
import { assign } from "./common";
export default {
    inject: {
        them: {
            default: () => ({})
        }
    },
    props: {
        tabs: {
            type: Object,
            default() {
                return {
                    meta: [],
                    item: []
                };
            }
        }
    },
    components: {
        WidgetForm
    },
    watch: {
        tabs(val) {
            this.meta = val.meta;
            this.items = val.items;
        }
    },
    data() {
        return {
            activeType: "pane0",
            meta: [],
            items: [],
            tabIndex: 0,
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄"
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄"
                }
            ]
        };
    },
    created() {
        this.meta = this.tabs.meta;
        this.items = this.tabs.items;
    },
    mounted() {},
    methods: {
        getItem(list) {
            return this.isArray(list) ? list : [];
        },
        isArray(str) {
            return Object.prototype.toString.call(str) === "[object Array]";
        },
        formChange({ index, dataList }) {
            this.$set(this.items, index, dataList);
        },
        editTabChange({ index }) {
            this.tabIndex = index;
            this.them.showConfigurationProperties = "tabs";
            this.them.location = {
                type: "tabs",
                value: this.tabIndex
            };
            this.them.conProPertiesTabs = assign(this.meta[index]);
        },
        addTabs() {
            let that = this;
            this.$emit("addTabs", {
                callBack() {
                    that.activeType = `pane${that.meta.length - 1}`;
                    that.tabIndex = that.meta.length - 1;
                    that.editTabChange({ index: that.tabIndex });
                }
            });
        },
        delTabs() {
            let that = this;
            that.$emit("delTabs", {
                index: that.tabIndex,
                callBack() {
                    that.them.showConfigurationProperties = "";
                    if (that.tabIndex > 0) {
                        that.activeType = `pane${that.tabIndex - 1}`;
                        that.tabIndex = that.tabIndex - 1;
                    } else {
                        that.activeType = "pane0";
                        that.tabIndex = 0;
                    }
                    that.$elMessage({
                        type: "success",
                        message: "删除成功!"
                    });
                }
            });
        },
        beforeTabs() {
            let _index = parseInt(this.tabIndex);
            this.$emit("beforeTabs", {
                index: _index,
                callBack: () => {
                    this.them.showConfigurationProperties = "";
                    this.activeType = `pane${_index - 1}`;
                    this.tabIndex = _index - 1;
                }
            });
        },
        laterTabs() {
            let _index = parseInt(this.tabIndex);
            this.$emit("laterTabs", {
                index: _index,
                callBack: () => {
                    this.them.showConfigurationProperties = "";
                    this.activeType = `pane${_index + 1}`;
                    this.tabIndex = _index + 1;
                }
            });
        }
    }
};
</script>

<style lang="scss">
#tabs-content {
    padding-top: 10px;
    .el-tabs {
        height: calc(100% - 40px);
        .el-tabs__content {
            max-height: calc(100% - 110px);
            overflow: auto;
        }
        .is-disabled {
            display: none;
        }
    }
    .table {
        .drag-content {
            min-height: 35px;
            justify-content: space-between;
            padding: 0;
            border: 1px solid #ebeef5;
            border-bottom: 0;
            border-right: 0;
            .drag-item {
                margin: 0;
                padding: 10px;
                flex: 1;
                text-align: center;
                border-radius: 0;
                border-right: 1px solid #ebeef5;
            }
        }
        .table-warp {
            padding: 0 1px;
            .el-table__header-wrapper {
                display: none;
            }
        }
    }
}
</style>
