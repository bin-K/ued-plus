module.exports = {
	// 注册 stylelint 的 prettier 插件
	plugins: ['stylelint-prettier'],
	// 继承一系列规则集合
	extends: [
		// standard 规则集合
		'stylelint-config-standard',
		'stylelint-config-recommended-scss',
		// 样式属性顺序规则
		'stylelint-config-recess-order',
		// 接入 Prettier 规则
		'stylelint-config-prettier',
		'stylelint-prettier/recommended',
	],
	// 配置 rules
	rules: {
		// 开启 Prettier 自动格式化功能
		'prettier/prettier': null,
		'selector-class-pattern': null,
		'color-function-notation': null,
		'alpha-value-notation': null,
		'color-hex-length': null,
		'value-keyword-case': null,
		'selector-not-notation': null,
		'media-feature-range-notation': null,
		'declaration-block-no-redundant-longhand-properties': null,
	},
}
