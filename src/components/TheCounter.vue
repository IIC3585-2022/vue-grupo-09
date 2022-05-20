<template>
  <div>
    <h1>{{ getCount }}</h1>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: "TheCounter",
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
  },
  computed: {
    getCount() {
      return this.$store.getters.getCount;
    },
  },
};
</script>

<style></style>
