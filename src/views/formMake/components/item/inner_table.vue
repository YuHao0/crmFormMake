<template>
    <div class="component-inner">
        <div class="component-form">
            <div class="label">{{ info.label }}</div>
            <el-input v-model="info.value" :placeholder="info.placeholder" class="it-el-input"></el-input>
            <el-select v-model="info.default" :placeholder="info.placeholder" class="it-el-input">
                <el-option v-for="opt in selectOption" :key="opt.value" :label="opt.value" :value="opt.value">
                </el-option>
            </el-select>
            <el-input class="it-el-input" v-model="info.value" :placeholder="info.placeholder"></el-input>
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

<style lang="scss" scoped>
.component-inner {
    .component-form {
        display: flex;
        align-items: center;
        .el-input,
        .el-select {
            width: 20%;
        }
    }
    .label {
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
