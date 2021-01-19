<template>
    <el-upload class="avatar-uploader" action="#" :auto-upload="false" list-type="picture-card">
        <img v-if="info.imageUrl" :src="info.imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
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
    }
};
</script>

<style lang="scss" scoped>
::v-deep .avatar-uploader {
    .el-upload {
        border: 1px dashed #8c939d;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .el-upload:hover {
        border-color: #409eff;
    }
}
</style>
