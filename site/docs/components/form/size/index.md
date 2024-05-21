## 尺寸控制

表单中的所有子组件都继承了该表单的 `size` 属性。 同样，form-item 也有一个 `size` 属性。

如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的 size 属性，直接为这个表单项或表单组件设置自己的 `size` 属性即可

<div class="common-content form-content form-label-position">
  <ued-radio-group v-model="size" aria-label="label position">
    <ued-radio-button value="small">small</ued-radio-button>
    <ued-radio-button value="default">default</ued-radio-button>
    <ued-radio-button value="large">large</ued-radio-button>
  </ued-radio-group>
  <ued-form :model="formSize" label-width="auto" :size="size">
    <ued-form-item label="radio">
      <ued-radio-group v-model="formSize.radio">
        <ued-radio :value="1" label="radio1" />
        <ued-radio :value="2" label="radio2" />
      </ued-radio-group>
    </ued-form-item>
    <ued-form-item label="radio-button">
      <ued-radio-group v-model="formSize.radioButton">
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
		<ued-radio-group v-model="size" aria-label="label position">
			<ued-radio-button value="small">small</ued-radio-button>
			<ued-radio-button value="default">default</ued-radio-button>
			<ued-radio-button value="large">large</ued-radio-button>
		</ued-radio-group>
		<ued-form :model="formSize" label-width="auto" :size="size">
			<ued-form-item label="radio">
				<ued-radio-group v-model="formSize.radio">
					<ued-radio :value="1" label="radio1" />
					<ued-radio :value="2" label="radio2" />
				</ued-radio-group>
			</ued-form-item>
			<ued-form-item label="radio-button">
				<ued-radio-group v-model="formSize.radioButton">
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

const size = ref<FormPropsType['size']>('default')
const formSize = reactive({
	radio: 1,
	radioButton: 'button1',
})
</script>
```

:::
