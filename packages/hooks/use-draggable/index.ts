import { onBeforeUnmount, onMounted, watchEffect } from 'vue'
import type { ComputedRef, Ref } from 'vue'

export const useDraggable = (
	targetRef: Ref<HTMLElement | undefined>,
	dragRef: Ref<HTMLElement | undefined>,
	draggable: ComputedRef<boolean>,
	overflow?: boolean
) => {
	let transform = {
		offsetX: 0,
		offsetY: 0,
	}

	/**
	 * @description 拖拽弹窗, translate版本(不使用absolute定位)
	 * @param { MouseEvent } e 鼠标事件对象
	 */
	const onMousedown = (e: MouseEvent) => {
		const downX = e.clientX
		const downY = e.clientY
		const { offsetX, offsetY } = transform

		const targetRect = targetRef.value!.getBoundingClientRect()
		const targetLeft = targetRect.left
		const targetTop = targetRect.top
		const targetWidth = targetRect.width
		const targetHeight = targetRect.height

		const clientWidth = document.documentElement.clientWidth
		const clientHeight = document.documentElement.clientHeight

		const minLeft = -targetLeft + offsetX
		const minTop = -targetTop + offsetY
		const maxLeft = clientWidth - targetLeft - targetWidth + offsetX
		const maxTop = clientHeight - targetTop - targetHeight + offsetY

		const onMousemove = (e: MouseEvent) => {
			let moveX = offsetX + e.clientX - downX
			let moveY = offsetY + e.clientY - downY

			if (!overflow) {
				moveX = Math.min(Math.max(moveX, minLeft), maxLeft)
				moveY = Math.min(Math.max(moveY, minTop), maxTop)
			}

			transform = {
				offsetX: moveX,
				offsetY: moveY,
			}

			if (targetRef.value) {
				targetRef.value.style.transform = `translate(${moveX}px, ${moveY}px)`
			}
		}

		const onMouseup = () => {
			document.removeEventListener('mousemove', onMousemove)
			document.removeEventListener('mouseup', onMouseup)
		}

		document.addEventListener('mousemove', onMousemove)
		document.addEventListener('mouseup', onMouseup)
	}

	// #region 拖拽弹窗(拓展), position版本(使用absolute定位)
	/**
	 *@description 拖拽弹窗(拓展), position版本(使用absolute定位)
	 * @param { MouseEvent } e 鼠标事件对象
	 */
	/* const mousedownForPosition = (e: MouseEvent) => {
		const downX = e.clientX
		const downY = e.clientY

		const targetRect = targetRef.value!.getBoundingClientRect()
		const targetLeft = targetRect.left
		const targetTop = targetRect.top
		const targetWidth = targetRect.width
		const targetHeight = targetRect.height

		const clientWidth = document.documentElement.clientWidth
		const clientHeight = document.documentElement.clientHeight

		// https://developer.mozilla.org/zh-CN/docs/Web/API/DOMMatrix 注意兼容性问题
		const matrix = new window.WebKitCSSMatrix(
			getComputedStyle(targetRef.value!).transform
		)

		const mousemove = (e: MouseEvent) => {
			const moveX = e.clientX - downX
			const moveY = e.clientY - downY

			let top = targetTop + moveY
			let left = targetLeft + moveX

			if (!overflow) {
				top = Math.min(Math.max(top, 0), clientHeight - targetHeight)
				left = Math.min(Math.max(left, 0), clientWidth - targetWidth)
			}

			if (targetRef.value) {
				targetRef.value.style.top = `${top - matrix.m42}px`
				targetRef.value.style.left = `${left - matrix.m41}px`
			}
		}

		const mouseup = () => {
			document.removeEventListener('mousemove', mousemove)
			document.removeEventListener('mouseup', mouseup)
		}

		document.addEventListener('mousemove', mousemove)
		document.addEventListener('mouseup', mouseup)
	} */
	// #endregion

	const onDraggable = () => {
		if (dragRef.value && targetRef.value) {
			dragRef.value.addEventListener('mousedown', onMousedown)
		}
	}

	const offDraggable = () => {
		if (dragRef.value && targetRef.value) {
			dragRef.value.removeEventListener('mousedown', onMousedown)
		}
	}

	onMounted(() => {
		watchEffect(() => {
			if (draggable.value) {
				onDraggable()
			} else {
				offDraggable()
			}
		})
	})

	onBeforeUnmount(() => {
		offDraggable()
	})
}
