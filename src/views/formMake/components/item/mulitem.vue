<template>
  <div class="mulitem">
    <el-input
      v-model="info.value"
      readonly
      :placeholder="info.placeholder"
    ></el-input>
    <el-input
      v-model="info.value"
      readonly
      :placeholder="info.placeholder"
    ></el-input>
    <el-input
      v-model="info.value"
      readonly
      :placeholder="info.placeholder"
    ></el-input>
  </div>
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
  watch: {},
};
</script>

<style lang="scss" scoped>
.mulitem {
  .el-input {
    width: 30%;
    margin-left: 5px;
  }
}
</style>
