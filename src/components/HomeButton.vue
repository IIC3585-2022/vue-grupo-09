<template>
  <button v-if="weatherSet" v-on:click="goHome" class="home-button">
    <img src="../assets/previous.png" />
  </button>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$store.dispatch("goHome");
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
.home-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
