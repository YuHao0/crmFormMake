<template>
    <div>
        <crmFormMake ref="crmFormMake" @getJson="formMakeData"></crmFormMake>
    </div>
</template>
<script>
import "../../dist/crm-form-make.css";
import crmFormMake from "../../dist/crm-form-make.umd.js";
export default {
    components: {
        crmFormMake
    },
    computed: {
        getInitData() {
            return this.data;
        }
    },
    methods: {
        formMakeData(data) {
            this.$emit("formMakeData", data);
        }
    },
    mounted() {}
};
</script>
