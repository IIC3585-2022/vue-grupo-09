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
      const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(2);
      const tempInfo = this.$store.getters.getTempInfo;
      return `Temp: ${kelvinToCelsius(tempInfo.temp)}°C\n
              Feels Like: ${kelvinToCelsius(tempInfo.feels_like)}°C\n
              Max Temp: ${kelvinToCelsius(tempInfo.temp_max)}°C\n 
              Min Temp: ${kelvinToCelsius(tempInfo.temp_min)}°C\n
              Humidity: ${tempInfo.humidity} \n
              Pressure: ${tempInfo.pressure}`;
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
  margin: 5px;
}
.temp-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
