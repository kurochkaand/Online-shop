<script setup>
import { ref, onMounted } from "vue";

// reactive state
const count = ref(0);
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>
