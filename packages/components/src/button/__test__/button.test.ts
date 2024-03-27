import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import button from '../button.vue'

// The component to test
describe('test button', () => {
	it('slot', () => {
		const wrapper = mount(button, {
			slots: {
				default: 'ued',
			},
		})
		expect(wrapper.text()).toContain('ued')
	})

	it('type', () => {
		const wrapper = mount(button, {
			props: {
				type: 'primary',
			},
		})
		expect(wrapper.classes()).toContain('ued-button--primary')
	})

	it('disabled', () => {
		const wrapper = mount(button, {
			props: {
				disabled: true,
			},
		})
		expect(wrapper.classes()).toContain('is-disabled')
	})

	it('plain', () => {
		const wrapper = mount(button, {
			props: {
				plain: true,
			},
		})
		expect(wrapper.classes()).toContain('is-plain')
	})

	it('round', () => {
		const wrapper = mount(button, {
			props: {
				round: true,
			},
		})
		expect(wrapper.classes()).toContain('is-round')
	})

	it('circle', () => {
		const wrapper = mount(button, {
			props: {
				circle: true,
			},
		})
		expect(wrapper.classes()).toContain('is-circle')
	})

	it('link', () => {
		const wrapper = mount(button, {
			props: {
				link: true,
			},
		})
		expect(wrapper.classes()).toContain('is-link')
	})

	it('text', () => {
		const wrapper = mount(button, {
			props: {
				text: true,
			},
		})
		expect(wrapper.classes()).toContain('is-text')
	})

	it('has-bg', () => {
		const wrapper = mount(button, {
			props: {
				bg: true,
			},
		})
		expect(wrapper.classes()).toContain('is-has-bg')
	})

	it('tag', () => {
		const wrapper = mount(button, {
			props: {
				tag: 'div',
			},
		})
		expect(wrapper.element.tagName).toBe('DIV')
	})
})
