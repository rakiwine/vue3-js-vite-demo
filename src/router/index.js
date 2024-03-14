import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    // 基于 HTML5 history 模式的路由历史管理对象
    history: createWebHistory(import.meta.env.BASE_URL || "/"),
    routes,
    // 在开发环境下检测不合规的路由操作。
    strict: true,
    // 定义路由切换时滚动行为的函数。
    scrollBehavior(to, from, savedPosition) {
        console.info("to", to);
        console.info("from", from);
        console.info("savedPosition", savedPosition);
        console.info("");
        return {
            // 滚动到具有 ID 为 "app" 的元素顶部
            el: "#app",
            top: 0,
            // 平滑的动画效果 (behavior: 'smooth')
            behavior: "smooth",
        };
    },
});

export default router;
