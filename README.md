# 项目名称: vue3-js-vite-demo

这是一个使用 Vue 3、JavaScript 和 Vite 构建的演示项目。

```shell
git config --global user.name
git config --global user.email

git config user.name
git config user.email

```

## 版本信息

-   版本号: 0.0.0
-   类型: 模块

## 依赖信息

这个项目依赖的软件包和版本如下：

# vue3-js-vite-demo

## Scripts

-   `dev`: vite
-   `build`: vite build
-   `preview`: vite preview
-   `lint:css`: stylelint '\*_/_.{css,scss}'
-   `format:css`: stylelint --fix '\*_/_.{css,scss}'
-   `lint:jtsvue`: eslint --ext .vue,.js ./ --max-warnings 0
-   `format:jtsvue`: prettier --write ./
-   `lint_cache`: eslint --ext .vue,.js ./ --max-warnings 0 --cache --cache-location node_modules/.cache/eslint/

## Dependencies

-   `autoprefixer`: ^10.4.17
-   `axios`: ^1.6.7
-   `consola`: ^3.2.3
-   `pinia`: ^2.1.7
-   `pinia-plugin-persist`: ^1.0.0
-   `unplugin-auto-import`: ^0.17.3
-   `unplugin-vue-components`: ^0.26.0
-   `vite-plugin-style-import`: ^2.0.0
-   `vue`: ^3.3.11
-   `vue-router`: ^4.2.5

## DevDependencies

-   `@vitejs/plugin-vue`: ^4.5.2
-   `eslint`: ^8.56.0
-   `eslint-config-prettier`: ^9.1.0
-   `eslint-plugin-import`: ^2.29.1
-   `eslint-plugin-prettier`: ^5.1.3
-   `eslint-plugin-vue`: ^9.20.1
-   `prettier`: ^3.2.4
-   `sass`: ^1.70.0
-   `sass-loader`: ^14.0.0
-   `stylelint`: ^16.2.0
-   `stylelint-config-html`: ^1.1.0
-   `stylelint-config-standard`: ^36.0.0
-   `stylelint-order`: ^6.0.4
-   `stylelint-scss`: ^6.0.0
-   `vite`: ^5.0.12

## 目录结构

### 输出目录结构到文件

```shell
tree /f > directory_structure.txt
```

### 移除 .idea 文件夹及其子文件夹和文件

```regexp
.idea[\s\S]*\n├─auto-import

auto-import
```

### 移除 node_modules 文件夹及其子文件夹和文件

```regexp
node_modules[\s\S]*\n├─public

public
```

### 更新目录结构

```plaintext
/ (项目根目录)
│  .env.development
│  .env.production
│  .eslintignore
│  .eslintrc.json
│  .gitignore
│  .prettierignore
│  .prettierrc.js
│  .stylelintignore
│  .stylelintrc.js
│  directory_structure.txt
│  Dockerfile
│  index.html
│  nginx.conf
│  package-lock.json
│  package.json
│  README.md
│  vite.config.js
│
├─auto-import
│      auto-import.d.ts
│      components.d.ts
│
├─build
│  │  index.js
│  │
│  └─plugins
│          auto-import.plugin.js
│
├─dist
│  │  index.html
│  │  vite.svg
│  │
│  └─assets
│          404-v2Xp6Z5n.js
│          index-apg_WL-Z.js
│          index-E8tWyTxz.js
│          index-NDJyug6k.css
│
├─public
│      vite.svg
│
└─src
    │  App.vue
    │  main.js
    │
    ├─api
    │      base.js
    │      permission.js
    │      _recycle.js
    │      _test.js
    │
    ├─assets
    │  │  vue.svg
    │  │
    │  └─styles
    │          element-plus.scss
    │          global.scss
    │          mixin.scss
    │          style.css
    │          variables.scss
    │
    ├─common
    ├─components
    │  │  AboutPage.vue
    │  │  HomePage.vue
    │  │
    │  ├─error
    │  │      404.vue
    │  │
    │  ├─redirect
    │  │      index.vue
    │  │
    │  └─test
    │          TestApi.vue
    │          TestDefault.vue
    │          TestPage.vue
    │
    ├─define
    │      constants.js
    │
    ├─libs
    │  └─http
    │          mainHttp.js
    │
    ├─router
    │  │  index.js
    │  │  routes.js
    │  │
    │  ├─constant
    │  │      404.js
    │  │      redirect.js
    │  │
    │  └─modules
    │          about.js
    │          home.js
    │          test.js
    │
    └─store
        │  index.js
        │
        └─modules
                api.js
                app.js
                permission.js
                user.js
```

## 简介

这个项目是一个 Vue 3 的演示项目，采用了现代的 JavaScript 和 Vite 作为构建工具。它旨在展示如何使用 Vue 3 构建一个现代化的 Web 应用程序。

## 安装依赖

在开始之前，请确保已经安装了 Node.js 和 npm。本项目需要 Node.js 版本为 16.19.1。

```bash
npm install
```

## 启动开发服务器

运行以下命令以在开发模式下启动 Vite 服务器。

```bash
npm run dev
```

## 构建项目

要构建生产版本的项目，请运行以下命令。

```bash
npm run build
```

## 预览构建结果

你可以使用以下命令在本地预览构建后的项目。

```bash
npm run preview
```

## 代码风格检查与格式化

项目包含了一些脚本来帮助你检查和格式化代码。

-   CSS 代码风格检查:

```bash
npm run lint:css
```

-   CSS 代码格式化:

```bash
npm run format:css
```

-   JavaScript 和 Vue 文件代码风格检查:

```bash
npm run lint:jtsvue
```

-   JavaScript 和 Vue 文件代码格式化:

```bash
npm run format:jtsvue
```

-   使用缓存的代码风格检查:

```bash
npm run lint_cache
```

## 注意事项

## 许可证

```
MIT License

版权所有 (c) 年份 2024 作者名 rakiwine

特此授予任何获得本软件和相关文档文件（“软件”）副本的人免费许可，以无限制地处理本软件的权利，包括但不限于使用、复制、修改、合并、出版、分发、再许可和/或销售本软件的副本，并允许本软件的接收方这样做。

上述版权声明和本许可声明应包含在本软件的所有副本或重要部分中。

本软件按“原样”提供，不提供任何明示或暗示的担保，包括但不限于适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权所有者对任何索赔、损害赔偿或其他责任，无论是合同诉讼、侵权诉讼还是其他行为，均不承担责任，除非有明确的书面约定。
```

```

```

```

```

```

```
