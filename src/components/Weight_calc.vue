<!--Weight units calculator-->
<script setup>
import { ref } from "vue";

const carats = ref(0);
const grams = ref(0);
const dwt = ref(0);

function calcCarats() {
  grams.value = +(carats.value / 5).toFixed(2);
  dwt.value = +(carats.value / 7.9).toFixed(2);
}
function calcGrams() {
  carats.value = +(grams.value / 0.2).toFixed(2);
  dwt.value = +(carats.value / 7.9).toFixed(2);
}
function calcDwt() {
  carats.value = +(dwt.value * 7.9).toFixed(2);
  grams.value = +(carats.value / 5).toFixed(2);
}
</script>

<template>
  <div class="container">
    <div class="row">
      <h3>Crystal weight calculator</h3>
      <div class="row">
        <div class="col-4">
          <div>Carats (kt):</div>
          <input v-model="carats" type="number" @input="calcCarats" />
        </div>
        <div class="col-4">
          <div>Grams (g):</div>
          <input v-model="grams" type="number" @input="calcGrams" />
        </div>
        <div class="col-4">
          <div>Pennyweight (dwt):</div>
          <input v-model="dwt" type="number" @input="calcDwt" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding-top: 70px;
  padding-bottom: 10px;
}
</style>
