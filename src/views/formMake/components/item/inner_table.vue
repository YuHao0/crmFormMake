<template>
  <div class="inner_table">
    <el-input
      v-model="info.value"
      readonly
      :placeholder="info.placeholder"
      class="it-el-input"
    ></el-input>
    <el-select
      v-model="info.default"
      :placeholder="info.placeholder"
      class="it-el-input"
    >
      <el-option
        v-for="opt in selectOption"
        :key="opt.value"
        :label="opt.value"
        :value="opt.value"
      >
      </el-option>
    </el-select>
    <el-input
      class="it-el-input"
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
.inner_table {
  .it-el-input {
    width: 30% !important;
    margin-left: 5px;
  }
}
</style>
