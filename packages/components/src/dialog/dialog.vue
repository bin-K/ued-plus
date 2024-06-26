<template>
	<Teleport
		:to="appendTo"
		:disabled="appendTo !== 'body' ? false : !appendToBody"
	>
		<Transition
			name="dialog-fade"
			@after-enter="opened"
			@before-leave="close"
			@after-leave="closed"
		>
			<div
				v-show="visible"
				ref="overlayRef"
				:class="overlayClass"
				:style="overlayStyle"
				@click="modalClick"
			>
				<div class="ued-overlay-dialog" :style="overlayDialogStyle">
					<div
						ref="dialogRef"
						class="ued-dialog"
						:style="dialogStyle"
						:class="dialogClass"
						@click="dialogClick"
					>
						<header
							ref="headerRef"
							class="ued-dialog__header"
							:class="dialogHeaderClass"
						>
							<slot
								name="header"
								title-class="ued-dialog__title"
								:close="closeBtnClose"
							>
								<span class="ued-dialog__title">{{ title }}</span>
							</slot>

							<button
								v-if="showClose"
								type="button"
								class="ued-dialog__headerbtn"
								@click="closeBtnClose"
							>
								<ued-icon class="ued-dialog__close">
									<component :is="closeIcon" />
								</ued-icon>
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
	PropType,
	CSSProperties,
} from 'vue'
import {
	handleStringOrNumberPx,
	handlePercentNumber,
	isNumber,
	isPositiveNumber,
} from '@ued-plus/utils'
import { useDraggable } from '@ued-plus/hooks'
import { UedIcon } from '@ued-plus/components'

type DoneFn = (cancel?: boolean) => void
type DialogBeforeCloseFn = (done: DoneFn) => void

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
	class: {
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
	beforeClose: {
		type: Function as PropType<DialogBeforeCloseFn>,
		default: undefined,
	},
	center: {
		type: Boolean,
		default: false,
	},
	alignCenter: {
		type: Boolean,
		default: false,
	},
	draggable: {
		type: Boolean,
		default: false,
	},
	overflow: {
		type: Boolean,
		default: false,
	},
	closeIcon: {
		type: [String, Object],
		default: 'Close',
	},
	zIndex: {
		type: Number,
		default: 2000,
	},
	lockScroll: {
		type: Boolean,
		default: true,
	},
})

const dialogEmits = defineEmits([
	'update:modelValue',
	'open',
	'opened',
	'close',
	'closed',
])

const $slots = useSlots()

const overlayRef = ref<HTMLDivElement>()
const dialogRef = ref<HTMLDivElement>()
const headerRef = ref<HTMLHeadElement>()

const draggable = computed(
	() => dialogProps.draggable && !dialogProps.fullscreen
)

useDraggable(dialogRef, headerRef, draggable, dialogProps.overflow)

const visible = ref(false)
const maxIndex = ref(dialogProps.zIndex)

const overlayStyle = computed<CSSProperties>(() => {
	return {
		'z-index': maxIndex.value,
	}
})
const overlayClass = computed(() => {
	return [
		dialogProps.modalClass,
		{
			'ued-overlay': dialogProps.modal,
		},
	]
})

const overlayDialogStyle = computed<CSSProperties>(() => {
	return {
		display: dialogProps.alignCenter ? 'flex' : undefined,
	}
})

const dialogStyle = computed<CSSProperties>(() => {
	return {
		'--ued-dialog-width': !dialogProps.fullscreen
			? handleStringOrNumberPx(dialogProps.width) ??
				handlePercentNumber(dialogProps.width)
			: undefined,
		'--ued-dialog-margin-top':
			!dialogProps.fullscreen && !dialogProps.alignCenter
				? handleStringOrNumberPx(dialogProps.top) ??
					handlePercentNumber(dialogProps.top)
				: undefined,
	}
})

const dialogClass = computed(() => {
	return [
		dialogProps.class,
		{
			'ued-dialog--center': dialogProps.center,
			'is-fullscreen': dialogProps.fullscreen,
			'is-align-center': dialogProps.alignCenter,
			'is-draggable': draggable.value,
		},
	]
})

const dialogHeaderClass = computed(() => {
	return {
		'show-close': dialogProps.showClose,
	}
})

const modalClick = () => {
	dialogProps.closeOnClickModal && handleBeforeCLose()
}

const dialogClick = (e: MouseEvent) => {
	e.stopPropagation()
}

const doOpen = () => {
	setTimeout(
		() => {
			visible.value = true
			dialogProps.lockScroll &&
				document.querySelector('body')?.classList.add('ued-lock-scroll')
		},
		isPositiveNumber(dialogProps.openDelay) ? dialogProps.openDelay : 0
	)
}

const doClose = () => {
	setTimeout(
		() => {
			visible.value = false
			dialogEmits('update:modelValue', visible.value)
			dialogProps.lockScroll &&
				document.querySelector('body')?.classList.remove('ued-lock-scroll')
		},
		isNumber(dialogProps.closeDelay) ? dialogProps.closeDelay : 0
	)
}

const opened = () => {
	dialogEmits('opened')
}
const close = () => {
	dialogEmits('close')
}
const closed = () => {
	dialogEmits('closed')
}

const handleBeforeCLose = () => {
	function hide(shouldCancel?: boolean) {
		if (shouldCancel) return
		doClose()
	}

	if (dialogProps.beforeClose) {
		dialogProps.beforeClose(hide)
	} else {
		doClose()
	}
}

const escapeClose = () => {
	dialogProps.closeOnPressEscape && handleBeforeCLose()
}
const keyup = (event: KeyboardEvent) => {
	if (event.code === 'Escape') escapeClose()
}

const closeBtnClose = () => {
	handleBeforeCLose()
}

watch(
	() => dialogProps.modelValue,
	(newVal: boolean) => {
		if (newVal) {
			maxIndex.value =
				Math.max.apply(
					Math,
					Array.from(
						// eslint-disable-next-line no-undef
						document.querySelectorAll('.ued-overlay') as NodeListOf<HTMLElement>
					).map((element: HTMLElement) => Number(element.style.zIndex))
				) + 1
			doOpen()
			nextTick(() => {
				dialogEmits('open')
			})
		} else {
			visible.value && handleBeforeCLose()
		}
	},
	{
		immediate: true,
	}
)

onMounted(() => {
	nextTick(() => {
		document && document.addEventListener('keyup', keyup)
	})
})
onBeforeUnmount(() => {
	document.removeEventListener('keyup', keyup)
})

defineExpose({
	visible,
	dialogRef,
})
</script>
