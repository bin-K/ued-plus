export default {
	base: process.env.NODE_ENV === 'production' ? '/ued-ui/' : '/',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href:
					(process.env.NODE_ENV === 'production' ? '/ued-ui/' : '/') +
					'favicon.svg',
			},
		],
	],
	themeConfig: {
		siteTitle: 'Ued-Plus',
		outline: {
			level: 'deep',
		},
		nav: [
			{ text: '开发日志', link: '/devlogs/mono/' },
			{ text: '更新日志', link: '/changelogs/mono/' },
			{ text: '指南', link: '/guide/quickstart/' },
			{ text: '组件', link: '/components/button/' },
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/bin-K/ued-plus' },
		],
		sidebar: {
			'/devlogs': [
				{
					text: '基础日志',
					items: [
						{
							text: 'Project',
							link: '/devlogs/mono/project.md',
						},
						{
							text: 'Mono',
							link: '/devlogs/mono/',
						},
					],
				},
				{
					text: '基础组件日志',
					items: [
						{
							text: 'Button',
							link: '/devlogs/button/',
						},
						{
							text: 'Icon',
							link: '/devlogs/icon/',
						},
						{
							text: 'Text',
							link: '/devlogs/text/',
						},
						{
							text: 'Link',
							link: '/devlogs/link/',
						},
						{
							text: 'Container',
							link: '/devlogs/container/',
						},
						{
							text: 'Layout',
							link: '/devlogs/layout/',
						},
						{
							text: 'Scrollbar',
							link: '/devlogs/scrollbar/',
						},
					],
				},
				{
					text: '表单组件日志',
					items: [
						{
							text: 'Form',
							link: '/devlogs/form/',
						},
						{
							text: 'Radio',
							link: '/devlogs/radio/',
						},
					],
				},
				{
					text: '反馈组件日志',
					items: [
						{
							text: 'Dialog',
							link: '/devlogs/dialog/',
						},
					],
				},
			],
			'/changelogs': [
				{
					text: '基础日志',
					items: [
						{
							text: 'Mono',
							link: '/changelogs/mono/',
						},
					],
				},
				{
					text: '基础组件日志',
					items: [
						{
							text: 'Button',
							link: '/changelogs/button/',
						},
						{
							text: 'Icon',
							link: '/changelogs/icon/',
						},
						{
							text: 'Text',
							link: '/changelogs/text/',
						},
						{
							text: 'Link',
							link: '/changelogs/link/',
						},
						{
							text: 'Container',
							link: '/changelogs/container/',
						},
						{
							text: 'Layout',
							link: '/changelogs/layout/',
						},
						{
							text: 'Scrollbar',
							link: '/changelogs/scrollbar/',
						},
					],
				},
				{
					text: '表单组件日志',
					items: [
						{
							text: 'Form',
							link: '/changelogs/form/',
						},
						{
							text: 'Radio',
							link: '/changelogs/radio/',
						},
						{
							text: 'Checkbox',
							link: '/changelogs/checkbox/',
						},
					],
				},
				{
					text: '反馈组件日志',
					items: [
						{
							text: 'Dialog',
							link: '/changelogs/dialog/',
						},
					],
				},
			],
			'/guide/': [
				{
					text: '基础',
					items: [
						{
							text: '快速开始',
							link: '/guide/quickstart/',
						},
						{
							text: '安装',
							link: '/guide/installation/',
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
						{
							text: 'Scrollbar',
							link: '/components/scrollbar/',
						},
					],
				},
				{
					text: '表单组件',
					items: [
						{
							text: 'Form',
							link: '/components/form/',
						},
						{
							text: 'Radio',
							link: '/components/radio/',
						},
						{
							text: 'Checkbox',
							link: '/components/checkbox/',
						},
					],
				},
				{
					text: '反馈组件',
					items: [
						{
							text: 'Dialog',
							link: '/components/dialog/',
						},
					],
				},
			],
		},
	},
}
