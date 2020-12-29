<template>
    <el-select v-model="info.default" :placeholder="info.placeholder">
        <el-option v-for="opt in selectOption" :key="opt.value" :label="opt.value" :value="opt.value"> </el-option>
    </el-select>
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
            selectOption: [{ value: "选项1" }, { value: "选项2" }, { value: "选项3" }]
        };
    }
};
</script>
