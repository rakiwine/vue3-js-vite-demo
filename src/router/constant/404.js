export default [
    {
        path: "/:path(.*)",
        name: "404",
        component: () => import("@/components/error/404.vue"),
        meta: {
            noHistory: true,
            noCheck: true,
        },
    },
];
