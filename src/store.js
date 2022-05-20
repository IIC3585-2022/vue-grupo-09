import { createStore } from "vuex";
import { getWeatherFromCity } from "./scripts/weather";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      count: 0,
      search: "",
      weather: {},
      searchVisibility: true,
      weatherSet: false,
    };
  },
  mutations: {
    // mutaciones no son asincronas
    changeSearch(state, value) {
      state.search = value;
    },
    changeWeather(state, weather) {
      state.weather = weather;
      console.log(state.weather);
      state.weatherSet = true;
    },
    hideSearchBar(state) {
      state.searchVisibility = false;
    },
  },
  getters: {
    getSearch(state) {
      return state.search;
    },
    getSearchVisibility(state) {
      return state.searchVisibility;
    },
    getWeather(state) {
      return state.weather;
    },
    getWeatherSet(state) {
      return state.weatherSet;
    },
    getTempInfo(state) {
      return state.weather.main;
    },
    getCoords(state) {
      return state.weather.coord;
    },
  },
  actions: {
    // acciones pueden ser asincronas
    async makeSearch(context, value) {
      const weather = await getWeatherFromCity(value);
      if (!weather) return null;
      context.commit("changeSearch", value);
      context.commit("hideSearchBar");
      context.commit("changeWeather", weather);
    },
  },
});
