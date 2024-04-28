import { UedButton, UedButtonGroup } from '@ued-plus/components/src/button'
import { UedIcon } from '@ued-plus/components/src/icon'
import { UedText } from '@ued-plus/components/src/text'
import { UedLink } from '@ued-plus/components/src/link'
import { UedRow, UedCol } from '@ued-plus/components/src/layout'
import { UedScrollBar } from '@ued-plus/components/src/scrollbar'
import { UedDialog } from '@ued-plus/components/src/dialog'
import {
	UedRadio,
	UedRadioGroup,
	UedRadioButton,
} from '@ued-plus/components/src/radio'
import {
	UedContainer,
	UedHeader,
	UedMain,
	UedFooter,
	UedAside,
} from '@ued-plus/components/src/container'

// Icon
import {
	Plus,
	Minus,
	CirclePlus,
	CircleMinus,
	Loading,
	Message,
	Star,
	Search,
	Delete,
	Check,
	Close,
} from '@ued-plus/components/src/icon/icon'

import type { Plugin } from 'vue'

export default [
	// 组件
	UedButton,
	UedButtonGroup,
	UedIcon,
	UedText,
	UedLink,
	UedContainer,
	UedHeader,
	UedMain,
	UedFooter,
	UedAside,
	UedRow,
	UedCol,
	UedScrollBar,
	UedDialog,
	UedRadio,
	UedRadioGroup,
	UedRadioButton,
	// Icon
	Plus,
	Minus,
	CirclePlus,
	CircleMinus,
	Loading,
	Message,
	Star,
	Search,
	Delete,
	Check,
	Close,
] as Plugin[]
