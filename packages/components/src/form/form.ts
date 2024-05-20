import { ExtractPropTypes, PropType } from 'vue'

export const FormProps = {
	model: {
		type: Object as PropType<Record<string, any>>,
		default: undefined,
	},
	size: {
		type: String,
		default: undefined,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	inline: {
		type: Boolean,
		default: false,
	},
	labelPosition: {
		type: String,
		values: ['left', 'right', 'top'],
		default: 'right',
	},
	labelWidth: {
		type: [String, Number],
		default: '',
	},
}

export type FormPropsType = ExtractPropTypes<typeof FormProps>

export interface FormContext extends FormPropsType {
	labelWidthArr: Array<number> | undefined
}
