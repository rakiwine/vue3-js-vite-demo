<template>
    <el-container>
        <el-header>
            <!-- 顶部导航栏，使用 el-menu 的 router 属性 -->
            <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                class="top-menu"
                router
            >
                <el-menu-item index="/">Home</el-menu-item>
                <el-menu-item index="/about">About</el-menu-item>
                <el-menu-item index="/test">Test</el-menu-item>
            </el-menu>
        </el-header>

        <el-container>
            <el-aside width="200px">
                <!-- 侧边栏内容 -->
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-vertical-demo"
                    router
                >
                    <el-menu-item index="/">Home</el-menu-item>
                    <el-menu-item index="/about">About</el-menu-item>
                    <el-menu-item index="/test">Test</el-menu-item>
                </el-menu>
            </el-aside>

            <el-main>
                <!-- 主要内容区域 -->
                <router-view />
            </el-main>
        </el-container>

        <el-footer class="footer">
            <p>版权所有 &copy; 2024 我们的网站</p>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "/", // 默认激活的菜单项，使用路径字符串
        };
    },
    watch: {
        // 监听路由变化，动态设置激活的菜单项
        "$route.path": function (newPath) {
            this.activeIndex = newPath;
        },
    },
};
</script>

<style scoped lang="scss">
.top-menu {
    padding: 0 1rem;
}

.el-menu-vertical-demo {
    border: none;
}

.footer {
    background-color: #f4f4f4;
    position: absolute;
    text-align: center;
    width: 100%;
    height: 90px;
    bottom: 0;
    padding: 20px;
}
</style>
