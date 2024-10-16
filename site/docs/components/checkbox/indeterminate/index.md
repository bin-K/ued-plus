## 中间状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

<div class="common-content checkbox-content">
  <div class="checkbox-indeterminate-group">
    <ued-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >
      Check all
    </ued-checkbox>
    <ued-checkbox-group v-model="checkList" @change="handleCheckedListChange">
      <ued-checkbox v-for="l in list" :key="l" :value="l" :label="l" />
    </ued-checkbox-group>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="common-content checkbox-content">
		<div class="checkbox-indeterminate-group">
			<ued-checkbox
				v-model="checkAll"
				:indeterminate="isIndeterminate"
				@change="handleCheckAllChange"
			>
				Check all
			</ued-checkbox>
			<ued-checkbox-group v-model="checkList" @change="handleCheckedListChange">
				<ued-checkbox v-for="l in list" :key="l" :value="l" :label="l" />
			</ued-checkbox-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkAll = ref(false)
const isIndeterminate = ref(true)
const list = ['Value A', 'Value B', 'Value C', 'Value D']
const checkList = ref(['Value A', 'Value B'])

const handleCheckAllChange = (val: boolean) => {
	checkList.value = val ? list : []
	isIndeterminate.value = false
}

const handleCheckedListChange = (value: string[]) => {
	const checkedCount = value.length
	checkAll.value = checkedCount === list.length
	isIndeterminate.value = checkedCount > 0 && checkedCount < list.length
}
</script>
```

:::
