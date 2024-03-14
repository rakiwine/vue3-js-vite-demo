export default {
    getAdminMenus() {
        return Promise.resolve({
            code: 200,
            msg: "success",
            data: [
                {
                    id: 0,
                    label: "后台管理",
                    authKey: "back_user_center",
                    children: [
                        {
                            id: 11,
                            label: "用户管理",
                            authKey: "back_user_manage",
                            buttons: [
                                {
                                    authKey: "back_user_detail",
                                    id: 116,
                                    label: "查看用户",
                                },
                                {
                                    authKey: "back_user_add",
                                    id: 111,
                                    label: "添加用户",
                                },
                                {
                                    authKey: "back_user_edit",
                                    id: 112,
                                    label: "编辑用户",
                                },
                                {
                                    authKey: "back_user_startstop",
                                    id: 113,
                                    label: "启停用户",
                                },
                                {
                                    authKey: "back_user_setRole",
                                    id: 114,
                                    label: "用户设置角色",
                                },
                                {
                                    authKey: "back_user_resetpwd",
                                    id: 115,
                                    label: "重置密码",
                                },
                            ],
                        },
                        {
                            id: 12,
                            label: "角色管理",
                            authKey: "back_role_manage",
                            buttons: [
                                {
                                    authKey: "back_role_add",
                                    id: 121,
                                    label: "添加角色",
                                },
                                {
                                    authKey: "back_role_edit",
                                    id: 122,
                                    label: "编辑角色",
                                },
                                {
                                    authKey: "back_role_delete",
                                    id: 123,
                                    label: "删除角色",
                                },
                                {
                                    authKey: "back_role_setAuth",
                                    id: 124,
                                    label: "角色授权",
                                },
                            ],
                        },
                        {
                            id: 13,
                            label: "权限管理",
                            authKey: "back_auth_manage",
                            buttons: [
                                {
                                    id: 131,
                                    authKey: "back_auth_add",
                                    label: "添加权限",
                                },
                                {
                                    id: 132,
                                    authKey: "back_auth_edit",
                                    label: "编辑权限",
                                },
                                {
                                    id: 133,
                                    authKey: "back_auth_delete",
                                    label: "删除权限",
                                },
                                {
                                    id: 134,
                                    authKey: "back_auth_authorize",
                                    label: "资源授权",
                                },
                            ],
                        },
                        {
                            id: 14,
                            label: "用户详情",
                            authKey: "back_user_detail",
                        },
                        {
                            id: 15,
                            label: "权限配置",
                            authKey: "back_auth_menu_manage",
                        },
                    ],
                },
            ],
        });
    },
};
