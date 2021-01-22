<template>
    <el-form label-width="60px">
        <el-form-item :label="info.label">
            <el-select v-model="info.default" :placeholder="info.placeholder" :size="info.size || 'mini'">
                <el-option v-for="opt in selectOption" :key="opt.value" :label="opt.value" :value="opt.value">
                </el-option>
            </el-select>
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
    },
    data: function() {
        return {
            selectOption: [{ value: "选项1" }, { value: "选项2" }, { value: "选项3" }]
        };
    }
};
</script>
