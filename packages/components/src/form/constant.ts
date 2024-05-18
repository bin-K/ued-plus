import type { InjectionKey } from 'vue'
import { FormPropsType } from './form'
export const formInjectKey: InjectionKey<FormPropsType> = Symbol('FormKey')
