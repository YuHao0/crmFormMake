<template>
    <div class="component-title" :class="[info.size]" :style="style">
        {{ info.label || "请输入标题" }}
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
        },
        dragContent: Object
    },
    data() {
        return {};
    },
    computed: {
        style() {
            return {
                width: this.dragContent.width - 32 + "px"
            };
        }
    }
};
</script>
<style lang="scss">
.component-title {
    flex: 1;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
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
