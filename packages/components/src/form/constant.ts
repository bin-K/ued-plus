import type { InjectionKey } from 'vue'
import { FormContext } from './form'
export const formInjectKey: InjectionKey<FormContext> = Symbol('FormKey')
