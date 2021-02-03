<template>
    <el-popover placement="left-start" width="600" trigger="click">
        <el-input
            type="textarea"
            @input="change"
            :autosize="{ minRows: 10 }"
            :placeholder="placeholder"
            v-model="model"
        ></el-input>
        <el-input
            type="textarea"
            @input="change"
            :placeholder="placeholder"
            slot="reference"
            v-model="model"
        ></el-input>
    </el-popover>
</template>
<script>
export default {
    name: "popup-input",
    props: ["value", "placeholder"],
    data() {
        return {
            model: this.value
        };
    },
    watch: {
        value(val) {
            if (this.model != val) {
                this.model = val;
            }
        }
    },
    methods: {
        change() {
            this.$emit("input", this.model);
        }
    }
};
</script>
