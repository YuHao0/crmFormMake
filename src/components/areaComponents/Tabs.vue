<template>
    <div class="tabs">
        <el-button @click="addTabs">添加tabs</el-button><el-button @click="delTabs">删除当前tabs</el-button>
        <el-button @click="beforeTabs">向前移动</el-button><el-button @click="laterTabs">向后移动</el-button>
        <el-tabs v-model="activeType" @tab-click="editTabChange">
            <el-tab-pane v-for="(item, index) in meta" :label="item.title" :name="'pane' + index" :key="index">
                <widget-form
                    ref="widgetFormTabs"
                    :list="items[index]"
                    :ListIndex="index"
                    @formChange="formChange"
                    @delComPerties="$emit('delComPerties')"
                ></widget-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import WidgetForm from "../draggable/WidgetForm";
export default {
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
        formChange(param) {
            this.$set(this.items, param.index, param.dataList);
        },
        editTabChange(tab) {
            this.tabIndex = tab.index;
            this.$store.commit("setShowConfigurationProperties", "tabs");
            this.$store.commit("setLocation", {
                type: "tabs",
                value: this.tabIndex
            });
            this.$store.commit("setConProPertiesTabs", this.meta[tab.index]);
        },
        addTabs() {
            let that = this;
            this.$emit("addTabs", {
                callBack() {
                    that.activeType = "pane" + (that.meta.length - 1);
                    that.tabIndex = that.meta.length - 1;
                    that.editTabChange({ index: that.tabIndex });
                }
            });
        },
        delTabs() {
            let that = this;
            that.$confirm("此操作将永久删除该Tabs, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                that.$emit("delTabs", {
                    index: that.tabIndex,
                    callBack() {
                        if (this.tabIndex > 0) {
                            that.activeType = "pane" + (that.tabIndex - 1);
                            that.tabIndex = that.tabIndex - 1;
                        } else {
                            that.activeType = "pane0";
                            that.tabIndex = 0;
                        }
                        that.$message({
                            type: "success",
                            message: "删除成功!"
                        });
                    }
                });
            });
        },
        beforeTabs() {
            let _index = parseInt(this.tabIndex);
            this.$emit("beforeTabs", {
                index: _index,
                callBack: () => {
                    this.activeType = "pane" + (_index - 1);
                    this.tabIndex = _index - 1;
                }
            });
        },
        laterTabs() {
            let _index = parseInt(this.tabIndex);
            this.$emit("laterTabs", {
                index: _index,
                callBack: () => {
                    this.activeType = "pane" + (_index + 1);
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
    }
}
</style>
