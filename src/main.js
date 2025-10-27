// src/main.js
import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";

// import "vue3-toastify/dist/style.css";

import VueSmoothScroll from "vue3-smooth-scroll";
import router from "./router"; // ✅ import router

import Button from "./components/Button.vue";
import LinkButton from "./components/LinkButton.vue";

const app = createApp(App);

app.use(VueSmoothScroll);
app.use(router); // ✅ enable routing

app.component("Button", Button);
app.component("LinkButton", LinkButton);

app.mount("#app");
