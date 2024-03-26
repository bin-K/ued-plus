## 链接按钮

<div class="button-link">
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

<style>
.button-link {
	display: flex;
	flex-direction: column;
  border: 1px solid #e4e7ed;
	padding: 30px;
	border-radius: 5px;
}

.button-link > div {
	margin-bottom: 15px;
}

.button-link > div:last-child {
	margin: 0;
}

</style>

::: details 显示代码

```vue
<template>
  <div>
    <ued-button link>默认按钮</ued-button>
    <ued-button type="primary" link>主要按钮</ued-button>
    <ued-button type="success" link>成功按钮</ued-button>
    <ued-button type="warning" link>警告按钮</ued-button>
    <ued-button type="danger" link>危险按钮</ued-button>
    <ued-button type="info" link>信息按钮</ued-button>
  </div>

  <div>
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
