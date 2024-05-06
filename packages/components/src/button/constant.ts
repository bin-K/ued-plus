import type { InjectionKey } from 'vue'
import { ButtonGroupPropsType } from './button-group'
export const buttonGroupKey: InjectionKey<ButtonGroupPropsType> =
	Symbol('ButtonGroupKey')
