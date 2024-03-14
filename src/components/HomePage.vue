<template>
    <div class="home-page">
        <div class="header">
            <h1>欢迎来到我们的网站</h1>
            <p>这里是首页，您可以在这里找到最新的信息和资源。</p>
        </div>

        <div class="content">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-card class="box-card">
                        <h2>特色功能一</h2>
                        <p>这里是特色功能一的介绍。</p>
                        <el-button type="primary">了解更多</el-button>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card class="box-card">
                        <h2>特色功能二</h2>
                        <p>这里是特色功能二的介绍。</p>
                        <el-button type="primary">了解更多</el-button>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card class="box-card">
                        <h2>特色功能三</h2>
                        <p>这里是特色功能三的介绍。</p>
                        <el-button type="primary">了解更多</el-button>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
// 如果需要使用 Composition API 或其他逻辑，可以在这里添加
</script>

<style scoped>
.home-page {
    padding: 20px;
}

.header {
    text-align: center;
    margin-bottom: 40px;
}

.content {
    margin-bottom: 40px;
}

.box-card {
    margin-bottom: 20px;
}
</style>
