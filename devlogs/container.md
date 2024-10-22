### 结构

```
container
├── __test__
│   └── container.test.tsx
├── components
│   ├── aside
│   │   └── index.vue
│   ├── footer
│   │   └── index.vue
│   ├── header
│   │   └── index.vue
│   └── main
│       └── index.vue
├── container.vue
├── index.ts
└── styles
    ├── aside.scss
    ├── footer.scss
    ├── header.scss
    ├── index.scss
    └── main.scss
```

### 采用flex布局

- `container` 包含 `aside`、`footer`、`header`、`main`等几个组件
- 所以的布局方式均采用`flex`布局

```scss
.ued-container {
	box-sizing: border-box;
	display: flex;
	flex: 1;
	flex-basis: auto;
	flex-direction: row;
	min-width: 0;

	&.is-vertical {
		flex-direction: column;
	}
}
```
