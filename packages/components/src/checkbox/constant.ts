import type { InjectionKey } from 'vue'
import { CheckboxGroupContext } from './checkbox-group'
export const checkboxGroupKey: InjectionKey<CheckboxGroupContext> =
	Symbol('CheckboxGroupKey')
