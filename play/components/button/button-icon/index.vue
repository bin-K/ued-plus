<template>
	<h2>Icon用法</h2>
	<div class="button-content button-icon">
		<div class="button-icon-defalut">
			<ued-button
				v-for="item in buttonType"
				:key="item.type"
				:type="item.type"
				:icon="Plus"
			>
				{{ item.text }}
			</ued-button>
		</div>
		<div class="button-icon-defalut">
			<ued-button v-for="item in buttonType" :key="item.type" :type="item.type">
				<ued-icon>
					<Plus />
				</ued-icon>
				{{ item.text }}
			</ued-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Plus } from '@ued-plus/components'
import { PropType } from 'vue'
defineProps({
	buttonType: {
		type: Array as PropType<any>,
		default: () => [],
	},
})
</script>
