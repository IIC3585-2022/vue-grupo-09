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
  },
  actions: {
    // acciones pueden ser asincronas
    async makeSearch(context, value) {
      const weather = await getWeatherFromCity(value);
      if (!weather) return null;
      context.commit("changeWeather", weather);
      context.commit("changeSearch", value);
      context.commit("hideSearchBar");
    },
  },
});
