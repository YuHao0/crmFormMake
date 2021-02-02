<template>
    <div class="component-datepicker">
        <el-date-picker v-model="info.default" size="mini" type="date" placeholder="选择日期"> </el-date-picker>
    </div>
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
<style lang="scss" scoped>
.component-datepicker {
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
        width: 100%;
    }
}
</style>
