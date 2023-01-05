import { createApp } from "vue/dist/vue.esm-browser";
import SparkeUI from "./entry";

createApp({
  template: `
    <div>
    <SButton>默认按钮</SButton>
    <SButton color='blue'>蓝色按钮</SButton>
    <SButton color='green'>绿色按钮</SButton>
    <SButton color='gray'>灰色按钮</SButton>
    <SButton color='yellow'>黄色按钮</SButton>
    <SButton color='red'>红色按钮</SButton>
    </div>
    <div style="margin-bottom:20px">
    <SButton plain>默认按钮</SButton>
    <SButton color='blue' plain>蓝色按钮</SButton>
    <SButton color='green' plain>绿色按钮</SButton>
    <SButton color='gray' plain>灰色按钮</SButton>
    <SButton color='yellow' plain>黄色按钮</SButton>
    <SButton color='red' plain>红色按钮</SButton>
    </div>
    <div style="margin-bottom:20px">
    <SButton color='blue' size='small' plain>小按钮</SButton>
    <SButton color='blue' size='medium' plain>中按钮</SButton>
    <SButton color='blue' size='large' plain>大按钮</SButton>
    </div>
    <div style="margin-bottom:20px">
    <SButton plain round>默认按钮</SButton>
    <SButton color='blue' plain round>蓝色按钮</SButton>
    <SButton color='green' plain round>绿色按钮</SButton>
    <SButton color='gray' plain round>灰色按钮</SButton>
    <SButton color='yellow' plain round>黄色按钮</SButton>
    <SButton color='red' plain round>红色按钮</SButton>
    </div>
    <div style="margin-bottom:20px">
    <SButton plain round icon="search"></SButton>
    <SButton color='blue' plain round icon="edit"></SButton>
    <SButton color='green' plain round icon="check"></SButton>
    <SButton color='gray' plain round icon="message"></SButton>
    <SButton color='yellow' plain round icon="star"></SButton>
    <SButton color='red' plain round icon="delete"></SButton>
    </div>
    `,
})
  .use(SparkeUI)
  .mount("#app");
