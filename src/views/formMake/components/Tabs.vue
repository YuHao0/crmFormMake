<template>
    <div id="tabs-content">
        <el-button @click="addTabs">添加tabs</el-button>
        <el-button @click="delTabs" v-show="meta.length">删除当前tabs</el-button>
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
                    name="tabsForms"
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
        },
        tabIndex(val) {
            this.them.tabIndex = val;
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
                    date: "数据A1",
                    name: "数据A2",
                    address: "数据A3"
                },
                {
                    date: "数据B1",
                    name: "数据B2",
                    address: "数据B3"
                },
                {
                    date: "数据C1",
                    name: "数据C2",
                    address: "数据C3"
                }
            ]
        };
    },
    created() {
        this.meta = this.tabs.meta;
        this.items = this.tabs.items;
        this.them.tabIndex = this.tabIndex;
    },
    methods: {
        getItem(list) {
            return this.isArray(list) ? list : [];
        },
        isArray(str) {
            return Object.prototype.toString.call(str) === "[object Array]";
        },
        formChange({ dataList }) {
            this.$set(this.items, this.tabIndex, dataList);
        },
        editTabChange({ index }) {
            this.tabIndex = index;
            // this.them.tabIndex = this.tabIndex;
            this.them.showConfigurationProperties = "tabs";
            // location  当先操作的区域
            this.them.location = {
                type: "tabs",
                value: this.tabIndex
            };
            this.them.conProPertiesTabs = assign(this.meta[index]);
        },
        addTabs() {
            this.them.tabs.meta.push({
                title: `Tabs${this.meta.length + 1}`
            });
            this.them.tabs.items.push([]);
            // 指向新增的tabs(最后一个tabs)
            this.tabIndex = this.meta.length - 1;
            this.activeType = `pane${this.tabIndex}`;
            this.editTabChange({ index: this.tabIndex });
        },
        delTabs() {
            this.$elConfirm("此操作将永久删除该Tabs, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                this.them.tabs.meta.splice(this.tabIndex, 1);
                this.them.tabs.items.splice(this.tabIndex, 1);
                this.them.showConfigurationProperties = "";
                if (this.tabIndex > 0) {
                    // 删除后
                    this.tabIndex--;
                    this.activeType = `pane${this.tabIndex}`;
                }
                // this.them.tabIndex = this.tabIndex;
                this.$elMessage({
                    type: "success",
                    message: "删除成功!"
                });
            });
        },
        swapArray(arr, index, num) {
            arr[index] = arr.splice(index + num, 1, arr[index])[0];
            return arr;
        },
        beforeTabs() {
            // 向前移动
            if (this.tabIndex != 0) {
                this.them.tabs.meta = this.swapArray(this.tabs.meta, this.tabIndex, -1);
                this.them.tabs.items = this.swapArray(this.tabs.items, this.tabIndex, -1);
                this.them.showConfigurationProperties = "tabs";
                this.tabIndex--;
                this.activeType = `pane${this.tabIndex}`;
                // this.them.tabIndex = this.tabIndex;
            }
        },
        laterTabs() {
            let len = this.them.tabs.meta.length;
            if (this.tabIndex + 1 != len) {
                this.them.tabs.meta = this.swapArray(this.tabs.meta, this.tabIndex, 1);
                this.them.tabs.items = this.swapArray(this.tabs.items, this.tabIndex, 1);
                this.them.showConfigurationProperties = "tabs";
                this.tabIndex++;
                this.activeType = `pane${this.tabIndex}`;
                // this.them.tabIndex = this.tabIndex;
            }
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
