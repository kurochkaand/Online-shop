<script lang="ts">
export default {
  props: {
    title: String,
  },
  setup(props) {
    console.log(props.title);
  },
};
</script>

<template>
  <div>
    {{ $props.title }}
  </div>
</template>

<style scoped>
div {
  background: #0f0;
}
</style>
