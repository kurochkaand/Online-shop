<script setup lang="ts">
import { ref, onMounted } from "vue";
import Pen from "./Pen.vue";

// reactive state
const count = ref(0);
</script>

<template>
  <div>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
  <Pen :title="'New' + count + 'component'"></Pen>
</template>

<style scoped>
div {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
