import TestPage from "@/components/test/TestPage.vue";
import TestApi from "@/components/test/TestApi.vue";
import TestDefault from "@/components/test/TestDefault.vue";
export default [
    {
        path: "/test",
        name: "Test",
        component: TestPage,
        authKey: "back_test",
        meta: { title: "测试", icon: "test" },
        children: [
            {
                path: "test_default",
                name: "TestDefault",
                component: TestDefault,
                meta: { title: "测试默认", icon: "test_default" },
            },
            {
                path: "test_api",
                name: "TestApi",
                component: TestApi,
                meta: { title: "测试API", icon: "test_api" },
            },
        ],
    },
];
