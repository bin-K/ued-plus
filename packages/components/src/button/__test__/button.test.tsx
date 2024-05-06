import { ref, markRaw, nextTick } from 'vue'
import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { UedButton, UedButtonGroup, Plus, Loading } from '@ued-plus/components'

// Button.vue test
describe('Button.vue', () => {
	it('slot', () => {
		const wrapper = mount(UedButton, {
			slots: {
				default: 'ued',
			},
		})
		expect(wrapper.text()).toEqual('ued')
	})

	it('type', () => {
		const wrapper = mount(UedButton, {
			props: {
				type: 'primary',
			},
		})
		expect(wrapper.classes()).toContain('ued-button--primary')
	})

	it('disabled', async () => {
		const wrapper = mount(UedButton, {
			props: {
				disabled: true,
			},
		})
		expect(wrapper.classes()).toContain('is-disabled')
		await wrapper.trigger('click')
		expect(wrapper.emitted('click')).toBeUndefined()
	})

	it('plain', () => {
		const wrapper = mount(UedButton, {
			props: {
				plain: true,
			},
		})
		expect(wrapper.classes()).toContain('is-plain')
	})

	it('round', () => {
		const wrapper = mount(UedButton, {
			props: {
				round: true,
			},
		})
		expect(wrapper.classes()).toContain('is-round')
	})

	it('circle', () => {
		const wrapper = mount(UedButton, {
			props: {
				circle: true,
			},
		})
		expect(wrapper.classes()).toContain('is-circle')
	})

	it('link', () => {
		const wrapper = mount(UedButton, {
			props: {
				link: true,
			},
		})
		expect(wrapper.classes()).toContain('is-link')
	})

	it('text', () => {
		const wrapper = mount(UedButton, {
			props: {
				text: true,
			},
		})
		expect(wrapper.classes()).toContain('is-text')
	})

	it('has-bg', () => {
		const wrapper = mount(UedButton, {
			props: {
				bg: true,
			},
		})
		expect(wrapper.classes()).toContain('is-has-bg')
	})

	it('tag', () => {
		const href = 'https://github.com/bin-K/ued-plus'
		const wrapper = mount(UedButton, {
			props: {
				tag: 'a',
				href,
			},
		})
		expect(wrapper.element.tagName).toBe('A')
		expect(wrapper.attributes('href')).toBe(href)
	})

	it('icon', () => {
		const wrapper = mount(UedButton, {
			props: {
				icon: markRaw(Plus),
			},
		})
		expect(wrapper.findComponent(Plus).exists()).toBeTruthy()
	})

	it('loading', () => {
		const wrapper = mount(UedButton, {
			props: {
				loading: true,
			},
		})
		expect(wrapper.classes()).toContain('is-loading')
		expect(wrapper.findComponent(Loading).exists()).toBeTruthy()
	})

	it('loading icon', () => {
		const wrapper = mount(UedButton, {
			props: {
				loading: true,
				loadingIcon: markRaw(Plus),
			},
		})
		expect(wrapper.classes()).toContain('is-loading')
		expect(wrapper.findComponent(Plus).exists()).toBeTruthy()
	})

	it('loading slot', () => {
		const wrapper = mount(UedButton, {
			props: {
				loading: true,
			},
			slots: {
				icon: '<span class="custom-loading">111</span>',
			},
		})
		expect(wrapper.find('.custom-loading').exists()).toBeTruthy()
	})

	it('size', () => {
		const wrapper = mount(UedButton, {
			props: {
				size: 'large',
			},
		})

		expect(wrapper.classes()).toContain('ued-button--large')
	})

	test('handle click', async () => {
		const wrapper = mount(UedButton)

		await wrapper.trigger('click')
		expect(wrapper.emitted()).toBeDefined()
	})

	test('handle click inside', async () => {
		const wrapper = mount(UedButton, {
			slots: {
				default: '<span class="inner-slot"></span>',
			},
		})

		wrapper.find('.inner-slot').trigger('click')
		expect(wrapper.emitted()).toBeDefined()
	})

	test('loading implies disabled', async () => {
		const wrapper = mount(UedButton, {
			props: {
				loading: true,
			},
		})

		await wrapper.trigger('click')
		expect(wrapper.emitted('click')).toBeUndefined()
	})
})

// ButtonGroup.vue test
describe('ButtonGroup.vue', () => {
	it('slot', () => {
		const wrapper = mount({
			setup: () => () => (
				<UedButtonGroup>
					<UedButton type="primary">Prev</UedButton>
					<UedButton type="primary">Next</UedButton>
				</UedButtonGroup>
			),
		})
		expect(wrapper.classes()).toContain('ued-button-group')
		expect(wrapper.findAllComponents('.ued-button').length).toBe(2)
	})

	it('button group reactive size', async () => {
		const size = ref<string>('small')
		const wrapper = mount({
			setup: () => () => (
				<UedButtonGroup size={size.value}>
					<UedButton type="primary">Prev</UedButton>
					<UedButton type="primary">Next</UedButton>
				</UedButtonGroup>
			),
		})
		expect(wrapper.classes()).toContain('ued-button-group')
		expect(
			wrapper.findAllComponents('.ued-button-group button.ued-button--small')
				.length
		).toBe(2)

		size.value = 'large'
		await nextTick()

		expect(
			wrapper.findAllComponents('.ued-button-group button.ued-button--large')
				.length
		).toBe(2)
	})
})
