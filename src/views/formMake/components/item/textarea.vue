<template>
    <el-input v-model="info.default" readonly type="textarea" :placeholder="info.placeholder"></el-input>
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
