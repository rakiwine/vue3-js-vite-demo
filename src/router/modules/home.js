import HomeComponent from "@/components/HomePage.vue";
export default [
    {
        path: "/",
        name: "home",
        component: HomeComponent,
        authKey: "back_home",
        meta: { title: "首页", icon: "home" },
        children: [],
    },
];
