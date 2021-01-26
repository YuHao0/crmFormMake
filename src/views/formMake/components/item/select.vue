<template>
    <div class="component-select">
        <div class="component-form">
            <div class="label">{{ info.label }}</div>
            <el-select
                v-model="info.value"
                :readonly="info.readonly == 1"
                :disabled="info.disable == 1"
                :placeholder="info.placeholder"
                :size="info.size || 'mini'"
            >
                <el-option v-for="opt in selectOption" :key="opt.value" :label="opt.value" :value="opt.value">
                </el-option>
            </el-select>
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
    data: function() {
        return {
            selectOption: [{ value: "选项1" }, { value: "选项2" }, { value: "选项3" }]
        };
    }
};
</script>
<style lang="scss">
.component-select {
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
