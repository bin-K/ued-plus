### 结构

```
radio
├── __test__
│   └── radio.test.tsx
├── constant.ts
├── index.ts
├── radio-button.vue
├── radio-group.ts
├── radio-group.vue
├── radio.vue
└── styles
    ├── index.scss
    ├── radio-button.scss
    └── radio-group.scss
```

### 自定义选择的样式

- 结合`input`和`span`,将`<input type="radio" />` 的原生样式隐藏，再自定义新的样式

```vue
<template>
	<label ref="radioRef" class="ued-radio" :class="radioClass">
		<span class="ued-radio__input" :class="radioClass">
			<input
				ref="radioOriginalRef"
				v-model="modelValue"
				class="ued-radio__original"
				type="radio"
				:value="value"
			/>
			<span class="ued-radio__inner" />
		</span>
	</label>
</template>
```

```scss
.ued-radio {
	--ued-radio-font-size: var(--ued-font-size-base);
	--ued-radio-text-color: var(--ued-text-color-regular);
	--ued-radio-font-weight: var(--ued-font-weight-primary);
	--ued-radio-input-height: 14px;
	--ued-radio-input-width: 14px;
	--ued-radio-input-border-radius: var(--ued-border-radius-circle);
	--ued-radio-input-bg-color: var(--ued-fill-color-blank);
	--ued-radio-input-border: var(--ued-border);
	--ued-radio-input-border-color: var(--ued-border-color);
	--ued-radio-input-border-color-hover: var(--ued-color-primary);

	position: relative;
	display: inline-flex;
	align-items: center;
	height: 32px;
	margin-right: 32px;
	font-size: var(--ued-font-size-base);
	font-weight: var(--ued-radio-font-weight);
	color: var(--ued-radio-text-color);
	white-space: nowrap;
	cursor: pointer;
	user-select: none;
	outline: none;

	&__input {
		position: relative;
		display: inline-flex;
		white-space: nowrap;
		vertical-align: middle;
		cursor: pointer;
		outline: none;
	}

	&__inner {
		position: relative;
		box-sizing: border-box;
		display: inline-block;
		width: var(--ued-radio-input-width);
		height: var(--ued-radio-input-height);
		cursor: pointer;
		background-color: var(--ued-radio-input-bg-color);
		border: var(--ued-radio-input-border);
		border-radius: var(--ued-radio-input-border-radius);

		&::after {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 4px;
			height: 4px;
			content: '';
			background-color: var(--ued-color-white);
			border-radius: var(--ued-radio-input-border-radius);
			transition: transform 0.15s ease-in;
			transform: translate(-50%, -50%) scale(0);
		}

		&:hover {
			border-color: var(--ued-radio-input-border-color-hover);
		}
	}

	&__original {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		margin: 0;
		outline: none;
		opacity: 0;

		&:focus-visible + .ued-radio__inner {
			border-radius: var(--ued-radio-input-border-radius);
			outline: 2px solid var(--ued-radio-input-border-color-hover);
			outline-offset: 1px;
		}
	}
}
```
