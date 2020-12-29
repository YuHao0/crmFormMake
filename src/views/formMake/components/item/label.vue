<template>
  <div>{{ info.uitype }}</div>
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
