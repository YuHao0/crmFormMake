<template>
    <div id="widget-itme-content">
        <el-form ref="form" label-position="left" label-width="120px">
            <draggable
                v-model="dataList"
                @add="handleWidgetAdd"
                @start="handStart"
                @end="handleMoveEnd"
                class="drag-content"
                v-bind="{
                    group: 'forms',
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
                    :class="{
                        'active-main-item': them.location.type == name && them.location.value == index,
                        lable: isExistTitle && item.uitype != 'title'
                    }"
                >
                    <div
                        v-show="them.location.type == name && them.location.value == index"
                        @click="delComPerties(index)"
                        class="delete-icon"
                    >
                        <i class="el-icon-ice-drink"></i>
                    </div>
                    <component
                        :type="name == 'tabsFroms' ? them.conProPertiesTabs.type : name"
                        :is="getType(item.uitype)"
                        :info="item"
                        :dragContent="dragContent"
                    ></component>
                </div>
            </draggable>
        </el-form>
    </div>
</template>

<script>
import Draggable from "vuedraggable";
import itemInput from "../item/input";
import itemCascader from "../item/cascader";
import itemCheckbox from "../item/checkbox";
import itemDatepicker from "../item/datepicker";
import itemLabel from "../item/label";
import itemRadio from "../item/radio";
import itemSelect from "../item/select";
import itemText from "../item/text";
import itemTextarea from "../item/textarea";
import itemTitle from "../item/title";
import itemUpload from "../item/upload";
import itemTimepicker from "../item/timepicker";
import itemMulitem from "../item/mulitem";
import itemInner_table from "../item/inner_table";
import itemProgress from "../item/progress";

import { assign } from "../common";

export default {
    inject: {
        them: {
            default: () => ({})
        }
    },
    name: "widget-form",
    components: {
        Draggable,
        itemInput,
        itemCascader,
        itemCheckbox,
        itemDatepicker,
        itemTimepicker,
        itemLabel,
        itemRadio,
        itemSelect,
        itemText,
        itemTextarea,
        itemTitle,
        itemUpload,
        itemMulitem,
        itemInner_table,
        itemProgress
    },
    props: {
        list: {
            type: Array,
            default() {
                return [];
            }
        },
        name: String
    },
    watch: {
        list(val) {
            this.dataList = val;
        }
    },
    data() {
        return {
            dragContent: {},
            dataList: this.list,
            formType:
                "input,cascader,checkbox,datepicker,timepicker,label,radio,select,text,textarea,title,upload,mulitem,inner_table,progress"
        };
    },
    computed: {
        isExistTitle() {
            return this.dataList.find(obj => {
                return obj.uitype === "title";
            });
        }
    },
    mounted() {
        let dragContent = document.querySelector(".drag-content");
        this.dragContent = {
            width: dragContent.clientWidth
        };
        window.onresize = () => {
            this.dragContent = {
                width: dragContent.clientWidth
            };
        };
    },
    methods: {
        getType(type) {
            if (!type) return "itemInput";
            if (this.formType.indexOf(type) == -1) return "itemInput";
            return "item" + type.slice(0, 1).toUpperCase() + type.slice(1);
        },
        handStart() {
            this.them.showConfigurationProperties = "";
            this.them.location = { type: "", value: "" };
        },
        handleMoveEnd() {
            this.$emit("formChange", { dataList: this.dataList });
        },
        handleWidgetAdd(evt) {
            let index = evt.newIndex,
                list = this.dataList[index];
            this.$set(this.dataList, index, {
                label: list.name,
                uitype: list.uitype,
                ...list.default
            });
            this.$emit("formChange", { dataList: this.dataList });
        },
        handleSelectWidget(item, index) {
            this.setLocation(index);
            this.them.conProPertiesForm = assign(item);
        },
        delComPerties(index) {
            this.setLocation(index);
            this.$emit("delComPerties");
        },
        setLocation(index) {
            this.them.showConfigurationProperties = "forms";
            this.them.location = {
                type: this.name,
                value: index
            };
        },
        getList() {
            return this.dataList;
        }
    }
};
</script>
<style lang="scss">
#widget-itme-content {
    position: relative;
    &::after {
        content: "表单区域";
        top: 30%;
        left: 30%;
        position: absolute;
        font-size: 40px;
        font-weight: bold;
        color: rgba(234, 234, 234, 45%);
        z-index: -1;
    }
    .drag-content {
        min-height: 400px;
        .drag-item {
            position: relative;
            padding: 2px;
            border-radius: 4px;
            .delete-icon {
                position: absolute;
                right: 0;
                top: 0;
                z-index: 10;
                color: #e6a23c;
                background: #ffffff;
                cursor: pointer;
            }
            ::v-deep .el-form-item {
                margin-bottom: 0;
                .el-form-item__label,
                .el-form-item__content {
                    line-height: 1;
                    word-break: break-all;
                }
            }
        }
    }
}
</style>
