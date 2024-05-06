import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { UedIcon } from '@ued-plus/components'

describe('Icon.vue', () => {
	it('render', () => {
		const wrapper = mount(UedIcon, {
			props: {
				color: '#000000',
				size: 18,
			},
		})
		expect(wrapper.element.getAttribute('style')).toContain('color: #000000')
		expect(wrapper.element.getAttribute('style')).toContain('font-size: 18px')
	})
})
