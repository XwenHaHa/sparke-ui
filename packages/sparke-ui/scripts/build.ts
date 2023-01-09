// 读取 vite 配置
import { config } from "../vite.config";
import {
  build,
  InlineConfig,
  defineConfig,
  UserConfig,
  BuildOptions,
} from "vite";
import * as fs from "fs-extra";
import * as path from "path";

const buildAll = async () => {
  // 全量打包
  build(defineConfig(config as UserConfig) as InlineConfig);

  // 读取组件文件夹遍历组件库文件夹
  const srcDir = path.resolve(__dirname, "../src/");
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 过滤文件只保留包含index.ts
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      console.log("name", name);

      // 文件夹遍历
      // 导出文件夹为 dist/<组件名>/ 例： dist/Button；
      // 导出模块名为： index.esm.js、index.umd.js；
      // 导出模块名为： <组件名> iffe 中绑定到全局的名字。
      const outDir = path.resolve(config?.build?.outDir as string, name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // 导出模块名
          fileName: `index`,
          formats: [`esm`, `umd`],
        },
        outDir,
      };

      Object.assign(config?.build as BuildOptions, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig);

      // 为每个子组件包定制一个自己的 package.json
      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
          "name": "sparke-ui/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js"
        }`,
        `utf-8`
      );
    });
};

buildAll();
