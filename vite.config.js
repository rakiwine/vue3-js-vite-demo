import { defineConfig, loadEnv } from "vite";
import { plugins } from "./build";
import { resolve } from "path";
import autoprefixer from "autoprefixer";

export default (param) => {
    const { mode, command, isSsrBuild, isPreview } = param;
    const isDev = mode === "development";
    const isDevBuild = mode === "devBuild";
    const isTest = mode === "test";
    const isProd = mode === "production";

    const {
        VITE_PORT,
        VITE_BASE_URL,
        VITE_PROXY_DOMAIN,
        VITE_ADDRESS_REAL_MAIN,
    } = loadEnv(mode, process.cwd());

    const proxy = {};
    // dev环境下的代理设置，将以 '/api' 开头的请求代理到指定的目标地址
    // VITE_PROXY_DOMAIN /api
    proxy[VITE_PROXY_DOMAIN] = {
        // 真实的接口地址
        target: VITE_ADDRESS_REAL_MAIN,
        // 启用跨域
        changeOrigin: true,
        // 重写路径，去掉 '/api' 前缀
        rewrite: (old_path) => {
            const regex = new RegExp(`^${VITE_PROXY_DOMAIN}`);
            const new_path = old_path.replace(regex, "");

            console.info("跨域代理", old_path, new_path);
            return new_path;
        },
    };
    return defineConfig({
        // 项目的基础路径
        base: VITE_BASE_URL,
        // 插件
        plugins: [...plugins],
        // 构建配置
        build: {
            // 构建输出目录，这里设置为 'dist'
            outDir: "dist",
            // 静态资源引用路径，这里设置为 'public'
            publicDir: "public",
            // 是否进行代码压缩，
            // terser  相对较慢，但大多数情况下构建后的文件体积更小。
            // esbuild 最小化混淆更快但构建后的文件相对更大。
            minify: "terser",
            // 启用/禁用 CSS 代码拆分
            cssCodeSplit: true,
            // 启用/禁用 CSS 提取
            cssExtract: true,
            // 为生成的 CSS 文件添加 source map
            sourcemap: !isProd,
            // 启用/禁用构建后的模块格式
            lib: false,
            // modules模式 Opera、UC、百度浏览器不支持，由于对于移动端，不建议设置modules模式
            target: "esnext",
            // 启用/禁用 Rollup 选项 配置 Rollup 打包工具的相关选项
            // rollupOptions: {},
            // Terser 压缩器配置选项
            terserOptions: {
                compress: {
                    // 生产环境去除 console
                    drop_console: isProd,
                    // 生产环境去除 debugger
                    drop_debugger: isProd,
                },
            },
            // 启用/禁用在控制台报告压缩后的文件大小
            reportCompressedSize: false,
            // 设置用于警告超过指定大小的文件块的阈值 默认是 500kb 单位字节
            chunkSizeWarningLimit: 4096,
        },
        // 静态资源存放目录
        assetsDir: "assets",
        // 使用自定义的别名
        resolve: {
            // 为模块路径设置别名
            alias: {
                "@": resolve(__dirname, "./src"),
            },
        },
        // css配置
        css: {
            modules: false,
            extract: true,
            sourceMap: false,
            preprocessorOptions: {
                // Sass 预处理器配置
                scss: {
                    // 在每个 Vue 页面的样式中引入全局的 Sass 文件
                    // additionalData: "@use '@/assets/styles/global.scss' as *;",
                },
                // Less 预处理器配置
                // less: {
                //     // 修改 Less 变量
                //     modifyVars: {
                //         // 通过 hack 引入全局的 Less 文件
                //         hack: `true; @import (reference) "${resolve("src/style/variables.less")}";`,
                //     },
                //     // 严格地检查数学表达式
                //     math: "strict",
                //     // 启用/停止 使用 JavaScript 表达式，
                //     javascriptEnabled: true,
                // },
            },
            postcss: {
                // PostCSS 配置
                plugins: [
                    // 自动添加浏览器前缀，确保样式在不同浏览器中都能正常工作
                    autoprefixer(),

                    // 解决构建生成的 CSS 文件中包含[ @charset "UTF-8" ]问题 https://github.com/vitejs/vite/issues/5833
                    // postcss-normalize-charset，应该也可以实现去除charset规则
                    {
                        // 指定使用内置 PostCSS 插件 [ 用于指定 CSS 文件的字符编码 ]
                        postcssPlugin: "internal:charset-removal",
                        AtRule: {
                            charset: (atRule) => {
                                // 匹配移除
                                if (atRule.name === "charset") {
                                    atRule.remove();
                                }
                            },
                        },
                    },
                ],
            },
        },
        // 服务器配置
        server: {
            // 端口号
            port: VITE_PORT,
            // 服务启动时是否自动打开浏览器 true false
            open: false,
            // 允许跨域
            cors: true,
            // 是否开启 https
            https: false,
            // 监听所有地址
            host: "0.0.0.0",
            // 代理设置，用于解决跨域请求的问题
            proxy: proxy,
        },
    });
};
