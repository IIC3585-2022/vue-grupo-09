<template>
  <div v-if="weatherSet" class="weather-card">
    <div class="weather-icon">
      <img :src="getUrl()" />
    </div>
    <div class="weather-info">
      <p>{{ description() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getUrl() {
      const icon = this.$store.getters.getWeather.weather[0].icon;
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    },
    description() {
      return this.$store.getters.getWeather.weather[0].description;
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
.weather-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: hsla(154, 73%, 68%, 0.2);
  font-size: auto;
  color: white;
}
</style>
