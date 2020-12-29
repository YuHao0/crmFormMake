<template>
    <!-- <el-date-picker v-model="info.default" type="date" placeholder="选择"> </el-date-picker> -->
    <el-time-picker
        arrow-control
        v-model="value1"
        :picker-options="{
            selectableRange: ''
        }"
        placeholder="选择时间"
    >
    </el-time-picker>
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
    },
    data: function() {
        return {
            value1: ""
        };
    }
};
</script>
