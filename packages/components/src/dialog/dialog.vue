<template>
	<Teleport
		:to="appendTo"
		:disabled="appendTo !== 'body' ? false : !appendToBody"
	>
		<Transition name="dialog-fade">
			<div v-show="visible" class="ued-overlay">
				<div class="ued-dialog-overlay">
					<div class="ued-dialog">
						<header class="ued-dialog__header">
							<slot
								v-if="$slots.header"
								class="ued-dialog__title"
								name="header"
							></slot>
							<span v-else class="ued-dialog__title">{{ title }}</span>
						</header>
						<div class="ued-dialog__body"></div>
						<footer v-if="$slots.footer" class="ued-dialog__footer">
							<slot name="footer"></slot>
						</footer>
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { ref, watch, useSlots } from 'vue'

defineOptions({ name: 'UedDialog' })

const dialogProps = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	title: {
		type: String,
		default: '',
	},
	appendToBody: {
		type: Boolean,
		default: false,
	},
	appendTo: {
		type: String,
		default: 'body',
	},
})

const $slots = useSlots()

const visible = ref(false)
watch(
	() => dialogProps.modelValue,
	(newVal: boolean) => {
		visible.value = newVal
	}
)
</script>
