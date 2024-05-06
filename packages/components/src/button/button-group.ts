import { ExtractPropTypes } from 'vue'

export const ButtonGroupProps = {
	type: {
		type: String,
		default: undefined,
	},
	size: {
		type: String,
		default: undefined,
	},
}

export type ButtonGroupPropsType = ExtractPropTypes<typeof ButtonGroupProps>
