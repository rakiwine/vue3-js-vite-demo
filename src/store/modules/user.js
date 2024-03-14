import { defineStore, acceptHMRUpdate } from "pinia";
import ApiBase from "@/api/base";
import store from "@/store";

import { APP_NAME } from "@/define/constants";
const STORE_KEY = APP_NAME + "-USER";
export const useUserStore = defineStore("auth", {
    id: STORE_KEY,
    state: () => ({
        token: "",
        userInfo: {},
        preHistory: "",
    }),
    getters: {
        getToken(state) {
            return state.token;
        },
        hasLogged(state) {
            return !!state.token;
        },
        getUserInfo(state) {
            return state.userInfo;
        },
    },
    actions: {
        async logout() {
            await ApiBase.logout();
            this.removeToken();
            this.setUserInfo();
            // window.location.reload()
        },
        setToken(data) {
            this.token = data;
        },
        removeToken() {
            this.token = "";
        },
        setUserInfo(data) {
            if (!data) {
                this.userInfo = null;
                return;
            }
            if (!this.userInfo) {
                this.userInfo = {};
            }
            Object.assign(this.userInfo, data || {});
        },
        removeUserInfo() {
            this.userInfo = null;
        },
        async initUserInfo() {
            const userRes = await ApiBase.getUserInfo();
            this.setUserInfo(userRes?.data);
        },
        setHistory(history) {
            this.preHistory = history;
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                // $localStorage,
                storage: localStorage,
                //可以选择保存的字段  其余的不保存
                paths: ["token"],
            },
            {
                storage: sessionStorage,
                //可以选择保存的字段  其余的不保存
                paths: ["preHistory"],
            },
        ],
    },
});

// 检查当前环境是否支持热模块替换
if (import.meta.hot) {
    import.meta.hot.accept(
        // 更新 useAppStore 的状态 确保应用程序状态与模块更新保持同步。
        acceptHMRUpdate(useUserStore, import.meta.hot),
    );
}

export const useUserStoreWithout = () => {
    return useUserStore(store);
};
