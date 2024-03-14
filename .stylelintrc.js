export default {
    // 将停止在父级目录中寻找其他配置文件。
    root: true,
    // Stylelint 将以错误级别检查代码。
    defaultSeverity: "error",
    plugins: [
        // 定义样式属性的顺序
        "stylelint-order",
        // 支持处理 Sass（.scss 和 .sass）文件。
        "stylelint-scss",
    ],
    extends: [
        // Stylelint 的标准可共享配置，常见的规则。
        "stylelint-config-standard",
        // Stylelint 与 HTML 相关的规则。
        "stylelint-config-html/html",
        // Stylelint 与 Vue 文件中的样式规则。
        "stylelint-config-html/vue",
        // 添加对 Sass 的支持
        "stylelint-config-recommended-scss",
    ],
    rules: {
        // 允许前空行
        "declaration-empty-line-before": null,
        // 禁止在覆盖高特异性选择器之后出现低特异性选择器
        "no-descending-specificity": null,
        // 禁止空源码
        "no-empty-source": null,
        // 禁止字体族中缺少泛型族关键字
        "font-family-no-missing-generic-family-keyword": null,
        // 禁止未知的@规则
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "tailwind",
                    "apply",
                    "variants",
                    "responsive",
                    "screen",
                    "function",
                    "if",
                    "each",
                    "include",
                    "mixin",
                    "forward",
                ],
            },
        ],
        // 不允许未知函数
        "function-no-unknown": null,
        // 不允许未知单位
        "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
        // 标记 CSS 规范中未知属性值
        "declaration-property-value-no-unknown": true,
        // 不允许选择器使用供应商前缀
        "selector-no-vendor-prefix": null,
        // 指定关键帧名称的模式
        "keyframes-name-pattern": null,
        // 指定类选择器的模式
        "selector-class-pattern": null,
        // 不允许值使用供应商前缀
        "value-no-vendor-prefix": null,
        // 要求或禁止在规则之前的空行
        "rule-empty-line-before": [
            "always",
            { ignore: ["after-comment", "first-nested"] },
        ],
    },
    // 要忽略的文件和文件类型
    ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
    // 针对特定文件类型的额外配置
    overrides: [
        {
            files: ["*.vue", "**/*.vue", "*.html", "**/*.html"],
            customSyntax: "postcss-html",
            rules: {
                // 禁止未知的伪类选择器
                "selector-pseudo-class-no-unknown": [
                    true,
                    { ignorePseudoClasses: ["deep", "global"] },
                ],
                // 禁止未知的伪元素选择器
                "selector-pseudo-element-no-unknown": [
                    true,
                    {
                        ignorePseudoElements: [
                            "v-deep",
                            "v-global",
                            "v-slotted",
                        ],
                    },
                ],
            },
        },
    ],
};
