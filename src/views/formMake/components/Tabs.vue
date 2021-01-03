<template>
    <div class="tabs">
        <el-button @click="addTabs">添加tabs</el-button><el-button @click="delTabs">删除当前tabs</el-button>
        <el-button @click="beforeTabs">向前移动</el-button><el-button @click="laterTabs">向后移动</el-button>
        <el-tabs v-model="activeType" @tab-click="editTabChange">
            <el-tab-pane
                v-for="(item, index) in meta"
                :disabled="!!item.bpm"
                :label="item.title"
                :name="'pane' + index"
                :key="index"
            >
                <widget-form
                    ref="widgetFormTabs"
                    v-show="!item.bpm"
                    :list="getItem(items[index])"
                    :ListIndex="index"
                    @formChange="formChange"
                    @delComPerties="$emit('delComPerties')"
                ></widget-form>
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
            tabIndex: 0
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
            //   this.$store.commit("setShowConfigurationProperties", "tabs");
            //   this.$store.commit("setLocation", {
            //     type: "tabs",
            //     value: this.tabIndex,
            //   });
            //   this.$store.commit("setConProPertiesTabs", this.meta[index]);
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
                    //   that.$store.commit("setShowConfigurationProperties", "");
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

<style lang="scss" scoped>
.tabs {
    height: 100%;
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
}

.hide {
    display: none;
}
</style>
