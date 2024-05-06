<template>
	<div class="ued-button-group">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import './styles/button-group.scss'
import { provide, reactive, toRefs } from 'vue'
import { buttonGroupKey } from './constant'
import { ButtonGroupProps } from './button-group'

defineOptions({ name: 'UedButtonGroup' })

const buttonGroupProps = defineProps(ButtonGroupProps)

provide(
	buttonGroupKey,
	reactive({
		...toRefs(buttonGroupProps),
	})
)
</script>
