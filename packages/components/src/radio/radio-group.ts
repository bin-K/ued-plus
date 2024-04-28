import { ExtractPropTypes } from 'vue'

export const RadioGroupProps = {
	modelValue: {
		type: [String, Number, Boolean],
		default: undefined,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	border: {
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
	textColor: {
		type: String,
		default: undefined,
	},
	fill: {
		type: String,
		default: undefined,
	},
}

export type RadioGroupPropsType = ExtractPropTypes<typeof RadioGroupProps>

export interface RadioGroupContext extends RadioGroupPropsType {
	changeEvent: (val: RadioGroupPropsType['modelValue']) => void
}
