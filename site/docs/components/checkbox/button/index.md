## 按钮样式

按钮样式的多选组合。

只需要把 `ued-checkbox` 元素换成 `ued-checkbox-button` 元素即可

如果需要改变按钮选中时的背景色和字体颜色，可以在 `checkbox-group` 分别设置 `fill` 和 `text-color` 属性

<div class="common-content checkbox-content">
  <div class="checkbox-button-basic">
    <ued-checkbox-button v-model="button1" value="button1" />
    <ued-checkbox-button v-model="button2" value="button2" />
    <ued-checkbox-button v-model="button3" value="button3" />
  </div>
  <div class="checkbox-button-group">
    <ued-checkbox-group v-model="buttonGroup">
      <ued-checkbox-button value="button1" />
      <ued-checkbox-button value="button2" />
      <ued-checkbox-button value="button3" />
    </ued-checkbox-group>
  </div>
  <div class="checkbox-button-size-basic">
    <ued-checkbox-group v-model="large" size="large">
      <ued-checkbox-button value="button1" />
      <ued-checkbox-button value="button2" />
      <ued-checkbox-button value="button3" />
    </ued-checkbox-group>
  </div>
  <div class="checkbox-button-size-basic">
    <ued-checkbox-group v-model="small" size="small">
      <ued-checkbox-button value="button1" />
      <ued-checkbox-button value="button2" disabled />
      <ued-checkbox-button value="button3" />
    </ued-checkbox-group>
  </div>
  <div class="checkbox-button-size-basic">
    <ued-checkbox-group
      v-model="style"
      fill="#67c23a"
      text-color="rgba(0, 0, 0, 1)"
    >
      <ued-checkbox-button value="button1" />
      <ued-checkbox-button value="button2" />
      <ued-checkbox-button value="button3" />
    </ued-checkbox-group>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="common-content checkbox-content">
		<div class="checkbox-button-basic">
			<ued-checkbox-button v-model="button1" value="button1" />
			<ued-checkbox-button v-model="button2" value="button2" />
			<ued-checkbox-button v-model="button3" value="button3" />
		</div>
		<div class="checkbox-button-group">
			<ued-checkbox-group v-model="buttonGroup">
				<ued-checkbox-button value="button1" />
				<ued-checkbox-button value="button2" />
				<ued-checkbox-button value="button3" />
			</ued-checkbox-group>
		</div>
		<div class="checkbox-button-size-basic">
			<ued-checkbox-group v-model="large" size="large">
				<ued-checkbox-button value="button1" />
				<ued-checkbox-button value="button2" />
				<ued-checkbox-button value="button3" />
			</ued-checkbox-group>
		</div>
		<div class="checkbox-button-size-basic">
			<ued-checkbox-group v-model="small" size="small">
				<ued-checkbox-button value="button1" />
				<ued-checkbox-button value="button2" disabled />
				<ued-checkbox-button value="button3" />
			</ued-checkbox-group>
		</div>
		<div class="checkbox-button-size-basic">
			<ued-checkbox-group
				v-model="style"
				fill="#67c23a"
				text-color="rgba(0, 0, 0, 1)"
			>
				<ued-checkbox-button value="button1" />
				<ued-checkbox-button value="button2" />
				<ued-checkbox-button value="button3" />
			</ued-checkbox-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const button1 = ref(true)
const button2 = ref(false)
const button3 = ref(false)
const buttonGroup = ref(['button1'])
const large = ref(['button1'])
const small = ref(['button1'])
const style = ref(['button1'])
</script>
```

:::
