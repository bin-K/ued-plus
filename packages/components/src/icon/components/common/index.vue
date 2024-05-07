<template>
	<component :is="Icons[name as keyof typeof Icons]" :name="name" />
</template>
<script lang="ts" setup>
import Icons from '../../icon'

type IconProps = {
	name: string
}

defineProps<IconProps>()
</script>
