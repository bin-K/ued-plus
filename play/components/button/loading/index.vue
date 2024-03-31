<template>
	<h2>加载状态</h2>
	<div class="button-content button-loading">
		<div class="button-loading-defalut">
			<ued-button type="primary" loading>加载中</ued-button>
			<ued-button type="primary" loading :loading-icon="Plus">
				加载中
			</ued-button>
			<ued-button type="primary" loading>
				<template #icon>
					<CirclePlus />
				</template>
				加载中
			</ued-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { CirclePlus, Plus } from '@ued-plus/components'
import { PropType } from 'vue'
defineProps({
	buttonType: {
		type: Array as PropType<any>,
		default: () => [],
	},
})
</script>
