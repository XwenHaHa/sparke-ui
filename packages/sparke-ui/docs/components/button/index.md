# Button 按钮

常用操作按钮

## 基础用法

使用`size`、`color`、`plain`、`round`属性来定义 Button 的样式。

:::demo

```vue
<template>
  <div style="margin-bottom:20px;">
    <SButton>默认按钮</SButton>
    <SButton color="blue">主要按钮</SButton>
    <SButton color="green">绿色按钮</SButton>
    <SButton color="gray">灰色按钮</SButton>
    <SButton color="yellow">黄色按钮</SButton>
    <SButton color="red">红色按钮</SButton>
  </div>
  <div style="margin-bottom:20px;">
    <SButton plain>朴素按钮</SButton>
    <SButton color="blue" plain>主要按钮</SButton>
    <SButton color="green" plain>绿色按钮</SButton>
    <SButton color="gray" plain>灰色按钮</SButton>
    <SButton color="yellow" plain>黄色按钮</SButton>
    <SButton color="red" plain>红色按钮</SButton>
  </div>
  <div style="margin-bottom:20px;">
    <SButton size="small">小按钮</SButton>
    <SButton size="medium">中按钮</SButton>
    <SButton size="large">大按钮</SButton>
  </div>
  <div style="margin-bottom:20px;">
    <SButton round>默认按钮</SButton>
    <SButton color="blue" round plain icon="search">搜索按钮</SButton>
    <SButton color="green" round plain icon="edit">编辑按钮</SButton>
    <SButton color="gray" round plain icon="check">成功按钮</SButton>
    <SButton color="yellow" round plain icon="message">提示按钮</SButton>
    <SButton color="red" round plain icon="delete">删除按钮</SButton>
  </div>
  <div style="margin-bottom:20px;">
    <SButton round icon="search"></SButton>
    <SButton color="blue" round icon="edit"></SButton>
    <SButton color="green" round icon="check"></SButton>
    <SButton color="gray" round icon="message"></SButton>
    <SButton color="yellow" round icon="star"></SButton>
    <SButton color="red" round icon="delete"></SButton>
  </div>
</template>
```

:::

## 图标按钮

设置 icon 属性即可，可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

:::demo

```vue
<template>
  <div class="flex flex-row">
    <SButton color="blue" icon="edit"></SButton>
    <SButton color="blue" icon="share"></SButton>
    <SButton color="blue" icon="delete"></SButton>
    <SButton color="blue" icon="search">搜索按钮</SButton>
    <SButton color="blue" icon="upload">上传按钮</SButton>
  </div>
</template>
```
