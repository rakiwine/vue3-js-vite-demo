import { defineStore, acceptHMRUpdate } from "pinia";
import permissionApi from "@/api/permission";
import routes from "@/router";

import { APP_NAME } from "@/define/constants";
const STORE_KEY = APP_NAME + "-PERMISSION";

const auths = {
    back_role_add: null,
    back_role_delete: null,
    back_role_edit: null,
    back_role_setAuth: null,
    back_user_edit: null,
    back_user_setRole: null,
    back_user_startOrStop: null,
    back_user_detail: null,
};

export const usePermissionStore = defineStore({
    id: STORE_KEY,
    // store 的状态对象
    state: () => ({
        // 权限路由
        routes: [],
        // 权限按钮
        auths: auths,
    }),
    //  getter 对，获取状态对象中的数据
    getters: {
        // 获取权限路由
        getRoutes(state) {
            return state.routes || [];
        },
        // 获取权限按钮
        getAuths(state) {
            return state.auths || auths;
        },
    },
    //  action 对象，处理异步操作
    actions: {
        // 获取权限路由 权限按钮
        async initRoutesAsync() {
            const data = await requestPermissionAsync();

            if (!data) return [];

            // 获取水平路由列表
            const flatRoutes = flatRouteTree(routes);
            // 匹配权限路由 authKey 基于权限配置设置菜单顺序
            const newRoutes = matchRoutes(data, flatRoutes);

            // 除旧迎新路由列表
            if (!this.routes?.length) {
                this.routes = newRoutes;
            } else {
                reMapRoutes(this.routes, newRoutes);
            }

            // 获取按钮权限字典
            this.auths = generateButtonAuth(data);

            return null;
        },
    },
    // 持久化配置，指定 store 数据是否需要持久化存储。
    persist: {
        enabled: true,
        // 指定 sessionStorage 存储数据
        strategies: [
            {
                storage: sessionStorage,
            },
        ],
    },
});

// 接口获取路由表
async function requestPermissionAsync() {
    try {
        const res = await permissionApi.getAdminMenus();
        // const res = await permApi.getPermission()
        return res?.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// 获取水平路由列表
function flatRouteTree(_routes, flatRoutes) {
    const _flatRoutes = flatRoutes || [];

    _routes.forEach((route) => {
        // const { children, component, components, ...route } = r
        _flatRoutes.push(route);
        if (route.children) {
            flatRouteTree(route.children, _flatRoutes);
        }
    });
    return _flatRoutes;
}

// 匹配权限路由
function matchRoutes(permList, appRoutes) {
    const _routes = [];

    // 当前拥有权限路由 存在 于全局路由 记录
    permList.forEach((perm) => {
        // 找不到满足条件的元素，则返回 undefined
        const route = appRoutes.find((r) => r.authKey === perm.authKey);

        if (route) {
            route.meta = route.meta || {};
            // 接口返回标签覆盖页面菜单显示
            route.meta.title = perm.label;

            // 存在子路由 嵌套获取
            let child = null;
            if (perm.children) {
                child = matchRoutes(perm.children, appRoutes);
            }
            // r 存储之外的剩余属性对象
            // path
            // name
            // authKey
            // hidden
            // mate
            // redirect

            const { children, component, components, ...r } = route;
            _routes.push({
                ...r,
                children: child,
            });
        }
    });

    return _routes;
}

// 除旧迎新路由
function reMapRoutes(oldRoutes, newRoutes) {
    // 移除遗留路由
    delLegacyRoutes(oldRoutes, newRoutes);

    newRoutes?.forEach((newRoute) => {
        const oldRoute = oldRoutes.find(
            (x) => x.name === newRoute.name || x.path === newRoute.path,
        );
        // 更新旧路由 或者加入旧路由
        if (oldRoute) {
            if (oldRoute.children && newRoute.children) {
                reMapRoutes(oldRoute.children, newRoute.children);
            }
            Object.assign(oldRoute, newRoute);
        } else {
            oldRoutes.push(newRoute);
        }
    });
}

// 移除遗留路由
function delLegacyRoutes(oldRoutes, newRoutes) {
    if (!oldRoutes?.length) return;

    for (let i = 0; i < oldRoutes?.length; i++) {
        const oldRoute = oldRoutes[i];
        const newRoute = newRoutes?.find(
            (route) =>
                route.name === oldRoute.name || route.path === oldRoute.path,
        );
        // 新路由中未匹配 旧路由 移除
        if (!newRoute) {
            oldRoutes.splice(i, 1);
        }
        // 如果匹配嵌套检测 旧路由
        else {
            delLegacyRoutes(oldRoute.children, newRoute.children);
        }
    }
}

// 获取按钮权限字典
function generateButtonAuth(data) {
    const btnAuths = {};
    const getButtonAuthLoop = (_routes) => {
        _routes?.forEach((route) => {
            route?.buttons?.forEach((btn) => {
                btnAuths[btn.authKey] = true;
            });
            if (route.children?.length) {
                getButtonAuthLoop(route.children);
            }
        });
    };
    getButtonAuthLoop(data);
    return btnAuths;
}

// 检查当前环境是否支持热模块替换
if (import.meta.hot) {
    import.meta.hot.accept(
        // 更新 useAppStore 的状态 确保应用程序状态与模块更新保持同步。
        acceptHMRUpdate(usePermissionStore, import.meta.hot),
    );
}
