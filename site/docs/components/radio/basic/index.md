## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

要使用 Radio 组件，只需要设置v-model绑定变量， 选中意味着变量的值为相应 Radio value属性的值， value可以是String、Number 或 Boolean。

<div class="common-content radio-content">
  <div class="radio-basic-single">
    <ued-radio v-model="radioBasic" :value="1" label="radio1" />
    <ued-radio v-model="radioBasic" :value="2">radio2</ued-radio>
  </div>
  <div class="radio-basic-group">
    <ued-radio-group v-model="radioGroupBasic">
      <ued-radio :value="1" label="radio1" />
      <ued-radio :value="2" label="radio2" />
    </ued-radio-group>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="radio-content">
		<div class="radio-basic-single">
			<ued-radio v-model="radioBasic" :value="1" label="radio1" />
			<ued-radio v-model="radioBasic" :value="2">radio2</ued-radio>
		</div>
		<div class="radio-basic-group">
			<ued-radio-group v-model="radioGroupBasic">
				<ued-radio :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const radioBasic = ref(1)
const radioGroupBasic = ref(1)
</script>
```

:::
