<template>
	<form class="ued-form" :class="formClass">
		<slot />
	</form>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { provide, toRefs, reactive, computed } from 'vue'
import { FormProps } from './form'
import { formInjectKey } from './constant'

defineOptions({ name: 'UedForm' })

const formProps = defineProps(FormProps)

provide(
	formInjectKey,
	reactive({
		...toRefs(formProps),
	})
)

const formClass = computed(() => {
	return {
		[`ued-form-${formProps.size}`]: formProps.size,
		[`ued-form--label-${formProps.labelPoisition}`]: formProps.labelPoisition,
		'ued-form-inline': formProps.inline,
	}
})
</script>
