## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

你只需要为单选框设置 `disabled` 属性就能控制其禁用状态。

可以单独给`radio`设置，也可以给`radio-group`设置

<div class="common-content radio-content">
  <div class="radio-disabled-group">
    <ued-radio-group v-model="disabled" disabled>
      <ued-radio :value="1" label="radio1" />
      <ued-radio :value="2" label="radio2" />
    </ued-radio-group>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="radio-content">
		<div class="radio-disabled-group">
			<ued-radio-group v-model="disabled" disabled>
				<ued-radio :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const disabled = ref(1)
</script>
```

:::
