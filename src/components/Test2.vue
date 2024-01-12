<script setup lang="ts">
import { ref, onMounted } from "vue";

// reactive state
const count = ref(0);
</script>

<template>
  <div>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>
<style scoped>
div {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
