import { ExtractPropTypes, PropType } from 'vue'

export type CheckboxValueType = string | number | boolean
export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]

export const CheckboxGroupProps = {
	modelValue: {
		type: Array as PropType<CheckboxGroupValueType>,
		default: () => [],
	},
	disabled: {
		type: Boolean,
		default: undefined,
	},
	size: {
		type: String,
		default: undefined,
	},
	name: {
		type: String,
		default: undefined,
	},
	id: {
		type: String,
		default: undefined,
	},
	border: {
		type: Boolean,
		default: undefined,
	},
	textColor: {
		type: String,
		default: undefined,
	},
	fill: {
		type: String,
		default: undefined,
	},
}

export type CheckboxGroupPropsType = ExtractPropTypes<typeof CheckboxGroupProps>

export interface CheckboxGroupContext extends CheckboxGroupPropsType {
	changeEvent: (val: CheckboxGroupValueType) => void
}
