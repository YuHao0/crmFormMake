<template>
  <el-progress class="progress" :percentage="70"></el-progress>
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
.progress {
  margin-top: 12.5px;
}
</style>
