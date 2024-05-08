import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { UedDialog } from '@ued-plus/components'

describe('Dialog.vue', () => {
	it('render it', async () => {
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
			},
			slots: {
				default: 'ued-dialog',
			},
		})
		expect(wrapper.find('.ued-dialog__body').text()).toEqual('ued-dialog')
	})

	it('dialog should have a title and header when it has been given', async () => {
		const HEADER = 'I am header'
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
			},
			slots: {
				header: () => HEADER,
				default: 'ued-dialog',
			},
		})
		expect(wrapper.find('.ued-dialog__header').text()).toBe(HEADER)
		mount(UedDialog, {
			props: {
				modelValue: true,
				title: HEADER,
			},
		})
		expect(wrapper.find('.ued-dialog__header').text()).toBe(HEADER)
	})

	it('dialog header should have slot props', async () => {
		const wrapper = mount(
			<UedDialog
				modelValue={true}
				showClose={false}
				v-slots={{
					header: ({
						titleClass,
						close,
					}: {
						titleClass: string
						close: () => void
					}) => <button class={titleClass} onClick={close} />,
				}}
			>
				ued-dialog
			</UedDialog>
		)

		const headerButton = wrapper.find('button')
		expect(headerButton.classes()).toContain('ued-dialog__title')
		expect(wrapper.emitted().close).toBeFalsy()
		headerButton.trigger('click')
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(true)
			})
		})
		expect(wrapper.vm.visible).toBe(false)
	})

	it('dialog should have a footer when footer has been given', async () => {
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
			},
			slots: {
				footer: () => 'ued-footer',
			},
		})

		expect(wrapper.find('.ued-dialog__footer').exists()).toBe(true)
		expect(wrapper.find('.ued-dialog__footer').text()).toBe('ued-footer')
	})

	it('should append dialog to body when appendToBody is true', async () => {
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
				appendToBody: true,
			},
			slots: {
				default: 'ued-dialog',
			},
		})

		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(true)
			})
		})
		expect(
			document.body
				.querySelector('.ued-overlay')
				?.classList.contains('ued-overlay')
		).toBe(true)
		wrapper.unmount()
	})

	it('should center dialog', async () => {
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
				center: true,
			},
			slots: {
				default: 'ued-dialog',
			},
		})

		expect(wrapper.find('.ued-dialog--center').exists()).toBe(true)
	})

	it('should show close button', async () => {
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
			},
			slots: {
				default: 'ued-dialog',
			},
		})

		expect(wrapper.find('.ued-dialog__close').exists()).toBe(true)
	})

	it('should hide close button when showClose = false', async () => {
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
				showClose: false,
			},
			slots: {
				default: 'ued-dialog',
			},
		})

		expect(wrapper.find('.ued-dialog__headerbtn').exists()).toBe(false)
	})

	it('should close dialog when click on close button', async () => {
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
			},
			slots: {
				default: 'ued-dialog',
			},
		})

		await wrapper.find('.ued-dialog__headerbtn').trigger('click')
		expect(wrapper.vm.visible).toBe(false)
	})
})

describe('mask', () => {
	it('should not have overlay mask when mask is false', async () => {
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
				modal: false,
			},
			slots: {
				default: 'ued-dialog',
			},
		})

		expect(wrapper.find('.ued-overlay').exists()).toBe(false)
	})

	it('should close the modal when clicking on mask when `closeOnClickModal` is true', async () => {
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
			},
			slots: {
				default: 'ued-dialog',
			},
		})

		expect(wrapper.find('.ued-overlay').exists()).toBe(true)
		expect(wrapper.find('.ued-overlay-dialog').exists()).toBe(true)

		await wrapper.find('.ued-overlay-dialog').trigger('click')
		await wrapper.find('.ued-overlay-dialog').trigger('mousedown')
		await wrapper.find('.ued-overlay-dialog').trigger('mouseup')
		expect(wrapper.vm.visible).toBe(false)
	})
})

describe('life cycles', () => {
	it('should call before close', async () => {
		const beforeClose = vi.fn()
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
				beforeClose,
			},
			slots: {
				default: 'ued-dialog',
			},
		})

		await wrapper.find('.ued-dialog__headerbtn').trigger('click')
		expect(beforeClose).toHaveBeenCalled()
	})

	it('should not close dialog when user cancelled', async () => {
		const beforeClose = vi
			.fn()
			.mockImplementation((hide: (cancel: boolean) => void) => hide(true))

		const wrapper = mount(UedDialog, {
			props: {
				modelValue: true,
				beforeClose,
			},
			slots: {
				default: 'ued-dialog',
			},
		})

		await wrapper.find('.ued-dialog__headerbtn').trigger('click')
		expect(beforeClose).toHaveBeenCalled()
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(true)
			})
		})
		expect(wrapper.vm.visible).toBe(true)
	})

	it('should open and close with delay', async () => {
		const openDelay = 200
		const closeDelay = 300
		const wrapper = mount(UedDialog, {
			props: {
				modelValue: false,
				openDelay,
				closeDelay,
			},
			slots: {
				default: 'ued-dialog',
			},
		})

		vi.useFakeTimers()

		await wrapper.setProps({
			modelValue: true,
		})
		expect(wrapper.vm.visible).toBe(false)
		vi.advanceTimersByTime(openDelay)
		expect(wrapper.vm.visible).toBe(true)

		await wrapper.setProps({
			modelValue: false,
		})
		expect(wrapper.vm.visible).toBe(true)
		vi.advanceTimersByTime(closeDelay)
		expect(wrapper.vm.visible).toBe(false)

		vi.useRealTimers()
	})
})
