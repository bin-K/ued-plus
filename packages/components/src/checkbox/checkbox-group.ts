import { ExtractPropTypes, PropType } from 'vue'

export type CheckboxValueType = string | number | boolean
export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]

export const CheckboxGroupProps = {
	modelValue: {
		type: Array as PropType<string[] | number[]>,
		default: [],
	},
	disabled: {
		type: Boolean,
		default: undefined,
	},
	size: {
		type: Boolean,
		default: undefined,
	},
}

export type CheckboxGroupPropsType = ExtractPropTypes<typeof CheckboxGroupProps>

export interface CheckboxGroupContext extends CheckboxGroupPropsType {
	changeEvent: (val: CheckboxGroupPropsType['modelValue']) => void
}
