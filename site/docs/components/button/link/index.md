## 链接按钮

<div class="common-content button-content button-link">
  <div class="button-link-defalut">
    <ued-button v-for="item in buttonType" :key="item.type" :type="item.type" link>
      {{ item.text }}
    </ued-button>
  </div>
  <div class="button-link-link">
    <ued-button v-for="item in buttonType" :key="item.type" :type="item.type" link disabled>
      {{ item.text }}
    </ued-button>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div class="button-link-defalut">
    <ued-button link>默认按钮</ued-button>
    <ued-button type="primary" link>主要按钮</ued-button>
    <ued-button type="success" link>成功按钮</ued-button>
    <ued-button type="warning" link>警告按钮</ued-button>
    <ued-button type="danger" link>危险按钮</ued-button>
    <ued-button type="info" link>信息按钮</ued-button>
  </div>

  <div class="button-link-disbaled">
    <ued-button link disabled>默认按钮</ued-button>
    <ued-button type="primary" link disabled>主要按钮</ued-button>
    <ued-button type="success" link disabled>成功按钮</ued-button>
    <ued-button type="warning" link disabled>警告按钮</ued-button>
    <ued-button type="danger" link disabled>危险按钮</ued-button>
    <ued-button type="info" link disabled>信息按钮</ued-button>
  <div>

</template>
```

:::
