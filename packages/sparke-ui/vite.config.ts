/// <reference types="vitest" />
import { defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    assetFileNames: "[name].[ext]",
    exports: "named",
    globals: {
      vue: "Vue",
    },
  },
};
export const config = {
  plugins: [vue(), vueJsx({}), Unocss()],
  build: {
    rollupOptions,
    minify: "terser", // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SparkeUI",
      fileName: "sparke-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
    outDir: "./dist",
  },
  test: {
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
} as UserConfig;

export default defineConfig(config as UserConfig);
