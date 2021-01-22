<template>
    <el-upload class="component-uploader" action="#" :auto-upload="false" list-type="picture-card">
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
.component-uploader {
    ::v-deep .el-upload {
        width: 60px;
        height: 60px;
        line-height: 60px;
        border: 1px dashed #8c939d;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        .el-icon-plus {
            font-size: 20px;
        }
    }
}
</style>
