<template>
    <el-date-picker v-model="info.default" type="date" placeholder="选择日期"> </el-date-picker>
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
