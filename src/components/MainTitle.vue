<template>
  <div id="title-grid">
    <h1 class="title">Weather App</h1>
    <h2 class="title" v-if="hasCity">{{ getCity() }}</h2>
  </div>
</template>

<script>
export default {
  methods: {
    getCity() {
      let capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
      return capitalizeFirstLetter(this.$store.getters.getSearch);
    },
  },
  computed: {
    hasCity() {
      return this.$store.getters.getWeatherSet;
    },
  },
};
</script>

<style>
#title-grid {
  position: relative;
  width: 100%;
  margin: 10px;
  float: left;
  left: -10px;
  grid-column: span 2;
}

.title {
  justify-content: center;
  text-align: center;
  color: white;
}
</style>
