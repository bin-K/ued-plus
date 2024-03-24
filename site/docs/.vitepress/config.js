export default {
	themeConfig: {
		siteTitle: 'vitepress',
		nav: [
			{ text: '指南', link: '/guide/installation/' },
			{ text: '组件', link: '/components/button/' },
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com/bin-K/ued-plus' }],
		sidebar: {
			'/guide/': [
				{
					text: '基础',
					items: [
						{
							text: '安装',
							link: '/guide/installation/',
						},
						{
							text: '快速开始',
							link: '/guide/quickstart/',
						},
					],
				},
			],
			'/components/': [
				{
					text: '基础组件',
					items: [
						{
							text: 'Button',
							link: '/components/button/',
						},
					],
				},
			],
		},
	},
}
