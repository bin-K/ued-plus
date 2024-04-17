## 禁用状态

文字链接不可用状态。

<div class="common-content link-content link-disabled">
  <div class="link-disabled-default">
    <ued-link
      class="vp-raw"
      v-for="(item, index) in linkType"
      :key="index"
      :type="item.type"
      disabled
    >
      {{ item.text }}
    </ued-link>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="link-content link-disabled">
		<div class="link-disabled-default">
			<ued-link
				class="vp-raw"
				v-for="(item, index) in linkType"
				:key="index"
				:type="item.type"
				disabled
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
