<template>
  <div id="app">
    <h2>Price calculator with currency rate</h2>

    <div>
      <label for="quantity">Quantity: </label>
      <input type="number" v-model="quantity" @input="calculateTotal" />
    </div>

    <div>
      <label for="price">Price per unit: </label>
      <input type="number" v-model="price" @input="calculateTotal" />
    </div>

    <div>
      <label for="discount">Discount (%): </label>
      <input type="number" v-model="discount" @input="calculateTotal" />
    </div>

    <div>
      <label for="currency">Currency: </label>
      <select v-model="selectedCurrency" @change="calculateTotal">
        <option
          v-for="currency in currencies"
          :key="currency.code"
          :value="currency.code"
        >
          {{ currency.name }}
        </option>
      </select>
    </div>

    <div>
      <p>Total Price ({{ selectedCurrency }}): {{ formattedTotalPrice }}</p>
    </div>
  </div>
</template>

<script>
Vue.component("currency-selector", {
  props: ["currencies", "selectedCurrency"],
  template: `
    <div>
      <label for="currency">Currency:</label>
      <select v-model="selectedCurrency" @change="$emit('change')">
        <option v-for="currency in currencies" :key="currency.code" :value="currency.code">{{ currency.name }}</option>
      </select>
    </div>
  `,
});

new Vue({
  el: "#app",
  data() {
    return {
      quantity: 1,
      price: 10,
      discount: 0,
      selectedCurrency: "USD",
      currencies: [],
      totalPrice: 0,
    };
  },
  computed: {
    formattedTotalPrice() {
      const selectedCurrency = this.currencies.find(
        (currency) => currency.code === this.selectedCurrency
      );

      if (selectedCurrency) {
        return (this.totalPrice * selectedCurrency.exchangeRate).toFixed(2);
      } else {
        return "N/A";
      }
    },
  },
  methods: {
    async fetchCurrencies() {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = await response.json();
        this.currencies = Object.keys(data.rates).map((code) => ({
          code,
          name: code,
          exchangeRate: data.rates[code],
        }));
        console.log("Fetched currencies:", this.currencies);
      } catch (error) {
        console.error("Error fetching currencies:", error.message);
      }
    },
    calculateTotal() {
      const discountedPrice = this.price - (this.price * this.discount) / 100;
      const selectedCurrency = this.currencies.find(
        (currency) => currency.code === this.selectedCurrency
      );
      this.totalPrice =
        this.quantity * discountedPrice * selectedCurrency.exchangeRate;
    },
  },
  mounted() {
    this.fetchCurrencies();
    this.calculateTotal();
  },
});
</script>

<style>
#app {
  margin: auto;
  margin-top: 10px;
}
label,
input {
  margin: 8px 0px;
}
input {
  border: solid 2px black;
}
input:hover {
  border: solid 2px green;
}
</style>
