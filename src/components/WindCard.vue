<template>
  <div v-if="weatherSet" class="wind-card">
    <div class="wind-icon">
      <img src="../assets/wind.png" />
    </div>
    <div class="wind_info">
      <p>{{ getWind() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getWind() {
      const wind = this.$store.getters.getWind;
      return `Wind speed ${wind.speed} m/s  Wind direction ${wind.deg}°  Wind gust ${wind.gust} m/s`;
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
.wind-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgb(68, 0, 107);
  font-size: auto;
  color: white;
}
</style>
