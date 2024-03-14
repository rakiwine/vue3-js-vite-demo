// 在浏览器的本地存储中持久化存储Pinia store的状态。
import piniaPluginPersist from "pinia-plugin-persist";
import { createPinia } from "pinia";

const store = createPinia();

store.use(piniaPluginPersist);
export default store;
