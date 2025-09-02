import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

createApp(App).use(store).mount("#app");

window.Kakao.init("5c1ef6149adfa2169a2a57b60f170c60");
