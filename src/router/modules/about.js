import AboutComponent from "@/components/AboutPage.vue";
export default [
    {
        path: "/about",
        name: "About",
        component: AboutComponent,
        authKey: "back_about",
        meta: { title: "关于", icon: "about" },
        children: [],
    },
];
