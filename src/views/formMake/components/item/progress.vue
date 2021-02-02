<template>
    <div class="component-progress">
        <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
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
.component-progress {
    width: 100%;
}
</style>
