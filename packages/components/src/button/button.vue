// button.vue
<template>
	<button class="ued-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import './styles/index.scss'
defineOptions({ name: 'UedButton' })
type ButtonProps = {
	type?: string
}
const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
	return { [`ued-button--${buttonProps.type}`]: buttonProps.type }
})
</script>
