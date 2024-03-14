<!-- components/AboutPage.vue -->
<template>
    <div class="about-page-container">
        <h1>关于我们</h1>
        <p>
            我们是一支充满激情的开发者和设计师团队，致力于使用最新技术创建创新的网络应用程序。
        </p>

        <section class="team">
            <h2>团队成员</h2>
            <ul>
                <li>
                    <img
                        src="/vite.svg"
                        alt="团队成员1"
                        class="team-member-image"
                    />
                    <div class="team-member-info">
                        <h3>张三</h3>
                        <p>首席执行官 & 创始人</p>
                    </div>
                </li>
                <li>
                    <img
                        src="/vite.svg"
                        alt="团队成员2"
                        class="team-member-image"
                    />
                    <div class="team-member-info">
                        <h3>李四</h3>
                        <p>首席开发工程师</p>
                    </div>
                </li>
                <!-- 根据需要添加更多团队成员 -->
            </ul>
        </section>

        <section class="history">
            <h2>发展历程</h2>
            <p>
                我们始于2020年，作为一个小型创业公司，我们的目标是为网络开发带来简单与优雅。从那时起，我们成长为一家拥有多样化项目组合的成功公司。
            </p>
        </section>

        <section class="contact">
            <h2>联系我们</h2>
            <p>如果您有任何问题或希望与我们取得联系，请使用以下信息：</p>
            <ul>
                <li>
                    电子邮件：
                    <a href="mailto:info@yourcompany.com">
                        info@yourcompany.com
                    </a>
                </li>
                <li>电话：+86 1234567890</li>
                <li>地址：中国某市主街道123号</li>
            </ul>
        </section>
    </div>
</template>

<style scoped>
.about-page-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
}

h1,
h2 {
    margin-bottom: 20px;
}

p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
}

.team {
    margin-bottom: 40px;
}

.team-member-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 20px;
}

.team-member-info h3 {
    margin-bottom: 5px;
}

.history {
    margin-bottom: 40px;
}

.contact ul {
    list-style: none;
    padding: 0;
}

.contact li {
    margin-bottom: 10px;
}

.contact a {
    color: #409eff;
    text-decoration: none;
}

.contact a:hover {
    text-decoration: underline;
}
</style>
