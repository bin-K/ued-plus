<template>
	<svg aria-hidden="true">
		<use :xlink:href="name"></use>
	</svg>
</template>
<script lang="ts" setup>
defineOptions({ name: 'Common' })

type IconProps = {
	name: String
}

defineProps<IconProps>()
</script>
