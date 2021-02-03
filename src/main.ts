import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);

app
  .use(store.original)
  .use(router)
  .mount("#app");

app.config.globalProperties.$store=store.original;

console.log('app.config.globalProperties', app.config.globalProperties)
  