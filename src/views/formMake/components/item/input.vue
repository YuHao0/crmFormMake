<template>
    <div class="component-input" :class="[size]">
        <div class="label">{{ info.label }}</div>
        <el-input
            v-model="info.value"
            :readonly="info.readonly == 1"
            :disabled="info.disable == 1"
            :maxlength="info.maxlength"
            :placeholder="info.placeholder"
            :type="info.type || 'text'"
            :size="size"
        ></el-input>
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
    watch: {
        info: function(val) {
            console.log(val);
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
.component-input {
    display: flex;
    align-items: center;
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
