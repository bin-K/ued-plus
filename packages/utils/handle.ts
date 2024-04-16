import { isPxString, isNumber, isStringNumber } from './types'

export const handleStringOrNumberPx = (num: any) =>
	isPxString(num)
		? num
		: isNumber(num) || isStringNumber(num)
			? `${num}px`
			: undefined
