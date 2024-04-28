## 带有边框

设置 `border` 属性为 `true` 可以渲染为带有边框的单选框。

可以给`radio`单独设置属性，也可以给`radio-group`设置，此时`radio`的 `border` 属性无效

<div class="common-content radio-content">
  <div class="radio-border-group">
    <ued-radio-group v-model="border">
      <ued-radio border :value="1" label="radio1" />
      <ued-radio :value="2" label="radio2" />
    </ued-radio-group>
  </div>
  <div class="radio-border-group">
    <ued-radio-group v-model="borderGroup" border>
      <ued-radio :value="1" label="radio1" />
      <ued-radio :value="2" label="radio2" />
    </ued-radio-group>
  </div>
  <div class="radio-border-group">
    <ued-radio-group v-model="borderGroupDisabled" border disabled>
      <ued-radio :value="1" label="radio1" />
      <ued-radio :value="2" label="radio2" />
    </ued-radio-group>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="radio-content">
		<div class="radio-border-group">
			<ued-radio-group v-model="border">
				<ued-radio border :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
		<div class="radio-border-group">
			<ued-radio-group v-model="borderGroup" border>
				<ued-radio :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
		<div class="radio-border-group">
			<ued-radio-group v-model="borderGroupDisabled" border disabled>
				<ued-radio :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const border = ref(1)
const borderGroup = ref(1)
const borderGroupDisabled = ref(1)
</script>
```

:::
