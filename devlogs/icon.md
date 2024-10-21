### 结构

```
icon
├── __test__
│   └── icon.test.tsx
├── components
│   ├── Check
│   │   └── index.vue
├── icon.ts
├── icon.vue
├── index.ts
└── styles
    └── index.scss
```

### icon 组件直接使用svg标签引入，不使用导入文件的引入

- icon 组件在最开始开发时使用的是引入外部字体文件的方式引入

```html
<svg aria-hidden="true">
	<use xlink:href="#ued-CircleMinus"></use>
</svg>
```

```vue
onMounted(() => { // 引入字体图标文件 import('./font/iconfont.js' as any) })
```

- 但在后续给组件添加测试用例时，外部引入字体文件的方式出现弊端，字体文件引入的方式，需要在组件挂载后，再引入，此时直接运行项目是没问题的，但在测试用例中无法通过，为了解决这一问题，将直接使用所有字体的svg源码引入

```vue
<template>
	<svg
		class="icon"
		width="48px"
		height="48.00px"
		viewBox="0 0 1024 1024"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M911.1 241.9c-14.6-14.6-38.5-14.6-53.1 0L409.5 690.4 165 445.8c-14.6-14.6-38.5-14.6-53.1 0-14.6 14.6-14.6 38.5 0 53.1l269.8 269.9c0.4 0.4 0.8 0.9 1.2 1.3 7.3 7.3 16.9 11 26.6 10.9 9.6 0 19.3-3.6 26.6-10.9l0.9-0.9L911.1 295c14.5-14.6 14.5-38.5 0-53.1z"
		/>
	</svg>
</template>
```
