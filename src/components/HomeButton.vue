<template>
  <button
    title="Volver a la barra de búsqueda"
    v-if="weatherSet"
    v-on:click="goHome"
    class="home-button"
  >
    <img class="image" src="../assets/previous.png" />
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
  width: 50px;
  height: 50px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 0;
  background-color: inherit;
  padding: 0;
  border: none;
  background: none;
}

.image {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 75%;
  width: 75%;
  transform: translate(-50%, -50%);
}
</style>
