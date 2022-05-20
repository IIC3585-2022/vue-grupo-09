<template>
  <div id="bar" v-show="getVisibility" class="search-wrapper">
    <input
      class="input-search"
      type="text"
      v-model="search"
      placeholder="Busca un lugar"
    />
    <button type="submit" v-on:click="makeSearch">Buscar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    makeSearch() {
      this.$store.dispatch("makeSearch", this.search);
      this.search = "";
    },
  },
  computed: {
    getVisibility() {
      return this.$store.getters.getSearchVisibility;
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
