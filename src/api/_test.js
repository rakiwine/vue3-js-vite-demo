import mainHttp from "@/libs/http/mainHttp";

export const ApiTestRequest = {
    name: "",
    url: "/test_request",
    auth_key: "",
    api: function (headers, method, url, params, data) {
        return mainHttp.request({
            method: method,
            url: url,
            // params 是用于指定 URL 查询参数的对象 params 属性将参数附加到 URL 的末尾
            params: params,
            // POST、PUT、PATCH
            data: data,
            headers: headers,
            timeout: 5000,
            // json、text、blob
            responseType: "json",
            withCredentials: true,
            auth: {
                username: "your_username",
                password: "your_password",
                // auth 类型可以是 "basic" 或 "bearer"
                type: "basic", // 或者 'bearer'
            },
        });
    },
};

export const ApiTestPost = {
    name: "",
    url: "/test_post",
    auth_key: "",
    api: function (test_post) {
        return mainHttp.post(this.url, {
            test_post,
        });
    },
};

export const ApiTestGet = {
    name: "",
    url: "/test_get",
    auth_key: "",
    api: function () {
        return mainHttp.get(this.url);
    },
};

export const ApiTestPut = {
    name: "",
    url: "/test_put",
    auth_key: "",
    api: function (test_put) {
        return mainHttp.put(this.url, {
            test_put,
        });
    },
};

export const ApiTestPatch = {
    name: "",
    url: "/test_patch",
    auth_key: "",
    api: function (test_patch) {
        return mainHttp.patch(this.url, {
            test_patch,
        });
    },
};

export const ApiTestDelete = {
    name: "",
    url: "/test_delete",
    auth_key: "",
    api: function () {
        return mainHttp.delete(this.url);
    },
};

export const ApiTestOptions = {
    name: "",
    url: "/test_options",
    auth_key: "",
    api: function () {
        return mainHttp.options(this.url);
    },
};

export const ApiTestHead = {
    name: "",
    url: "/test_head",
    auth_key: "",
    api: function () {
        return mainHttp.head(this.url);
    },
};

export const ApiTestPostForm = {
    name: "",
    url: "/test_post_form",
    auth_key: "",
    api: function (formData) {
        return mainHttp.postForm(this.url, formData);
    },
};

export const ApiTestPutForm = {
    name: "",
    url: "/test_put_form",
    auth_key: "",
    api: function (formData) {
        return mainHttp.putForm(this.url, formData);
    },
};

export const ApiTestPatchForm = {
    name: "",
    url: "/test_patch_form",
    auth_key: "",
    api: function (formData) {
        return mainHttp.patchForm(this.url, formData);
    },
};
