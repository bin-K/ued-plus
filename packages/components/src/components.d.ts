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
		UedFooter: typeof components.UedFooter
		UedAside: typeof components.UedAside
		UedRow: typeof components.UedRow
		UedCol: typeof components.UedCol
		UedScrollBar: typeof components.UedScrollBar
		UedDialog: typeof components.UedDialog
		UedRadio: typeof components.UedRadio
	}
}
export {}
