import { defineComponent } from "vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss(),
  ],
});
