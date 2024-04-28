## 大小尺寸

设置 `size` 属性可以控制大小尺寸，可选值: `large`、`default`、`small`

可以单独给 `radio` 设置，也可以给 `radio-group`设置

<div class="common-content radio-content">
  <div class="radio-size-group">
    <ued-radio-group v-model="largeRadio" size="large">
      <ued-radio :value="1" label="radio1" />
      <ued-radio :value="2" label="radio2" />
    </ued-radio-group>
  </div>
  <div class="radio-size-group">
    <ued-radio-group v-model="defaultRadio">
      <ued-radio :value="1" label="radio1" />
      <ued-radio :value="2" label="radio2" />
    </ued-radio-group>
  </div>
  <div class="radio-size-group">
    <ued-radio-group v-model="smallRadio">
      <ued-radio :value="1" label="radio1" size="small" />
      <ued-radio :value="2" label="radio2" size="small" />
    </ued-radio-group>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="radio-content">
		<div class="radio-size-group">
			<ued-radio-group v-model="largeRadio" size="large">
				<ued-radio :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
		<div class="radio-size-group">
			<ued-radio-group v-model="defaultRadio">
				<ued-radio :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
		<div class="radio-size-group">
			<ued-radio-group v-model="smallRadio">
				<ued-radio :value="1" label="radio1" size="small" />
				<ued-radio :value="2" label="radio2" size="small" />
			</ued-radio-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const largeRadio = ref(1)
const defaultRadio = ref(1)
const smallRadio = ref(1)
</script>
```

:::
