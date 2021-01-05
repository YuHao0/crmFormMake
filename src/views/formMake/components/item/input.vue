<template>
    <el-input
        v-model="info.value"
        :readonly="info.readonly == 1"
        :disabled="info.disable == 1"
        :maxlength="info.maxlength"
        :placeholder="info.placeholder"
        :size="size"
    ></el-input>
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
            return (
                {
                    small: "mini",
                    medium: "small",
                    large: "medium"
                }[this.info.size] || "small"
            );
        }
    }
};
</script>
