import { ref, nextTick } from 'vue'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import {
	UedContainer,
	UedHeader,
	UedMain,
	UedAside,
	UedFooter,
} from '@ued-plus/components'

describe('Container.vue', () => {
	it('container render test', async () => {
		const wrapper = mount(UedContainer, {
			slots: {
				default: 'ued-container',
			},
		})
		expect(wrapper.text()).toEqual('ued-container')
	})

	it('vertical', () => {
		const wrapper = mount(() => (
			<UedContainer>
				<UedHeader />
				<UedMain />
			</UedContainer>
		))
		expect(wrapper.classes('is-vertical')).toBe(true)
	})

	it('direction', async () => {
		const direction = ref('horizontal')
		const wrapper = mount(() => (
			<UedContainer direction={direction.value}>
				<UedHeader />
				<UedMain />
			</UedContainer>
		))

		expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(false)
		direction.value = 'vertical'
		await nextTick()
		expect(wrapper.classes()).toContain('is-vertical')
	})
})

describe('Header.vue', () => {
	it('create header', () => {
		const wrapper = mount(UedHeader)
		expect(wrapper.classes()).toContain('ued-header')
	})

	it('header height', () => {
		const wrapper = mount(UedHeader, {
			props: {
				height: 100,
			},
		})
		expect(wrapper.element.getAttribute('style')).toContain('height: 100px')
	})
})

describe('Aside.vue', () => {
	it('aside create', () => {
		const wrapper = mount(UedAside)
		expect(wrapper.classes()).toContain('ued-aside')
	})

	it('aside width', () => {
		const wrapper = mount(UedAside, {
			props: {
				width: '200px',
			},
		})
		expect(wrapper.element.getAttribute('style')).toContain('width: 200px')
	})
})

describe('Main', () => {
	it('main create', () => {
		const wrapper = mount(UedMain)
		expect(wrapper.classes()).toContain('ued-main')
	})
})

describe('Footer', () => {
	it('footer create', () => {
		const wrapper = mount(UedFooter)
		expect(wrapper.classes()).toContain('ued-footer')
	})

	it('footer height', () => {
		const wrapper = mount(UedFooter, {
			props: {
				height: '100',
			},
		})
		expect(wrapper.element.getAttribute('style')).toContain('height: 100px')
	})
})
