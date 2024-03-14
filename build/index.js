import vue from "@vitejs/plugin-vue";
import AutoImportPlugin from "./plugins/auto-import.plugin.js";

// npm install consola
export const plugins = [
    vue(),

    // 支持在 Vue 3 项目中使用 JSX 语法
    // npm install --save-dev @vitejs/plugin-vue-jsx
    // vueJsx(),

    // 扩展 Vue 3 的 setup 函数，以提供更丰富的功能和语法糖
    // npm install --save-dev vite-plugin-vue-setup-extend-plus
    // vueSetupExtend(),

    // 处理 SVG 文件的加载和导入
    // npm install --save-dev vite-svg-loader
    // svgLoader(),

    // 处理 SVG 图标的自定义插件或模块
    // 自带
    // svgIconsPlugin,

    // 自动导入 按需导入
    //
    AutoImportPlugin,

    // 提供对不支持现代浏览器的旧版本浏览器的支持
    // npm install --save-dev @vitejs/plugin-legacy
    // legacy({
    //     targets: ["defaults", "not IE 11"],
    // }),
];
