<script setup>
import {
    ApiTestRequest,
    ApiTestPost,
    ApiTestGet,
    ApiTestPut,
    ApiTestPatch,
    ApiTestDelete,
    ApiTestOptions,
    ApiTestHead,
    ApiTestPostForm,
    ApiTestPutForm,
    ApiTestPatchForm,
} from "@/api/_test.js";

const test_request_func = function () {
    const test_request = "test_request";
    const headers = {};
    let method = "";
    const url = "/test_request";
    let params = { test_request: test_request };
    let data = { test_request: test_request };

    method = "POST";
    // method = "GET";
    params = {};
    data = {};
    ApiTestRequest.api(headers, method, url, params, data)
        .then(function (response) {
            console.info(response);
        })
        .catch((error) => {
            console.error(error);
        });
};
const test_post_func = function () {
    const test_post = "test_post";
    ApiTestPost.api(test_post)
        .then(function (response) {
            console.info(response);
        })
        .catch((error) => {
            console.error(error);
        });
};

const test_get_func = function () {
    ApiTestGet.api()
        .then(function (response) {
            console.info(response);
        })
        .catch((error) => {
            console.error(error);
        });
};

const test_put_func = function () {
    const test_put = "test_put";
    ApiTestPut.api(test_put)
        .then(function (response) {
            console.info(response);
        })
        .catch((error) => {
            console.error(error);
        });
};

const test_patch_func = function () {
    const test_patch = "test_patch";
    ApiTestPatch.api(test_patch)
        .then(function (response) {
            console.info(response);
        })
        .catch((error) => {
            console.error(error);
        });
};

const test_delete_func = function () {
    ApiTestDelete.api()
        .then(function (response) {
            console.info(response);
        })
        .catch((error) => {
            console.error(error);
        });
};

const test_options_func = function () {
    ApiTestOptions.api()
        .then(function (response) {
            console.info(response);
        })
        .catch((error) => {
            console.error(error);
        });
};

const test_head_func = function () {
    ApiTestHead.api()
        .then(function (response) {
            console.info(response);
        })
        .catch((error) => {
            console.error(error);
        });
};

const test_post_form_func = function () {
    const formData = { test_post_form: "test_post_form" };
    ApiTestPostForm.api(formData)
        .then(function (response) {
            console.info(response);
        })
        .catch((error) => {
            console.error(error);
        });
};

const test_put_form_func = function () {
    const formData = { test_put_form: "test_put_form" };
    ApiTestPutForm.api(formData)
        .then(function (response) {
            console.info(response);
        })
        .catch((error) => {
            console.error(error);
        });
};

const test_patch_form_func = function () {
    const formData = { test_patch_form: "test_patch_form" };
    ApiTestPatchForm.api(formData)
        .then(function (response) {
            console.info(response);
        })
        .catch((error) => {
            console.error(error);
        });
};
</script>

<template>
    <div>TestPage</div>
    <div></div>
    <div>
        <el-button type="primary" @click="test_request_func">
            test_request_func
        </el-button>
    </div>
    <div>
        <el-button type="primary" @click="test_post_func">
            test_post_func
        </el-button>
    </div>
    <div>
        <el-button type="primary" @click="test_get_func">
            test_get_func
        </el-button>
    </div>
    <div>
        <el-button type="primary" @click="test_put_func">
            test_put_func
        </el-button>
    </div>
    <div>
        <el-button type="primary" @click="test_patch_func">
            test_patch_func
        </el-button>
    </div>
    <div>
        <el-button type="primary" @click="test_delete_func">
            test_delete_func
        </el-button>
    </div>
    <div>
        <el-button type="primary" @click="test_options_func">
            test_options_func
        </el-button>
    </div>
    <div>
        <el-button type="primary" @click="test_head_func">
            test_head_func
        </el-button>
    </div>
    <div>
        <el-button type="primary" @click="test_post_form_func">
            test_post_form_func
        </el-button>
    </div>
    <div>
        <el-button type="primary" @click="test_put_form_func">
            test_put_form_func
        </el-button>
    </div>
    <div>
        <el-button type="primary" @click="test_patch_form_func">
            test_patch_form_func
        </el-button>
    </div>
</template>

<style scoped></style>
