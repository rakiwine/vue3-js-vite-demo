import HomeComponent from "@/components/HelloWorld.vue";
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
