<script setup>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onErrorCaptured,
} from "vue";
import { useAppStore } from "@/store/modules/app.js";

const AppStore = useAppStore();

console.info(AppStore);

// 基本数据类型
const count = ref(0);
// 对象
const user = reactive({
    name: "John",
    age: 25,
});

const doubleCount = computed(() => count.value * 2);

// 监听响应式数据的变化
watch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`);
});
// 监听响应式数据的变化，不需要指定要监听的具体属性。
watchEffect(() => {
    console.log(`Count is now ${count.value}`);
});

onBeforeMount(() => {
    console.log("Composition API 钩子函数 onBeforeMount");
});
onMounted(() => {
    console.log("Composition API 钩子函数 onMounted");
});
onBeforeUpdate(() => {
    console.log("Composition API 钩子函数 onBeforeUpdate");
});
onUpdated(() => {
    console.log("Composition API 钩子函数 onUpdated");
});
onBeforeUnmount(() => {
    console.log("Composition API 钩子函数 onBeforeUnmount");
});
onUnmounted(() => {
    console.log("Composition API 钩子函数 onUnmounted");
});
onErrorCaptured(() => {
    console.log("Composition API 钩子函数 onErrorCaptured");
});
</script>

<template>
    <div class="test-page">
        <h1>Test Page</h1>
        <nav class="nav-links">
            <div><router-link to="/test/test_api">Test API</router-link></div>
            <div>
                <router-link to="/test/test_default">Test Default</router-link>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<style scoped>
.test-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.nav-links {
    margin-top: 20px;
}

.nav-links router-link {
    margin-right: 10px;
    text-decoration: none;
    color: #333;
}

.nav-links router-link:hover {
    color: #555;
}
</style>
