import { ExtractPropTypes } from 'vue'

export const RowProps = {
	gutter: {
		type: Number,
		default: 0,
	},
	justify: {
		type: String,
		default: undefined,
	},
	align: {
		type: String,
		default: undefined,
	},
	tag: {
		type: String,
		default: undefined,
	},
}

export type RowPropsType = ExtractPropTypes<typeof RowProps>
