import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store.js";

export const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);

createApp(App).use(store).mount("#app");
