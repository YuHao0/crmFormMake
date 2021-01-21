<template>
    <div class="component-title" :style="style">{{ info.label || "请输入标题" }}</div>
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
    data() {
        return {
            style: {
                width: ""
            }
        };
    },
    watch: {
        info(val) {
            console.log(val);
        }
    },
    mounted() {
        let dragContent = document.querySelector(".drag-content");
        this.style.width = dragContent.clientWidth - 32 + "px";
    }
};
</script>
<style lang="scss">
.component-title {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
}
</style>
