<template>
    <div class="app">
        <!-- 导航栏 -->
        <nav class="navbar">
            <ul class="nav-list">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
        </nav>

        <!-- 主体内容区域 -->
        <div class="main-content">
            <!-- 左侧栏 -->
            <aside class="sidebar left">
                <div class="sidebar-content">
                    <div>左侧内容</div>
                </div>
            </aside>

            <!-- 中间内容 -->
            <section class="middle-content">
                <router-view></router-view>
            </section>

            <!-- 右侧栏 -->
            <aside class="sidebar right">
                <div class="sidebar-content">
                    <div>右侧内容</div>
                </div>
            </aside>
        </div>

        <!-- 底部区域 -->
        <footer class="footer">版权信息 &copy; 2024</footer>
    </div>
</template>

<script setup>
import { ref } from "vue";

// 你可以在这里添加更多的逻辑
const msg = ref("Hello, World!");
</script>

<style scoped>
/* 基本样式重置 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 应用容器 */
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* 导航栏样式 */
.navbar {
    position: fixed; /* 固定定位 */
    top: 0; /* 距离顶部的距离为0 */
    width: 100%; /* 宽度为100% */
    background-color: #333;
    padding: 0.5em 1em;
    z-index: 1000; /* 确保导航栏在最上层 */
}

.nav-list {
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: 0; /* 移除默认的左外边距 */
}

.nav-list li {
    margin-right: 1em; /* 添加间隔 */
}

.nav-list a {
    color: white;
    text-decoration: none;
    padding: 0.5em 1em;
}

.nav-list a:hover {
    background-color: #555;
}

/* 主体内容区域样式 */
.main-content {
    flex: 1;
    display: flex;
    overflow: auto; /* 添加滚动条 */
    margin-top: 1em; /* 为导航栏留出空间 */
    padding-top: 1em; /* 为内容顶部留出空间 */
}

/* 侧边栏样式 */
.sidebar {
    position: fixed; /* 固定定位 */
    width: 200px; /* 侧边栏宽度 */
    background-color: #f4f4f4;
    padding: 1em;
    z-index: 1000; /* 确保侧边栏在最上层 */
}

.left {
    left: 0; /* 左侧栏靠左 */
}

.right {
    right: 0; /* 右侧栏靠右 */
}

.sidebar-content {
    position: relative; /* 相对定位，确保内容不会超出侧边栏 */
}

/* 中间内容样式 */
.middle-content {
    flex: 1;
    padding: 1em;
    margin-left: 200px; /* 为左侧栏留出空间 */
    margin-right: 200px; /* 为右侧栏留出空间 */
}

/* 底部区域样式 */
.footer {
    position: fixed; /* 固定定位 */
    bottom: 0; /* 距离顶部的距离为0 */
    width: 100%; /* 宽度为100% */
    background-color: #333;
    color: white;
    text-align: center;
    padding: 0.5em 1em;
    z-index: 1000; /* 确保底部区域在最上层 */
}
</style>
