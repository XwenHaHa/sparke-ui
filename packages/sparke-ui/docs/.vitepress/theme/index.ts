import Theme from "vitepress/theme";
import SparkeUI from "../../../src/entry";
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";
import "vitepress-theme-demoblock/theme/styles/index.css";
import "./style/var.css";
import "./style/demoblock.scss";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(SparkeUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};
