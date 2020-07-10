<template>
    <el-form-item v-if="item.comType == 'input'" :label="item.form.label">
        <el-input v-model="item.form.default" readonly :placeholder="item.form.placeholder"></el-input>
    </el-form-item>
</template>

<script>
export default {};
</script>
