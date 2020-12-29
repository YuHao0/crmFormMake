<template>
  <el-upload
    class="avatar-uploader"
    action="#"
    :auto-upload="false"
    list-type="picture-card"
  >
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
      },
    },
  },
};
</script>

<style lang="scss" scoped>
// .avatar-uploader {
//   .el-upload--picture-card {
//     width: 48px;
//     height: 48px;
//   }
// }
</style>
