<template>
    <div v-for="(link, index) in links" :key="index" class="block">
        <a :href="link.href" class="link" :target="link.target">
            <el-image
                v-if="link.logo"
                :src="link.logo"
                alt=""
                class="logo"
                fit="contain"
            >
                <template #error>
                    <div class="image-slot">
                        <el-icon size="20" color="#000">
                            <el-icon-PictureFilled />
                        </el-icon>
                    </div>
                </template>
            </el-image>
            <p class="text">{{ link.text }}</p>
        </a>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const ITP = ref(null);
const ICP = ref(null);
const randomITP = ref(Math.floor(Math.random() * 10000000000000));
const randomICP = ref(Math.floor(Math.random() * 1000000000));
const linkITPText = computed(() => {
    // 使用三元运算符来决定使用哪个值
    return `渝公网安备 ${ITP.value ?? randomITP.value} 号`;
});

const linkICPText = computed(() => {
    // 使用三元运算符来决定使用哪个值
    return `渝ICP备${ICP.value ?? randomICP.value}号-1`;
});

const links = ref([
    {
        text: linkITPText,
        href: `http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${randomITP.value}`,
        target: "_blank",
        logo: "@/assets/provider.png",
    },
    {
        text: linkICPText,
        href: "https://beian.miit.gov.cn/",
        target: "_blank",
    },
]);
</script>

<style lang="scss" scoped>
.block {
    width: 100%;
    text-align: center;
    .link {
        display: inline-block;
        text-decoration: none;
        height: 20px;
        line-height: 20px;

        .logo {
            float: left;
            width: 20px;
            height: 20px;
        }

        .text {
            float: left;
            height: 20px;
            line-height: 20px;
            margin: 0 0 0 5px;
            color: #939393;
        }
    }
}
</style>
