<template>
  <div id="bar" class="search-wrapper">
    <input
      class="input-search"
      type="text"
      v-model="search"
      placeholder="Busca un lugar"
    />
    <button type="submit" v-on:click="getCityWeather(search)">Buscar</button>
  </div>
</template>

<script>
import { getWeatherFromCity } from "../scripts/weather.js";
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    async getCityWeather(search) {
      console.log(await getWeatherFromCity(search));
    },
  },
};
</script>

<style>
#bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 10vh;
  padding: 1rem;
  border-radius: 0.5rem;
  align-self: center;
}
.input-search {
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
}
button {
  width: 25%;
  height: 100%;
  font-size: 1.5rem;
}
</style>
