<template>
  <div v-if="weatherSet" class="temp-card">
    <div class="temp-icon">
      <img src="../assets/temperature.png" />
    </div>
    <div class="temp-info">
      <p>{{ getTempInfo() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getTempInfo() {
      const tempInfo = this.$store.getters.getTempInfo;
      console.log(tempInfo.temp);
      return `Temp: ${tempInfo.temp} Feels Like: ${tempInfo.feels_like}\n Max Temp: ${tempInfo.temp_max} \n Min Temp: ${tempInfo.temp_min} \n Humidity: ${tempInfo.humidity} \n Pressure: ${tempInfo.pressure}`;
    },
  },
  computed: {
    weatherSet() {
      return this.$store.getters.getWeatherSet;
    },
  },
};
</script>

<style>
.temp-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: hsl(0, 0%, 96%);
  font-size: auto;
  color: black;
}
.temp-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
