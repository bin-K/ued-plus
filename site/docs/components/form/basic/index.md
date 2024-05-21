## 基础表单

最基础的表单包括各种输入表单项，比如`input`、`select`、`radio`、`checkbox`等。

在每一个 `form` 组件中，你需要一个 `form-item` 字段作为输入项的容器，用于获取值与验证值。

<div class="common-content form-content form-basic">
  <ued-form :model="formBasic" label-width="auto" style="max-width: 600px">
    <ued-form-item label="radio">
      <ued-radio-group v-model="formBasic.radio">
        <ued-radio :value="1" label="radio1" />
        <ued-radio :value="2" label="radio2" />
      </ued-radio-group>
    </ued-form-item>
    <ued-form-item label="radio-button">
      <ued-radio-group v-model="formBasic.radioButton">
        <ued-radio-button value="button1" />
        <ued-radio-button value="button2" />
        <ued-radio-button value="button3" />
      </ued-radio-group>
    </ued-form-item>
  </ued-form>
</div>

::: details 显示代码

```vue
<template>
	<div class="common-content form-content form-basic">
		<ued-form :model="formBasic" label-width="auto" style="max-width: 600px">
			<ued-form-item label="radio">
				<ued-radio-group v-model="formBasic.radio">
					<ued-radio :value="1" label="radio1" />
					<ued-radio :value="2" label="radio2" />
				</ued-radio-group>
			</ued-form-item>
			<ued-form-item label="radio-button">
				<ued-radio-group v-model="formBasic.radioButton">
					<ued-radio-button value="button1" />
					<ued-radio-button value="button2" />
					<ued-radio-button value="button3" />
				</ued-radio-group>
			</ued-form-item>
		</ued-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formBasic = reactive({
	radio: 1,
	radioButton: 'button1',
})
</script>
```

:::
