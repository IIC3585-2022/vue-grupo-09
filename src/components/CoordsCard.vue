<template>
  <div v-if="weatherSet" class="coords-card">
    <div class="coords-icon">
      <img src="../assets/compass.png" />
    </div>
    <div class="coords_info">
      <p>{{ getCoords() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getCoords() {
      const coords = this.$store.getters.getCoords;
      return `Lat ${coords.lat}            Lon ${coords.lon}`;
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
.coords-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgb(100, 40, 0);
  font-size: auto;
  color: white;
}
.coords-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 6.5rem;
}
</style>
