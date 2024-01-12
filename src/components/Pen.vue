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
  {{ $props.title }}
</template>
