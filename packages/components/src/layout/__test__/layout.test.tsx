import { nextTick, ref } from 'vue'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { UedRow, UedCol } from '@ued-plus/components'

describe('Row.vue', () => {
	it('create', () => {
		const wrapper = mount(UedRow)
		expect(wrapper.classes()).toContain('ued-row')
	})

	it('gutter', () => {
		const wrapper = mount(UedRow, {
			props: {
				gutter: 20,
			},
		})
		const rowElm = wrapper.element as HTMLElement
		expect(rowElm.style.marginLeft).toEqual('-10px')
		expect(rowElm.style.marginRight).toEqual('-10px')
	})

	it('justify', () => {
		const wrapper = mount(UedRow, {
			props: {
				justify: 'end',
			},
		})
		expect(wrapper.classes()).toContain('is-justify-end')
	})

	it('align', () => {
		const wrapper = mount(UedRow, {
			props: {
				align: 'bottom',
			},
		})
		expect(wrapper.classes()).toContain('is-align-bottom')
	})
})

describe('Col.vue', () => {
	it('create', () => {
		const wrapper = mount(UedCol)
		expect(wrapper.classes()).toContain('ued-col')
	})

	it('span', () => {
		const wrapper = mount(UedCol, {
			props: {
				span: 12,
			},
		})
		expect(wrapper.classes()).toContain('ued-col-12')
	})

	it('pull', () => {
		const wrapper = mount(UedCol, {
			props: {
				pull: 3,
			},
		})
		expect(wrapper.classes()).toContain('ued-col-pull-3')
	})

	it('push', () => {
		const wrapper = mount(UedCol, {
			props: {
				push: 3,
			},
		})
		expect(wrapper.classes()).toContain('ued-col-push-3')
	})

	it('gutter', () => {
		const wrapper = mount({
			setup: () => () => (
				<UedRow gutter={20}>
					<UedCol span={12} ref="col"></UedCol>
				</UedRow>
			),
		})

		const colElm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
		expect(colElm.style.paddingLeft === '10px').toBe(true)
		expect(colElm.style.paddingRight === '10px').toBe(true)
	})

	it('change gutter value', async () => {
		const outer = ref(20)

		const wrapper = mount({
			setup: () => () => (
				<UedRow gutter={outer.value} ref="row">
					<UedCol span={12} ref="col" />
				</UedRow>
			),
		})

		const rowElm = wrapper.findComponent({ ref: 'row' }).element as HTMLElement
		const colElm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement

		expect(rowElm.style.marginLeft === '-10px').toBe(true)
		expect(rowElm.style.marginRight === '-10px').toBe(true)
		expect(colElm.style.paddingLeft === '10px').toBe(true)
		expect(colElm.style.paddingRight === '10px').toBe(true)

		outer.value = 40
		await nextTick()

		expect(rowElm.style.marginLeft === '-20px').toBe(true)
		expect(rowElm.style.marginRight === '-20px').toBe(true)
		expect(colElm.style.paddingLeft === '20px').toBe(true)
		expect(colElm.style.paddingRight === '20px').toBe(true)
	})

	it('responsive', () => {
		const wrapper = mount({
			setup: () => () => (
				<UedRow gutter={20}>
					<UedCol
						ref="col"
						sm={{ span: 4, offset: 2 }}
						md={8}
						lg={{ span: 6, offset: 3 }}
					/>
				</UedRow>
			),
		})

		const colElmClass = wrapper.findComponent({ ref: 'col' }).classes()

		expect(colElmClass.includes('ued-col-sm-4')).toBe(true)
		expect(colElmClass.includes('ued-col-sm-4')).toBe(true)
		expect(colElmClass.includes('ued-col-offset-sm-2')).toBe(true)
		expect(colElmClass.includes('ued-col-lg-6')).toBe(true)
		expect(colElmClass.includes('ued-col-offset-lg-3')).toBe(true)
		expect(colElmClass.includes('ued-col-md-8')).toBe(true)
	})
})
