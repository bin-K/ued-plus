import {
	ref,
	computed,
	CSSProperties,
	onMounted,
	onUpdated,
	onBeforeUnmount,
	nextTick,
	defineEmits,
} from 'vue'
import {
	ScrollBarPropsType,
	BAR_MAP,
	Overflow,
	Direction,
	DirectionRef,
} from '@ued-plus/components'

export function useScroll(scrollBarProps: ScrollBarPropsType) {
	const emits = defineEmits(['scroll'])

	const GAP = 4

	const move = {
		X: ref(0),
		Y: ref(0),
	}
	const ratio = {
		X: ref(1),
		Y: ref(1),
	}

	const visible = ref(false)

	const sizeWidth = ref('')
	const sizeHeight = ref('')

	const wrapRef = ref<HTMLDivElement>()
	const barRef: DirectionRef = {
		horizontal: ref(),
		vertical: ref(),
	}
	const barThumbRef: DirectionRef = {
		horizontal: ref(),
		vertical: ref(),
	}

	const barHorizontalStyle = ref<CSSProperties>({
		display: 'none',
	})

	const barVerticalStyle = ref<CSSProperties>({
		display: 'none',
	})

	const barHorizontalThumbStyle = computed<CSSProperties>(() => {
		return {
			width: sizeWidth.value,
			transform: `translateX(${move.X.value}%)`,
		}
	})
	const barVerticalThumbStyle = computed<CSSProperties>(() => {
		return {
			height: sizeHeight.value,
			transform: `translateY(${move.Y.value}%)`,
		}
	})

	const thumbState = ref<Partial<Record<'X' | 'Y', number>>>({})
	let cursorDown = false
	let cursorLeave = false
	let originalOnSelectStart: any

	const offsetRatio = computed(() => {
		return (direction: Direction) =>
			// offsetRatioX = original width of thumb / current width of thumb / ratioX
			// offsetRatioY = original height of thumb / current height of thumb / ratioY
			// instance height = wrap height - GAP
			barRef[direction].value![BAR_MAP[direction].offset] ** 2 /
			wrapRef.value![BAR_MAP[direction].scrollSize] /
			ratio[BAR_MAP[direction].axis].value /
			barThumbRef[direction].value![BAR_MAP[direction].offset]
	})

	const clickTrackHandler = (e: MouseEvent, direction: Direction) => {
		if (
			barThumbRef[direction].value &&
			barRef[direction].value &&
			wrapRef.value
		) {
			const offset = Math.abs(
				(e.target as HTMLElement).getBoundingClientRect()[
					BAR_MAP[direction].direction
				] - e[BAR_MAP[direction].client]
			)
			const thumbHalf =
				barThumbRef[direction].value![BAR_MAP[direction].offset] / 2
			const thumbPositionPercentage =
				((offset - thumbHalf) * 100 * offsetRatio.value(direction)) /
				barRef[direction].value![BAR_MAP[direction].offset]
			wrapRef.value[BAR_MAP[direction].scroll] =
				(thumbPositionPercentage *
					wrapRef.value[BAR_MAP[direction].scrollSize]) /
				100
		}
	}

	const clickThumbHandler = (e: MouseEvent, direction: Direction) => {
		e.stopPropagation()
		if (e.ctrlKey || [1, 2].includes(e.button)) return
		window.getSelection()?.removeAllRanges()
		startDrag(e, direction)

		const el = e.currentTarget as HTMLDivElement
		if (!el) return

		thumbState.value[BAR_MAP[direction].axis] =
			el[BAR_MAP[direction].offset] -
			(e[BAR_MAP[direction].client] -
				el.getBoundingClientRect()[BAR_MAP[direction].direction])
	}

	const startDrag = (e: MouseEvent, direction: Direction) => {
		e.stopImmediatePropagation()
		cursorDown = true
		document.addEventListener('mousemove', (e) =>
			mouseMoveDocumentHandler(e, direction)
		)
		document.addEventListener('mouseup', (e) =>
			mouseUpDocumentHandler(e, direction)
		)
		originalOnSelectStart = document.onselectstart
		document.onselectstart = () => false
	}

	const mouseMoveDocumentHandler = (e: MouseEvent, direction: Direction) => {
		if (cursorDown === false) return
		if (barRef[direction].value && barThumbRef[direction].value) {
			const prevPage = thumbState.value[BAR_MAP[direction].axis]
			if (!prevPage) return
			const offset =
				(barRef[direction].value!.getBoundingClientRect()[
					BAR_MAP[direction].direction
				] -
					e[BAR_MAP[direction].client]) *
				-1
			const thumbClickPosition =
				barThumbRef[direction].value![BAR_MAP[direction].offset] - prevPage
			const thumbPositionPercentage =
				((offset - thumbClickPosition) * 100 * offsetRatio.value(direction)) /
				barRef[direction].value![BAR_MAP[direction].offset]
			wrapRef.value![BAR_MAP[direction].scroll] =
				(thumbPositionPercentage *
					wrapRef.value![BAR_MAP[direction].scrollSize]) /
				100
		}
	}

	const mouseUpDocumentHandler = (e: MouseEvent, direction: Direction) => {
		cursorDown = false
		thumbState.value[BAR_MAP[direction].axis] = 0
		document.removeEventListener('mousemove', (e) =>
			mouseMoveDocumentHandler(e, direction)
		)
		document.removeEventListener('mouseup', (e) =>
			mouseUpDocumentHandler(e, direction)
		)
		restoreOnselectstart()
		if (cursorLeave) visible.value = false
	}

	const restoreOnselectstart = () => {
		if (document.onselectstart !== originalOnSelectStart) {
			document.onselectstart = originalOnSelectStart
		}
	}

	const judgeOverflow = (): Overflow => {
		if (wrapRef.value) {
			const { scrollWidth, clientWidth, scrollHeight, clientHeight } =
				wrapRef.value
			return {
				horizontal: scrollWidth > clientWidth,
				vertical: scrollHeight > clientHeight,
			}
		}
		return {
			horizontal: false,
			vertical: false,
		}
	}
	const mousemove = () => {
		visible.value = true
		cursorLeave = false
		judgeOverflow().horizontal && (barHorizontalStyle.value.display = undefined)
		judgeOverflow().vertical && (barVerticalStyle.value.display = undefined)
	}
	const mouseleave = () => {
		visible.value = cursorDown
		cursorLeave = true
		judgeOverflow().horizontal &&
			(barHorizontalStyle.value.display = cursorDown ? undefined : 'none')
		judgeOverflow().vertical &&
			(barVerticalStyle.value.display = cursorDown ? undefined : 'none')
	}

	const update = () => {
		if (!wrapRef.value) return
		const { offsetHeight, offsetWidth, scrollHeight, scrollWidth } =
			wrapRef.value
		const originalHeight = (offsetHeight - GAP) ** 2 / scrollHeight
		const originalWidth = (offsetWidth - GAP) ** 2 / scrollWidth
		const height = Math.max(originalHeight, scrollBarProps.minSize)
		const width = Math.max(originalWidth, scrollBarProps.minSize)

		ratio.Y.value =
			originalHeight /
			(offsetHeight - originalHeight) /
			(height / (offsetHeight - height))
		ratio.X.value =
			originalWidth /
			(offsetWidth - originalWidth) /
			(width / (offsetWidth - width))

		sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : ''
		sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : ''
	}

	const handleScroll = () => {
		if (wrapRef.value) {
			const { offsetHeight, offsetWidth, scrollTop, scrollLeft } = wrapRef.value
			move.Y.value = ((scrollTop * 100) / (offsetHeight - GAP)) * ratio.Y.value
			move.X.value = ((scrollLeft * 100) / (offsetWidth - GAP)) * ratio.X.value
			emits('scroll', {
				scrollTop: wrapRef.value.scrollTop,
				scrollLeft: wrapRef.value.scrollLeft,
			})
		}
	}

	onMounted(() => {
		if (!scrollBarProps.native) {
			nextTick(() => {
				update()
				barHorizontalStyle.value.display =
					scrollBarProps.always && judgeOverflow().horizontal
						? undefined
						: 'none'
				barVerticalStyle.value.display =
					scrollBarProps.always && judgeOverflow().vertical ? undefined : 'none'
				!scrollBarProps.always &&
					wrapRef.value?.addEventListener('mousemove', mousemove)
				!scrollBarProps.always &&
					wrapRef.value?.addEventListener('mouseleave', mouseleave)
			})
		}
	})
	onUpdated(() => update())
	onBeforeUnmount(() => {
		wrapRef.value?.removeEventListener('mousemove', mousemove)
		wrapRef.value?.removeEventListener('mouseleave', mouseleave)
	})

	return {
		barHorizontalThumbStyle,
		barVerticalThumbStyle,
		clickTrackHandler,
		clickThumbHandler,
		handleScroll,
		update,
	}
}
