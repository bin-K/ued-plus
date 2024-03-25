## Button 按钮

常用的操作按钮

### 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<ued-button>默认按钮</ued-button>
<ued-button type="primary">主要按钮</ued-button>
<ued-button type="success">成功按钮</ued-button>
<ued-button type="warning">警告按钮</ued-button>
<ued-button type="danger">危险按钮</ued-button>
<ued-button type="info">信息按钮</ued-button>

<br>
<br>

<ued-button plain>默认按钮</ued-button>
<ued-button type="primary" plain>主要按钮</ued-button>
<ued-button type="success" plain>成功按钮</ued-button>
<ued-button type="warning" plain>警告按钮</ued-button>
<ued-button type="danger" plain>危险按钮</ued-button>
<ued-button type="info" plain>信息按钮</ued-button>

<br>
<br>

<ued-button round>默认按钮</ued-button>
<ued-button type="primary" round>主要按钮</ued-button>
<ued-button type="success" round>成功按钮</ued-button>
<ued-button type="warning" round>警告按钮</ued-button>
<ued-button type="danger" round>危险按钮</ued-button>
<ued-button type="info" round>信息按钮</ued-button>

<br>
<br>

<ued-button circle></ued-button>
<ued-button type="primary" circle></ued-button>
<ued-button type="success" circle></ued-button>
<ued-button type="warning" circle></ued-button>
<ued-button type="danger" circle></ued-button>
<ued-button type="info" circle></ued-button>

::: details 显示代码

```vue
<template>
  <div>
    <ued-button>默认按钮</ued-button>
    <ued-button type="primary">主要按钮</ued-button>
    <ued-button type="success">成功按钮</ued-button>
    <ued-button type="warning">警告按钮</ued-button>
    <ued-button type="danger">危险按钮</ued-button>
    <ued-button type="info">信息按钮</ued-button>
  </div>

  <div>
    <ued-button plain>默认按钮</ued-button>
    <ued-button type="primary" plain>主要按钮</ued-button>
    <ued-button type="success" plain>成功按钮</ued-button>
    <ued-button type="warning" plain>警告按钮</ued-button>
    <ued-button type="danger" plain>危险按钮</ued-button>
    <ued-button type="info" plain>信息按钮</ued-button>
  <div>

  <div>
    <ued-button round>默认按钮</ued-button>
    <ued-button type="primary" round>主要按钮</ued-button>
    <ued-button type="success" round>成功按钮</ued-button>
    <ued-button type="warning" round>警告按钮</ued-button>
    <ued-button type="danger" round>危险按钮</ued-button>
    <ued-button type="info" round>信息按钮</ued-button>
  </div>
  <div>
    <ued-button circle></ued-button>
    <ued-button type="primary" circle></ued-button>
    <ued-button type="success" circle></ued-button>
    <ued-button type="warning" circle></ued-button>
    <ued-button type="danger" circle></ued-button>
    <ued-button type="info" circle></ued-button>
  </div>
</template>
```

:::
