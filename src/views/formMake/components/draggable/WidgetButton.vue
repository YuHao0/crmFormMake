<template>
    <div class="widget-button-content">
        <el-form ref="form" label-position="right" label-width="120px">
            <draggable
                v-model="dataList"
                @add="handleWidgetAdd"
                @start="handStart"
                @end="handleMoveEnd"
                class="drag-content"
                v-bind="{
                    group: 'buttons',
                    ghostClass: 'ghost',
                    animation: 200,
                    handle: '.drag-item'
                }"
            >
                <div
                    v-for="(item, index) in dataList"
                    :key="index"
                    class="drag-item"
                    @click="handleSelectWidget(item, index)"
                    @dblclick="delComPerties(index)"
                    :class="{
                        'active-main-item': them.location.type === 'buttons' && them.location.value == index
                    }"
                >
                    <el-form-item :label="item.name">
                        <el-button>{{ item.name }}</el-button>
                    </el-form-item>
                </div>
            </draggable>
        </el-form>
    </div>
</template>

<script>
import Draggable from "vuedraggable";
import { assign } from "../common";
export default {
    name: "widget-button",
    inject: {
        them: {
            default: () => ({})
        }
    },
    components: {
        Draggable
    },
    props: {
        list: {
            type: Array
        }
    },
    data() {
        return {
            dataList: this.list,
            selectOption: [{ value: "选项1" }, { value: "选项2" }, { value: "选项3" }]
        };
    },
    mounted() {},
    methods: {
        copy(source) {
            return JSON.parse(JSON.stringify(source));
        },
        handStart() {
            this.them.showConfigurationProperties = "";
            this.them.location = { type: "", value: "" };
        },
        handleMoveEnd() {
            this.$emit("buttonChange", this.dataList);
        },
        handleWidgetAdd() {
            this.them.showConfigurationProperties = "";
            this.them.location = { type: "", value: "" };
            this.$emit("buttonChange", this.dataList);
        },
        handleSelectWidget(item, index) {
            this.them.showConfigurationProperties = "buttons";
            this.them.location = { type: "buttons", value: index };
            this.them.conProPertiesButtons = assign(item);
        },
        delComPerties(index) {
            this.them.showConfigurationProperties = "buttons";
            this.them.location = { type: "buttons", value: index };
            this.$emit("delComPerties");
        },
        getList() {
            return this.dataList;
        }
    },
    created() {},
    watch: {
        list(val) {
            this.dataList = val;
        }
    }
};
</script>
<style lang="scss">
.widget-button-content {
    .drag-content {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;
        padding: 10px;
        min-height: 100px;
        border: 1px dashed #dcdfe6;
        .drag-item {
            margin-right: 14px;
            margin-bottom: 14px;
            padding-top: 5px;
            padding-right: 5px;
            cursor: move;
            border: 1px solid rgba(236, 245, 255, 0.6);
            background: rgba(236, 245, 255, 0.3);
            &.active-main-item,
            &:hover {
                outline: 1px solid $primary-color;
                border: 1px solid $primary-color;
                outline-offset: -1px;
            }
            &:hover {
                background: $primary-background-color;
            }
            .el-select {
                width: 100%;
            }
        }
        ::v-deep [class*="el-"] {
            cursor: move;
        }
        .ghost.drag-item {
            overflow: hidden;
            padding: 0;
            height: 0;
            outline: 1px solid #f56c6c;
            outline-width: 0;
            border: 1px solid #f56c6c;
            background: #f56c6c;
        }
    }
    ::v-deep .avatar-uploader {
        .el-upload {
            border: 1px dashed #8c939d;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .el-upload:hover {
            border-color: #409eff;
        }
    }
}
</style>
