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

<style></style>
