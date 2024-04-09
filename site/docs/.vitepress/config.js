export default {
	base: process.env.NODE_ENV === 'production' ? '/ued-ui/' : '/',
	themeConfig: {
		siteTitle: 'vitepress',
		nav: [
			{ text: '指南', link: '/guide/installation/' },
			{ text: '组件', link: '/components/button/' },
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/bin-K/ued-plus' },
		],
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
						{
							text: 'Icon',
							link: '/components/icon/',
						},
						{
							text: 'Text',
							link: '/components/text/',
						},
						{
							text: 'Link',
							link: '/components/link/',
						},
						{
							text: 'Container',
							link: '/components/container/',
						},
						{
							text: 'Layout',
							link: '/components/layout/',
						},
					],
				},
			],
		},
	},
}
