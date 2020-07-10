<template>
    <div class="widget-itme-content">
        <el-form ref="form" label-position="right" label-width="120px">
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
                    :class="{ 'active-main-item': activeClass(index) }"
                >
                    <el-form-item v-if="item.uitype == 'input' || !item.uitype" :label="item.label">
                        <el-input v-model="item.default" readonly :placeholder="item.placeholder"></el-input>
                    </el-form-item>
                    <el-form-item v-if="item.uitype == 'label'" :label="item.label">
                        <div>{{ item.label }}</div>
                    </el-form-item>
                    <el-form-item v-if="item.uitype == 'text'" :label="item.label">
                        <el-input v-model="item.default" readonly :placeholder="item.placeholder"></el-input>
                    </el-form-item>
                    <el-form-item v-if="item.uitype == 'select'" :label="item.label">
                        <el-select v-model="item.default" :placeholder="item.placeholder">
                            <el-option
                                v-for="opt in selectOption"
                                :key="opt.value"
                                :label="opt.value"
                                :value="opt.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-if="item.uitype == 'datepicker'" :label="item.label">
                        <el-date-picker v-model="item.default" type="date" placeholder="选择日期"> </el-date-picker>
                    </el-form-item>
                    <el-form-item v-if="item.uitype == 'title'" label="标题">
                        <div>{{ item.label }}</div>
                    </el-form-item>
                    <el-form-item v-if="item.uitype == 'textarea'" :label="item.label">
                        <el-input
                            v-model="item.default"
                            readonly
                            type="textarea"
                            :placeholder="item.placeholder"
                        ></el-input>
                    </el-form-item>
                    <el-form-item v-if="item.uitype == 'radio'" :label="item.label">
                        <el-radio-group v-model="item.default">
                            <el-radio :label="3">备选项</el-radio>
                            <el-radio :label="6">备选项</el-radio>
                            <el-radio :label="9">备选项</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item v-if="item.uitype == 'checkbox'" :label="item.label">
                        <el-checkbox-group v-model="selectOption">
                            <el-checkbox label="复选框 A"></el-checkbox>
                            <el-checkbox label="复选框 B"></el-checkbox>
                            <el-checkbox label="复选框 C"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item v-if="item.uitype == 'cascader'" :label="item.label">
                        <el-cascader
                            v-model="item.value"
                            :options="item.options"
                            :props="{ expandTrigger: 'hover' }"
                        ></el-cascader>
                    </el-form-item>
                    <el-form-item v-if="item.uitype == 'upload'" :label="item.label">
                        <el-upload class="avatar-uploader" action="#" :auto-upload="false" list-type="picture-card">
                            <img v-if="item.imageUrl" :src="item.imageUrl" class="avatar" />
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                </div>
            </draggable>
        </el-form>
    </div>
</template>

<script>
import Draggable from "vuedraggable";
export default {
    name: "widget-form",
    components: {
        Draggable
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
            selectOption: [{ value: "选项1" }, { value: "选项2" }, { value: "选项3" }]
        };
    },
    computed: {},
    mounted() {},
    methods: {
        handStart() {
            this.$store.commit("setShowConfigurationProperties", "");
            this.$store.commit("setLocation", { type: "", value: "" });
        },
        activeClass(index) {
            return (
                (this.$store.state.location.type === "forms" && this.$store.state.location.value == index) ||
                (this.$store.state.location.type == "tabsForms" && this.$store.state.location.value[1] == index)
            );
        },
        handleMoveEnd() {
            this.$emit("formChange", { dataList: this.dataList, index: this.ListIndex });
        },
        handleWidgetAdd(evt) {
            let index = evt.newIndex,
                list = this.dataList[index];
            this.$set(this.dataList, index, { label: list.uitype, uitype: list.uitype });
            this.$emit("formChange", { dataList: this.dataList, index: this.ListIndex });
        },
        handleSelectWidget(item, index) {
            this.setLocation(index);
            this.$store.commit("setConProPertiesForm", item);
        },
        delComPerties(index) {
            this.setLocation(index);
            this.$emit("delComPerties");
        },
        setLocation(index) {
            this.$store.commit("setShowConfigurationProperties", "forms");
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
            this.$store.commit("setLocation", location);
        },
        getList() {
            return this.dataList;
        }
    },
    created() {}
};
</script>
<style lang="scss">
.widget-itme-content {
    .drag-content {
        padding: 10px;
        min-height: 600px;
        border: 1px dashed #999;
        .drag-item {
            margin-bottom: 5px;
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
