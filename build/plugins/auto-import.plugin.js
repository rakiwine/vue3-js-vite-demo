// 自动导入你在代码中使用的库或工具函数
import AutoImport from "unplugin-auto-import/vite";
// 自动导入 Vue 组件
import Components from "unplugin-vue-components/vite";
// 解析和导入图标组件
import IconsResolver from "unplugin-icons/resolver";
// 自动安装和导入图标库中的图标
import Icons from "unplugin-icons/vite";
// 提供对 Element Plus UI 库组件的自动导入功能
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 自动识别并导入 Element Plus UI 组件的样式
import {
    ElementPlusResolve,
    createStyleImportPlugin,
} from "vite-plugin-style-import";

export default [
    // 实现自动导入
    AutoImport({
        // 指定生成的 TypeScript 声明文件路径
        dts: "./auto-import/auto-import.d.ts",
        // 按需导入库
        imports: ["vue", "vue-router"],
        // 按需导入文件类型
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        // 是否生成源映射文件 有助于在开发工具中调试
        sourceMap: true,
        // 配置 ESLint 的相关选项
        eslintrc: {
            // 禁用 ESLint
            enabled: false,
            // 指定 ESLint 路径
            filepath: "./auto-import/.eslintrc-auto-import.json",
            // true 可以解决 $store 和 $router 未定义
            globalsPropValue: true,
        },
        // 定义导入路径的解析器
        resolvers: [
            // 按需导入 Element Plus 组件的一个解析器
            ElementPlusResolver(),
            // 自动导入图标组件
            IconsResolver({
                prefix: "Icon",
            }),
        ],
    }),
    // 按需导入 Vue 组件
    Components({
        // 指定生成的 TypeScript 声明文件的路径
        dts: "./auto-import/components.d.ts",
        // 包含的文件类型和匹配规则
        include: [/\.vue$/, /\.vue\?vue/, /\.js$/, /\.jsx$/, /\.ts$/, /\.tsx$/],
        // 指定搜索组件的目录
        dirs: ["src/components", "src/common"],
        // 搜索子目录
        deep: true,
        // 允许导入的文件扩展名
        extensions: ["vue", "js", "jsx", "ts", "tsx"],
        // 配置导入路径的解析器
        resolvers: [
            // 按需导入 Element Plus 组件解析器导入样式为 "sass"
            ElementPlusResolver({
                importStyle: "sass",
            }),
            // 自动注册图标组件
            IconsResolver({
                enabledCollections: ["ep"],
            }),
        ],
        // 允许子目录作为组件的命名空间前缀。
        // directoryAsNamespace: false,
    }),
    Icons({
        autoInstall: true,
    }),
    createStyleImportPlugin({
        // 指定导入路径的解析器
        resolves: [ElementPlusResolve()],
    }),
];
