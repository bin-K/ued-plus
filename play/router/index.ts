import { createWebHistory, createRouter } from 'vue-router'

const routes = [
	{ path: '/', redirect: '/button' },
	{
		path: '/button',
		component: () => import('../components/button/index.vue'),
	},
	{
		path: '/icon',
		component: () => import('../components/icon/index.vue'),
	},
	{
		path: '/text',
		component: () => import('../components/text/index.vue'),
	},
	{
		path: '/link',
		component: () => import('../components/link/index.vue'),
	},
	{
		path: '/container',
		component: () => import('../components/container/index.vue'),
	},
	{
		path: '/layout',
		component: () => import('../components/layout/index.vue'),
	},
	{
		path: '/scrollbar',
		component: () => import('../components/scrollbar/index.vue'),
	},
	{
		path: '/dialog',
		component: () => import('../components/dialog/index.vue'),
	},
	{
		path: '/radio',
		component: () => import('../components/radio/index.vue'),
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
