<template>
	<Teleport
		:to="appendTo"
		:disabled="appendTo !== 'body' ? false : !appendToBody"
	>
		<Transition name="dialog-fade">
			<div v-show="visible" :class="overlayClass" @click="modalClose">
				<div class="ued-overlay-dialog">
					<div
						ref="dialogRef"
						class="ued-dialog"
						:style="dialogStyle"
						:class="dialogClass"
					>
						<header class="ued-dialog__header" :class="dialogHeaderClass">
							<slot
								v-if="$slots.header"
								class="ued-dialog__title"
								name="header"
							></slot>
							<span v-else class="ued-dialog__title">{{ title }}</span>
							<button
								type="button"
								class="ued-dialog__headerbtn"
								@click="closeBtnClose"
							>
								<ued-icon class="ued-dialog__close" name="Close" />
							</button>
						</header>
						<div class="ued-dialog__body">
							<slot />
						</div>
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
import {
	ref,
	watch,
	computed,
	useSlots,
	onMounted,
	nextTick,
	onBeforeUnmount,
} from 'vue'
import {
	handleStringOrNumberPx,
	handlePercentNumber,
	isNumber,
} from '@ued-plus/utils'

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
	closeOnClickModal: {
		type: Boolean,
		default: true,
	},
	showClose: {
		type: Boolean,
		default: true,
	},
	width: {
		type: [String, Number],
		default: undefined,
	},
	top: {
		type: [String, Number],
		default: undefined,
	},
	fullscreen: {
		type: Boolean,
		default: false,
	},
	modal: {
		type: Boolean,
		default: true,
	},
	modalClass: {
		type: String,
		default: undefined,
	},
	openDelay: {
		type: Number,
		default: 0,
	},
	closeDelay: {
		type: Number,
		default: 0,
	},
	closeOnPressEscape: {
		type: Boolean,
		default: true,
	},
})

const dialogEmits = defineEmits(['update:modelValue'])

const $slots = useSlots()

const dialogRef = ref<HTMLDivElement>()

const visible = ref(false)
watch(
	() => dialogProps.modelValue,
	(newVal: boolean) => {
		setTimeout(
			() => {
				visible.value = newVal
			},
			isNumber(dialogProps.openDelay) ? dialogProps.openDelay : 0
		)
	}
)

const overlayClass = computed(() => {
	return [
		dialogProps.modalClass,
		{
			'ued-overlay': dialogProps.modal,
		},
	]
})

const dialogStyle = computed(() => {
	return {
		'--ued-dialog-width': !dialogProps.fullscreen
			? handleStringOrNumberPx(dialogProps.width) ??
				handlePercentNumber(dialogProps.width)
			: undefined,
		'--ued-dialog-margin-top': !dialogProps.fullscreen
			? handleStringOrNumberPx(dialogProps.top) ??
				handlePercentNumber(dialogProps.top)
			: undefined,
	}
})

const dialogClass = computed(() => {
	return {
		'is-fullscreen': dialogProps.fullscreen,
	}
})

const dialogHeaderClass = computed(() => {
	return {
		'show-close': dialogProps.showClose,
	}
})

const doClose = () => {
	setTimeout(
		() => {
			visible.value = false
			dialogEmits('update:modelValue', visible.value)
		},
		isNumber(dialogProps.closeDelay) ? dialogProps.closeDelay : 0
	)
}

const modalClose = () => {
	dialogProps.closeOnClickModal && doClose()
}

const escapeClose = () => {
	dialogProps.closeOnPressEscape && doClose()
}
const keyup = (event: KeyboardEvent) => {
	if (event.code === 'Escape') escapeClose()
}

const closeBtnClose = () => {
	doClose()
}

onMounted(() => {
	nextTick(() => {
		document && document.addEventListener('keyup', keyup)
	})
})
onBeforeUnmount(() => {
	document.removeEventListener('keyup', keyup)
})
</script>
