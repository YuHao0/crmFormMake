<template>
    <div class="widget-itme-content">
        <el-form ref="form" label-position="right" label-width="120px">
            <draggable
                v-model="dataList"
                @add="handleWidgetAdd"
                @end="handleMoveEnd"
                class="drag-content"
                v-bind="{
                    group: 'people',
                    ghostClass: 'ghost',
                    animation: 200,
                    handle: '.drag-item'
                }"
            >
                <div
                    v-for="(item, index) in dataList"
                    :key="index"
                    class="drag-item"
                    @click="handleSelectWidget(item)"
                    :class="{ 'active-main-item': selectItem.key == item.key }"
                >
                    <el-form-item v-if="item.comType == 'input'" :label="item.form.label">
                        <el-input v-model="item.form.default" readonly :placeholder="item.form.placeholder"></el-input>
                    </el-form-item>
                    <el-form-item v-if="item.comType == 'select'" :label="item.form.label">
                        <el-select v-model="item.form.default" :placeholder="item.form.placeholder">
                            <el-option
                                v-for="opt in item.option"
                                :key="opt.value"
                                :label="opt.value"
                                :value="opt.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-if="item.comType == 'datepicker'" :label="item.form.label">
                        <el-date-picker v-model="item.form.default" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item v-if="item.comType == 'title'" label="标题">
                        <div>{{ item.form.label }}</div>
                    </el-form-item>
                    <el-form-item v-if="item.comType == 'textarea'" :label="item.form.label">
                        <el-input
                            v-model="item.form.default"
                            readonly
                            type="textarea"
                            :placeholder="item.form.placeholder"
                        ></el-input>
                    </el-form-item>
                    <el-form-item v-if="item.comType == 'radio'" :label="item.form.label">
                        <el-radio-group v-model="item.form.default">
                            <el-radio :label="3">备选项</el-radio>
                            <el-radio :label="6">备选项</el-radio>
                            <el-radio :label="9">备选项</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item v-if="item.comType == 'checkbox'" :label="item.form.label">
                        <el-checkbox-group v-model="item.form.select">
                            <el-checkbox label="复选框 A"></el-checkbox>
                            <el-checkbox label="复选框 B"></el-checkbox>
                            <el-checkbox label="复选框 C"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item v-if="item.comType == 'cascader'" :label="item.form.label">
                        <el-cascader
                            v-model="item.ex.value"
                            :options="item.ex.options"
                            :props="{ expandTrigger: 'hover' }"
                        ></el-cascader>
                    </el-form-item>
                    <el-form-item v-if="item.comType == 'upload'" :label="item.form.label">
                        <el-upload class="avatar-uploader" action="#" :auto-upload="false" list-type="picture-card">
                            <img v-if="item.ex.imageUrl" :src="item.ex.imageUrl" class="avatar" />
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
    props: ["list", "select"],
    data() {
        return {
            dataList: this.list,
            selectItem: this.select
        };
    },
    methods: {
        handleMoveEnd(evt) {
            console.log("end", evt);
        },
        handleWidgetAdd(evt) {
            let index = evt.newIndex;
            const key = Date.parse(new Date()) + "_" + Math.ceil(Math.random() * 99999);
            this.$set(this.dataList, index, {
                ...this.dataList[index],
                key
            });
            this.selectItem = this.dataList[index];
            this.$emit("onSelect", this.selectItem);
        },
        handleSelectWidget(item) {
            this.selectItem = item;
            this.$emit("onSelect", this.selectItem);
        },
        getList() {
            return this.dataList;
        }
    },
    created() {},
    watch: {
        select(val) {
            this.selectItem = val;
        },
        list(val) {
            this.dataList = val;
        }
    }
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
