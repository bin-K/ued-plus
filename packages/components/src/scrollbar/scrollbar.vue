<template>
	<div class="ued-scrollbar">
		<div class="ued-scrollbar-wrap">
			<component :is="scrollbarTag" class="ued-scrollbar__view">
				<slot />
			</component>
		</div>
	</div>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { computed } from 'vue'

type ScrollBarProps = {
	tag: string
}

const scrollBarProps = defineProps<ScrollBarProps>()

const scrollbarTag = computed(() => {
	return scrollBarProps.tag ?? 'div'
})
</script>
