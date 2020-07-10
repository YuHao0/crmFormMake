<template>
    <el-form-item v-if="item.comType == 'select'" :label="item.form.label">
        <el-select v-model="item.form.default" :placeholder="item.form.placeholder">
            <el-option v-for="opt in selectOption" :key="opt.value" :label="opt.value" :value="opt.value"> </el-option>
        </el-select>
    </el-form-item>
</template>
