import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import mainHttp from "@/libs/http/mainHttp";

import "@/assets/styles/global.scss";

const app = createApp(App);

// 使用 provide/inject 替代全局属性
app.provide("router", router);
app.provide("store", store);
app.provide("mainHttp", mainHttp);

app.use(router);
app.use(store);

app.mount("#app");
