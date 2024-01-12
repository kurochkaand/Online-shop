<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    updateCounter() {
      this.count++;
    },
  },
});
</script>

<template>
  <div>
    <button @click="updateCounter">Count is: {{ count }}</button>
    <input v-model="count" />
  </div>
</template>
<style scoped>
div {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
