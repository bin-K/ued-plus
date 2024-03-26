<template>
	<h2>禁用状态</h2>
	<div class="button-content button-disabled">
		<div class="button-disabled-defalut">
			<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" disabled>
				{{ item.text }}
			</ued-button>
		</div>
		<div class="button-disabled-plain">
			<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" disabled plain>
				{{ item.text }}
			</ued-button>
		</div>
	</div>
</template>
<script lang="ts" setup>
defineProps({
	buttonType: {
		type: Object,
		default: () => ({}),
	},
})
</script>
