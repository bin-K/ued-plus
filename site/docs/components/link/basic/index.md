## 基础用法

由 type 属性来选择 Text 的类型

<div class="common-content link-content link-basic">
  <div class="link-basic-default">
    <ued-link
    	class="vp-raw"
      v-for="(item, index) in linkType"
      :key="index"
      :type="item.type"
    >
      {{ item.text }}
    </ued-link>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="link-content link-basic">
		<div class="link-basic-default">
			<ued-link
				class="vp-raw"
				v-for="(item, index) in linkType"
				:key="index"
				:type="item.type"
			>
				{{ item.text }}
			</ued-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const linkType = ref([
	{ type: '', text: '默认链接' },
	{ type: 'primary', text: '主要链接' },
	{ type: 'success', text: '成功链接' },
	{ type: 'warning', text: '警告链接' },
	{ type: 'danger', text: '危险链接' },
	{ type: 'info', text: '信息链接' },
])
</script>
```

:::
