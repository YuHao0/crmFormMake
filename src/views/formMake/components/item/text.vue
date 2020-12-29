<template>
    <el-input v-model="info.value" readonly :placeholder="info.placeholder"></el-input>
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
    watch: {}
};
</script>
