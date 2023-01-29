<p align="center">
<img src="../public/fire.png" style="width:200px;" />
</p>

<h1 align="center">Sparke-UI</h1>

<p align="center">
基于Vite构建的轻量级Vue3组件库
</p>

<br>

## 特性

探索前端工程化的组件库项目

- ⚡️ 基于 Vite + Vue3 + TypeScript 进行开发
- 💪 采用 Monorepo 进行管理 (pnpm workspace)
- 🌟 同时支持 JSX 与 Vue 单文件组件
- 🔍 使用 Eslint + Prettier + Husky 进行语法检查
- 🔨Vitepress + Vercel 进行文档网站搭建
- 🤝 基于 Action CI 实现持续集成与交付

## 安装

```bash
#npm
npm install sparke-ui

#yarn
yarn add sparke-ui

#pnpm
pnpm install sparke-ui
```

## 快速开始

```js
import Vue from "vue";
import SparkeUI from "sparke-ui";
const App = {
  template: `<SButton/>`,
};
createApp(App).use(SparkeUI).mount('#app')
```
