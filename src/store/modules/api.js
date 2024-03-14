import { defineStore, acceptHMRUpdate } from "pinia";
import store from "@/store";

import { APP_NAME } from "@/define/constants";
const STORE_KEY = APP_NAME + "-API";

export const useApiStore = defineStore({
    id: STORE_KEY,
    state: () => ({
        loading: {},
        success: {},
        error: {},
    }),
    actions: {
        setLoading(apiName, loading) {
            this.loading[apiName] = loading;
        },
        getLoading(apiName) {
            return this.loading[apiName];
        },
        setSuccess(apiName, success) {
            this.success[apiName] = success;
        },
        setError(apiName, error) {
            this.error[apiName] = error;
        },
        async fetchData(apiName, apiFunction, ...params) {
            // 设置 loading 状态
            this.setLoading(apiName, true);

            try {
                // 执行实际的 API 调用，并传递参数
                const response = await apiFunction(...params);

                // 设置 success 状态和返回数据
                this.setSuccess(apiName, true);
            } catch (error) {
                // 设置 error 状态
                this.setError(apiName, error.message);
            } finally {
                // 最终设置 loading 状态为 false
                this.setLoading(apiName, false);
            }
        },
    },
});

// 检查当前环境是否支持热模块替换
if (import.meta.hot) {
    import.meta.hot.accept(
        // 更新 useApiStore 的状态 确保应用程序状态与模块更新保持同步。
        acceptHMRUpdate(useApiStore, import.meta.hot),
    );
}
export const ApiStore = useApiStore(store);
