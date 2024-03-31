<template>
	<div class="ued-button-group">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import './styles/button-group.scss'

defineOptions({ name: 'UedButtonGroup' })

type ButtonGroupProps = {
	type?: string
	size?: string
}

const buttonGroupProps = defineProps<ButtonGroupProps>()

buttonGroupProps.type && provide('type', buttonGroupProps.type)
buttonGroupProps.size && provide('size', buttonGroupProps.size)
</script>
