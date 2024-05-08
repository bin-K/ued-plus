import { nextTick } from 'vue'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { UedScrollbar } from '@ued-plus/components'

describe('Scrollbar.vue', () => {
	it('vertical', async () => {
		const outerHeight = 204
		const innerHeight = 500
		const wrapper = mount({
			setup: () => () => (
				<UedScrollbar style={`height: ${outerHeight}px;`}>
					<div style={`height: ${innerHeight}px;`}></div>
				</UedScrollbar>
			),
		})

		const scrollDom = wrapper.find('.ued-scrollbar__wrap').element

		// jsdom doesn't support layout. This means measurements like this will always return 0 as it does here.
		Object.defineProperty(scrollDom, 'offsetHeight', {
			configurable: true,
			value: outerHeight,
		})
		Object.defineProperty(scrollDom, 'scrollHeight', {
			configurable: true,
			value: innerHeight,
		})

		scrollDom.scrollTop = 100
		const evt = new CustomEvent('scroll', {
			detail: {
				target: {
					scrollTop: 300,
				},
			},
		})
		scrollDom.dispatchEvent(evt)

		await nextTick(() => {})

		expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
			'transform: translateY(50%); height: 80px'
		)
	})

	it('horizontal', async () => {
		const outerWidth = 204
		const innerWidth = 500
		const wrapper = mount({
			setup: () => () => (
				<UedScrollbar style={`height: 100px; width: ${outerWidth}px;`}>
					<div style={`height: ${innerWidth}px;`}></div>
				</UedScrollbar>
			),
		})

		const scrollDom = wrapper.find('.ued-scrollbar__wrap').element

		// jsdom doesn't support layout. This means measurements like this will always return 0 as it does here.
		Object.defineProperty(scrollDom, 'offsetWidth', {
			configurable: true,
			value: outerWidth,
		})
		Object.defineProperty(scrollDom, 'scrollWidth', {
			configurable: true,
			value: innerWidth,
		})

		scrollDom.scrollLeft = 100
		const evt = new CustomEvent('scroll', {
			detail: {
				target: {
					scrollLeft: 300,
				},
			},
		})
		scrollDom.dispatchEvent(evt)

		await nextTick(() => {})

		expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
			'transform: translateX(50%); width: 80px'
		)
	})

	it('should render height props', async () => {
		const outerHeight = 204
		const innerHeight = 500
		const wrapper = mount(() => (
			<UedScrollbar height={`${outerHeight}px`}>
				<div style={`height: ${innerHeight}px;`}></div>
			</UedScrollbar>
		))

		expect(wrapper.find('.ued-scrollbar__wrap').attributes('style')).toContain(
			'height: 204px;'
		)
	})

	it('should render max-height props', async () => {
		const outerHeight = 204
		const innerHeight = 100
		const wrapper = mount(() => (
			<UedScrollbar max-height={`${outerHeight}px`}>
				<div style={`height: ${innerHeight}px;`}></div>
			</UedScrollbar>
		))

		expect(wrapper.find('.ued-scrollbar__wrap').attributes('style')).toContain(
			'max-height: 204px;'
		)
	})

	it('should render always props', async () => {
		const outerHeight = 204
		const innerHeight = 500
		const wrapper = mount(() => (
			<UedScrollbar height={`${outerHeight}px`} always>
				<div style={`height: ${innerHeight}px;`}></div>
			</UedScrollbar>
		))

		expect(wrapper.find('.ued-scrollbar__bar').attributes('style')).toBeFalsy()
	})

	it('set scrollTop & scrollLeft', async () => {
		const outerHeight = 204
		const innerHeight = 500
		const outerWidth = 204
		const innerWidth = 500
		const wrapper = mount({
			setup() {
				return () => (
					<UedScrollbar
						ref="scrollbar"
						style={`height: ${outerHeight}px; width: ${outerWidth}px;`}
						always
					>
						<div
							style={`height: ${innerHeight}px; width: ${innerWidth}px;`}
						></div>
					</UedScrollbar>
				)
			},
		})

		const scrollbar = wrapper.findComponent({ ref: 'scrollbar' }).vm
		const scrollDom = wrapper.find('.ued-scrollbar__wrap').element

		Object.defineProperty(scrollDom, 'offsetHeight', {
			configurable: true,
			value: outerHeight,
		})
		Object.defineProperty(scrollDom, 'scrollHeight', {
			configurable: true,
			value: innerHeight,
		})

		Object.defineProperty(scrollDom, 'offsetWidth', {
			configurable: true,
			value: outerWidth,
		})
		Object.defineProperty(scrollDom, 'scrollWidth', {
			configurable: true,
			value: innerWidth,
		})

		scrollbar.setScrollTop(100)
		await nextTick()
		scrollbar.setScrollLeft(100)
		await nextTick()
		expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
			'transform: translateY(0%); height: 80px;'
		)
		expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
			'transform: translateX(0%); width: 80px;'
		)
	})

	it('should render min-size props', async () => {
		const outerHeight = 204
		const innerHeight = 10000
		const wrapper = mount(() => (
			<UedScrollbar style={`height: ${outerHeight}px;`}>
				<div style={`height: ${innerHeight}px;`}></div>
			</UedScrollbar>
		))

		const scrollDom = wrapper.find('.ued-scrollbar__wrap').element

		Object.defineProperty(scrollDom, 'offsetHeight', {
			configurable: true,
			value: outerHeight,
		})
		Object.defineProperty(scrollDom, 'scrollHeight', {
			configurable: true,
			value: innerHeight,
		})

		scrollDom.scrollTop = 0
		const evt = new CustomEvent('scroll', {
			detail: {
				target: {
					scrollTop: 300,
				},
			},
		})
		scrollDom.dispatchEvent(evt)

		await nextTick(() => {})

		expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
			'transform: translateY(0%); height: 20px;'
		)
	})

	it('should render tag props', async () => {
		const wrapper = mount(() => (
			<UedScrollbar tag="ul">
				{[1, 2, 3].map((item) => (
					<p>{item}</p>
				))}
			</UedScrollbar>
		))

		expect(
			wrapper.find('.ued-scrollbar__view').element instanceof HTMLUListElement
		).toBeTruthy()
	})

	it('should render wrap-style props', async () => {
		const wrapStyle = { background: 'red' }
		const wrapper = mount(() => <UedScrollbar wrap-style={wrapStyle} />)

		expect(wrapper.find('.ued-scrollbar__wrap').attributes('style')).toContain(
			'background: red;'
		)
	})

	it('should render wrap-class props', async () => {
		const wrapClass = 'test-wrap-class'
		const wrapper = mount(() => <UedScrollbar wrap-class={wrapClass} />)

		expect(wrapper.find('.ued-scrollbar__wrap').classes()).toContain(wrapClass)
	})

	it('should render view-style props', async () => {
		const viewStyle = { display: 'inline-block' }
		const wrapper = mount(() => <UedScrollbar view-style={viewStyle} />)

		expect(wrapper.find('.ued-scrollbar__view').attributes('style')).toContain(
			'display: inline-block;'
		)
	})

	it('should render view-class props', async () => {
		const viewClass = 'test-view-class'
		const wrapper = mount(() => <UedScrollbar view-class={viewClass} />)

		expect(wrapper.find('.ued-scrollbar__view').classes()).toContain(viewClass)
	})
})
