## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<script setup>
import { ref } from 'vue'
const buttonType = ref([
	{ type: '', text: '默认按钮' },
	{ type: 'primary', text: '主要按钮' },
	{ type: 'success', text: '成功按钮' },
	{ type: 'warning', text: '警告按钮' },
	{ type: 'danger', text: '危险按钮' },
	{ type: 'info', text: '信息按钮' },
])
</script>

<div class="button-basic">
  <div class="button-basic-defalut">
   <ued-button 
      v-for="item in buttonType" 
      :key="item.type" 
      :type="item.type"
    >
      {{ item.text }}
    </ued-button>
  </div>
  <div class="button-basic-plain">
    <ued-button 
      v-for="item in buttonType" 
      :key="item.type" 
      :type="item.type" 
      plain
    >
      {{ item.text }}
    </ued-button>
  </div>
  <div class="button-basic-round">
    <ued-button 
      v-for="item in buttonType" 
      :key="item.type" 
      :type="item.type" 
      round
    >
      {{ item.text }}
    </ued-button>
  </div>
  <div class="button-basic-circle">
    <ued-button 
      v-for="item in buttonType" 
      :key="item.type" 
      :type="item.type" 
      circle 
    />
  </div>
</div>

<style>
.button-basic {
	display: flex;
	flex-direction: column;
  border: 1px solid #e4e7ed;
	padding: 30px;
	border-radius: 5px;
}

.button-basic > div {
	margin-bottom: 15px;
}

.button-basic > div:last-child {
	margin: 0;
}

</style>

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
    <ued-button circle />
    <ued-button type="primary" circle />
    <ued-button type="success" circle />
    <ued-button type="warning" circle />
    <ued-button type="danger" circle />
    <ued-button type="info" circle />
  </div>
</template>
```

:::
