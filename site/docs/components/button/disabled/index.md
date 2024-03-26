## 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

<div class="button-disabled">
  <div class="button-disabled-defalut">
    <ued-button v-for="item in buttonType" :key="item.type" :type="item.type" disabled>
      {{ item.text }}
    </ued-button>
  </div>
  <div class="button-disabled-plain">
    <ued-button v-for="item in buttonType" :key="item.type" :type="item.type" disabled plain>
      {{ item.text }}
    </ued-button>
  </div>
</div>

<style>
.button-disabled {
	display: flex;
	flex-direction: column;
  border: 1px solid #e4e7ed;
	padding: 30px;
	border-radius: 5px;
}

.button-disabled > div {
	margin-bottom: 15px;
}

.button-disabled > div:last-child {
	margin: 0;
}

</style>

::: details 显示代码

```vue
<template>
  <div>
    <ued-button disabled>默认按钮</ued-button>
    <ued-button type="primary" disabled>主要按钮</ued-button>
    <ued-button type="success" disabled>成功按钮</ued-button>
    <ued-button type="warning" disabled>警告按钮</ued-button>
    <ued-button type="danger" disabled>危险按钮</ued-button>
    <ued-button type="info" disabled>信息按钮</ued-button>
  </div>

  <div>
    <ued-button disabled plain>默认按钮</ued-button>
    <ued-button type="primary" disabled plain>主要按钮</ued-button>
    <ued-button type="success" disabled plain>成功按钮</ued-button>
    <ued-button type="warning" disabled plain>警告按钮</ued-button>
    <ued-button type="danger" disabled plain>危险按钮</ued-button>
    <ued-button type="info" disabled plain>信息按钮</ued-button>
  <div>

</template>
```

:::
