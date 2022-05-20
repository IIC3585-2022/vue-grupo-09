import { createApp } from "vue";
import App from "./App.vue";

export const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);

createApp(App).mount("#app");
