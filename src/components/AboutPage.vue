<template>
    <div class="about-page">
        <div class="page-title">关于我们</div>

        <!-- 使用卡片组件包裹内容区域 -->
        <el-card class="content-section">
            <h2>网站初衷</h2>
            <p>
                我们的网站旨在提供一个用户友好的平台，让信息共享和交流变得更加便捷。我们相信，通过集体的智慧和努力，我们可以共同创造一个更加开放和有益的网络环境。
            </p>
        </el-card>

        <el-card class="content-section">
            <h2>网站使用</h2>
            <ul>
                <li>
                    <strong><el-tag>注册与登录</el-tag></strong>
                    ：新用户需要注册账号，以便使用网站的完整功能。
                </li>
                <li>
                    <strong><el-tag>内容发布</el-tag></strong>
                    ：用户可以发布文章、图片和视频等内容，与社区分享自己的知识和经验。
                </li>
                <li>
                    <strong><el-tag>互动交流</el-tag></strong>
                    ：用户可以对内容进行评论、点赞和分享，与其他用户进行互动。
                </li>
                <li>
                    <strong><el-tag>个人资料</el-tag></strong>
                    ：用户可以编辑个人资料，展示自己的兴趣和专长，建立个人品牌。
                </li>
            </ul>
        </el-card>

        <el-card class="content-section">
            <h2>网站后期</h2>
            <ul>
                <li>
                    <strong><el-tag>增强用户体验</el-tag></strong>
                    ：我们将持续优化界面设计和交互流程，提供更加流畅的用户体验。
                </li>
                <li>
                    <strong><el-tag>内容多样化</el-tag></strong>
                    ：我们将引入更多类型的内容，满足不同用户的需求。
                </li>
                <li>
                    <strong><el-tag>社区建设</el-tag></strong>
                    ：我们计划建立更加活跃的社区，鼓励用户之间的交流和合作。
                </li>
                <li>
                    <strong><el-tag>安全与隐私</el-tag></strong>
                    ：我们将加强数据安全和隐私保护措施，确保用户信息的安全。
                </li>
            </ul>
        </el-card>

        <div class="footer">
            <p>如果您有任何建议或问题，欢迎通过</p>
            <el-button type="primary" @click="sendEmail">联系我们</el-button>
        </div>
    </div>
</template>

<script setup>
const sendEmail = () => {
    window.location.href = "mailto:contact@ourwebsite.com";
};

// 使用Composition API来使用这些组件
</script>

<style scoped>
.about-page {
    padding: 20px;
}

.page-title {
    text-align: center;
    margin-bottom: 40px;
}

.content-section {
    margin-bottom: 40px;
}

.footer {
    text-align: center;
    padding: 20px;
    background-color: #f4f4f4;
}

.footer a {
    color: #007bff;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}
</style>
