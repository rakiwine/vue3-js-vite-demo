<template>
    <div>TestDefault</div>
    <div></div>

    <div><button @click="getStore">打印</button></div>
    <div>{{ userData.id }}</div>
</template>

<script>
import { ApiGetUserInfo } from "@/api/_recycle.js";
export default {
    components: {},
    inject: ["foo", "bar"],
    props: {
        propA: Number,
        propB: {
            type: String,
            default: "default value",
        },
    },
    name: "TestDefault",
    data() {
        return {
            userData: {},
            message: "Hello Vue!",
        };
    },
    computed: {
        reversedMessage() {
            return this.message.split("").reverse().join("");
        },
    },
    methods: {
        getStore() {
            console.info(this.$store);
        },
    },
    beforeRouteEnter(to, from, next) {
        ApiGetUserInfo(1, (error, userData) => {
            if (error) {
                console.error(error);
                // 如果出错，可以重定向到其他路由或者显示错误页面
                next("/error");
            } else {
                // 将获取的数据传递给组件
                next((vm) => {
                    vm.userData = userData;
                });
            }
        });
    },
    directives: {
        // 自定义指令
        customDirective(el, binding) {
            // 指令的逻辑
        },
    },
    transitions: {
        // 定义过渡效果
    },
    template: "<div>{{ message }}</div>",
    mixins: [],
    // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
    beforeCreate() {
        console.log("生命周期钩子函数 beforeCreate");
    },
    // 在实例创建完成后被立即调用
    created() {
        console.log("生命周期钩子函数 created");
    },
    // 在挂载开始之前被调用
    beforeMount() {
        console.log("生命周期钩子函数 beforeMount");
    },
    // 在挂载完成后被立即调用
    mounted() {
        console.log("生命周期钩子函数 mounted");
    },
    // 在数据更新之前调用
    beforeUpdate() {
        console.log("生命周期钩子函数 beforeUpdate");
    },
    // 在组件DOM更新后立即调用
    updated() {
        console.log("生命周期钩子函数 updated");
    },
    // 在实例销毁之前调用
    beforeUnmount() {
        console.log("生命周期钩子函数 beforeUnmount");
    },
    // 在实例销毁后调用
    unmounted() {
        console.log("生命周期钩子函数 unmounted");
    },
};
</script>

<style scoped></style>
