<template>
    <div id="widget-button-content">
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
                    <el-button type="primary">{{ item.name }}</el-button>
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
            dataList: this.list
        };
    },
    watch: {
        list(val) {
            this.dataList = val;
        }
    },
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
    created() {}
};
</script>
<style lang="scss">
#widget-button-content {
    position: relative;
    &::after {
        content: "按钮区域";
        top: 30%;
        left: 30%;
        position: absolute;
        font-size: 40px;
        font-weight: bold;
        color: rgba(234, 234, 234, 45%);
        z-index: -1;
    }
}
</style>
