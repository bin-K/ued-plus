import {
	isPxString,
	isNumber,
	isStringNumber,
	isPercentNumber,
	isVhVwString,
} from './types'

export const handleStringOrNumberPx = (num: any) =>
	isPxString(num) || isVhVwString(num)
		? num
		: isNumber(num) || isStringNumber(num)
			? `${num}px`
			: undefined

export const handlePercentNumber = (str: any) =>
	isPercentNumber(str) ? str : undefined
