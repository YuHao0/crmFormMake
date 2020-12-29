<template>
    <div>
        <crmFormMake ref="crmFormMake" :options="xJson" @getJson="formMakeData"></crmFormMake>
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
    data() {
        return {
            xJson: {
                tabs: {},
            }
        };
    },
    mounted() {},
    methods: {
        formMakeData(data) {
            this.$emit("formMakeData", data);
        }
    }
};
</script>
