## 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

通过设置 `inline` 属性为 `true` 可以让表单域变为行内的表单域。

<div class="common-content form-content form-inline">
  <ued-form :model="formInline" label-width="auto" inline>
    <ued-form-item label="radio">
      <ued-radio-group v-model="formInline.radio">
        <ued-radio :value="1" label="radio1" />
        <ued-radio :value="2" label="radio2" />
      </ued-radio-group>
    </ued-form-item>
    <ued-form-item label="radio">
      <ued-radio-group v-model="formInline.radio">
        <ued-radio :value="1" label="radio1" />
        <ued-radio :value="2" label="radio2" />
      </ued-radio-group>
    </ued-form-item>
    <ued-form-item label="radio-button">
      <ued-radio-group v-model="formInline.radioButton">
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
	<div class="common-content form-content form-inline">
		<ued-form :model="formInline" label-width="auto" inline>
			<ued-form-item label="radio">
				<ued-radio-group v-model="formInline.radio">
					<ued-radio :value="1" label="radio1" />
					<ued-radio :value="2" label="radio2" />
				</ued-radio-group>
			</ued-form-item>
			<ued-form-item label="radio">
				<ued-radio-group v-model="formInline.radio">
					<ued-radio :value="1" label="radio1" />
					<ued-radio :value="2" label="radio2" />
				</ued-radio-group>
			</ued-form-item>
			<ued-form-item label="radio-button">
				<ued-radio-group v-model="formInline.radioButton">
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

const formInline = reactive({
	radio: 1,
	radioButton: 'button1',
})
</script>
```

:::
