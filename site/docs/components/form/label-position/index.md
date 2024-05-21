## 对齐方式

通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`、`right`， 当设为 `top` 时标签会置于表单域的顶部

<div class="common-content form-content form-label-position">
  <ued-radio-group v-model="labelPosition" aria-label="label position">
    <ued-radio-button value="left">Left</ued-radio-button>
    <ued-radio-button value="right">Right</ued-radio-button>
    <ued-radio-button value="top">Top</ued-radio-button>
  </ued-radio-group>
  <ued-form
    :model="formLabelPosition"
    label-width="auto"
    :label-position="labelPosition"
  >
    <ued-form-item label="radio">
      <ued-radio-group v-model="formLabelPosition.radio">
        <ued-radio :value="1" label="radio1" />
        <ued-radio :value="2" label="radio2" />
      </ued-radio-group>
    </ued-form-item>
    <ued-form-item label="radio-button">
      <ued-radio-group v-model="formLabelPosition.radioButton">
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
	<div class="common-content form-content form-label-position">
		<ued-radio-group v-model="labelPosition" aria-label="label position">
			<ued-radio-button value="left">Left</ued-radio-button>
			<ued-radio-button value="right">Right</ued-radio-button>
			<ued-radio-button value="top">Top</ued-radio-button>
		</ued-radio-group>
		<ued-form
			:model="formLabelPosition"
			label-width="auto"
			:label-position="labelPosition"
		>
			<ued-form-item label="radio">
				<ued-radio-group v-model="formLabelPosition.radio">
					<ued-radio :value="1" label="radio1" />
					<ued-radio :value="2" label="radio2" />
				</ued-radio-group>
			</ued-form-item>
			<ued-form-item label="radio-button">
				<ued-radio-group v-model="formLabelPosition.radioButton">
					<ued-radio-button value="button1" />
					<ued-radio-button value="button2" />
					<ued-radio-button value="button3" />
				</ued-radio-group>
			</ued-form-item>
		</ued-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormPropsType } from '@ued-plus/components'

const labelPosition = ref<FormPropsType['labelPosition']>('right')
const formLabelPosition = reactive({
	radio: 1,
	radioButton: 'button1',
})
</script>
```

:::
