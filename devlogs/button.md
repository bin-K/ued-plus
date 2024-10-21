### 结构

```
button
├── __test__ // button组件测试用例
│   └── button.test.tsx
├── button-group.ts // button-group的配置文件
├── button-group.vue // button-group组件
├── button.vue // button 组件
├── constant.ts // button组件的常量
├── index.ts // 注册组件入口
└── styles // button组件样式
    ├── button-group.scss
    └── index.scss
```

### 样式变量的使用

- `button`组件存在不同状态，不同样式的展示形式，在样式存在差异但大部分都有公共的地方
- 利用 `CSS `的变量，通过 `var`获取具体的值，用于减少大量重复代码的书写，同时也能保证不同类名下对于不同的样式

```scss
--ued-button-text-color: var(--ued-text-color-primary);
--ued-button-hover-text-color: var(--ued-color-primary);
--ued-button-hover-bg-color: var(--ued-color-primary-light-9);
--ued-button-hover-border-color: var(--ued-color-primary-light-8);
--ued-button-active-text-color: var(--ued-color-primary);
--ued-button-active-bg-color: var(--ued-color-primary-light-9);
--ued-button-active-border-color: var(--ued-color-primary);

.ued-button {
	color: var(--ued-button-text-color, var(--ued-text-color-regular));
	background: var(--ued-button-bg-color, var(--ued-fill-color-blank));
	border-radius: var(--ued-border-radius-base);

	// 基础按钮
	&--primary,
	&--success,
	&--warning,
	&--danger,
	&--error,
	&--info {
		--ued-button-text-color: var(--ued-color-white);
		--ued-button-hover-text-color: var(--ued-color-white);
		--ued-button-active-text-color: var(--ued-button-hover-text-color);
	}

	&--primary {
		--ued-button-bg-color: var(--ued-color-primary);
		--ued-button-border-color: var(--ued-color-primary);
		--ued-button-hover-bg-color: var(--ued-color-primary-light-3);
		--ued-button-hover-border-color: var(--ued-color-primary-light-3);
		--ued-button-active-bg-color: var(--ued-color-primary-dark-2);
		--ued-button-active-border-color: var(--ued-color-primary-dark-2);
	}
}
```

### provide inject 变成响应式

- 使用 `button-group`组件时，`button`组件需要接收通过`button-group`传入的组件，完成不同按钮的展示
- 使用的方法是 `provide inject`的方式，但是不能直接传，因为直接传入时，到`button`组件接收时就不是响应式变量，此时改动`butong-group`传入的值时，`button`组件不会变化

- `constant.ts`

```ts
// 创建一个constant.ts文件保证 provide的key是唯一的，避免重复，并从button-group.ts中拿到传入的类型，完成传入的类型声明限制
import type { InjectionKey } from 'vue'
import { ButtonGroupPropsType } from './button-group'
export const buttonGroupKey: InjectionKey<ButtonGroupPropsType> =
	Symbol('ButtonGroupKey')
```

- `button-group.ts`

```ts
// 定义传入的字段以及类型，并将相关的类型暴露
import { ExtractPropTypes } from 'vue'

export const ButtonGroupProps = {
	type: {
		type: String,
		default: undefined,
	},
	size: {
		type: String,
		default: undefined,
	},
}

export type ButtonGroupPropsType = ExtractPropTypes<typeof ButtonGroupProps>
```

- `button-group.vue`

```vue
<script lang="ts" setup>
import { provide, reactive, toRefs } from 'vue'
import { buttonGroupKey } from './constant'
import { ButtonGroupProps } from './button-group'

const buttonGroupProps = defineProps(ButtonGroupProps)

// 关键：为了保证是一个响应式的变量，传入的是一个使用reactive包裹的变量
provide(
	buttonGroupKey,
	reactive({
		...toRefs(buttonGroupProps),
	})
)
</script>
```
