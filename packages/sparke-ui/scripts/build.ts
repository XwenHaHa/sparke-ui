// 读取vite配置
import fs from "fs-extra";
import path from "path";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";

const buildAll = async () => {
  // 1.导入vite.config中的配置，使用vite的build方法进行全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);

  // 2.读取文件夹，遍历组件库文件夹
  const srcDir = path.resolve(__dirname, "../src");

  const outDistDir = config.build!.outDir;
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 过滤出文件夹中包含index.ts的文件夹
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    // 3.为每个模块定制不同的编译规则
    .forEach(async (name) => {
      // name:每个文件夹的名称
      const outDir = path.resolve(outDistDir!, name);
      const custom = {
        lib: {
          entry: path.join(srcDir, name),
          name,
          fileName: "index",
          format: ["esm", "umd"],
        },
        outDir,
      };
      Object.assign(config.build!, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig);
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
