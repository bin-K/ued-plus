import { computed, getCurrentInstance, inject, unref } from 'vue'
import type { InjectionKey, Ref } from 'vue'
import type { MaybeRef } from '@vueuse/core'

export type UedIdInjectionContext = {
	prefix: number
	current: number
}

const defaultIdInjection = {
	prefix: Math.floor(Math.random() * 10000),
	current: 0,
}

export const ID_INJECTION_KEY: InjectionKey<UedIdInjectionContext> =
	Symbol('uedIdInjection')

export const useIdInjection = (): UedIdInjectionContext => {
	return getCurrentInstance()
		? inject(ID_INJECTION_KEY, defaultIdInjection)
		: defaultIdInjection
}

export const useId = (
	namespace: string,
	deterministicId?: MaybeRef<string>
): Ref<string> => {
	const idInjection = useIdInjection()
	const idRef = computed(
		() =>
			unref(deterministicId) ||
			`${namespace}-id-${idInjection.prefix}-${idInjection.current++}`
	)

	return idRef
}
