<template>
    <div class="widget-itme-content">
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
                    @dblclick="delComPerties(index)"
                    :class="{
                        'active-main-item': activeClass(index),
                        hide: !!item.bpm,
                        lable: isExistTitle && item.uitype != 'title'
                    }"
                >
                    <el-form-item :label="item.label">
                        <component :is="getType(item.uitype)" :info="item"></component>
                    </el-form-item>
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
        ListIndex: {
            type: Number,
            default() {
                return -1;
            }
        }
    },
    watch: {
        list(val) {
            this.dataList = val;
        }
    },
    data() {
        return {
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
    mounted() {},
    methods: {
        getType(type) {
            if (!type) return "itemInput";
            if (this.formType.indexOf(type) == -1) return "itemInput";
            return "item" + type.slice(0, 1).toUpperCase() + type.slice(1);
        },
        handStart() {
            this.them.showConfigurationProperties = "";
            this.them.location = { type: "", value: "" };
            //   this.$store.commit("setShowConfigurationProperties", "");
            //   this.$store.commit("setLocation", { type: "", value: "" });
        },
        activeClass(index) {
            return (
                (this.them.location.type === "forms" && this.them.location.value == index) ||
                (this.them.location.type == "tabsForms" && this.them.location.value[1] == index)
            );
        },
        handleMoveEnd() {
            this.$emit("formChange", {
                dataList: this.dataList,
                index: this.ListIndex
            });
        },
        handleWidgetAdd(evt) {
            let index = evt.newIndex,
                list = this.dataList[index];
            this.$set(this.dataList, index, {
                label: list.name,
                uitype: list.uitype,
                ...list.default
            });
            this.$emit("formChange", {
                dataList: this.dataList,
                index: this.ListIndex
            });
        },
        handleSelectWidget(item, index) {
            this.setLocation(index);
            //   this.$store.commit("setConProPertiesForm", item);
            this.them.conProPertiesForm = assign(item);
        },
        delComPerties(index) {
            this.setLocation(index);
            this.$emit("delComPerties");
        },
        setLocation(index) {
            //   this.$store.commit("setShowConfigurationProperties", "forms");
            this.them.showConfigurationProperties = "forms";
            let location =
                this.ListIndex >= 0
                    ? {
                          type: "tabsForms",
                          value: [this.ListIndex, index]
                      }
                    : {
                          type: "forms",
                          value: index
                      };
            //   this.$store.commit("setLocation", location);
            this.them.location = location;
        },
        getList() {
            return this.dataList;
        }
    },
    destroyed() {},
    created() {}
};
</script>
<style lang="scss" scoped>
.widget-itme-content {
    .drag-content {
        padding: 10px;
        min-height: 600px;
        border: 1px dashed #dcdfe6;
        .drag-item {
            margin-bottom: 5px;
            padding-top: 5px;
            padding-right: 5px;
            overflow: auto;
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
            .el-form-item {
                width: 95%;
                float: right;
                overflow: auto;
                margin-bottom: 5px;
            }
            &.lable {
                overflow: auto;
                .el-form-item {
                    width: 90%;
                    float: right;
                    overflow: auto;
                }
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
