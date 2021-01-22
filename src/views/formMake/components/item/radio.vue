<template>
    <el-form label-width="60px">
        <el-form-item :label="info.label">
            <el-radio-group v-model="info.default">
                <el-radio label="3">选项</el-radio>
                <el-radio label="6">选项</el-radio>
            </el-radio-group>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default() {
                return {};
            }
        }
    }
};
</script>
