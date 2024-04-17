## 文字按钮

没有边框和背景色的按钮。

<div class="common-content button-content button-text">
  <div class="button-text-defalut">
    <ued-button
      v-for="item in buttonType"
      :key="item.type"
      :type="item.type"
      text
    >
      {{ item.text }}
    </ued-button>
  </div>
  <div class="button-text-bg">
    <ued-button
      v-for="item in buttonType"
      :key="item.type"
      :type="item.type"
      text
      bg
    >
      {{ item.text }}
    </ued-button>
  </div>
  <div class="button-text-disabled">
    <ued-button
      v-for="item in buttonType"
      :key="item.type"
      :type="item.type"
      text
      disabled
    >
      {{ item.text }}
    </ued-button>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="button-content button-text">
		<div class="button-text-defalut">
			<ued-button
				v-for="item in buttonType"
				:key="item.type"
				:type="item.type"
				text
			>
				{{ item.text }}
			</ued-button>
		</div>
		<div class="button-text-bg">
			<ued-button
				v-for="item in buttonType"
				:key="item.type"
				:type="item.type"
				text
				bg
			>
				{{ item.text }}
			</ued-button>
		</div>
		<div class="button-text-disabled">
			<ued-button
				v-for="item in buttonType"
				:key="item.type"
				:type="item.type"
				text
				disabled
			>
				{{ item.text }}
			</ued-button>
		</div>
	</div>
</template>
<script lang="ts" setup>
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
```

:::
