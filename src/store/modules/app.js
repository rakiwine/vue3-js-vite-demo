import { defineStore, acceptHMRUpdate } from "pinia";
import { APP_NAME } from "@/define/constants";

const STORE_KEY = APP_NAME + "-APP";

export const useAppStore = defineStore({
    // store 的唯一标识符
    id: STORE_KEY,
    // 定义 store 的初始状态
    state: () => ({
        // 侧边栏
        sidebar: {
            // 菜单展开
            opened: true,
            // 不显示动画
            withoutAnimation: false,
        },
        // 默认设备
        device: "desktop",
        // 默认应用大小
        size: "default",
    }),
    // 对象 获取 store 状态的 getter 函数
    getters: {
        // 获取菜单状态
        getSidebarOpened(state) {
            return state.sidebar.opened;
        },
        //获取侧边栏是否显示动画
        getSidebarWithoutAnimation(state) {
            return state.sidebar.withoutAnimation;
        },
        // 获取设备
        getDevice(state) {
            return state.device;
        },
        // 获取应用大小
        getSize(state) {
            return state.size;
        },
    },
    // 对象 异步修改 store 状态的 action 函数
    actions: {
        // 切换菜单展开/缩进
        toggleSideBar() {
            this.sidebar.opened = !this.sidebar.opened;
        },
        // 设置应用属性
        setApp(data) {
            Object.assign(this, data || {});
        },
    },
    // 配置 store 的持久化行为
    persist: {
        // 启用持久化
        enabled: true,
        // 多个持久化策略对象
        strategies: [
            {
                // 指定存储持久化数据的实际存储介质
                // localStorage     清除浏览器缓存或手动删除
                // sessionStorage   会话结束时被清除
                storage: localStorage,

                // 可以选择保存的字段  其余的不保存
                // paths: ['token'],
            },
        ],
    },
});

// 检查当前环境是否支持热模块替换
if (import.meta.hot) {
    import.meta.hot.accept(
        // 更新 useAppStore 的状态 确保应用程序状态与模块更新保持同步。
        acceptHMRUpdate(useAppStore, import.meta.hot),
    );
}
