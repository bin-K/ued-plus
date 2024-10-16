## 尺寸大小

设置 `size` 属性可以控制大小尺寸，可选值: `large`、`default`、`small`

可以单独给 `checkbox` 设置，也可以给 `checkbox-group`设置

<div class="common-content checkbox-content">
  <div class="checkbox-size">
    <div>
      <ued-checkbox v-model="checkedSize" label="Option 1" size="large" />
      <ued-checkbox v-model="checkedSize1" label="Option 2" size="large" />
    </div>
    <div>
      <ued-checkbox v-model="checkedSize" label="Option 1" />
      <ued-checkbox v-model="checkedSize1" label="Option 2" />
    </div>
    <div>
      <ued-checkbox v-model="checkedSize" label="Option 1" size="small" />
      <ued-checkbox v-model="checkedSize1" label="Option 2" size="small" />
    </div>
  </div>
	<div class="checkbox-size-group">
		<ued-checkbox-group v-model="checkedSizeList" size="large">
			<ued-checkbox value="Value A" label="Option 1" />
			<ued-checkbox value="Value B" label="Option 2" />
			<ued-checkbox value="Value C" label="Option 3" />
			<ued-checkbox value="Value D" label="Option 4" />
		</ued-checkbox-group>
	</div>
</div>

::: details 显示代码

```vue
<template>
	<div class="common-content checkbox-content">
		<div class="checkbox-size-single">
			<div>
				<ued-checkbox v-model="checked" label="Option 1" size="large" />
				<ued-checkbox v-model="checked1" label="Option 2" size="large" />
			</div>
			<div>
				<ued-checkbox v-model="checked" label="Option 1" />
				<ued-checkbox v-model="checked1" label="Option 2" />
			</div>
			<div>
				<ued-checkbox v-model="checked" label="Option 1" size="small" />
				<ued-checkbox v-model="checked1" label="Option 2" size="small" />
			</div>
		</div>
		<div class="checkbox-size-group">
			<ued-checkbox-group v-model="checkList" size="large">
				<ued-checkbox value="Value A" label="Option 1" />
				<ued-checkbox value="Value B" label="Option 2" />
				<ued-checkbox value="Value C" label="Option 3" />
				<ued-checkbox value="Value D" label="Option 4" />
			</ued-checkbox-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(true)
const checked1 = ref(false)
const checkList = ref(['Value A', 'Value D'])
</script>
```

:::
