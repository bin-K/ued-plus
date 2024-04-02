import * as components from './index'
declare module '@vue/runtime-core' {
	// 组件全局提示效果
	export interface GlobalComponents {
		UedButton: typeof components.UedButton
		UedButtonGroup: typeof components.UedButtonGroup
		UedIcon: typeof components.UedIcon
		UedText: typeof components.UedText
		UedLink: typeof components.UedLink
		UedContainer: typeof components.UedContainer
		UedHeader: typeof components.UedHeader
		UedMain: typeof components.UedMain
	}
}
export {}
