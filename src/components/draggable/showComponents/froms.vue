<template functional>
    <div>
        <div
            v-for="(item, index) in dataList"
            :key="index"
            class="drag-item"
            @click="props.handleSelectWidget(item)"
            :class="{ 'active-main-item': selectItem.key == item.key }"
        >
            <el-form-item v-if="item.uitype == 'input' || !item.uitype" :label="item.label">
                <el-input v-model="item.default" readonly :placeholder="item.placeholder"></el-input>
            </el-form-item>
            <el-form-item v-if="item.uitype == 'select'" :label="item.label">
                <el-select v-model="item.default" :placeholder="item.placeholder">
                    <el-option v-for="opt in selectOption" :key="opt.value" :label="opt.value" :value="opt.value">
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
                <el-input v-model="item.default" readonly type="textarea" :placeholder="item.placeholder"></el-input>
            </el-form-item>
            <el-form-item v-if="item.uitype == 'radio'" :label="item.label">
                <el-radio-group v-model="item.default">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item v-if="item.uitype == 'checkbox'" :label="item.label">
                <el-checkbox-group v-model="item.select">
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
    </div>
</template>

<script>
export default {
    props: {
        dataList: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.drag-item {
    :hover {
        outline: 1px solid $primary-color;
        border: 1px solid $primary-color;
        outline-offset: -1px;
    }
}
</style>
