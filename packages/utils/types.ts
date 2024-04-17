export const isNumber = (num: any) =>
	typeof num === 'number' && !Number.isNaN(num)

export const isPositiveNumber = (num: any) => isNumber(num) && num >= 0

export const isString = (str: any) => typeof str === 'string'

export const isPxString = (str: any) =>
	isString(str) && str.match(/^(\d)+(px)$/g)

export const isStringNumber = (str: any) =>
	isString(str) && str.match(/^(\d)+$/g)

export const isNull = (obj: any) => obj === null

export const isObject = (obj: any) => typeof obj === 'object' && !isNull(obj)
