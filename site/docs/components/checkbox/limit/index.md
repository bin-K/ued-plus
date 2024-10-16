## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

<div class="common-content checkbox-content">
  <div class="checkbox-limit-group">
    <ued-checkbox-group v-model="checkLimitList" :max="2" :min="1">
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
		<div class="checkbox-limit-group">
			<ued-checkbox-group v-model="checkList" :max="2" :min="1">
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
const checkList = ref(['Value A', 'Value B'])
</script>
```

:::
