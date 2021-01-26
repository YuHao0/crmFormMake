<template>
    <div class="component-radio">
        <div class="component-form">
            <div class="label">{{ info.label }}</div>
            <el-radio-group
                v-model="info.value"
                :readonly="info.readonly == 1"
                :disabled="info.disable == 1"
                :size="size"
            >
                <el-radio label="1">选项</el-radio>
                <el-radio label="2">选项</el-radio>
            </el-radio-group>
        </div>
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
    },
    computed: {
        size: function() {
            return {
                small: "mini",
                medium: "small",
                large: "medium"
            }[this.info.size || "small"];
        }
    }
};
</script>
<style lang="scss">
.component-radio {
    .component-form {
        display: flex;
        align-items: center;
    }
    .label {
        white-space: nowrap;
        margin-right: 10px;
    }
    &.large {
        font-size: 22px;
        line-height: 26px;
    }
    &.medium {
        font-size: 18px;
        line-height: 22px;
    }
    &.small {
        font-size: 16px;
        line-height: 20px;
    }
}
</style>
