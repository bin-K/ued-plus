import { ref, nextTick } from 'vue'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { CheckboxValueType } from '@ued-plus/components/src/checkbox/checkbox-group'
import {
	UedCheckbox,
	UedCheckboxGroup,
	UedCheckboxButton,
} from '@ued-plus/components'

describe('Checkbox', () => {
	it('create', async () => {
		const checked = ref(false)
		const wrapper = mount(() => (
			<UedCheckbox v-model={checked.value} label="a" />
		))

		expect(wrapper.classes()).toContain('ued-checkbox')
		expect(wrapper.classes()).not.toContain('is-disabled')
		await wrapper.find('input').setValue(true)
		expect(wrapper.classes()).toContain('is-checked')
		await wrapper.find('input').setValue(false)
		expect(wrapper.classes('is-checked')).toBe(false)
	})

	it('label set to number 0', async () => {
		const wrapper = mount(() => <UedCheckbox label={0} />)
		expect(wrapper.find('.ued-checkbox__label').text()).toBe('0')
	})

	describe('no v-model', () => {
		it('checkbox without label', async () => {
			const checked = ref(false)
			const wrapper = mount(() => <UedCheckbox checked={checked.value} />)

			expect(wrapper.classes('is-checked')).toBe(false)
		})

		it('checkbox with label attribute', async () => {
			const checked = ref(false)
			const wrapper = mount(() => (
				<UedCheckbox checked={checked.value} label="a" />
			))

			expect(wrapper.classes('is-checked')).toBe(false)
		})
	})

	describe('disabled', () => {
		it('checkbox with label attribute', async () => {
			const checked = ref(false)
			const wrapper = mount(() => (
				<UedCheckbox v-model={checked.value} disabled label="a" />
			))

			expect(wrapper.classes()).toContain('is-disabled')
			expect(checked.value).toBe(false)
			await nextTick()
			expect(wrapper.classes()).toContain('is-disabled')
			expect(checked.value).toBe(false)
		})
	})
	describe('change event', () => {
		it('checkbox with label attribute', async () => {
			const checked = ref(false)
			const data = ref()
			const onChange = (val: CheckboxValueType) => (data.value = val)
			const wrapper = mount(() => (
				<UedCheckbox
					v-model={checked.value}
					onChange={onChange}
					label="Foobar"
				/>
			))

			await wrapper.find('input').setValue(true)
			expect(data.value).toBe(true)
		})

		it('checkbox with label as slot content', async () => {
			const checked = ref(false)
			const data = ref()
			const onChange = (val: CheckboxValueType) => (data.value = val)
			const wrapper = mount(() => (
				<UedCheckbox v-model={checked.value} onChange={onChange}>
					Foobar
				</UedCheckbox>
			))
			await wrapper.find('input').setValue(true)
			expect(data.value).toBe(true)
		})

		it('checkbox group', async () => {
			const checkList = ref([])
			const wrapper = mount({
				setup() {
					return () => (
						<UedCheckboxGroup v-model={checkList.value}>
							<UedCheckbox label="a" value="a" ref="a" />
							<UedCheckbox label="b" value="b" ref="b" />
							<UedCheckbox label="c" value="c" ref="c" />
							<UedCheckbox label="d" value="d" ref="d" />
						</UedCheckboxGroup>
					)
				},
			})

			expect(checkList.value.length).toBe(0)

			await wrapper.findComponent({ ref: 'a' }).find('input').setValue(true)
			expect(checkList.value.length).toBe(1)
			expect(checkList.value).toContain('a')

			await wrapper.findComponent({ ref: 'b' }).find('input').setValue(true)
			expect(checkList.value.length).toBe(2)
			expect(checkList.value).toContain('a')
			expect(checkList.value).toContain('b')
		})

		it('checkbox group without modelValue', async () => {
			const checkList = ref([])
			const wrapper = mount({
				setup() {
					return () => (
						<UedCheckboxGroup v-model={checkList.value}>
							<UedCheckbox label="a" value="a" ref="a" />
							<UedCheckbox label="b" value="b" ref="b" />
							<UedCheckbox label="c" value="c" ref="c" />
							<UedCheckbox label="d" value="d" ref="d" />
						</UedCheckboxGroup>
					)
				},
			})

			await wrapper.findComponent({ ref: 'a' }).find('input').setValue(true)
			expect(checkList.value.length).toBe(1)
			expect(checkList.value).toContain('a')
		})

		it('checkbox group change', async () => {
			const checkList = ref([])
			const data = ref<CheckboxValueType[]>([])
			const onChange = (val: CheckboxValueType[]) => (data.value = val)
			const wrapper = mount({
				setup() {
					return () => (
						<UedCheckboxGroup v-model={checkList.value} onChange={onChange}>
							<UedCheckbox label="a" value="a" ref="a" />
							<UedCheckbox label="b" value="b" ref="b" />
						</UedCheckboxGroup>
					)
				},
			})

			await wrapper.findComponent({ ref: 'a' }).find('input').setValue(true)
			await nextTick()
			expect(data.value.length).toBe(1)
			expect(data.value).toEqual(['a'])
		})

		it('nested group', async () => {
			const checkList = ref([])
			const wrapper = mount({
				setup() {
					return () => (
						<UedCheckboxGroup v-model={checkList.value}>
							<UedCheckbox label="a" value="a" ref="a" />
							<UedCheckbox label="b" value="b" ref="b" />
							<UedCheckbox label="c" value="c" ref="c" />
							<UedCheckbox label="d" value="d" ref="d" />
						</UedCheckboxGroup>
					)
				},
			})

			expect(checkList.value.length).toBe(0)
			await wrapper.findComponent({ ref: 'a' }).find('input').setValue(true)
			expect(checkList.value).toEqual(['a'])
		})

		it('label', async () => {
			const checklist = ref([])
			const wrapper = mount(() => (
				<UedCheckboxGroup v-model={checklist.value}>
					<UedCheckbox label="" value="">
						all
					</UedCheckbox>
					<UedCheckbox label="a" value="a">
						a
					</UedCheckbox>
					<UedCheckbox label="b" value="b">
						b
					</UedCheckbox>
				</UedCheckboxGroup>
			))

			const checkbox = wrapper.find('.ued-checkbox')
			await checkbox.find('input').setValue(true)
			expect(checklist.value[0]).toEqual('')
		})

		it('value is object', async () => {
			const checklist = ref([])
			const wrapper = mount(() => (
				<UedCheckboxGroup v-model={checklist.value}>
					<UedCheckbox value={{ a: 1 }}>all</UedCheckbox>
					<UedCheckbox value={{ a: 2 }}>a</UedCheckbox>
					<UedCheckbox value={{ b: 1 }}>b</UedCheckbox>
				</UedCheckboxGroup>
			))

			const checkbox = wrapper.find('.ued-checkbox')
			await checkbox.find('input').setValue(true)
			expect(checklist.value[0]).toEqual({ a: 1 })
			expect(checkbox.classes()).contains('is-checked')
		})
		it('value is object with initial values', async () => {
			const checklist = ref([{ a: 1 }])
			const wrapper = mount({
				setup() {
					return () => (
						<UedCheckboxGroup v-model={checklist.value}>
							<UedCheckbox value={{ a: 1 }} ref="a1">
								a1
							</UedCheckbox>
							<UedCheckbox value={{ a: 2 }} ref="a2">
								a2
							</UedCheckbox>
							<UedCheckbox value={{ b: 1 }} ref="b1">
								b1
							</UedCheckbox>
						</UedCheckboxGroup>
					)
				},
			})
			expect(checklist.value.length).toBe(1)
			const checkboxA1 = wrapper.findComponent({ ref: 'a1' })
			const checkboxA2 = wrapper.findComponent({ ref: 'a2' })
			await checkboxA2.find('input').setValue(true)
			expect(checklist.value).toEqual([{ a: 1 }, { a: 2 }])
			expect(checkboxA1.classes()).contains('is-checked')
			expect(checkboxA2.classes()).contains('is-checked')
			await checkboxA1.find('input').setValue(false)
			expect(checklist.value).toEqual([{ a: 2 }])
			expect(checkboxA1.classes()).not.contains('is-checked')
		})
	})

	describe('check-button', () => {
		it('create', async () => {
			const checked = ref(false)
			const wrapper = mount(() => (
				<UedCheckboxButton v-model={checked.value} label="a" value="a" />
			))

			expect(wrapper.classes()).toContain('ued-checkbox-button')
			await wrapper.find('input').setValue(true)
			expect(wrapper.classes()).toContain('is-active')
			await wrapper.find('input').setValue(false)
			expect(wrapper.classes('is-active')).toBe(false)
		})

		it('disabled', async () => {
			const checked = ref(false)
			const wrapper = mount(() => (
				<UedCheckboxButton
					v-model={checked.value}
					disabled
					label="a"
					value="a"
				/>
			))

			expect(wrapper.classes()).toContain('is-disabled')
			await wrapper.find('input').setValue(true)
			expect(wrapper.classes()).toContain('is-disabled')
		})

		it('change event', async () => {
			const checked = ref(false)
			const data = ref()
			const onChange = (val: CheckboxValueType) => (data.value = val)
			const wrapper = mount(() => (
				<UedCheckboxButton v-model={checked.value} onChange={onChange} />
			))

			await wrapper.find('input').setValue(true)
			expect(data.value).toBe(true)
		})

		it('button group change', async () => {
			const checkList = ref([])
			const data = ref<CheckboxValueType[]>([])
			const onChange = (val: CheckboxValueType[]) => (data.value = val)
			const wrapper = mount({
				setup() {
					return () => (
						<UedCheckboxGroup v-model={checkList.value} onChange={onChange}>
							<UedCheckboxButton label="a" value="a" ref="a" />
							<UedCheckboxButton label="b" value="b" ref="b" />
							<UedCheckboxButton label="c" value="c" ref="c" />
							<UedCheckboxButton label="d" value="d" ref="d" />
						</UedCheckboxGroup>
					)
				},
			})

			await wrapper.findComponent({ ref: 'a' }).find('input').setValue(true)
			expect(data.value).toEqual(['a'])
			await wrapper.findComponent({ ref: 'b' }).find('input').setValue(true)
			expect(data.value).toEqual(['a', 'b'])
		})

		it('button group props', () => {
			const checkList = ref(['a', 'b'])
			const wrapper = mount({
				setup() {
					return () => (
						<UedCheckboxGroup
							v-model={checkList.value}
							size="large"
							fill="#ff0000"
							text-color="#000"
						>
							<UedCheckboxButton label="a" value="a" ref="a" />
							<UedCheckboxButton label="b" value="b" ref="b" />
							<UedCheckboxButton label="c" value="c" ref="c" />
							<UedCheckboxButton label="d" value="d" ref="d" />
						</UedCheckboxGroup>
					)
				},
			})

			const checkbox = wrapper.findComponent({ ref: 'a' })
			expect(checkList.value.length).toBe(2)
			expect(checkbox.classes()).contains('is-active')
			expect(
				checkbox.find('.ued-checkbox-button').attributes('style')
			).contains('border-color: #ff0000;')
		})

		it('button group tag', () => {
			const checkList = ref(['a', 'b'])
			const wrapper = mount(() => (
				<UedCheckboxGroup v-model={checkList.value} tag="tr">
					<UedCheckboxButton label="a" value="a" ref="a" />
					<UedCheckboxButton label="b" value="b" ref="b" />
					<UedCheckboxButton label="c" value="c" ref="c" />
					<UedCheckboxButton label="d" value="d" ref="d" />
				</UedCheckboxGroup>
			))

			expect(wrapper.classes('ued-checkbox-group')).toBeTruthy()
		})

		it('button group min and max', async () => {
			const checkList = ref(['a', 'b'])
			const wrapper = mount({
				setup() {
					return () => (
						<UedCheckboxGroup v-model={checkList.value} min={2} max={3}>
							<UedCheckboxButton label="a" value="a" ref="a" />
							<UedCheckboxButton label="b" value="b" ref="b" />
							<UedCheckboxButton label="c" value="c" ref="c" />
							<UedCheckboxButton label="d" value="d" ref="d" />
							<UedCheckboxButton label="e" value="e" ref="e" />
						</UedCheckboxGroup>
					)
				},
			})

			expect(checkList.value.length).toBe(2)

			await wrapper.findComponent({ ref: 'a' }).find('input').setValue(true)
			expect(checkList.value.length).toBe(2)

			await wrapper.findComponent({ ref: 'c' }).find('input').setValue(true)
			expect(checkList.value.length).toBe(3)
			expect(checkList.value).toEqual(['a', 'b', 'c'])
			expect(wrapper.findComponent({ ref: 'd' }).vm.isDisabled).toBe(true)
			expect(wrapper.findComponent({ ref: 'e' }).vm.isDisabled).toBe(true)

			checkList.value = []
			await nextTick()
			await wrapper.findComponent({ ref: 'a' }).find('input').setValue(true)
			await wrapper.findComponent({ ref: 'd' }).find('input').setValue(true)
			expect(checkList.value).toEqual(['a', 'd'])
			await wrapper.findComponent({ ref: 'a' }).find('input').setValue(true)
			expect(checkList.value).toEqual(['a', 'd'])
			expect(wrapper.findComponent({ ref: 'a' }).vm.isDisabled).toBe(true)
		})

		it('button group exceed max', async () => {
			const checkList = ref(['a', 'b', 'c', 'd'])
			const wrapper = mount({
				setup() {
					return () => (
						<UedCheckboxGroup v-model={checkList.value} max={3}>
							<UedCheckboxButton label="a" value="a" ref="a" />
							<UedCheckboxButton label="b" value="b" ref="b" />
							<UedCheckboxButton label="c" value="c" ref="c" />
							<UedCheckboxButton label="d" value="d" ref="d" />
							<UedCheckboxButton label="e" value="e" ref="e" />
						</UedCheckboxGroup>
					)
				},
			})

			expect(checkList.value.length).toBe(4)

			await wrapper.findComponent({ ref: 'a' }).find('input').setValue(false)
			expect(checkList.value.length).toBe(3)

			await wrapper.findComponent({ ref: 'a' }).find('input').setValue(true)
			expect(checkList.value.length).toBe(3)
			expect(checkList.value).toEqual(['b', 'c', 'd'])

			expect(wrapper.findComponent({ ref: 'a' }).vm.isDisabled).toBe(true)
		})

		it('nested group', async () => {
			const checkList = ref([])
			const wrapper = mount({
				setup() {
					return () => (
						<UedCheckboxGroup v-model={checkList.value}>
							<UedCheckboxButton label="a" value="a" ref="a" />
							<UedCheckboxButton label="b" value="b" ref="b" />
							<UedCheckboxButton label="c" value="c" ref="c" />
							<UedCheckboxButton label="d" value="d" ref="d" />
						</UedCheckboxGroup>
					)
				},
			})

			expect(checkList.value.length).toBe(0)
			await wrapper.findComponent({ ref: 'a' }).find('input').setValue(true)
			expect(checkList.value).toEqual(['a'])
		})
	})
})
