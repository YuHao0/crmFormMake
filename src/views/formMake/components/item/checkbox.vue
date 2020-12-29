<template>
    <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
    </el-checkbox-group>
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
            checkList: ["复选框 A", "复选框 B"]
        };
    }
};
</script>
