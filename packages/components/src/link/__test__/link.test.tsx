import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { UedLink, Plus } from '@ued-plus/components'
import { markRaw } from 'vue'

describe('Link.vue', () => {
	it('render text', () => {
		const wrapper = mount(UedLink, {
			slots: {
				default: 'ued-link',
			},
		})
		expect(wrapper.text()).toEqual('ued-link')
	})

	it('it should handle click event when link is not disabled', async () => {
		const wrapper = mount(UedLink, {
			slots: {
				default: 'ued-link',
			},
		})

		await wrapper.trigger('click')
		expect(wrapper.emitted('click')).toHaveLength(1)
	})

	it('it should disable click when link is disabled', async () => {
		const wrapper = mount(UedLink, {
			props: {
				disabled: true,
			},
			slots: {
				default: 'ued-link',
			},
		})

		expect(wrapper.classes()).toContain('is-disabled')
		expect(wrapper.attributes('href')).toBeUndefined()
	})

	it('icon', () => {
		const wrapper = mount(UedLink, {
			props: {
				icon: markRaw(Plus),
			},
		})
		expect(wrapper.findComponent(Plus).exists()).toBeTruthy()
	})

	it('icon slot', () => {
		const wrapper = mount(UedLink, {
			slots: {
				icon: markRaw(Plus),
			},
		})
		expect(wrapper.findComponent(Plus).exists()).toBeTruthy()
	})

	it('underline', () => {
		const wrapper = mount(UedLink, {
			props: {
				underline: true,
			},
		})
		expect(wrapper.classes()).toContain('is-underline')
	})
})
