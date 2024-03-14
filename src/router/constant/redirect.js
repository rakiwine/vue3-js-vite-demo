export default [
    {
        path: "/redirect/:path(.*)",
        name: "redirect",
        component: () => import("@/components/redirect/index.vue"),
        meta: {
            noCheck: true,
        },
    },
];
