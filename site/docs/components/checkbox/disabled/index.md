## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

你只需要为单选框设置 `disabled` 属性就能控制其禁用状态。

可以单独给checkbox设置，也可以给`checkbox-group`设置

<div class="common-content checkbox-content">
  <div class="checkbox-diabled-single">
    <ued-checkbox v-model="checkedDisabled" disabled label="Disabled And Selected" />
    <ued-checkbox v-model="checkedDisabled1" label="Not Disabled" />
    <ued-checkbox v-model="checkedDisabled2" disabled label="Disabled" />
  </div>

  <div class="checkbox-disabled-group">
    <ued-checkbox-group v-model="checkedDisabledList" disabled>
      <ued-checkbox value="Value A" label="Option 1" />
      <ued-checkbox value="Value B" label="Option 2" />
      <ued-checkbox value="Value C" label="Option 3"  />
      <ued-checkbox value="Value D" label="Option 4" />
    </ued-checkbox-group>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="common-content checkbox-content">
		<div class="checkbox-diabled-single">
			<ued-checkbox v-model="checked" disabled label="Disabled And Selected" />
			<ued-checkbox v-model="checked1" label="Not Disabled" />
			<ued-checkbox v-model="checked2" disabled label="Disabled" />
		</div>

		<div class="checkbox-disabled-group">
			<ued-checkbox-group v-model="checkList" disabled>
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
const checked2 = ref(false)

const checkList = ref(['Value A', 'Value D'])
</script>
```

:::
