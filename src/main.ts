import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./router/index";
import VueApexCharts from "vue3-apexcharts";

import ElementPlus from "element-plus";
import "@/styles/index.scss";
import 'uno.css'
import "element-plus/theme-chalk/src/message.scss"

const pinia = createPinia();
const app = createApp(App);
app.use(ElementPlus, { size: 'large', zIndex: 3000 });
app.use(pinia);
app.use(router);
app.use(VueApexCharts)
app.mount("#app");
