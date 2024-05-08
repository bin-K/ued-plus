import { ref, nextTick } from 'vue'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { UedRadio, UedRadioGroup, UedRadioButton } from '@ued-plus/components'

describe('Radio.vue', () => {
	it('create', async () => {
		const radio = ref('')
		const wrapper = mount(() => (
			<UedRadio
				v-model={radio.value}
				onUpdate:modelValue={(e: Event) => {
					wrapper.setProps({ modelValue: e })
				}}
				value="a"
			/>
		))
		expect(wrapper.classes()).toContain('ued-radio')
		await wrapper.find('input').setValue('a')
		expect(wrapper.classes()).toContain('is-checked')
	})

	it('disabled', async () => {
		const radio = ref('')
		const wrapper = mount(() => (
			<UedRadio
				v-model={radio.value}
				onUpdate:modelValue={(e: Event) => {
					wrapper.setProps({ modelValue: e })
				}}
				value="3"
				disabled
			/>
		))
		await wrapper.find('input').setValue('3')
		expect(radio.value).toBe('')
		expect(wrapper.classes()).toContain('is-disabled')
	})

	it('border', () => {
		const radio = ref('')
		const wrapper = mount(() => (
			<UedRadio v-model={radio.value} value="3" border />
		))
		expect(wrapper.classes()).toContain('is-bordered')
	})

	it('change event', async () => {
		const radio = ref('')
		const changeData = ref('')
		function handleChange(val: string) {
			changeData.value = val
		}
		const wrapper = mount(() => (
			<UedRadio
				v-model={radio.value}
				onUpdate:modelValue={(e: Event) => {
					wrapper.setProps({ modelValue: e })
				}}
				value="3"
				onChange={handleChange}
			/>
		))
		await wrapper.find('input').setValue('3')
		expect(changeData.value).toEqual('3')
	})

	it('change event only triggers on user input', async () => {
		const radio = ref('')
		const changeData = ref('')
		function handleChange(val: string) {
			changeData.value = val
		}
		const wrapper = mount(() => (
			<UedRadio
				v-model={radio.value}
				onUpdate:modelValue={(e: Event) => {
					wrapper.setProps({ modelValue: e })
				}}
				value="3"
				onChange={handleChange}
			/>
		))
		radio.value = '3'
		await nextTick()
		expect(changeData.value).toEqual('')
		expect(radio.value).toEqual('3')
	})
})

describe('Radio group', () => {
	it('create', async () => {
		const radio = ref(3)
		const wrapper = mount(() => (
			<UedRadioGroup
				v-model={radio.value}
				onUpdate:modelValue={(e: Event) => {
					wrapper.setProps({ modelValue: e })
				}}
			>
				<UedRadio value={3} ref="radio1">
					3
				</UedRadio>
				<UedRadio value={6} ref="radio2">
					6
				</UedRadio>
				<UedRadio value={9}>9</UedRadio>
			</UedRadioGroup>
		))
		await nextTick()
		const [radio1, radio2] = wrapper.findAll('.ued-radio')
		expect(radio1.classes()).toContain('is-checked')
		await radio2.find('input').setValue(6)
		expect(radio2.classes()).toContain('is-checked')
		expect(radio.value).toEqual(6)
	})

	it('id auto derive', async () => {
		const radioValue1 = ref(3)
		const wrapper1 = mount(() => (
			<UedRadioGroup v-model={radioValue1.value}>
				<UedRadio value={3} ref="radio1">
					3
				</UedRadio>
				<UedRadio value={6} ref="radio2">
					6
				</UedRadio>
				<UedRadio value={9}>9</UedRadio>
			</UedRadioGroup>
		))

		const radioValue2 = ref(3)
		const wrapper2 = mount(() => (
			<UedRadioGroup v-model={radioValue2.value}>
				<UedRadio value={3} ref="radio1">
					3
				</UedRadio>
				<UedRadio value={6} ref="radio2">
					6
				</UedRadio>
				<UedRadio value={9}>9</UedRadio>
			</UedRadioGroup>
		))

		const id1 = wrapper1.find('.ued-radio').find('input').attributes('name')
		const id2 = wrapper2.find('.ued-radio').find('input').attributes('name')

		expect(id1).not.toEqual(id2)
	})

	it('disabled', async () => {
		const radio = ref(3)
		const wrapper = mount(() => (
			<UedRadioGroup
				v-model={radio.value}
				onUpdate:modelValue={(e: Event) => {
					wrapper.setProps({ modelValue: e })
				}}
				disabled
			>
				<UedRadio value={3} ref="radio1">
					3
				</UedRadio>
				<UedRadio value={6} ref="radio2">
					6
				</UedRadio>
				<UedRadio value={9}>9</UedRadio>
			</UedRadioGroup>
		))
		expect(wrapper.find('label.is-disabled').exists()).toBe(true)

		const [radio1, radio2] = wrapper.findAll('.ued-radio')
		expect(radio1.classes()).toContain('is-checked')
		await radio2.find('input').setValue(3)
		expect(radio.value).toEqual(3)
		expect(radio1.classes()).toContain('is-checked')
	})

	it('change event', async () => {
		const radio = ref(3)
		const data = ref(0)
		function onChange(val: number) {
			data.value = val
		}
		const wrapper = mount(() => (
			<UedRadioGroup
				v-model={radio.value}
				onUpdate:modelValue={(e: Event) => {
					wrapper.setProps({ modelValue: e })
				}}
				onChange={onChange}
			>
				<UedRadio value={3}>3</UedRadio>
				<UedRadio value={6} ref="radio2">
					6
				</UedRadio>
				<UedRadio value={9}>9</UedRadio>
			</UedRadioGroup>
		))
		const radio2 = wrapper.findAll('.ued-radio').at(1)
		await radio2?.find('input').setValue(6)
		await nextTick()
		expect(data.value).toEqual(6)
	})

	it('change event only triggers on user input', async () => {
		const radio = ref(3)
		const data = ref(0)
		function onChange(val: number) {
			data.value = val
		}
		mount(() => (
			<UedRadioGroup v-model={radio.value} onChange={onChange}>
				<UedRadio value={3}>3</UedRadio>
				<UedRadio value={6} ref="radio2">
					6
				</UedRadio>
				<UedRadio value={9}>9</UedRadio>
			</UedRadioGroup>
		))

		radio.value = 6
		await nextTick()
		expect(data.value).toEqual(0)
	})

	it('disabled when children is radio button', async () => {
		const radio = ref(3)
		const wrapper = mount(() => (
			<UedRadioGroup
				v-model={radio.value}
				onUpdate:modelValue={(e: Event) => {
					wrapper.setProps({ modelValue: e })
				}}
				disabled
			>
				<UedRadioButton value={3} ref="radio1">
					3
				</UedRadioButton>
				<UedRadioButton value={6} ref="radio2">
					6
				</UedRadioButton>
				<UedRadioButton value={9}>9</UedRadioButton>
			</UedRadioGroup>
		))

		const [radio1, radio2] = wrapper.findAll('.ued-radio-button')
		expect(radio1.classes()).toContain('is-active')
		expect(wrapper.findAll('.is-disabled').length).toBe(3)
		await radio2.find('input').setValue(3)
		expect(radio.value).toEqual(3)
		expect(radio1.classes()).toContain('is-active')
	})
})

describe('Radio Button', () => {
	it('create', async () => {
		const radio = ref(3)
		const wrapper = mount(() => (
			<UedRadioGroup
				v-model={radio.value}
				onUpdate:modelValue={(e: Event) => {
					wrapper.setProps({ modelValue: e })
				}}
			>
				<UedRadioButton value={3} ref="radio1">
					3
				</UedRadioButton>
				<UedRadioButton value={6} ref="radio2">
					6
				</UedRadioButton>
				<UedRadioButton value={9}>9</UedRadioButton>
			</UedRadioGroup>
		))
		const [radio1, radio2] = wrapper.findAll('.ued-radio-button')
		expect(radio1.classes()).toContain('is-active')
		await radio2.find('input').setValue(6)
		expect(radio2.classes()).toContain('is-active')
		expect(radio.value).toEqual(6)
	})

	it('custom color', () => {
		const radio = ref(3)
		const wrapper = mount(() => (
			<UedRadioGroup v-model={radio.value} fill="#000" text-color="#ff0">
				<UedRadioButton value={3} ref="radio1">
					3
				</UedRadioButton>
				<UedRadioButton value={6} ref="radio2">
					6
				</UedRadioButton>
				<UedRadioButton value={9}>9</UedRadioButton>
			</UedRadioGroup>
		))
		const radio1 = wrapper.find('.ued-radio-button')
		expect(radio1.attributes('style')).toContain(
			'--ued-radio-button-checked-text-color: #ff0; --ued-radio-button-checked-border-color: #000; --ued-radio-button-checked-bg-color: #000;'
		)
	})

	it('change event', async () => {
		const radio = ref(3)
		const data = ref(0)
		function onChange(val: number) {
			data.value = val
		}
		const wrapper = mount(() => (
			<UedRadioGroup
				v-model={radio.value}
				onUpdate:modelValue={(e: Event) => {
					wrapper.setProps({ modelValue: e })
				}}
				onChange={onChange}
			>
				<UedRadioButton value={3} ref="radio1">
					3
				</UedRadioButton>
				<UedRadioButton value={6} ref="radio2">
					6
				</UedRadioButton>
				<UedRadioButton value={9}>9</UedRadioButton>
			</UedRadioGroup>
		))
		const radio2 = wrapper.findAll('.ued-radio-button').at(1)
		await radio2?.find('input').setValue(6)
		expect(radio.value).toEqual(6)
	})

	it('change event only triggers on user input', async () => {
		const radio = ref(3)
		const data = ref(0)
		function onChange(val: number) {
			data.value = val
		}
		mount(() => (
			<UedRadioGroup v-model={radio.value} onChange={onChange}>
				<UedRadioButton value={3} ref="radio1">
					3
				</UedRadioButton>
				<UedRadioButton value={6} ref="radio2">
					6
				</UedRadioButton>
				<UedRadioButton value={9}>9</UedRadioButton>
			</UedRadioGroup>
		))

		radio.value = 6
		await nextTick()
		expect(data.value).toEqual(0)
	})

	it('size', () => {
		const radio = ref(3)
		const wrapper = mount(() => (
			<UedRadioGroup v-model={radio.value} size="large">
				<UedRadioButton value={3} ref="radio1">
					3
				</UedRadioButton>
				<UedRadioButton value={6} ref="radio2">
					6
				</UedRadioButton>
				<UedRadioButton value={9}>9</UedRadioButton>
			</UedRadioGroup>
		))
		expect(wrapper.findAll('.ued-radio-button--large').length).toBe(3)
	})
})
