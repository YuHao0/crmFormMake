<template>
    <div class="component-upload">
        <div>{{ info.label }}</div>
        <el-upload class="uploader" action="#" :auto-upload="false" list-type="picture-card">
            <img v-if="info.imageUrl" :src="info.imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
        }
    }
};
</script>

<style lang="scss" scoped>
.component-upload {
    display: flex;
    .uploader {
        margin-left: 10px;
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
}
</style>
