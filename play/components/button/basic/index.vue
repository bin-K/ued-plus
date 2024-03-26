<template>
	<h2>基础用法</h2>
	<div class="button-content button-basic">
		<div class="button-basic-defalut">
			<ued-button v-for="item in buttonType" :key="item.type" :type="item.type">
				{{ item.text }}
			</ued-button>
		</div>
		<div class="button-basic-plain">
			<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" plain>
				{{ item.text }}
			</ued-button>
		</div>
		<div class="button-basic-round">
			<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" round>
				{{ item.text }}
			</ued-button>
		</div>
		<div class="button-basic-circle">
			<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" circle />
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
