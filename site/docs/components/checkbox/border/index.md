## 带有边框

设置 `border` 属性为 `true` 可以渲染为带有边框的单选框。

可以给`checkbox`单独设置属性，也可以给`checkbox-group`设置，此时`checkbox`的 `border` 属性无效

<div class="common-content checkbox-content">
  <div class="checkbox-border-group">
    <ued-checkbox-group v-model="checkBorderList" size="large">
      <ued-checkbox border value="Value A" label="Option 1" />
      <ued-checkbox value="Value B" label="Option 2" />
    </ued-checkbox-group>
  </div>
  <div class="checkbox-border-group">
    <ued-checkbox-group v-model="checkBorderList1" border>
      <ued-checkbox value="Value A" label="Option 1" />
      <ued-checkbox value="Value B" label="Option 2" />
    </ued-checkbox-group>
  </div>
  <div class="checkbox-border-group">
    <ued-checkbox-group v-model="checkBorderList2" border disabled size="small">
      <ued-checkbox border value="Value A" label="Option 1" />
      <ued-checkbox value="Value B" label="Option 2" />
    </ued-checkbox-group>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="common-content checkbox-content">
		<div class="checkbox-border-group">
			<ued-checkbox-group v-model="checkList" size="large">
				<ued-checkbox border value="Value A" label="Option 1" />
				<ued-checkbox value="Value B" label="Option 2" />
			</ued-checkbox-group>
		</div>
		<div class="checkbox-border-group">
			<ued-checkbox-group v-model="checkList1" border>
				<ued-checkbox value="Value A" label="Option 1" />
				<ued-checkbox value="Value B" label="Option 2" />
			</ued-checkbox-group>
		</div>
		<div class="checkbox-border-group">
			<ued-checkbox-group v-model="checkList2" border disabled size="small">
				<ued-checkbox border value="Value A" label="Option 1" />
				<ued-checkbox value="Value B" label="Option 2" />
			</ued-checkbox-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkList = ref(['Value A'])
const checkList1 = ref(['Value A'])
const checkList2 = ref(['Value A'])
</script>
```

:::
