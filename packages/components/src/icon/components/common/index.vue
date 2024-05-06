<template>
	<component :is="iconSvg" :name="name" />
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const iconSvg = defineAsyncComponent(
	() => import(`../${iconProps.name}/index.vue`)
)

type IconProps = {
	name: string
}

const iconProps = defineProps<IconProps>()
</script>
