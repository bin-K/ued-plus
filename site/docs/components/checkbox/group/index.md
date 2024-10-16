## 多选框组

`checkbox-group`元素能把多个 `checkbox` 管理为一组，只需要在 `Group` 中使用 `v-model` 绑定 `Array` 类型的变量即可。 只有一个选项时的默认值类型为 `Boolean`，当选中时值为`true`。 `ued-checkbox` 标签中的内容将成为复选框按钮之后的描述。

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

在 `ued-checkbox` 元素中定义 `v-model` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean`，选中为 `true`。 在 `ued-checkbox` 组件中，`value` 是选择框的值。 如果该组件下没有被传入内容，那么 `label` 将会作为 `checkbox` 按钮后的介绍。 `value` 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。

<div class="common-content checkbox-content">
  <div class="checkbox-basic-group">
    <ued-checkbox-group v-model="checkGroupList">
      <ued-checkbox value="Value A" label="Option 1" />
      <ued-checkbox value="Value B" label="Option 2" />
      <ued-checkbox value="Value C" label="Option 3" disabled />
      <ued-checkbox value="Value D" label="Option 4" disabled />
    </ued-checkbox-group>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="common-content checkbox-content">
		<div class="checkbox-basic-group">
			<ued-checkbox-group v-model="checkList">
				<ued-checkbox value="Value A" label="Option 1" />
				<ued-checkbox value="Value B" label="Option 2" />
				<ued-checkbox value="Value C" label="Option 3" disabled />
				<ued-checkbox value="Value D" label="Option 4" disabled />
			</ued-checkbox-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkList = ref(['Value A', 'Value D'])
</script>
```

:::
