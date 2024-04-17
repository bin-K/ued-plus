<template>
	<h2>手动滚动</h2>
	<div class="common-content scrollbar-content scrollbar-set-scroll">
		<ued-scrollbar
			ref="scrollbarRef"
			height="400px"
			always
			@scroll="handleScroll"
		>
			<div ref="innerRef">
				<p v-for="item in 20" :key="item" class="scrollbar-demo-item">
					{{ item }}
				</p>
			</div>
		</ued-scrollbar>
		<ued-button @click="up">上移</ued-button>
		<ued-button @click="down">下移</ued-button>
	</div>
</template>

<script lang="ts" setup>
import { UedScrollBar } from 'packages/components'
import { ref, onMounted } from 'vue'

const value = ref(0)
const max = ref(0)
const innerRef = ref<HTMLDivElement>()
const scrollbarRef = ref<InstanceType<typeof UedScrollBar>>()
const up = () => {
	value.value = value.value - 25
	if (value.value <= 0) value.value = 0
	scrollbarRef.value!.setScrollTop(value.value)
}

const down = () => {
	value.value = value.value + 25
	if (value.value >= max.value) value.value = max.value
	scrollbarRef.value!.setScrollTop(value.value)
}
const handleScroll = ({ scrollTop }: any) => {
	value.value = scrollTop
}
onMounted(() => {
	max.value = innerRef.value!.clientHeight - 380
})
</script>

<style lang="scss" scoped>
.scrollbar-content {
	display: block;
}
</style>
