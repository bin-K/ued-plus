### 结构

```
dialog
├── __test__
│   └── dialog.test.tsx
├── dialog.vue
├── index.ts
└── styles
    └── index.scss
```

### 借助 Teleport 组件 和 Transition 组件

- `Teleport` 实现弹窗插入到文档的任何位置
- `Transition` 实现在不同时期的过渡动画以及相应的方法回调

```vue
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
		</Transition>
	</Teleport>
</template>
```

```scss
.dialog-fade-enter-active {
	animation: modal-fade-in var(--ued-transition-duration);
}

.dialog-fade-enter-active .ued-overlay-dialog {
	animation: dialog-fade-in var(--ued-transition-duration);
}

.dialog-fade-leave-active {
	animation: modal-fade-out var(--ued-transition-duration);
}

.dialog-fade-leave-active .ued-overlay-dialog {
	animation: dialog-fade-out var(--ued-transition-duration);
}
```

### 实现弹窗拖动

- 实现弹窗拖动，当前使用`translate`的方式实现

```js
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
```

- 提供另外一个思路，通过`position`的定位实现

```js
// #region 拖拽弹窗(拓展), position版本(使用absolute定位)
/**
 *@description 拖拽弹窗(拓展), position版本(使用absolute定位)
    * @param { MouseEvent } e 鼠标事件对象
    */
const mousedownForPosition = (e: MouseEvent) => {
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
}
```
