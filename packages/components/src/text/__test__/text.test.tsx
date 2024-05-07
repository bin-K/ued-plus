import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { UedText } from '@ued-plus/components'

describe('Text.vue', () => {
	it('render', () => {
		const wrapper = mount(UedText)
		expect(wrapper.classes()).toContain('ued-text')
	})

	it('type', () => {
		const wrapper = mount(UedText, {
			props: {
				type: 'primary',
			},
		})
		expect(wrapper.classes()).toContain('ued-text--primary')
	})

	it('size', () => {
		const wrapper = mount(UedText, {
			props: {
				size: 'large',
			},
		})
		expect(wrapper.classes()).toContain('ued-text--large')
	})

	it('truncated', () => {
		const wrapper = mount(UedText, {
			props: {
				truncated: true,
			},
		})
		expect(wrapper.classes()).toContain('is-truncated')
	})

	it('line-clamp', () => {
		const wrapper = mount(UedText, {
			props: {
				lineClamp: 2,
			},
		})
		expect(wrapper.classes()).toContain('is-line-clamp')
	})

	it('tag', () => {
		const wrapper = mount(UedText, {
			props: {
				tag: 'del',
			},
		})

		expect(wrapper.vm.$el.tagName).toEqual('DEL')
	})

	it('slot', () => {
		const wrapper = mount(UedText, {
			slots: {
				default: 'ued-text',
			},
		})
		expect(wrapper.text()).toEqual('ued-text')
	})
})
